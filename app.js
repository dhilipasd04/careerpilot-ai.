/* ==========================================================================
   CAREERPILOT AI — application logic
   --------------------------------------------------------------------------
   Everything in this file is a local, deterministic "demo intelligence"
   engine written in plain JavaScript. Nothing here calls an external AI
   API. Every function below is written so a real call to an LLM provider
   (Gemini, OpenAI, etc.) could replace its body later — see README.md,
   section "AI Integration Approach", for how that swap would work.
   ========================================================================== */

/* ----------------------------------------------------------------------
   1. REAL PROFILE INFORMATION
   Sourced directly from the uploaded résumé. Nothing here is invented.
   ---------------------------------------------------------------------- */
const PROFILE = {
  name: "Dhilip Kumar A S",
  location: "Avadi, Chennai",
  targetRole: "Founder's Office / Business Systems Associate",
  education: {
    degree: "B.Tech — Computer Science & Business Systems",
    school: "Vel Tech Multi Tech Engineering College",
    years: "2021 – 2025",
    detail: "CGPA 6.5 · coursework: SDLC, Business Systems Analysis, Database Management, Software Engineering"
  },
  experience: [
    { role: "Project Management Intern — Data & Ops", org: "Zoho Corporation", when: "Oct 2023 – Dec 2023 · Chennai" },
    { role: "Project Management Research Intern", org: "Research Nester", when: "Aug 2023 – Oct 2023 · Remote" },
    { role: "Business Analyst Intern", org: "Eagle Tech IT Solutions", when: "Jun 2023 – Jul 2023 · Chennai" }
  ],
  projects: [
    { name: "Farmer-to-Consumer Marketplace", stack: "Figma · HTML · CSS · JavaScript · Python" }
  ],
  certifications: [
    "Google Project Management Certificate — Coursera (in progress)",
    "Scrum Foundation Professional Certificate (SFPC) — CertiProf (planned)",
    "JIRA Fundamentals — Atlassian University (planned)"
  ],
  recognition: ["Winner, SYNERGIA 2023 — Vel Tech Engineering College", "Active Member — British Council"]
};

const REAL_RESUME_TEXT = `Dhilip Kumar A S
Avadi, Chennai

ABOUT
I'm a CS grad with a business systems background, and the thing I keep getting handed - across three internships, one of them fully remote - is the messy, undefined problem nobody's templated yet. A research pipeline with no format. ML experiments quietly drifting off-brief. Project data nobody was tracking until someone had to. I don't wait around for a clean brief; I go find the actual problem, build the structure myself, and hand back something a founder or lead can act on immediately. I'm comfortable working without a playbook, I move fast, and I want a seat close to how decisions actually get made.

AREAS OF EXPERTISE
Ownership & Execution, Ambiguity to Clarity, Cross-functional Coordination, Research & Synthesis, Process & SOP Building, Stakeholder Management, Fast Iteration, Vendor Coordination, Status & Risk Reporting, Requirement Gathering, Documentation, Remote Collaboration, Root Cause Analysis, Prioritization Under Uncertainty, Data-Backed Decisions

SKILLS
Operating: Ambiguous-to-structured problem solving, Cross-functional coordination, Process building from scratch, Prioritization, Remote/async collaboration
Analysis: Python (Pandas, NumPy, Scikit-learn), SQL, Excel, Exploratory Data Analysis, Reporting & Dashboards
Tools: MS Excel, JIRA, Notion, Confluence, Trello, Figma, VS Code
Business: Requirement gathering, Stakeholder management, UAT coordination, Gap analysis, Status reporting
AI tools: ChatGPT, GitHub Copilot - used daily for research, structuring, and writing up findings

EXPERIENCE
Project Management Intern - Data & Ops, Zoho Corporation (Oct 2023 - Dec 2023, Chennai)
- Nobody asked me to own the reporting, so I started tracking sprint velocity, defect counts, and delay trends across three live projects myself
- Built simple Excel dashboards so leads could check project health at a glance instead of chasing five people every morning for an update
- Spotted a recurring vendor delay pattern early enough in the data that the team could plan around it instead of finding out at the deadline
- Cleaned up the tracking process itself and documented it, so whoever inherited it after me wasn't reverse-engineering my spreadsheet

Project Management Research Intern, Research Nester (Aug 2023 - Oct 2023, Remote)
- Worked fully remote and unsupervised for most of the day, turned vague research briefs into a clear, checkable scope before starting
- Pulled research from scattered sources into structured, decision-ready reports, not raw dumps someone else had to make sense of
- Tracked every task against the timeline myself and flagged slippage risk early, instead of waiting for someone to ask for a status update
- Standardized every report into one template so reviewing five studies back-to-back didn't mean relearning a new layout each time

Business Analyst Intern, Eagle Tech IT Solutions (Jun 2023 - Jul 2023, Chennai)
- Sat with the team to understand the real problem before touching any data, turned that into requirement docs the engineers could actually work from
- Ran exploratory analysis on real datasets using Python (Pandas, NumPy, Scikit-learn) and translated findings into plain language for people who didn't need the model internals
- Noticed the ML experiments drifting from the original brief and flagged it early, before it became a bigger course-correction
- Presented results to trainers and senior staff; learned fast how to pitch a technical finding without losing the room

PROJECTS
Farmer-to-Consumer Marketplace - Figma, HTML, CSS, JavaScript, Python
- Started from zero structure, talked to farmers, consumers, and admins before drawing a single screen
- Wrote functional specs and user flows for all three personas, with acceptance criteria
- Built a phased roadmap: core listings first, then payments, then notifications and feedback
- Ran a full risk pass on payment fraud, delivery reliability, and trust between strangers, mapping each risk to a mitigation
- Prototyped in Figma and ran two rounds of feedback before handoff to development

CERTIFICATIONS & RECOGNITION
Google Project Management Certificate - Coursera (in progress)
Scrum Foundation Professional Certificate (SFPC) - CertiProf (planned)
JIRA Fundamentals - Atlassian University (planned)
Internship Certificate - Zoho Corporation
Internship Certificate - Research Nester
Internship Certificate - Eagle Tech IT Solutions
Winner, SYNERGIA 2023 - Vel Tech Engineering College
Active Member - British Council

EDUCATION
B.Tech - Computer Science & Business Systems, Vel Tech Multi Tech Engineering College (2021 - 2025, Chennai)
CGPA 6.5, coursework includes SDLC, Business Systems Analysis, Database Management, Software Engineering`;

/* ----------------------------------------------------------------------
   2. DEMO JOB DATA — a representative Founder's Office / Business
   Systems posting. Clearly a demo, not a real employer listing.
   ---------------------------------------------------------------------- */
const DEMO_JD_TEXT = `Founder's Office Associate - Early-Stage AI Startup (Demo Posting)

We're looking for a Founder's Office Associate to work directly with the founders on whatever the business needs most that week - part analyst, part operator, part project manager.

Responsibilities:
- Turn ambiguous, undefined problems into a clear plan and see it through
- Build and maintain reporting dashboards for the leadership team using Excel and Power BI
- Run SQL queries against product and operations data to answer ad-hoc questions
- Coordinate across engineering, design, and operations to unblock projects
- Gather requirements from stakeholders and translate them into documentation
- Track KPI reporting and flag risks before they become deadline problems
- Support hiring, vendor coordination, and process/SOP building as the team scales
- Use AI tools such as ChatGPT to speed up research and first drafts

Required skills:
- SQL and Excel for analysis and reporting
- Python (Pandas) for exploratory data analysis
- Strong stakeholder management and cross-functional coordination
- Comfortable operating with prioritization under uncertainty and little playbook
- Clear written and verbal communication
- Bachelor's degree in Computer Science, Business, or a related field

Preferred skills:
- Power BI or Tableau for data visualization
- Experience with product analytics or A/B testing
- Familiarity with JIRA, Notion, or Confluence
- 0-2 years of experience, internships included

We move fast, decisions happen without a full brief, and the person in this seat needs to be comfortable finding the actual problem rather than waiting for a ticket.`;

/* ----------------------------------------------------------------------
   3. SKILL LIBRARY — shared vocabulary used by both analyzers so the
   Résumé Analyzer and Job Description Analyzer speak the same language.
   ---------------------------------------------------------------------- */
const SKILL_LIBRARY = [
  { name: "Python", cat: "technical" }, { name: "SQL", cat: "technical" },
  { name: "Excel", cat: "technical" }, { name: "Power BI", cat: "technical" },
  { name: "Tableau", cat: "technical" }, { name: "Pandas", cat: "technical" },
  { name: "NumPy", cat: "technical" }, { name: "Scikit-learn", cat: "technical" },
  { name: "Exploratory Data Analysis", cat: "technical" }, { name: "Reporting & Dashboards", cat: "technical" },
  { name: "Data Analysis", cat: "technical" }, { name: "Data Visualization", cat: "technical" },
  { name: "A/B Testing", cat: "technical" }, { name: "Product Analytics", cat: "technical" },
  { name: "KPI Reporting", cat: "technical" }, { name: "JavaScript", cat: "technical" },
  { name: "HTML", cat: "technical" }, { name: "CSS", cat: "technical" },
  { name: "Figma", cat: "technical" }, { name: "JIRA", cat: "technical" },
  { name: "Notion", cat: "technical" }, { name: "Confluence", cat: "technical" },
  { name: "Trello", cat: "technical" }, { name: "VS Code", cat: "technical" },
  { name: "SDLC", cat: "technical" }, { name: "Agile", cat: "technical" },
  { name: "Scrum", cat: "technical" }, { name: "ChatGPT", cat: "technical" },
  { name: "GitHub Copilot", cat: "technical" },
  { name: "Communication", cat: "soft" }, { name: "Stakeholder Management", cat: "soft" },
  { name: "Cross-functional Coordination", cat: "soft" }, { name: "Requirement Gathering", cat: "soft" },
  { name: "Prioritization", cat: "soft" }, { name: "Documentation", cat: "soft" },
  { name: "Vendor Coordination", cat: "soft" }, { name: "Status Reporting", cat: "soft" },
  { name: "Root Cause Analysis", cat: "soft" }, { name: "Ownership", cat: "soft" },
  { name: "Remote Collaboration", cat: "soft" }, { name: "Gap Analysis", cat: "soft" }
];
const TARGET_KEYWORDS = ["SQL", "Power BI", "Python", "Stakeholder Management", "Data Visualization",
  "Product Analytics", "A/B Testing", "KPI Reporting", "Cross-functional Coordination"];

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function skillRegex(name) { return new RegExp("(?:^|[^a-z0-9])" + escapeRegex(name).toLowerCase() + "(?:$|[^a-z0-9])", "i"); }
function skillPresent(name, text) { return skillRegex(name).test(" " + text.toLowerCase() + " "); }

/* ----------------------------------------------------------------------
   4. SKILL GAP KNOWLEDGE BASE
   ---------------------------------------------------------------------- */
const SKILL_GAP_INFO = {
  "SQL": { why: "Almost every ops/analyst role expects you to pull your own data instead of waiting on someone else.", difficulty: "Medium", path: "Start with SELECT/JOIN/GROUP BY on a public dataset, then move to window functions.", project: "Build a Sales Analytics SQL Dashboard on a public retail dataset." },
  "Power BI": { why: "It's the most commonly requested dashboarding tool for ops and leadership reporting roles.", difficulty: "Low", path: "Rebuild one of your existing Excel dashboards in Power BI to learn the modeling layer.", project: "Build a Business KPI Analysis Dashboard in Power BI from your Zoho internship-style data." },
  "Tableau": { why: "A common alternative to Power BI for data visualization-heavy roles.", difficulty: "Low", path: "Recreate a chart you already built in Excel inside Tableau Public.", project: "Publish a Tableau Public dashboard analyzing a dataset you already understand." },
  "Data Visualization": { why: "Turning a spreadsheet into a chart a non-technical stakeholder trusts is a distinct, learnable skill.", difficulty: "Low", path: "Practice picking the right chart type for 5 different question types.", project: "Rebuild one of your status reports as a one-page visual dashboard." },
  "Product Analytics": { why: "Founder's Office and BizOps roles increasingly expect comfort reading product usage data, not just project data.", difficulty: "Medium", path: "Learn funnel and retention basics, then explore a free product-analytics sandbox dataset.", project: "Analyze a public app-usage dataset and write a one-page 'what would I change' memo." },
  "A/B Testing": { why: "Shows you can reason about whether a change actually worked, not just that it shipped.", difficulty: "Medium", path: "Learn the basics of significance and sample size, then design one test on paper.", project: "Design (and simulate in Python) an A/B test for a feature in your marketplace project." },
  "KPI Reporting": { why: "Leadership-facing roles are judged on whether you can define and track the right numbers.", difficulty: "Low", path: "Pick 3 KPIs for a project you know well and build a one-page tracker.", project: "Turn your Zoho sprint-tracking work into a formal KPI reporting template." }
};
function genericGapInfo(skill) {
  return { why: `Appears as a requirement in the loaded job description but wasn't detected in your résumé.`, difficulty: "Medium", path: `Look for a short, project-based course in ${skill} and apply it to a project you already have.`, project: `Build a small project that puts ${skill} at the center, using data or a problem you already understand.` };
}

/* ----------------------------------------------------------------------
   5. INTERVIEW QUESTION BANK
   ---------------------------------------------------------------------- */
const QUESTION_BANK = [
  { cat: "Technical", q: "Walk me through how you'd clean and explore a messy dataset before analyzing it.", why: "Tests whether you have a repeatable process, not just tool familiarity.", structure: "State your process in order: understand the question → inspect → clean → explore → validate.", example: "I'd start by understanding what decision the analysis needs to support, then check for missing values and duplicates, explore distributions, and validate findings against a known number before presenting.", difficulty: "Medium" },
  { cat: "Technical", q: "How would you decide between a SQL query and an Excel pivot table for a given task?", why: "Checks judgment about tool fit, not just tool knowledge.", structure: "Give the deciding factors: data size, repeatability, who consumes the output.", example: "For a one-off small dataset, a pivot table is faster. For anything recurring or over a few hundred thousand rows, I'd move it to SQL so it's repeatable and auditable.", difficulty: "Easy" },
  { cat: "Behavioral", q: "Tell me about a time you had to figure out a problem nobody had defined for you.", why: "Directly probes comfort with ambiguity — a core requirement for operator-style roles.", structure: "Use Situation → Task → Action → Result, and name the ambiguity explicitly.", example: "During my Zoho internship, nobody had assigned sprint reporting to anyone. I noticed leads chasing updates manually, so I built a simple dashboard tracking velocity and defects across three projects without being asked.", difficulty: "Medium" },
  { cat: "Behavioral", q: "Describe a time you had to coordinate across people who didn't report to you.", why: "Tests cross-functional influence, which matters more than authority in operator roles.", structure: "Name the stakeholders, the friction, and how you got alignment.", example: "As a Business Analyst Intern, I sat with the team before touching any data so requirement docs reflected what engineers could actually build from, instead of assumptions.", difficulty: "Medium" },
  { cat: "HR", q: "Why are you interested in this kind of role instead of a narrower, more specialized one?", why: "Assesses self-awareness about career direction, not just enthusiasm.", structure: "Connect a specific past experience to what you want next.", example: "Across three internships I kept getting handed undefined problems, and I liked that more than any single narrow task — I want a seat close to how decisions get made.", difficulty: "Easy" },
  { cat: "HR", q: "What's a weakness you're actively working on?", why: "Tests honesty and whether you can name a real gap without spiraling into false modesty.", structure: "Name a real, specific gap and one concrete thing you're doing about it.", example: "My SQL is functional but not deep — I can write joins and aggregations, but I'm still building comfort with window functions, so I've been practicing on public datasets.", difficulty: "Easy" },
  { cat: "Situational", q: "Two stakeholders give you conflicting requirements a day before a deadline. What do you do?", why: "Tests prioritization under uncertainty and stakeholder management in a realistic crunch.", structure: "Show a clear decision process: clarify → assess impact → decide → communicate.", example: "I'd get both on a short call to surface the actual constraint behind each request, flag the tradeoff to whoever owns the decision, and document what we chose and why so it doesn't resurface.", difficulty: "Hard" },
  { cat: "Situational", q: "You notice a process is broken but nobody asked you to fix it. What do you do?", why: "Directly tests the 'ownership without being asked' pattern that shows up across your internships.", structure: "Describe the trigger, the small first step, and how you avoided overstepping.", example: "That's close to what happened at Zoho — I noticed reporting wasn't owned, started tracking it myself at a small scale, then documented it so it could be handed off cleanly.", difficulty: "Medium" },
  { cat: "Project-based", q: "Walk me through the Farmer-to-Consumer Marketplace project from problem to prototype.", why: "Tests whether you can narrate product thinking end-to-end, not just describe features.", structure: "Problem → who you talked to → scoping decisions → what you built → what you'd do next.", example: "I started with zero structure, talked to farmers, consumers, and admins, then wrote functional specs with acceptance criteria and phased the roadmap so core listings shipped before payments and notifications.", difficulty: "Medium" },
  { cat: "Project-based", q: "What would you build next if you had two more weeks on that project?", why: "Tests forward thinking and whether you understand the project's real limitations.", structure: "Pick one concrete gap and explain the tradeoff you'd be making.", example: "I'd prioritize the payment-fraud mitigations I mapped out but didn't get to implement, since that's the biggest trust risk between strangers on the platform.", difficulty: "Medium" }
];

/* ----------------------------------------------------------------------
   6. PROJECT IDEA TEMPLATES (fallback if not in SKILL_GAP_INFO)
   ---------------------------------------------------------------------- */
function projectIdeaFor(skill) {
  const info = SKILL_GAP_INFO[skill] || genericGapInfo(skill);
  return { title: info.project, difficulty: info.difficulty, skills: skill, why: info.why, outcome: `A portfolio piece that proves ${skill} on top of the analysis skills you already have.` };
}

/* ----------------------------------------------------------------------
   7. APPLICATION STATE
   ---------------------------------------------------------------------- */
const state = {
  resumeText: REAL_RESUME_TEXT,
  jdText: DEMO_JD_TEXT,
  resumeAnalysis: null,
  jdAnalysis: null,
  match: null,
  gaps: [],
  introMode: "30",
  mockQueue: [],
  mockIndex: 0,
  mockAttempts: 0,
  applications: [],
  chatHistory: []
};

/* ----------------------------------------------------------------------
   8. ANALYSIS ENGINES (demo mode — local JS only)
   ---------------------------------------------------------------------- */
function analyzeResumeText(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const lines = text.split("\n");
  const bulletLines = lines.filter(l => /^\s*[-•*]/.test(l));
  const quantified = bulletLines.filter(l => /\d/.test(l));
  const hasEmail = /[\w.+-]+@[\w-]+\.[\w.-]+/.test(text);
  const hasPhone = /(\+?\d[\d\s-]{7,}\d)/.test(text);
  const detected = SKILL_LIBRARY.filter(s => skillPresent(s.name, text)).map(s => s.name);
  const missingKeywords = TARGET_KEYWORDS.filter(k => !detected.includes(k));

  const keywordScore = Math.min(100, Math.round(detected.length * 4.5));
  const quantScore = bulletLines.length ? Math.round((quantified.length / bulletLines.length) * 100) : 30;
  let atsScore = 0;
  if (hasEmail) atsScore += 25;
  if (hasPhone) atsScore += 25;
  if (bulletLines.length >= 4) atsScore += 25;
  if (wordCount > 150) atsScore += 25;
  const lengthScore = wordCount < 120 ? 45 : wordCount > 1100 ? 60 : 90;

  const overall = Math.round(keywordScore * 0.35 + quantScore * 0.25 + atsScore * 0.2 + lengthScore * 0.2);

  const strengths = [];
  const weaknesses = [];
  if (quantScore >= 55) strengths.push("Several bullets already include a measurable result, not just a task description.");
  if (detected.length >= 15) strengths.push("Broad, clearly labeled skill coverage across tools and analysis methods.");
  if (hasEmail && hasPhone) strengths.push("Contact details are complete, so ATS parsing won't drop your profile.");
  if (bulletLines.length >= 8) strengths.push("Experience is broken into scannable bullets rather than dense paragraphs.");
  if (strengths.length === 0) strengths.push("Résumé text was received and parsed successfully.");

  if (quantScore < 55) weaknesses.push("Several bullets describe a task but not its outcome — add a number, percentage, or scale where possible.");
  if (!hasPhone) weaknesses.push("No phone number was detected — this can hurt ATS parsing.");
  if (detected.length < 8) weaknesses.push("Fewer recognized skill keywords than typical for this kind of role.");
  if (wordCount < 150) weaknesses.push("Résumé text looks short — there may not be enough detail for a full analysis.");
  if (weaknesses.length === 0) weaknesses.push("No major structural issues detected — focus on tailoring keywords per job instead.");

  return {
    wordCount, bulletCount: bulletLines.length, quantifiedCount: quantified.length,
    detectedSkills: detected, missingKeywords, hasEmail, hasPhone, score: Math.max(0, Math.min(100, overall)),
    subscores: { keywordScore, quantScore, atsScore, lengthScore }, strengths, weaknesses
  };
}

function analyzeJDText(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  const title = (lines.find(l => l.length > 3 && l.length < 90 && !/^-/.test(l)) || "Target Role").replace(/\(Demo Posting\)/i, "").trim();
  const detected = SKILL_LIBRARY.filter(s => skillPresent(s.name, text));
  const requiredSkills = detected.filter(s => s.cat === "technical").map(s => s.name);
  const softSkills = detected.filter(s => s.cat === "soft").map(s => s.name);
  const expMatch = text.match(/(\d+\s*-\s*\d+|\d+\+?)\s*years?/i);
  const experienceReq = expMatch ? expMatch[0] + " of experience" : "Not specified — internship-level experience likely acceptable";
  const responsibilities = lines.filter(l => /^[-•*]/.test(l)).map(l => l.replace(/^[-•*]\s*/, "")).slice(0, 8);
  return { title, requiredSkills, softSkills, experienceReq, responsibilities, allKeywords: detected.map(s => s.name) };
}

const RELATED_SKILLS = { "Power BI": "Excel", "Tableau": "Excel", "Product Analytics": "Data Analysis", "A/B Testing": "Data Analysis", "KPI Reporting": "Reporting & Dashboards", "Data Visualization": "Excel" };

function computeMatch(resumeA, jdA) {
  const jdSkills = jdA.allKeywords;
  const resumeSkills = resumeA.detectedSkills;
  const rawMissing = jdSkills.filter(s => !resumeSkills.includes(s));
  const partial = rawMissing.filter(s => RELATED_SKILLS[s] && resumeSkills.includes(RELATED_SKILLS[s]));
  const missing = rawMissing.filter(s => !partial.includes(s));
  const matched = jdSkills.filter(s => resumeSkills.includes(s));

  const techJD = jdA.requiredSkills;
  const techMatched = techJD.filter(s => resumeSkills.includes(s));
  const technicalPct = techJD.length ? Math.round((techMatched.length / techJD.length) * 100) : 100;

  const softJD = jdA.softSkills;
  const softMatched = softJD.filter(s => resumeSkills.includes(s));
  const softPct = softJD.length ? Math.round((softMatched.length / softJD.length) * 100) : 100;

  const keywordPct = jdSkills.length ? Math.round((matched.length / jdSkills.length) * 100) : 100;
  const experiencePct = PROFILE.experience.length >= 3 ? 78 : PROFILE.experience.length >= 1 ? 60 : 35;
  const educationPct = 90;

  const overall = Math.round(technicalPct * 0.35 + softPct * 0.15 + keywordPct * 0.2 + experiencePct * 0.15 + educationPct * 0.15);

  return {
    overall: Math.max(0, Math.min(100, overall)),
    breakdown: { "Technical Skills": technicalPct, "Experience": experiencePct, "Soft Skills": softPct, "Keywords": keywordPct, "Education": educationPct },
    matched, missing, partial, jdTitle: jdA.title
  };
}

function buildSkillGaps(match) {
  const ordered = match.missing.slice();
  const gaps = ordered.map((skill, i) => {
    const info = SKILL_GAP_INFO[skill] || genericGapInfo(skill);
    const priority = i < 2 ? "HIGH" : i < 4 ? "MEDIUM" : "LOW";
    return { skill, priority, ...info };
  });
  match.partial.forEach(skill => {
    const info = SKILL_GAP_INFO[skill] || genericGapInfo(skill);
    gaps.push({ skill, priority: "LOW", ...info, note: `Partially covered — your résumé already shows ${RELATED_SKILLS[skill] || "a related skill"}.` });
  });
  return gaps;
}

function runFullAnalysis() {
  state.resumeAnalysis = analyzeResumeText(state.resumeText);
  state.jdAnalysis = analyzeJDText(state.jdText);
  state.match = computeMatch(state.resumeAnalysis, state.jdAnalysis);
  state.gaps = buildSkillGaps(state.match);
}

/* ----------------------------------------------------------------------
   9. NAVIGATION
   ---------------------------------------------------------------------- */
function enterApp(panel) {
  document.getElementById("landing-view").style.display = "none";
  document.getElementById("app-view").style.display = "block";
  showPanel(panel || "dashboard");
  window.scrollTo(0, 0);
}
function goLanding() {
  document.getElementById("app-view").style.display = "none";
  document.getElementById("landing-view").style.display = "block";
  window.scrollTo(0, 0);
}
function showPanel(name) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".side-link").forEach(l => l.classList.remove("active"));
  const panel = document.getElementById("panel-" + name);
  if (panel) panel.classList.add("active");
  const link = document.querySelector('.side-link[data-panel="' + name + '"]');
  if (link) link.classList.add("active");
  document.getElementById("sidebar").classList.remove("open");
  renderPanel(name);
}
function toggleSidebar() { document.getElementById("sidebar").classList.toggle("open"); }

document.addEventListener("click", e => {
  const link = e.target.closest(".side-link");
  if (link) { e.preventDefault(); showPanel(link.dataset.panel); }
});

function renderPanel(name) {
  if (name === "dashboard") renderDashboard();
  if (name === "insights") renderInsights();
  if (name === "resume") renderResumeResults();
  if (name === "jd") renderJDResults();
  if (name === "match") renderMatch();
  if (name === "gaps") renderGaps();
  if (name === "intro") prefillIntroForm();
  if (name === "interview") renderInterviewPanel();
  if (name === "projects") renderProjects();
  if (name === "tracker") renderTracker();
  if (name === "assistant") renderChatIfEmpty();
}

/* ----------------------------------------------------------------------
   10. TOAST + CLIPBOARD HELPERS
   ---------------------------------------------------------------------- */
function toast(msg) {
  const region = document.getElementById("toast-region");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  region.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}
function copyText(elId) {
  const text = document.getElementById(elId).innerText;
  if (!text || text.startsWith("Fill in") || text.startsWith("Generate")) { toast("Nothing to copy yet"); return; }
  navigator.clipboard && navigator.clipboard.writeText(text).then(() => toast("Copied to clipboard")).catch(() => toast("Copy failed — select text manually"));
}

/* ----------------------------------------------------------------------
   11. DASHBOARD
   ---------------------------------------------------------------------- */
let dashRadarChart, insightBarChart, insightDonutChart;

function renderDashboard() {
  if (!state.match) runFullAnalysis();
  const r = state.resumeAnalysis, m = state.match;
  const skillCoverage = Math.round((m.matched.length / Math.max(1, m.matched.length + m.missing.length + m.partial.length)) * 100);
  const interviewReadiness = Math.min(95, 62 + state.mockAttempts * 6);
  const careerReadiness = Math.round((r.score + m.overall) / 2);

  const tiles = [
    { label: "Career Readiness", value: careerReadiness, suffix: "/100" },
    { label: "Resume Score", value: r.score, suffix: "%" },
    { label: "Job Match", value: m.overall, suffix: "%" },
    { label: "Skill Coverage", value: skillCoverage, suffix: "%" },
    { label: "Interview Readiness", value: interviewReadiness, suffix: "%" }
  ];
  document.getElementById("dash-score-grid").innerHTML = tiles.map(t => {
    const cls = t.value >= 75 ? "" : t.value >= 55 ? "warn" : "risk";
    return `<div class="score-tile ${cls}">
      <div class="sc-label">${t.label}</div>
      <div class="sc-value">${t.value}<small>${t.suffix}</small></div>
      <div class="sc-bar"><i style="width:${t.value}%;"></i></div>
    </div>`;
  }).join("");

  const actions = [];
  state.gaps.slice(0, 3).forEach(g => actions.push({ level: g.priority === "HIGH" ? "hi" : g.priority === "MEDIUM" ? "med" : "", text: `Close the ${g.skill} gap`, sub: g.why }));
  r.weaknesses.slice(0, 2).forEach(w => actions.push({ level: "med", text: "Strengthen your résumé", sub: w }));
  document.getElementById("dash-actions").innerHTML = actions.slice(0, 5).map(a =>
    `<li><span class="dot ${a.level}"></span><span class="txt">${a.text}<span>${a.sub}</span></span></li>`
  ).join("") || `<li><span class="dot"></span><span class="txt">No high-priority actions right now — nice work.</span></li>`;

  const snapshot = [
    { l: "Skills detected", v: state.resumeAnalysis.detectedSkills.length },
    { l: "Internships on résumé", v: PROFILE.experience.length },
    { l: "Certifications listed", v: PROFILE.certifications.length }
  ];
  document.getElementById("dash-snapshot").innerHTML = snapshot.map(s =>
    `<div class="card" style="background:var(--ink-850);"><div class="sc-label">${s.l}</div><div class="sc-value" style="font-size:24px;">${s.v}</div></div>`
  ).join("");

  if (typeof Chart === "undefined") { document.getElementById("dash-radar").outerHTML = "<p class='card-sub'>Chart library failed to load from the CDN — check your connection.</p>"; return; }
  const ctx = document.getElementById("dash-radar");
  const data = m.breakdown;
  if (dashRadarChart) dashRadarChart.destroy();
  dashRadarChart = new Chart(ctx, {
    type: "radar",
    data: { labels: Object.keys(data), datasets: [{ label: "Match %", data: Object.values(data), backgroundColor: "rgba(79,156,134,.25)", borderColor: "#4f9c86", pointBackgroundColor: "#4f9c86" }] },
    options: { plugins: { legend: { display: false } }, scales: { r: { angleLines: { color: "#2b3440" }, grid: { color: "#2b3440" }, pointLabels: { color: "#9aa2ab", font: { size: 11 } }, ticks: { display: false, max: 100, min: 0 } } } }
  });
}

/* ----------------------------------------------------------------------
   12. CAREER INSIGHTS
   ---------------------------------------------------------------------- */
function renderInsights() {
  if (!state.match) runFullAnalysis();
  const weight = { HIGH: 3, MEDIUM: 2, LOW: 1 };
  const top = state.gaps.slice().sort((a, b) => weight[b.priority] - weight[a.priority]).slice(0, 6);

  if (typeof Chart === "undefined") {
    document.getElementById("insight-bar").outerHTML = "<p class='card-sub'>Chart library failed to load from the CDN — check your connection.</p>";
    document.getElementById("insight-donut").outerHTML = "<p class='card-sub'>Chart library failed to load from the CDN — check your connection.</p>";
    renderInsightFocus(top);
    return;
  }
  const ctxBar = document.getElementById("insight-bar");
  if (insightBarChart) insightBarChart.destroy();
  insightBarChart = new Chart(ctxBar, {
    type: "bar",
    data: { labels: top.map(g => g.skill), datasets: [{ label: "Priority weight", data: top.map(g => weight[g.priority]), backgroundColor: top.map(g => g.priority === "HIGH" ? "#c4665a" : g.priority === "MEDIUM" ? "#d9a441" : "#4f9c86") }] },
    options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { ticks: { color: "#9aa2ab" }, grid: { color: "#232b35" } }, y: { ticks: { color: "#eae6db" }, grid: { display: false } } } }
  });

  const ctxDonut = document.getElementById("insight-donut");
  if (insightDonutChart) insightDonutChart.destroy();
  const m = state.match;
  insightDonutChart = new Chart(ctxDonut, {
    type: "doughnut",
    data: { labels: ["Matched", "Partial", "Missing"], datasets: [{ data: [m.matched.length, m.partial.length, m.missing.length], backgroundColor: ["#4f9c86", "#d9a441", "#c4665a"], borderWidth: 0 }] },
    options: { plugins: { legend: { position: "bottom", labels: { color: "#9aa2ab" } } } }
  });

  renderInsightFocus(top);
}
function renderInsightFocus(top) {
  const focus = top[0];
  document.getElementById("insight-focus").innerHTML = focus ? `
    <div class="gap-item">
      <div class="gap-item-head"><h4>${focus.skill}</h4><span class="priority-tag ${focus.priority}">${focus.priority} PRIORITY</span></div>
      <p>${focus.why}</p>
      <div class="meta-line">Suggested next step: ${focus.project}</div>
    </div>` : `<div class="empty-state">No open skill gaps against the loaded job description.</div>`;
}

/* ----------------------------------------------------------------------
   13. RESUME ANALYZER
   ---------------------------------------------------------------------- */
function loadRealResume() {
  document.getElementById("resume-input").value = REAL_RESUME_TEXT;
  toast("Loaded your real résumé");
}
function runResumeAnalysis() {
  const text = document.getElementById("resume-input").value.trim();
  if (!text) { toast("Paste résumé text first"); return; }
  const loading = document.getElementById("resume-loading");
  loading.style.display = "flex";
  document.getElementById("resume-results").innerHTML = "";
  setTimeout(() => {
    state.resumeText = text;
    runFullAnalysis();
    loading.style.display = "none";
    renderResumeResults();
    toast("Résumé analyzed");
  }, 500);
}
function renderResumeResults() {
  const box = document.getElementById("resume-results");
  if (!state.resumeAnalysis) { box.innerHTML = ""; return; }
  const r = state.resumeAnalysis;
  box.innerHTML = `
    <div class="card">
      <div class="data-banner">Analyzed with the local demo engine · ${r.wordCount} words · ${r.bulletCount} bullet lines</div>
      <div class="match-score-hero">
        <div class="big-num">${r.score}<small>/100</small></div>
        <div class="big-lbl">Overall résumé score, built from keyword coverage, quantified achievements, ATS basics, and length.</div>
      </div>
      <div class="grid-2" style="margin-top:10px;">
        <div>
          <h3 style="margin-bottom:10px;">Strengths</h3>
          <ul class="action-list">${r.strengths.map(s => `<li><span class="dot" style="background:var(--teal);"></span><span class="txt">${s}</span></li>`).join("")}</ul>
        </div>
        <div>
          <h3 style="margin-bottom:10px;">Weaknesses</h3>
          <ul class="action-list">${r.weaknesses.map(s => `<li><span class="dot hi"></span><span class="txt">${s}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>
    <div class="card">
      <h3>ATS Readiness</h3>
      <div class="grid-4" style="margin-top:12px;">
        <div class="score-tile"><div class="sc-label">Keyword coverage</div><div class="sc-value" style="font-size:22px;">${r.subscores.keywordScore}%</div></div>
        <div class="score-tile"><div class="sc-label">Quantified bullets</div><div class="sc-value" style="font-size:22px;">${r.subscores.quantScore}%</div></div>
        <div class="score-tile"><div class="sc-label">ATS basics</div><div class="sc-value" style="font-size:22px;">${r.subscores.atsScore}%</div></div>
        <div class="score-tile"><div class="sc-label">Length fit</div><div class="sc-value" style="font-size:22px;">${r.subscores.lengthScore}%</div></div>
      </div>
    </div>
    <div class="card">
      <h3>Skills Detected (${r.detectedSkills.length})</h3>
      <div class="badge-row" style="margin-top:10px;">${r.detectedSkills.map(s => `<span class="skill-chip match">${s}</span>`).join("") || "<span class='skill-chip'>None detected</span>"}</div>
    </div>
    <div class="card">
      <h3>Commonly Requested Keywords Not Found</h3>
      <p class="card-sub">Checked against a general analyst/ops target list — not every role needs every keyword.</p>
      <div class="badge-row">${r.missingKeywords.map(s => `<span class="skill-chip missing">${s}</span>`).join("") || "<span class='skill-chip match'>None — strong coverage</span>"}</div>
    </div>`;
}

/* ----------------------------------------------------------------------
   14. JOB DESCRIPTION ANALYZER
   ---------------------------------------------------------------------- */
function loadDemoJD() {
  document.getElementById("jd-input").value = DEMO_JD_TEXT;
  toast("Loaded demo job posting");
}
function runJDAnalysis() {
  const text = document.getElementById("jd-input").value.trim();
  if (!text) { toast("Paste a job description first"); return; }
  const loading = document.getElementById("jd-loading");
  loading.style.display = "flex";
  document.getElementById("jd-results").innerHTML = "";
  setTimeout(() => {
    state.jdText = text;
    runFullAnalysis();
    loading.style.display = "none";
    renderJDResults();
    toast("Job description analyzed");
  }, 500);
}
function renderJDResults() {
  const box = document.getElementById("jd-results");
  if (!state.jdAnalysis) { box.innerHTML = ""; return; }
  const j = state.jdAnalysis;
  box.innerHTML = `
    <div class="card">
      <div class="data-banner">DEMO JOB DATA unless you pasted a real posting above</div>
      <h3>${j.title}</h3>
      <p class="card-sub">Experience requirement: ${j.experienceReq}</p>
      <div class="grid-2" style="margin-top:6px;">
        <div>
          <h3 style="margin-bottom:10px;">Technical / Required Skills</h3>
          <div class="badge-row">${j.requiredSkills.map(s => `<span class="skill-chip">${s}</span>`).join("") || "<span class='skill-chip'>None detected</span>"}</div>
        </div>
        <div>
          <h3 style="margin-bottom:10px;">Soft Skills</h3>
          <div class="badge-row">${j.softSkills.map(s => `<span class="skill-chip">${s}</span>`).join("") || "<span class='skill-chip'>None detected</span>"}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <h3>Key Responsibilities</h3>
      <ul class="action-list">${j.responsibilities.map(r => `<li><span class="dot"></span><span class="txt">${r}</span></li>`).join("") || "<li><span class='txt'>No bullet-style responsibilities detected in the pasted text.</span></li>"}</ul>
    </div>`;
}

/* ----------------------------------------------------------------------
   15. RESUME VS JOB MATCH
   ---------------------------------------------------------------------- */
function runMatch() { runFullAnalysis(); renderMatch(); toast("Match recalculated"); }
function renderMatch() {
  if (!state.match) runFullAnalysis();
  const m = state.match;
  const box = document.getElementById("match-results");
  box.innerHTML = `
    <div class="card">
      <div class="data-banner">Comparing your loaded résumé against: ${m.jdTitle}</div>
      <div class="match-score-hero">
        <div class="big-num">${m.overall}<small>%</small></div>
        <div class="big-lbl">Overall match score against this job description.</div>
      </div>
      <div style="margin-top:18px;">
        ${Object.entries(m.breakdown).map(([k, v]) => `
          <div class="breakdown-row">
            <span class="name">${k}</span>
            <span class="pbar-track"><span class="pbar-fill" style="width:${v}%;"></span></span>
            <span class="val">${v}%</span>
          </div>`).join("")}
      </div>
    </div>
    <div class="grid-3">
      <div class="card"><h3>Matched Skills</h3><div class="badge-row" style="margin-top:10px;">${m.matched.map(s => `<span class="skill-chip match">${s}</span>`).join("") || "<span class='skill-chip'>None</span>"}</div></div>
      <div class="card"><h3>Partial Match</h3><div class="badge-row" style="margin-top:10px;">${m.partial.map(s => `<span class="skill-chip partial">${s}</span>`).join("") || "<span class='skill-chip'>None</span>"}</div></div>
      <div class="card"><h3>Missing Skills</h3><div class="badge-row" style="margin-top:10px;">${m.missing.map(s => `<span class="skill-chip missing">${s}</span>`).join("") || "<span class='skill-chip match'>None</span>"}</div></div>
    </div>
    <div class="card">
      <h3>How to Increase Your Match Score</h3>
      <ul class="action-list" style="margin-top:10px;">
        ${m.missing.slice(0, 3).map(s => `<li><span class="dot hi"></span><span class="txt">Add or build toward ${s}<span>${(SKILL_GAP_INFO[s] || genericGapInfo(s)).path}</span></span></li>`).join("")}
        ${m.partial.slice(0, 2).map(s => `<li><span class="dot med"></span><span class="txt">Make ${s} explicit on your résumé<span>You likely already do adjacent work — name it directly.</span></span></li>`).join("")}
      </ul>
    </div>`;
}

/* ----------------------------------------------------------------------
   16. SKILL GAP ANALYZER
   ---------------------------------------------------------------------- */
function renderGaps() {
  if (!state.match) runFullAnalysis();
  const box = document.getElementById("gap-results");
  if (state.gaps.length === 0) { box.innerHTML = `<div class="empty-state"><div class="em-ic">✓</div>No skill gaps detected against the currently loaded job description.</div>`; return; }
  box.innerHTML = `<div class="card">` + state.gaps.map(g => `
    <div class="gap-item">
      <div class="gap-item-head"><h4>${g.skill}</h4><span class="priority-tag ${g.priority}">${g.priority} PRIORITY</span></div>
      <p><b style="color:var(--text);">Why it matters:</b> ${g.why}</p>
      <p><b style="color:var(--text);">Difficulty:</b> ${g.difficulty}</p>
      <p><b style="color:var(--text);">Learning path:</b> ${g.path}</p>
      <div class="meta-line">Suggested project: ${g.project}${g.note ? " · " + g.note : ""}</div>
    </div>`).join("") + `</div>`;
}

/* ----------------------------------------------------------------------
   17. SELF-INTRODUCTION GENERATOR
   ---------------------------------------------------------------------- */
function prefillIntroForm() {
  if (document.getElementById("intro-name").value) return;
  document.getElementById("intro-name").value = PROFILE.name;
  document.getElementById("intro-role").value = PROFILE.targetRole;
  document.getElementById("intro-skills").value = "Python, SQL, Excel, stakeholder management, requirement gathering";
  document.getElementById("intro-exp").value = "Three internships spanning project management, research, and business analysis";
  document.getElementById("intro-proj").value = PROFILE.projects[0].name;
  document.getElementById("intro-goal").value = "A seat close to how decisions actually get made";
}
function setIntroMode(mode) {
  state.introMode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
}
function generateIntro() {
  const name = document.getElementById("intro-name").value.trim() || PROFILE.name;
  const role = document.getElementById("intro-role").value.trim() || PROFILE.targetRole;
  const skills = document.getElementById("intro-skills").value.trim() || "Python, SQL, Excel";
  const exp = document.getElementById("intro-exp").value.trim();
  const proj = document.getElementById("intro-proj").value.trim();
  const goal = document.getElementById("intro-goal").value.trim();
  const skillList = skills.split(",").map(s => s.trim()).filter(Boolean);

  let output = "";
  if (state.introMode === "30") {
    output = `Hi, I'm ${name}. I'm working toward ${role.toLowerCase()} roles, and I bring ${skillList.slice(0, 3).join(", ")}. ${exp ? exp + ". " : ""}Right now I'm focused on ${goal.toLowerCase()}.`;
  } else if (state.introMode === "60") {
    output = `Hi, I'm ${name}. My background is a mix of computer science and business systems, and I've spent it on ${exp ? exp.toLowerCase() : "hands-on internship work"}. Day to day, I work with ${skillList.join(", ")}. One project I'd point to is ${proj || "a self-built product prototype"}, where I went from talking to real users to a working, phased plan. What I'm looking for next is ${goal ? goal.toLowerCase() : "a role where I can keep doing that kind of work"}.`;
  } else {
    output = `Thanks for having me. I'm ${name}, and my background is computer science with a business systems focus. Across three internships — in project management, research, and business analysis — the thing that kept landing on my desk was the problem nobody had templated yet: no clean brief, no owner, sometimes no data. I built structure where none existed, whether that meant standing up a reporting dashboard nobody had asked for or turning a vague research brief into a checkable scope before starting. My day-to-day toolkit is ${skillList.join(", ")}. Outside of internships, I built ${proj || "a self-built product prototype"} from scratch — talked to real users first, then wrote specs, phased the roadmap, and ran a risk pass before handoff. What I'm looking for now is ${goal ? goal.toLowerCase() : "a role close to where decisions actually get made"}, where I can keep working without a full playbook.`;
  }
  document.getElementById("intro-output").innerText = output;
}

/* ----------------------------------------------------------------------
   18. INTERVIEW PREPARATION
   ---------------------------------------------------------------------- */
let activeInterviewCat = "Technical";
function renderInterviewPanel() {
  const cats = ["Technical", "Behavioral", "HR", "Situational", "Project-based"];
  document.getElementById("interview-tabs").innerHTML = cats.map(c =>
    `<button class="tab-btn ${c === activeInterviewCat ? "active" : ""}" onclick="setInterviewTab('${c}')">${c}</button>`
  ).join("");
  renderInterviewQuestions();
}
function setInterviewTab(cat) { activeInterviewCat = cat; renderInterviewPanel(); }
function renderInterviewQuestions() {
  const list = QUESTION_BANK.filter(q => q.cat === activeInterviewCat);
  document.getElementById("interview-questions").innerHTML = list.map(q => `
    <div class="q-card">
      <div class="q-top"><h4>${q.q}</h4><span class="diff">${q.difficulty}</span></div>
      <details>
        <summary>Why interviewers ask this &amp; how to structure your answer</summary>
        <div class="detail-block">
          <p><b>Why they ask it:</b> ${q.why}</p>
          <p style="margin-top:8px;"><b>Suggested structure:</b> ${q.structure}</p>
          <p style="margin-top:8px;"><b>Strong answer example:</b> ${q.example}</p>
        </div>
      </details>
    </div>`).join("");
}

function startMockInterview() {
  state.mockQueue = shuffled(QUESTION_BANK).slice(0, 5);
  state.mockIndex = 0;
  renderMockQuestion();
}
function shuffled(arr) { return arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]); }
function renderMockQuestion() {
  const area = document.getElementById("mock-interview-area");
  if (state.mockIndex >= state.mockQueue.length) {
    state.mockAttempts++;
    area.innerHTML = `<div class="empty-state">Mock interview complete. Your Interview Readiness score on the dashboard has been nudged up.</div>`;
    return;
  }
  const q = state.mockQueue[state.mockIndex];
  area.innerHTML = `
    <div class="mock-wrap">
      <div class="mock-progress">Question ${state.mockIndex + 1} of ${state.mockQueue.length} · ${q.cat}</div>
      <div class="mock-q">${q.q}</div>
      <textarea id="mock-answer" rows="6" placeholder="Type your answer..."></textarea>
      <div class="form-actions"><button class="btn btn-primary btn-sm" onclick="submitMockAnswer()">Submit Answer</button></div>
      <div id="mock-eval-area"></div>
    </div>`;
}
function submitMockAnswer() {
  const answer = document.getElementById("mock-answer").value.trim();
  const q = state.mockQueue[state.mockIndex];
  if (!answer) { toast("Type an answer first"); return; }
  const evalScores = evaluateAnswer(q, answer);
  document.getElementById("mock-eval-area").innerHTML = `
    <div class="mock-eval">
      <div class="ev"><div class="v">${evalScores.clarity}</div><div class="l">Clarity</div></div>
      <div class="ev"><div class="v">${evalScores.relevance}</div><div class="l">Relevance</div></div>
      <div class="ev"><div class="v">${evalScores.confidence}</div><div class="l">Confidence</div></div>
      <div class="ev"><div class="v">${evalScores.structure}</div><div class="l">Structure</div></div>
    </div>
    <p class="card-sub" style="margin-top:12px;">Demo evaluation — local heuristic scoring, not a real AI judgment.</p>
    <div class="form-actions"><button class="btn btn-ghost btn-sm" onclick="nextMockQuestion()">Next Question</button></div>`;
}
function nextMockQuestion() { state.mockIndex++; renderMockQuestion(); }
function evaluateAnswer(q, answer) {
  const words = answer.trim().split(/\s+/).filter(Boolean);
  const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const clarity = Math.max(30, Math.min(95, 40 + sentences.length * 8));
  const qKeywords = (q.q + " " + q.why).toLowerCase().match(/[a-z]{4,}/g) || [];
  const answerLower = answer.toLowerCase();
  const overlap = qKeywords.filter(k => answerLower.includes(k)).length;
  const relevance = Math.max(25, Math.min(95, 35 + overlap * 6));
  const hedgeWords = (answerLower.match(/\b(maybe|i guess|not sure|kind of|sort of|i think)\b/g) || []).length;
  const confidence = Math.max(25, Math.min(95, 80 - hedgeWords * 12 + Math.min(15, words.length / 10)));
  const structureMarkers = (answerLower.match(/\b(first|then|after that|finally|situation|task|action|result|because|so that)\b/g) || []).length;
  const structure = Math.max(25, Math.min(95, 40 + structureMarkers * 12));
  return { clarity: Math.round(clarity), relevance: Math.round(relevance), confidence: Math.round(confidence), structure: Math.round(structure) };
}

/* ----------------------------------------------------------------------
   19. COVER LETTER GENERATOR
   ---------------------------------------------------------------------- */
function generateCoverLetter() {
  if (!state.match) runFullAnalysis();
  const company = document.getElementById("cover-company").value.trim() || "your company";
  const hiring = document.getElementById("cover-hiring").value.trim() || "Hiring Team";
  const m = state.match, j = state.jdAnalysis;
  const topMatches = m.matched.slice(0, 4).join(", ") || "cross-functional coordination and structured reporting";
  const letter = `Dear ${hiring},

I'm writing to apply for the ${j.title} role at ${company}. My background is computer science with a business systems focus, built through three internships where I was consistently handed the problem nobody had templated yet — from unowned sprint reporting to research briefs with no defined scope.

What draws me to this role specifically is the overlap with how I already work: ${topMatches}. At Zoho Corporation, I noticed reporting wasn't owned by anyone and started tracking sprint velocity, defect counts, and delay trends across three live projects on my own, then documented the process so it could be handed off cleanly. At Eagle Tech IT Solutions, I ran exploratory analysis with Python before translating it into requirement docs engineers could act on directly.

I'm still building toward a few things this role asks for${m.missing.length ? " — particularly " + m.missing.slice(0, 2).join(" and ") : ""} — and I'm treating that as my next learning priority rather than a gap I'm ignoring.

I'd welcome the chance to talk about how I could contribute at ${company}.

Best,
${PROFILE.name}`;
  document.getElementById("cover-output").innerText = letter;
}

/* ----------------------------------------------------------------------
   20. PROJECT RECOMMENDATIONS
   ---------------------------------------------------------------------- */
function renderProjects() {
  if (!state.match) runFullAnalysis();
  const skills = [...state.match.missing, ...state.match.partial];
  const box = document.getElementById("project-cards");
  if (skills.length === 0) { box.innerHTML = `<div class="empty-state">No open skill gaps to build projects around right now — try loading a different job description.</div>`; return; }
  box.innerHTML = skills.map(s => {
    const p = projectIdeaFor(s);
    return `<div class="proj-card">
      <h4>${p.title}</h4>
      <div class="meta"><span class="tag">${p.difficulty}</span><span class="tag">${p.skills}</span></div>
      <p>${p.why}</p>
      <div class="out">Outcome: ${p.outcome}</div>
    </div>`;
  }).join("");
}

/* ----------------------------------------------------------------------
   21. APPLICATION TRACKER
   ---------------------------------------------------------------------- */
function loadApplications() {
  try { state.applications = JSON.parse(localStorage.getItem("careerpilot_applications") || "[]"); }
  catch (e) { state.applications = []; }
}
function saveApplications() { localStorage.setItem("careerpilot_applications", JSON.stringify(state.applications)); }

function renderTracker() {
  const card = document.getElementById("tracker-card");
  if (state.applications.length === 0) {
    card.innerHTML = `<div class="empty-state"><div class="em-ic">▭</div>No applications tracked yet. Add one to get started.</div>`;
    return;
  }
  card.innerHTML = `<table class="tracker-table">
    <thead><tr><th>Company</th><th>Role</th><th>Date Applied</th><th>Status</th><th>Next Action</th><th></th></tr></thead>
    <tbody>${state.applications.map(a => `
      <tr>
        <td>${a.company}</td><td>${a.role}</td><td>${a.date || "—"}</td>
        <td><span class="status-pill ${a.status}">${a.status}</span></td>
        <td>${a.next || "—"}</td>
        <td class="row-actions">
          <button class="icon-btn" onclick="openTrackerModal('${a.id}')" aria-label="Edit">✎</button>
          <button class="icon-btn" onclick="deleteApplication('${a.id}')" aria-label="Delete">✕</button>
        </td>
      </tr>`).join("")}</tbody>
  </table>`;
}
function openTrackerModal(id) {
  document.getElementById("tracker-modal").classList.add("open");
  const entry = id ? state.applications.find(a => a.id === id) : null;
  document.getElementById("tracker-modal-title").textContent = entry ? "Edit Application" : "Add Application";
  document.getElementById("tracker-edit-id").value = entry ? entry.id : "";
  document.getElementById("t-company").value = entry ? entry.company : "";
  document.getElementById("t-role").value = entry ? entry.role : "";
  document.getElementById("t-date").value = entry ? entry.date : "";
  document.getElementById("t-status").value = entry ? entry.status : "Wishlist";
  document.getElementById("t-next").value = entry ? entry.next : "";
}
function closeTrackerModal() { document.getElementById("tracker-modal").classList.remove("open"); }
function saveTrackerEntry() {
  const company = document.getElementById("t-company").value.trim();
  const role = document.getElementById("t-role").value.trim();
  if (!company || !role) { toast("Company and role are required"); return; }
  const id = document.getElementById("tracker-edit-id").value;
  const entry = {
    id: id || ("app_" + Date.now()),
    company, role,
    date: document.getElementById("t-date").value,
    status: document.getElementById("t-status").value,
    next: document.getElementById("t-next").value.trim()
  };
  if (id) { state.applications = state.applications.map(a => a.id === id ? entry : a); }
  else { state.applications.push(entry); }
  saveApplications();
  closeTrackerModal();
  renderTracker();
  toast(id ? "Application updated" : "Application added");
}
function deleteApplication(id) {
  state.applications = state.applications.filter(a => a.id !== id);
  saveApplications();
  renderTracker();
  toast("Application removed");
}
document.addEventListener("click", e => { if (e.target.id === "tracker-modal") closeTrackerModal(); });

/* ----------------------------------------------------------------------
   22. AI CAREER ASSISTANT (demo pattern-matching, not a live LLM)
   ---------------------------------------------------------------------- */
const CHAT_SUGGESTIONS = ["Am I ready for this job?", "What should I learn next?", "Improve my resume summary", "Give me interview questions", "Create my self introduction"];
function renderChatIfEmpty() {
  document.getElementById("chat-suggestions").innerHTML = CHAT_SUGGESTIONS.map(s => `<button class="sugg-btn" onclick="sendChat('${s.replace(/'/g, "\\'")}')">${s}</button>`).join("");
  if (state.chatHistory.length === 0) {
    pushChat("bot", "Hi, I'm the CareerPilot AI assistant — demo mode, running on local pattern matching rather than a live model. Ask me about your résumé, your job match, or interview prep, or tap a suggestion below.");
  }
}
function pushChat(who, text) {
  state.chatHistory.push({ who, text });
  const log = document.getElementById("chat-log");
  const el = document.createElement("div");
  el.className = "msg " + who;
  el.textContent = text;
  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}
function sendChat(preset) {
  const input = document.getElementById("chat-input");
  const text = (preset || input.value).trim();
  if (!text) return;
  pushChat("user", text);
  input.value = "";
  const log = document.getElementById("chat-log");
  const typingEl = document.createElement("div");
  typingEl.className = "msg bot typing";
  typingEl.innerHTML = "<i></i><i></i><i></i>";
  log.appendChild(typingEl);
  log.scrollTop = log.scrollHeight;
  setTimeout(() => { typingEl.remove(); pushChat("bot", chatReply(text)); }, 500);
}
function chatReply(text) {
  if (!state.match) runFullAnalysis();
  const t = text.toLowerCase();
  const m = state.match, r = state.resumeAnalysis;
  if (/ready/.test(t)) return `Your overall job match is ${m.overall}% against "${m.jdTitle}", and your résumé score is ${r.score}/100. The biggest lever right now is ${state.gaps[0] ? state.gaps[0].skill : "keeping your résumé tailored per job"} — check the Skill Gap Analyzer for the full list.`;
  if (/learn/.test(t)) return state.gaps[0] ? `Based on the loaded job, ${state.gaps[0].skill} is your top-priority gap: ${state.gaps[0].why} Suggested first step — ${state.gaps[0].path}` : "No open skill gaps against the current job description — try loading a different one to see fresh recommendations.";
  if (/resume|résumé/.test(t) && /summary|improve/.test(t)) return r.weaknesses[0] ? `The clearest improvement right now: ${r.weaknesses[0]} Open the Resume Analyzer for the full breakdown.` : "Your résumé is already scoring well on the checks I run — the Resume Analyzer has the full breakdown.";
  if (/interview/.test(t)) { const q = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)]; return `Here's a ${q.cat.toLowerCase()} question to practice: "${q.q}" — open Interview Prep for the full structured answer guide.`; }
  if (/introduc/.test(t)) return "Head to the Self-Introduction Generator — it's pre-filled from your profile, and you can switch between a 30-second, 60-second, or full interview-length version.";
  if (/cover letter/.test(t)) return "The Cover Letter Generator will combine your résumé with the loaded job description — just add a company name and generate.";
  if (/track|application/.test(t)) return "The Application Tracker keeps everything in your browser's local storage — add a company to start tracking status and next actions.";
  return "I can help most with your résumé, job match, skill gaps, or interview prep — try one of the suggestions below, or ask about a specific tool.";
}

/* ----------------------------------------------------------------------
   23. INIT
   ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadApplications();
  runFullAnalysis();
  document.getElementById("side-name").textContent = PROFILE.name;
  document.getElementById("side-role").textContent = PROFILE.targetRole;
  document.getElementById("side-av").textContent = PROFILE.name.split(" ").map(n => n[0]).slice(0, 2).join("");
  document.getElementById("resume-input").value = "";
  document.getElementById("jd-input").value = "";
});
