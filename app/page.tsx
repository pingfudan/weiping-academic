// ─────────────────────────────────────────────────────────────────────────────
// 内容维护区：修改以下数组和 profile，即可更新主页，无需调整页面结构。
// ─────────────────────────────────────────────────────────────────────────────
const profile = {
  name: "林知远",
  englishName: "Zhiyuan Lin",
  title: "公共政策学院 · 副教授 / 博士生导师",
  university: "海川大学",
  field: "计算社会科学与公共政策",
  statement:
    "我关注城市如何被数据理解、被政策塑造，以及技术如何更公平地服务每一个人。",
  bio: "林知远，海川大学公共政策学院副教授、博士生导师，社会计算与治理实验室负责人。研究结合大规模行为数据、网络科学与因果推断，解释城市流动、社会关系与公共政策之间的动态联系。",
  email: "zhiyuan.lin@haichuan.edu.cn",
  office: "文科楼 A-512",
};

const researchAreas = [
  {
    number: "01",
    title: "城市计算",
    english: "Urban Computing",
    description: "利用多源时空数据刻画城市流动、空间不平等与公共服务可达性。",
  },
  {
    number: "02",
    title: "社会网络",
    english: "Social Networks",
    description: "研究关系结构如何影响信息扩散、群体协作与社会韧性。",
  },
  {
    number: "03",
    title: "政策评估",
    english: "Policy Evaluation",
    description: "结合因果推断与计算方法，评估数字治理和城市政策的真实影响。",
  },
];

const publications = [
  {
    year: "2026",
    title: "Mobility inequality and the geography of urban opportunity",
    authors: "Zhiyuan Lin, Mia Chen & Robert Klein",
    venue: "Nature Human Behaviour",
    tag: "Featured",
  },
  {
    year: "2025",
    title: "Networked neighborhoods: Social ties and resilience after disruption",
    authors: "Zhiyuan Lin & Yifan Zhou",
    venue: "American Journal of Sociology",
    tag: "Article",
  },
  {
    year: "2024",
    title: "Digital public services and unequal participation: Evidence from 128 cities",
    authors: "Zhiyuan Lin, Han Wu & Yao Sun",
    venue: "Journal of Public Administration Research and Theory",
    tag: "Article",
  },
  {
    year: "2023",
    title: "Measuring the social pulse of cities with privacy-preserving data",
    authors: "Zhiyuan Lin et al.",
    venue: "EPJ Data Science",
    tag: "Methods",
  },
];

const projects = [
  { period: "2025—2028", name: "城市机会空间的计算测量与政策干预", source: "国家自然科学基金面上项目 · 主持" },
  { period: "2024—2026", name: "数字公共服务的包容性评估", source: "教育部人文社会科学研究项目 · 主持" },
  { period: "2023—2025", name: "韧性社区与基层协同治理", source: "海川市社科重大专项 · 课题负责人" },
];

const teaching = [
  { code: "PPG 602", name: "计算社会科学方法", term: "研究生 · 秋季" },
  { code: "PPG 314", name: "数据、城市与公共政策", term: "本科生 · 春季" },
  { code: "PPG 701", name: "社会科学研究设计工作坊", term: "博士生 · 全年" },
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
          <a href="#projects">项目</a>
          <a href="#teaching">教学</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="cv-link" href="#publications">学术履历 <Arrow /></a>
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
            <div><dt>研究方向</dt><dd>城市计算 · 社会网络<br />公共政策评估</dd></div>
            <div><dt>教育经历</dt><dd>社会学博士<br />伦敦政治经济学院</dd></div>
            <div><dt>学术服务</dt><dd>CSSI 编委<br />城市数据伦理委员会委员</dd></div>
          </dl>
        </aside>
      </section>

      <section className="research-section" id="research">
        <div className="section-heading">
          <p>Research agenda</p>
          <h2>研究议题</h2>
          <span>用可解释、可复现的计算方法，回应真实世界中的公共问题。</span>
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
          <a className="all-link" href={`mailto:${profile.email}?subject=索取完整论文目录`}>索取完整论文目录 <Arrow /></a>
        </section>

        <aside className="side-column">
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
          <h2>让严谨的研究，<br />走向真实的公共生活。</h2>
        </div>
        <div className="contact-details">
          <p>欢迎对城市数据、社会网络和政策评估感兴趣的学生与研究者来信交流。</p>
          <a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
          <span>{profile.university} · {profile.office}</span>
        </div>
      </section>

      <footer>
        <p>© 2026 {profile.name} · {profile.university}</p>
        <p>最后更新：2026 年 7 月</p>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
