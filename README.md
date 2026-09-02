# CareerPilot AI

**Your AI-powered career copilot — from resume to interview.**

A self-built AI career intelligence platform prototype. Twelve connected tools — résumé analysis, job-description parsing, résumé-vs-job matching, skill-gap mapping, interview prep with a mock interview, a self-introduction generator, a cover-letter generator, an application tracker, and a guided career assistant — sharing one profile so the advice stays consistent across the whole workflow.

Live structure: a single static site (`index.html` + `assets/app.js`), no backend required, deployable on GitHub Pages in minutes.

---

## Overview

Job seekers rarely get a straight answer to the question that actually matters: *is my profile even close to what this job wants, and if not, where's the gap?* CareerPilot AI puts a résumé and a job description side by side and turns that comparison into a concrete, prioritized plan — then gives you the tools (interview prep, a cover letter draft, a tracker) to act on it.

## Problem

Most applicants apply without knowing:
1. Whether their profile actually matches the job.
2. Which skills they're missing.
3. Which parts of their résumé are weak.
4. Which keywords are missing for ATS screening.
5. How to improve their odds concretely.
6. What interview questions they're likely to face.
7. How to introduce themselves professionally.
8. What to build next to close the gap.

## Solution

One workspace that answers all eight questions from the same underlying profile, instead of eight disconnected tools (or none at all).

## Target Users

College students, fresh graduates, job seekers, freelancers, and early-career professionals — anyone applying for roles without a clear read on how strong their application actually is.

---

## Key Features

| # | Feature | What it does |
|---|---|---|
| 1 | **Résumé Analyzer** | Scores a pasted résumé on keyword coverage, quantified achievements, and ATS basics; lists strengths, weaknesses, and missing keywords. |
| 2 | **Job Description Analyzer** | Extracts title, required/soft skills, experience requirement, and responsibilities from a pasted posting. |
| 3 | **Resume vs Job Match** | Overall match score plus a five-way breakdown (technical, experience, soft skills, keywords, education), with matched / partial / missing skill lists. |
| 4 | **Skill Gap Analyzer** | Every missing skill, ranked HIGH/MEDIUM/LOW, with why it matters, difficulty, a learning path, and a project idea. |
| 5 | **Self-Introduction Generator** | 30-second, 60-second, and full interview-length introductions built from profile fields you control. |
| 6 | **Interview Preparation** | Technical, Behavioral, HR, Situational, and Project-based question banks with structure guidance — plus a timed mock interview with local heuristic scoring (clarity, relevance, confidence, structure). |
| 7 | **Cover Letter Generator** | Combines the loaded résumé and job description into an editable first draft. |
| 8 | **Application Tracker** | Add/edit/delete applications with status (Wishlist → Applied → Assessment → Interview → Offer/Rejected), stored in `localStorage`. |
| 9 | **AI Career Assistant** | A guided chat that pattern-matches your question to the right tool and pulls live numbers from your current analysis. |
| 10 | **Career Insights** | Charts (Chart.js) summarizing top skill gaps and match composition across the whole profile. |
| 11 | **Project Recommendations** | Portfolio project ideas generated specifically from your current missing/partial skills. |
| 12 | **Career Dashboard** | Every score in one place — Career Readiness, Resume Score, Job Match, Skill Coverage, Interview Readiness — plus a ranked "next best actions" list. |

## Screenshots

| Landing Page | Career Dashboard |
|---|---|
| ![Landing page](screenshots/landing.png) | ![Career Dashboard](screenshots/dashboard.png) |

| Skill Gap Analyzer | Interview Preparation |
|---|---|
| ![Skill Gap Analyzer](screenshots/skill-gap-analyzer.png) | ![Interview Preparation](screenshots/interview-prep.png) |

## Product Workflow

```
Bring your profile  →  Bring a target job  →  See the gap  →  Close it
   (résumé text)         (job description)    (match + gaps)   (interview prep,
                                                                  cover letter,
                                                                  tracker)
```

The Résumé Analyzer and Job Description Analyzer both write into one shared `state` object. Every other panel (Dashboard, Match, Gaps, Insights, Projects, Cover Letter, Assistant) reads from that same state, so re-analyzing either side immediately updates everything downstream — there's no separate "sync" step.

## Tech Stack

- **HTML5 / CSS3** — hand-written, no CSS framework
- **Vanilla JavaScript** — no build step, no framework
- **[Chart.js](https://www.chartjs.org/)** (via CDN) — radar, bar, and doughnut charts
- **`localStorage`** — application tracker persistence only; no data leaves the browser

No npm install, no bundler, no backend. Open `index.html` and it runs.

## Architecture

```
careerpilot-ai/
├── index.html          Landing page + full app shell (all 12 panels)
├── assets/
│   └── app.js           Profile data, demo analysis engines, all UI logic
├── README.md
├── LICENSE
└── screenshots/
    └── README.md        Where to add screenshots for your own portfolio listing
```

`index.html` contains the landing page markup and every panel's markup (hidden/shown via a `.active` class), so the whole app is one page load with client-side "routing" between sections. `assets/app.js` is organized into numbered sections (visible in the file's comments): profile data → skill library → analysis engines → per-panel render functions → init.

## AI Integration Approach

**This prototype runs entirely in Demo Mode.** Every score, match, question, and generated draft you see is produced by transparent, deterministic JavaScript in `assets/app.js` — keyword matching against a shared skill library, simple weighted scoring formulas, and template-based text generation. Nothing in this build calls an external AI API, and the app never claims otherwise; every AI-adjacent panel is explicitly labeled **"Demo mode"** in its header.

### Demo Mode (current)
- `analyzeResumeText()` / `analyzeJDText()` — regex + keyword-library matching
- `computeMatch()` — weighted scoring across five categories
- `buildSkillGaps()` — priority ranking + a small hand-written knowledge base (`SKILL_GAP_INFO`)
- `evaluateAnswer()` — heuristic scoring of mock-interview answers (sentence count, keyword overlap, hedge-word detection, structure-marker detection)
- `chatReply()` — pattern-matched responses that pull live numbers from the current analysis

### AI API Mode (future)
The code is structured so each of the functions above can be swapped for a real model call **behind a backend**, without touching the UI layer:

1. Stand up a minimal backend (e.g. a serverless function) that holds the API key server-side.
2. Replace the body of `analyzeResumeText`, `analyzeJDText`, `evaluateAnswer`, and `chatReply` with a `fetch()` to that backend instead of local logic — the function *signatures* (what goes in, what comes out) are already what a real model call would need.
3. Never call an LLM provider directly from the browser — that would expose the API key. This is why there is no API key anywhere in this codebase, hardcoded or otherwise.

This is intentionally left as future work rather than faked — see **Limitations** below.

## How to Run

No installation required.

```bash
git clone https://github.com/<your-username>/careerpilot-ai.git
cd careerpilot-ai
# open index.html directly in a browser, or serve it locally:
python3 -m http.server 8080
# then visit http://localhost:8080
```

## How to Deploy with GitHub Pages

1. Create a new repository on GitHub and push this project to it.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two — that URL is your live demo link.

## Privacy Considerations

- The app runs entirely client-side; nothing you type is sent to a server.
- The Application Tracker uses `localStorage`, scoped to your browser only.
- The bundled "real profile information" (name, internships, projects, certifications) comes directly from a résumé and excludes phone number, email, and home address from the public-facing demo — see `PROFILE` and `REAL_RESUME_TEXT` in `assets/app.js`.
- The bundled job posting is clearly marked **DEMO JOB DATA** and is not a real employer listing.

## Limitations

- All "AI" behavior is local pattern matching and scoring — not a live language model. This is disclosed throughout the UI, not hidden.
- Skill detection is keyword-based, so a skill described in unusual phrasing may be missed; the tool is a starting point, not a certified assessment.
- The mock-interview evaluation is a heuristic (sentence count, keyword overlap, hedge-word and structure-marker detection) and should be read as directional feedback, not a graded score.
- The Application Tracker's data lives only in the current browser — it isn't synced across devices.

## Future Improvements

- Real LLM integration behind a backend, as described in **AI Integration Approach**.
- File upload (PDF/DOCX) parsing for the Résumé Analyzer, instead of paste-only input.
- Multi-résumé and multi-job comparison (currently one of each at a time).
- Exportable PDF version of the Dashboard and Cover Letter.
- Account-based sync for the Application Tracker.

---

## Portfolio Case Study

**Problem → User Need → Product Idea → UX Decisions → Technical Architecture → AI Workflow → Implementation → Demo → Limitations → Future Improvements**

### Why I Built This

Across three internships, the work that kept landing on my desk was the problem nobody had templated yet — a reporting process nobody owned, a research brief with no defined scope, ML experiments quietly drifting off-brief. CareerPilot AI is the same instinct applied to my own job search: instead of guessing whether my profile fits a role, build the tool that tells me exactly where it does and doesn't.

### Key Product Decisions

- **One shared state, not twelve separate tools.** The Résumé Analyzer and Job Description Analyzer both write into the same `state` object that every other panel reads from. This was a deliberate architecture choice so the Dashboard, Match, Gaps, Insights, and Cover Letter panels never go stale relative to each other.
- **Never claim real AI when it isn't.** Every demo-mode panel says so in its header, and the landing page has a dedicated section explaining the current architecture honestly rather than implying a live model is running.
- **Keyword library over free-text NLP.** For a browser-only, no-backend prototype, a shared, typed skill library (`SKILL_LIBRARY`) gives predictable, explainable results — every match or gap can be traced back to a specific keyword check, which matters more for a portfolio piece than approximate fuzzy matching would.
- **Priority ranking, not just a flat gap list.** The Skill Gap Analyzer ranks by the order skills appear as JD requirements, so the top of the list is always the highest-leverage next step, not an alphabetical dump.

### Challenges

- Keeping the "demo vs. real" distinction visible everywhere it mattered (résumé data vs. job data, computed scores vs. a real AI judgment) without cluttering the UI — solved with a consistent `tag-demo` / `tag-real` label pattern and inline data banners.
- Making the mock-interview evaluation feel like real feedback while being honest that it's heuristic scoring, not a graded judgment — solved by showing the four sub-scores with a one-line disclaimer directly beneath them, every time.

### What I Learned

Building the matching and scoring logic transparently — rather than hiding it behind an opaque "AI score" — forced clearer product thinking about what a résumé-to-job match actually consists of (technical fit, experience, soft skills, keyword overlap, education) instead of collapsing it into one unexplained number.

### Future Roadmap

See **Future Improvements** above.

### Author

**Dhilip Kumar A S** — B.Tech, Computer Science & Business Systems, Vel Tech Multi Tech Engineering College. Background in project management, research, and business analysis internships (Zoho Corporation, Research Nester, Eagle Tech IT Solutions).
