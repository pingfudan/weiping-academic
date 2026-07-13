// ─────────────────────────────────────────────────────────────────────────────
// 内容维护区：修改以下数组和 profile，即可更新主页，无需调整页面结构。
// ─────────────────────────────────────────────────────────────────────────────
const profile = {
  name: "韦平",
  englishName: "Ping Wei",
  title: "软件学院 · 网络空间安全系 · 讲师",
  university: "云南大学",
  field: "大模型安全与多媒体安全",
  statement:
    "面向智能时代的安全挑战，探索大模型、多智能体与多媒体内容的可信生成和可靠防护。",
  bio: "韦平，计算机博士，云南大学软件学院讲师、“兴滇人才计划”获得者。主要从事大模型应用与安全、网络安全、多媒体安全及 AI 生成内容研究，近三年以第一作者或通讯作者身份在 ACM MM、ECAI、ICME、IEEE TDSC、IEEE TCSVT 等会议和期刊发表论文 10 余篇。",
  email: "weip@ynu.edu.cn",
  office: "软件学院 1-225 室",
  officialPage: "https://www.sei.ynu.edu.cn/info/1023/2241.htm",
};

const researchAreas = [
  {
    number: "01",
    title: "大模型应用与安全",
    english: "LLM & Agent Security",
    description: "研究大语言模型及多智能体的应用，包括社会模拟、虚假新闻检测，以及模型越狱与防御。",
  },
  {
    number: "02",
    title: "网络安全",
    english: "Cybersecurity",
    description: "聚焦网络攻击与防御、流量检测和隐私保护，提升网络系统的韧性与可信度。",
  },
  {
    number: "03",
    title: "多媒体安全",
    english: "Multimedia Security",
    description: "围绕图像与文本等多媒体载体，开展隐写、水印和对抗样本等方向研究。",
  },
  {
    number: "04",
    title: "AI 生成内容",
    english: "AI Generated Content",
    description: "探索文本、图像与视频生成技术，以及生成内容的安全性、可控性与可信应用。",
  },
];

const publications = [
  {
    year: "2026",
    title: "Conditional Flow-Based Generative Steganography",
    authors: "Q. Zhou*, P. Wei*, Z. Qian, X. Zhang, S. Li & C. Qin",
    venue: "IEEE Transactions on Dependable and Secure Computing, 22(5): 5632–5647",
    tag: "共同一作 · 中科院 1 区",
  },
  {
    year: "2025",
    title: "Improved Generative Steganography Based on Diffusion Model",
    authors: "Q. Zhou, P. Wei*, Z. Qian et al.",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    tag: "通讯作者 · 中科院 1 区",
  },
  {
    year: "2024",
    title: "GCQ-ViT: Group-Aware Collaborative Post-Training Quantization for Vision Transformers",
    authors: "P. Pan, W. Guo, P. Wei* & W. Zhou",
    venue: "ECAI 2025 — 28th European Conference on Artificial Intelligence",
    tag: "通讯作者 · CCF-B",
  },
  {
    year: "2023",
    title: "GCStego: Group Chatting-based Behavior Imperceptible Text Steganography",
    authors: "F. Li, P. Wei*, T. Fu, Y. Lin* & W. Zhou",
    venue: "IEEE International Conference on Multimedia and Expo (ICME)",
    tag: "通讯作者 · CCF-B",
  },
  {
    year: "2022",
    title: "Generative Steganography Network",
    authors: "P. Wei, S. Li, X. Zhang et al.",
    venue: "Proceedings of the 30th ACM International Conference on Multimedia",
    tag: "第一作者 · CCF-A",
  },
  {
    year: "2022",
    title: "Generative Steganographic Flow",
    authors: "P. Wei, G. Luo, Q. Song et al.",
    venue: "IEEE International Conference on Multimedia and Expo (ICME)",
    tag: "第一作者 · CCF-B",
  },
];

const projects = [
  { period: "2025—2028", name: "面向社交软件的图文多模态生成式隐写研究", source: "国家自然科学基金地区科学基金项目 · 主持 · 62462067" },
  { period: "2024—2026", name: "数字图像生成式隐写研究", source: "云南省教育厅青年人才基础研究 · 主持 · 2024J0010" },
  { period: "2021—2024", name: "面向社交网络的稳健数字图像隐写", source: "国家自然科学基金面上项目 · 参与 · 62072114" },
  { period: "2020—2023", name: "社交网络虚拟用户塑造及其信息隐藏研究", source: "国家自然科学基金联合基金项目 · 参与 · U1936214" },
];

const teaching = [
  { code: "本科", name: "操作系统原理", term: "专业基础课程" },
  { code: "本科", name: "网安数学基础", term: "网络空间安全" },
  { code: "本科", name: "信息安全学", term: "网络空间安全" },
  { code: "国际", name: "概率论与数理统计", term: "留学生课程" },
  { code: "本科", name: "人工智能导论", term: "人工智能基础" },
  { code: "研究生", name: "密码学", term: "研究生课程" },
];

const education = [
  { period: "2017—2023", name: "复旦大学 · 计算机应用技术", detail: "理学博士 · 多媒体安全 · 导师：张新鹏教授" },
  { period: "2014—2017", name: "四川大学 · 机械制造及其自动化", detail: "学术硕士 · 计算机视觉 · 导师：苏真伟教授" },
  { period: "2007—2011", name: "中南大学 · 机械设计制造及其自动化", detail: "工学学士" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${profile.name}主页`}>
          <span>{profile.name}</span>
          <small>{profile.englishName}</small>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#research">研究</a>
          <a href="#publications">论文</a>
          <a href="#education">履历</a>
          <a href="#teaching">教学</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="cv-link" href={profile.officialPage} target="_blank" rel="noreferrer">官方主页 <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">{profile.university} · {profile.field}</p>
          <h1>{profile.name}<em>{profile.englishName}</em></h1>
          <p className="statement">“{profile.statement}”</p>
          <p className="bio">{profile.bio}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#publications">查看代表成果 <Arrow /></a>
            <a className="text-link" href={`mailto:${profile.email}`}>学术合作</a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="个人信息">
          <p className="aside-label">Current appointment</p>
          <strong>{profile.title}</strong>
          <dl>
            <div><dt>研究方向</dt><dd>大模型安全 · 网络安全<br />多媒体安全 · AIGC</dd></div>
            <div><dt>教育经历</dt><dd>计算机应用技术博士<br />复旦大学</dd></div>
            <div><dt>学术服务</dt><dd>云南大学 CTF 社团指导老师<br />会议与期刊审稿人</dd></div>
          </dl>
        </aside>
      </section>

      <section className="research-section" id="research">
        <div className="section-heading">
          <p>Research agenda</p>
          <h2>研究议题</h2>
          <span>从生成模型到攻防系统，研究智能内容如何被安全地创造、传输与使用。</span>
        </div>
        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <span className="card-number">{area.number}</span>
              <p className="card-english">{area.english}</p>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="content-grid">
        <section className="publications" id="publications">
          <div className="section-heading compact">
            <p>Selected publications</p>
            <h2>代表论文</h2>
          </div>
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="pub-meta"><span>{paper.year}</span><span>{paper.tag}</span></div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
                <cite>{paper.venue}</cite>
              </article>
            ))}
          </div>
          <a className="all-link" href={profile.officialPage} target="_blank" rel="noreferrer">查看官方成果列表 <Arrow /></a>
        </section>

        <aside className="side-column">
          <section id="education">
            <div className="section-heading compact">
              <p>Education</p>
              <h2>教育经历</h2>
            </div>
            <div className="simple-list">
              {education.map((item) => (
                <article key={item.period}>
                  <time>{item.period}</time>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects">
            <div className="section-heading compact">
              <p>Active projects</p>
              <h2>研究项目</h2>
            </div>
            <div className="simple-list">
              {projects.map((project) => (
                <article key={project.name}>
                  <time>{project.period}</time>
                  <h3>{project.name}</h3>
                  <p>{project.source}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="teaching" className="teaching-section">
            <div className="section-heading compact">
              <p>Teaching</p>
              <h2>课程教学</h2>
            </div>
            <div className="course-list">
              {teaching.map((course) => (
                <article key={course.code}>
                  <span>{course.code}</span>
                  <div><h3>{course.name}</h3><p>{course.term}</p></div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact & collaboration</p>
          <h2>一起探索可信智能，<br />解决真实安全问题。</h2>
        </div>
        <div className="contact-details">
          <p>欢迎数理基础好、编程能力强、踏实进取，对大模型安全、网络安全、多媒体安全和 AIGC 感兴趣的同学加入团队。实验室重视融洽协作与长期成长。</p>
          <a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
          <span>{profile.university} · {profile.office}</span>
        </div>
      </section>

      <footer>
        <p>© 2026 {profile.name} · {profile.university}</p>
        <p>资料更新：2026 年 3 月</p>
        <a href={profile.officialPage} target="_blank" rel="noreferrer">信息来源：学院主页 ↗</a>
      </footer>
    </main>
  );
}
