import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "林知远｜计算社会科学与公共政策",
  description: "海川大学林知远副教授的个人学术主页，展示研究议题、代表论文、科研项目与课程教学。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
