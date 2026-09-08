"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";
type Localized = { zh: string; en: string };

// ─────────────────────────────────────────────────────────────────────────────
// 内容维护区：团队照片放入 public/team，并在 photo 中填写 /team/文件名。
// 所有中英文内容均集中在这里，后续维护无需修改页面结构。
// ─────────────────────────────────────────────────────────────────────────────
const profile = {
  name: { zh: "韦平", en: "Ping Wei" },
  title: { zh: "软件学院 · 网络空间安全系 · 讲师", en: "Lecturer · Department of Cybersecurity · School of Software" },
  university: { zh: "云南大学", en: "Yunnan University" },
  field: { zh: "大模型安全与多媒体安全", en: "LLM Security & Multimedia Security" },
  statement: {
    zh: "面向智能时代的安全挑战，探索大模型、多智能体与多媒体内容的可信生成和可靠防护。",
    en: "Exploring trustworthy generation and robust protection for large language models, multi-agent systems, and multimedia content.",
  },
  bio: {
    zh: "韦平，计算机博士，云南大学软件学院讲师、“兴滇人才计划”获得者。主要从事大模型应用与安全、网络安全、多媒体安全及 AI 生成内容研究，近三年以第一作者或通讯作者身份在 ACM MM、ECAI、ICME、IEEE TDSC、IEEE TCSVT 等会议和期刊发表论文 10 余篇。",
    en: "Ping Wei received his Ph.D. in Computer Science and is a lecturer at the School of Software, Yunnan University. His research spans LLM applications and security, cybersecurity, multimedia security, and AI-generated content. In recent years, he has published over ten papers as first or corresponding author in venues including ACM MM, ECAI, ICME, IEEE TDSC, and IEEE TCSVT.",
  },
  email: "weip@ynu.edu.cn",
  office: { zh: "软件学院 1-225 室", en: "Room 1-225, School of Software" },
  officialPage: "https://www.sei.ynu.edu.cn/info/1023/2241.htm",
};

const copy = {
  zh: {
    navResearch: "研究", navTeam: "团队", navPapers: "论文", navCv: "履历", navTeaching: "教学", navContact: "联系",
    official: "官方主页", achievements: "查看代表成果", collaborate: "学术合作", appointment: "Current appointment",
    researchLabel: "研究方向", educationLabel: "教育经历", serviceLabel: "学术服务",
    researchValue: "大模型安全 · 网络安全\n多媒体安全 · AIGC", educationValue: "计算机应用技术博士\n复旦大学", serviceValue: "云南大学 CTF 社团指导老师\n会议与期刊审稿人",
    researchTitle: "研究议题", researchIntro: "从生成模型到攻防系统，研究智能内容如何被安全地创造、传输与使用。",
    visualCaption: "可信智能 · 安全生成 · 隐蔽通信", visualAlt: "以水墨山形、网络节点和多媒体框架构成的可信智能抽象图",
    teamTitle: "实验室团队", teamIntro: "以开放协作连接导师、研究生和本科生，共同探索可信智能与信息安全。",
    teamNote: "以下为学院主页公开的负责人及部分指导学生信息；成员照片和简介可在内容维护区持续补充。",
    publicationsTitle: "代表论文", officialResults: "查看官方成果列表", educationTitle: "教育经历", projectsTitle: "研究项目", teachingTitle: "课程教学",
    contactTitle: "一起探索可信智能，\n解决真实安全问题。",
    contactText: "欢迎数理基础好、编程能力强、踏实进取，对大模型安全、网络安全、多媒体安全和 AIGC 感兴趣的同学加入团队。实验室重视融洽协作与长期成长。",
    updated: "资料更新：2026 年 3 月", source: "信息来源：学院主页 ↗",
  },
  en: {
    navResearch: "Research", navTeam: "Team", navPapers: "Publications", navCv: "CV", navTeaching: "Teaching", navContact: "Contact",
    official: "Official profile", achievements: "Selected work", collaborate: "Collaborate", appointment: "Current appointment",
    researchLabel: "Research", educationLabel: "Education", serviceLabel: "Academic service",
    researchValue: "LLM Security · Cybersecurity\nMultimedia Security · AIGC", educationValue: "Ph.D. in Computer Science\nFudan University", serviceValue: "Faculty Advisor, YNU CTF Club\nReviewer for conferences and journals",
    researchTitle: "Research Agenda", researchIntro: "From generative models to defensive systems, we study how intelligent content can be created, transmitted, and used securely.",
    visualCaption: "Trustworthy AI · Secure Generation · Covert Communication", visualAlt: "Abstract trustworthy AI illustration with ink-wash mountains, network nodes, and multimedia frames",
    teamTitle: "Lab Team", teamIntro: "An open, collaborative community of faculty, graduate researchers, and undergraduate students working on trustworthy AI and information security.",
    teamNote: "The profiles below are based on publicly listed faculty and mentored-student information. Additional portraits and biographies can be added in the content section.",
    publicationsTitle: "Selected Publications", officialResults: "View official publication list", educationTitle: "Education", projectsTitle: "Research Projects", teachingTitle: "Teaching",
    contactTitle: "Building trustworthy AI,\nsolving real security problems.",
    contactText: "We welcome motivated students with strong mathematical foundations, programming skills, and interests in LLM security, cybersecurity, multimedia security, or AIGC. The lab values collaboration and long-term growth.",
    updated: "Profile updated: March 2026", source: "Source: School profile ↗",
  },
};

const researchAreas = [
  { number: "01", title: { zh: "大模型应用与安全", en: "LLM & Agent Security" }, description: { zh: "研究大语言模型及多智能体的应用，包括社会模拟、虚假新闻检测，以及模型越狱与防御。", en: "Applications of LLMs and multi-agent systems, including social simulation, fake-news detection, jailbreak attacks, and defenses." } },
  { number: "02", title: { zh: "网络安全", en: "Cybersecurity" }, description: { zh: "聚焦网络攻击与防御、流量检测和隐私保护，提升网络系统的韧性与可信度。", en: "Network attack and defense, traffic detection, and privacy protection for resilient and trustworthy networked systems." } },
  { number: "03", title: { zh: "多媒体安全", en: "Multimedia Security" }, description: { zh: "围绕图像与文本等多媒体载体，开展隐写、水印和对抗样本等方向研究。", en: "Steganography, watermarking, adversarial examples, and other security problems across image and text media." } },
  { number: "04", title: { zh: "AI 生成内容", en: "AI-Generated Content" }, description: { zh: "探索文本、图像与视频生成技术，以及生成内容的安全性、可控性与可信应用。", en: "Text, image, and video generation with an emphasis on safety, controllability, and trustworthy applications." } },
];

const teamMembers = [
  {
    name: { zh: "韦平", en: "Ping Wei" },
    role: { zh: "实验室负责人 · 讲师", en: "Principal Investigator · Lecturer" },
    intro: { zh: "研究大模型应用与安全、网络安全、多媒体安全和 AI 生成内容，主持国家自然科学基金项目。", en: "Researches LLM security, cybersecurity, multimedia security, and AIGC; principal investigator of an NSFC project." },
    photo: "/team/weiping.jpeg", initials: "PW",
  },
  {
    name: { zh: "郭文斌", en: "Wenbin Guo" },
    role: { zh: "指导学生 · 研究生", en: "Mentored Student · Graduate" },
    intro: { zh: "研究生阶段由团队共同指导，现于中山大学攻读博士学位。", en: "Co-supervised as a graduate student and currently pursuing a doctoral degree at Sun Yat-sen University." },
    initials: "WG",
  },
  {
    name: { zh: "刘理科", en: "Like Liu" },
    role: { zh: "指导学生 · 本科生 / CTF", en: "Mentored Student · Undergraduate / CTF" },
    intro: { zh: "云南大学 CTF 战队成员，完成本科毕业设计，毕业后就职于阿里巴巴。", en: "A member of the Yunnan University CTF team and an undergraduate thesis student; now working at Alibaba." },
    initials: "LL",
  },
  {
    name: { zh: "刘起含", en: "Qihan Liu" },
    role: { zh: "指导学生 · 本科生", en: "Mentored Student · Undergraduate" },
    intro: { zh: "本科阶段接受团队指导，已推免至中国科学院沈阳自动化研究所。", en: "Mentored as an undergraduate and admitted to the Shenyang Institute of Automation, Chinese Academy of Sciences." },
    initials: "QL",
  },
];

const publications = [
  { year: "2025", title: "Conditional Flow-Based Generative Steganography", authors: "Q. Zhou*, P. Wei*, Z. Qian, X. Zhang, S. Li & C. Qin", venue: "IEEE Transactions on Dependable and Secure Computing, 22(5): 5632–5647", tag: { zh: "共同一作 · 中科院 1 区", en: "Co-first author · CAS Q1" } },
  { year: "2025", title: "Improved Generative Steganography Based on Diffusion Model", authors: "Q. Zhou, P. Wei*, Z. Qian et al.", venue: "IEEE Transactions on Circuits and Systems for Video Technology", tag: { zh: "通讯作者 · 中科院 1 区", en: "Corresponding author · CAS Q1" } },
  { year: "2025", title: "GCQ-ViT: Group-Aware Collaborative Post-Training Quantization for Vision Transformers", authors: "P. Pan, W. Guo, P. Wei* & W. Zhou", venue: "ECAI 2025 — 28th European Conference on Artificial Intelligence", tag: { zh: "通讯作者 · CCF-B", en: "Corresponding author · CCF-B" } },
  { year: "2024", title: "GCStego: Group Chatting-based Behavior Imperceptible Text Steganography", authors: "F. Li, P. Wei*, T. Fu, Y. Lin* & W. Zhou", venue: "IEEE International Conference on Multimedia and Expo (ICME)", tag: { zh: "通讯作者 · CCF-B", en: "Corresponding author · CCF-B" } },
  { year: "2022", title: "Generative Steganography Network", authors: "P. Wei, S. Li, X. Zhang et al.", venue: "Proceedings of the 30th ACM International Conference on Multimedia", tag: { zh: "第一作者 · CCF-A", en: "First author · CCF-A" } },
  { year: "2022", title: "Generative Steganographic Flow", authors: "P. Wei, G. Luo, Q. Song et al.", venue: "IEEE International Conference on Multimedia and Expo (ICME)", tag: { zh: "第一作者 · CCF-B", en: "First author · CCF-B" } },
];

const projects = [
  { period: "2025—2028", name: { zh: "面向社交软件的图文多模态生成式隐写研究", en: "Multimodal Generative Steganography for Social Platforms" }, source: { zh: "国家自然科学基金地区科学基金项目 · 主持 · 62462067", en: "NSFC Regional Science Fund · Principal Investigator · 62462067" } },
  { period: "2024—2026", name: { zh: "数字图像生成式隐写研究", en: "Generative Steganography for Digital Images" }, source: { zh: "云南省教育厅青年人才基础研究 · 主持 · 2024J0010", en: "Yunnan Provincial Department of Education · PI · 2024J0010" } },
  { period: "2021—2024", name: { zh: "面向社交网络的稳健数字图像隐写", en: "Robust Digital Image Steganography for Social Networks" }, source: { zh: "国家自然科学基金面上项目 · 参与 · 62072114", en: "NSFC General Program · Participant · 62072114" } },
  { period: "2020—2023", name: { zh: "社交网络虚拟用户塑造及其信息隐藏研究", en: "Virtual-User Modeling and Information Hiding in Social Networks" }, source: { zh: "国家自然科学基金联合基金项目 · 参与 · U1936214", en: "NSFC Joint Fund · Participant · U1936214" } },
];

const teaching = [
  { code: { zh: "本科", en: "UG" }, name: { zh: "操作系统原理", en: "Operating Systems" }, term: { zh: "专业基础课程", en: "Core course" } },
  { code: { zh: "本科", en: "UG" }, name: { zh: "网安数学基础", en: "Mathematical Foundations of Cybersecurity" }, term: { zh: "网络空间安全", en: "Cybersecurity" } },
  { code: { zh: "本科", en: "UG" }, name: { zh: "信息安全学", en: "Information Security" }, term: { zh: "网络空间安全", en: "Cybersecurity" } },
  { code: { zh: "国际", en: "INTL" }, name: { zh: "概率论与数理统计", en: "Probability and Mathematical Statistics" }, term: { zh: "留学生课程", en: "International students" } },
  { code: { zh: "本科", en: "UG" }, name: { zh: "人工智能导论", en: "Introduction to Artificial Intelligence" }, term: { zh: "人工智能基础", en: "AI fundamentals" } },
  { code: { zh: "研究生", en: "PG" }, name: { zh: "密码学", en: "Cryptography" }, term: { zh: "研究生课程", en: "Graduate course" } },
];

const education = [
  { period: "2017—2023", name: { zh: "复旦大学 · 计算机应用技术", en: "Fudan University · Computer Applications" }, detail: { zh: "理学博士 · 多媒体安全 · 导师：张新鹏教授", en: "Ph.D. · Multimedia Security · Advisor: Prof. Xinpeng Zhang" } },
  { period: "2014—2017", name: { zh: "四川大学 · 机械制造及其自动化", en: "Sichuan University · Mechanical Manufacturing and Automation" }, detail: { zh: "学术硕士 · 计算机视觉 · 导师：苏真伟教授", en: "M.Eng. · Computer Vision · Advisor: Prof. Zhenwei Su" } },
  { period: "2007—2011", name: { zh: "中南大学 · 机械设计制造及其自动化", en: "Central South University · Mechanical Engineering and Automation" }, detail: { zh: "工学学士", en: "B.Eng." } },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function localize(value: Localized, lang: Lang) { return value[lang]; }
function assetPath(path: string) { return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`; }

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = copy[lang];

  useEffect(() => { document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"; }, [lang]);

  return (
    <main className={lang === "en" ? "is-english" : ""}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${localize(profile.name, lang)} ${lang === "zh" ? "主页" : "homepage"}`}>
          <span>{localize(profile.name, lang)}</span><small>{lang === "zh" ? "Ping Wei" : "韦平"}</small>
        </a>
        <nav className="desktop-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          <a href="#research">{c.navResearch}</a><a href="#team">{c.navTeam}</a><a href="#publications">{c.navPapers}</a><a href="#education">{c.navCv}</a><a href="#teaching">{c.navTeaching}</a><a href="#contact">{c.navContact}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language / 语言">
            <button type="button" aria-pressed={lang === "zh"} onClick={() => setLang("zh")}>中</button>
            <span>/</span>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="cv-link" href={profile.officialPage} target="_blank" rel="noreferrer">{c.official} <Arrow /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">{localize(profile.university, lang)} · {localize(profile.field, lang)}</p>
          <h1>{localize(profile.name, lang)}<em>{lang === "zh" ? "Ping Wei" : "韦平"}</em></h1>
          <p className="statement">“{localize(profile.statement, lang)}”</p>
          <p className="bio">{localize(profile.bio, lang)}</p>
          <div className="hero-actions"><a className="primary-link" href="#publications">{c.achievements} <Arrow /></a><a className="text-link" href={`mailto:${profile.email}`}>{c.collaborate}</a></div>
        </div>
        <aside className="hero-aside" aria-label={lang === "zh" ? "个人信息" : "Profile summary"}>
          <p className="aside-label">{c.appointment}</p><strong>{localize(profile.title, lang)}</strong>
          <dl>
            <div><dt>{c.researchLabel}</dt><dd>{c.researchValue.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</dd></div>
            <div><dt>{c.educationLabel}</dt><dd>{c.educationValue.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</dd></div>
            <div><dt>{c.serviceLabel}</dt><dd>{c.serviceValue.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</dd></div>
          </dl>
        </aside>
        <figure className="hero-visual">
          <img src={assetPath("/research-security-visual.png")} alt={c.visualAlt} />
          <figcaption><span>Research visual / 研究图景</span><strong>{c.visualCaption}</strong></figcaption>
        </figure>
      </section>

      <section className="research-section" id="research">
        <div className="section-heading"><p>Research agenda</p><h2>{c.researchTitle}</h2><span>{c.researchIntro}</span></div>
        <div className="research-grid">
          {researchAreas.map((area) => <article className="research-card" key={area.number}><span className="card-number">{area.number}</span><p className="card-english">{area.title.en}</p><h3>{localize(area.title, lang)}</h3><p>{localize(area.description, lang)}</p></article>)}
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-heading"><p>People & community</p><h2>{c.teamTitle}</h2><span>{c.teamIntro}</span></div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="member-card" key={member.name.en}>
              <div className="member-portrait">
                {member.photo ? <img src={assetPath(member.photo)} alt={localize(member.name, lang)} /> : <span aria-hidden="true">{member.initials}</span>}
              </div>
              <p className="member-role">{localize(member.role, lang)}</p>
              <h3>{localize(member.name, lang)}<small>{lang === "zh" ? member.name.en : member.name.zh}</small></h3>
              <p>{localize(member.intro, lang)}</p>
            </article>
          ))}
        </div>
        <p className="team-note">{c.teamNote}</p>
      </section>

      <div className="content-grid">
        <section className="publications" id="publications">
          <div className="section-heading compact"><p>Selected publications</p><h2>{c.publicationsTitle}</h2></div>
          <div className="publication-list">
            {publications.map((paper) => <article className="publication" key={paper.title}><div className="pub-meta"><span>{paper.year}</span><span>{localize(paper.tag, lang)}</span></div><h3>{paper.title}</h3><p>{paper.authors}</p><cite>{paper.venue}</cite></article>)}
          </div>
          <a className="all-link" href={profile.officialPage} target="_blank" rel="noreferrer">{c.officialResults} <Arrow /></a>
        </section>

        <aside className="side-column">
          <section id="education"><div className="section-heading compact"><p>Education</p><h2>{c.educationTitle}</h2></div><div className="simple-list">{education.map((item) => <article key={item.period}><time>{item.period}</time><h3>{localize(item.name, lang)}</h3><p>{localize(item.detail, lang)}</p></article>)}</div></section>
          <section id="projects"><div className="section-heading compact"><p>Active projects</p><h2>{c.projectsTitle}</h2></div><div className="simple-list">{projects.map((project) => <article key={project.period}><time>{project.period}</time><h3>{localize(project.name, lang)}</h3><p>{localize(project.source, lang)}</p></article>)}</div></section>
          <section id="teaching" className="teaching-section"><div className="section-heading compact"><p>Teaching</p><h2>{c.teachingTitle}</h2></div><div className="course-list">{teaching.map((course) => <article key={`${course.name.en}-${course.code.en}`}><span>{localize(course.code, lang)}</span><div><h3>{localize(course.name, lang)}</h3><p>{localize(course.term, lang)}</p></div></article>)}</div></section>
        </aside>
      </div>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Contact & collaboration</p><h2>{c.contactTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2></div>
        <div className="contact-details"><p>{c.contactText}</p><a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><span>{localize(profile.university, lang)} · {localize(profile.office, lang)}</span></div>
      </section>

      <footer><p>© 2026 {localize(profile.name, lang)} · {localize(profile.university, lang)}</p><p>{c.updated}</p><a href={profile.officialPage} target="_blank" rel="noreferrer">{c.source}</a></footer>
    </main>
  );
}
