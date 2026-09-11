import { readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const PROFILE_ID = "Rsxs2jgAAAAJ";
const PROFILE_URL = `https://scholar.google.com/citations?hl=en&user=${PROFILE_ID}&view_op=list_works&sortby=pubdate&pagesize=100`;
const OUTPUT = new URL("../data/publications.json", import.meta.url);
const run = promisify(execFile);

function decode(value) {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, entity) => {
      if (entity[0] === "#") {
        const hex = entity[1]?.toLowerCase() === "x";
        return String.fromCodePoint(Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10));
      }
      return entities[entity.toLowerCase()] ?? `&${entity};`;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function match(html, pattern) {
  return pattern.exec(html)?.[1] ?? "";
}

function parseWorks(html) {
  const rows = html.match(/<tr class="gsc_a_tr"[\s\S]*?<\/tr>/g) ?? [];
  return rows.map((row) => {
    const titleLink = /<a href="([^"]+)" class="gsc_a_at">([\s\S]*?)<\/a>/.exec(row);
    const href = titleLink?.[1] ?? "";
    const title = decode(titleLink?.[2] ?? "");
    const gray = [...row.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)].map((item) => decode(item[1]));
    const citations = Number(decode(match(row, /<td class="gsc_a_c">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/)) || 0);
    const year = Number(decode(match(row, /<td class="gsc_a_y">[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/)) || 0);
    const venue = (gray[1] ?? "").replace(new RegExp(`\\s*,\\s*${year}$`), "").trim();
    return {
      title,
      authors: gray[0] ?? "",
      venue,
      citations,
      year,
      url: href ? new URL(href.replaceAll("&amp;", "&"), PROFILE_URL).href : PROFILE_URL,
    };
  }).filter((paper) => paper.title && paper.year);
}

const { stdout: html } = await run("curl", [
  "--fail",
  "--location",
  "--compressed",
  "--max-time", "30",
  "--header", "Accept-Language: en-US,en;q=0.8",
  "--user-agent", "Mozilla/5.0 (compatible; PingWeiAcademicSite/1.0; +https://github.com/pingfudan/weiping-academic)",
  PROFILE_URL,
], { maxBuffer: 10 * 1024 * 1024 });
const papers = parseWorks(html);
if (papers.length < 5) throw new Error(`Only ${papers.length} publications were parsed; keeping the previous snapshot`);

const previous = JSON.parse(await readFile(OUTPUT, "utf8"));
const previousByTitle = new Map(previous.map((paper) => [paper.title.toLowerCase(), paper]));
const merged = papers.map((paper) => {
  const old = previousByTitle.get(paper.title.toLowerCase());
  return { ...paper, venue: paper.venue || old?.venue || "" };
});

await writeFile(OUTPUT, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Synced ${merged.length} publications from Google Scholar.`);
