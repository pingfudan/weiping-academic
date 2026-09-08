import type { Metadata } from "next";
import "./globals.css";

const title = "韦平｜大模型安全与多媒体安全";
const description = "云南大学软件学院韦平老师的个人学术主页，展示大模型与多智能体安全、网络安全、多媒体安全、AIGC、代表论文和科研项目。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lin-zhiyuan-academic.pingcsu.chatgpt.site";
const image = `${siteUrl.replace(/\/$/, "")}/og-bilingual.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "zh_CN", alternateLocale: ["en_US"], images: [{ url: image, width: 1200, height: 630, alt: "韦平 Ping Wei｜云南大学软件学院" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
