# CLAUDE.md — JEE CBT Platform

> This file is the authoritative guide for Claude Code when working on this codebase. Read it fully before making any changes.

---

## Project Identity

**JEE CBT Platform** — A fully client-side, static-export Next.js app that simulates the JEE Main Computer Based Test (CBT) environment and provides a flexible practice mode for chapter-wise problem solving.

**Target users:** JEE aspirants (Lakshya JEE 2026 cohort)  
**Deployment:** Vercel static export (`next export`)  
**No backend. No database. No auth.**

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | JavaScript (no TypeScript) |
| Styling | Inline styles + CSS-in-JS (no Tailwind, no CSS modules) |
| State | React `useState` / `useRef` / `useCallback` / `useEffect` |
| Persistence | `localStorage` only |
| Fonts | Google Fonts via `@import` in `globalCSS` string |
| Build output | Static export (`output: 'export'` in `next.config.js`) |

---

## Project Structure

```
src/
  app/
    page.js          ← ENTIRE app lives here (single-file client component)
    layout.js        ← Minimal root layout, no providers
    globals.css      ← Near-empty, real styles are in globalCSS inside page.js
  data/
    questions.js     ← All test/question data. The ONLY data layer.
next.config.js       ← Static export config, do not change output mode
package.json
CLAUDE.md            ← (this file)
```

**Critical:** The app is intentionally a single large file (`page.js`). Do not refactor into multiple files unless explicitly asked. Adding new components means adding them inside `page.js`.

---

## Two Modes — Understand Before Touching Anything

### Exam Mode (`mode: "exam"`)

Simulates the real JEE CBT environment:
- Fullscreen enforcement
- Countdown timer (configurable, auto-submits at 0)
- Red pulsing timer warning in last 5 minutes
- 5-state question palette (Not Visited / Not Answered / Answered / Marked / Marked+Answered)
- Marking scheme: **+4 correct, −1 wrong, 0 skipped** (integer type: no negative marking)
- Confirmation dialog before submit
- Results screen with per-question answer comparison + optional solution reveal

### Practice Mode (`mode: "practice"`)

For learning, not testing:
- No timer, no fullscreen
- Free navigation, no penalties
- Questions rendered as **images** (`/q/q1.jpg`, etc.)
- After attempting: show correct answer + solution image (`/a/a1.jpg`, etc.) inline
- Progress tracking (% attempted), no scoring
- localStorage session resume

**The two modes are architecturally distinct. Do not mix their logic.**

---

## Data Layer — `src/data/questions.js`

This is the only place test content lives. Every test is an object in the `tests` array.

### Test object shape

```js
{
  id: "pt01",                    // unique string, used for localStorage key
  name: "Practice Test 01",      // display name
  subject: "Physics",            // used for HomeScreen grouping
  subjects: ["Physics", "Chemistry", "Mathematics"],
  chapter: "Electric Charges & Fields | Solutions | Determinants",
  duration: 10800,               // seconds (180 min default)
  date: "11/05/2025",
  maxMarks: 300,
  totalQuestions: 75,
  mode: "exam",                  // "exam" | "practice"
  questions: [ /* see below */ ]
}
```

### Question object shape — Exam mode

```js
{
  id: 1,                         // sequential number, used as display label
  section: "Physics",            // "Physics" | "Chemistry" | "Mathematics"
  type: "mcq",                   // "mcq" | "integer"
  questionText: "...",           // plain text or unicode math; rendered by QText component
  options: ["A", "B", "C", "D"],// MCQ only; omit for integer type
  correctAnswer: 2,              // MCQ: option number 1–4; integer: numeric value
  solution: "Step-by-step...",   // plain text solution
}
```

### Question object shape — Practice mode

```js
{
  id: 1,
  section: "Physics",
  type: "mcq",                   // or "integer"
  q: "/q/q1.jpg",               // question image path (public folder)
  options: ["A", "B", "C", "D"],// MCQ only; for image-rendered options, may be empty
  correctAnswer: 2,              // same as exam mode
  solution: ["/a/a1.jpg", "/a/a2.jpg"], // array of solution image paths
}
```

### Rules for adding questions

- Physics: Q1–Q20 MCQ, Q21–Q25 integer
- Chemistry: Q26–Q45 MCQ, Q46–Q50 integer  
- Mathematics: Q51–Q70 MCQ, Q71–Q75 integer
- Integer type questions have **no negative marking** — handle this in the evaluation engine
- `correctAnswer` for MCQ is **1-indexed** (1, 2, 3, or 4), not 0-indexed

### localStorage key pattern

```
jee_result_${test.id}     ← stores the result object after submission
```

---

## Component Map (all in `page.js`)

| Component | Purpose |
|---|---|
| `App` | Root — manages `screen` state machine |
| `HomeScreen` | Test selection grid, grouped by subject |
| `TestCard` | Individual test card with last-attempt score |
| `InstructionsScreen` | Pre-test instructions + timer configuration |
| `TestScreen` | The actual CBT UI (timer, palette, question, actions) |
| `ResultsScreen` | Post-test score breakdown + per-question analysis |
| `QText` | Renders plain text questions preserving math symbols and newlines |

### Screen state machine

```
home → instructions → test → results
         ↑                       |
         └───────────────────────┘ (retry)
```

---

## Styling System

All styles are **inline JavaScript objects**. No external CSS files used for component styles.

### CSS variables (defined in `globalCSS` string, injected via `<style>`)

```
Dark mode (default):         Light mode (.light class on <html>):
--bg        #0f1117          --bg        #f8fafc
--bg2       #161b27          --bg2       #f1f5f9
--bg3       #1e2535          --bg3       #e2e8f0
--bg4       #252d40          --bg4       #cbd5e1
--border    #2a3350          --border    #e2e8f0
--border2   #3a4560          --border2   #cbd5e1
--text      #e2e8f0          --text      #0f172a
--text2     #94a3b8          --text2     #475569
--text3     #64748b          --text3     #94a3b8

--accent    #3b82f6          (blue)
--accent2   #60a5fa
--green     #22c55e
--red       #ef4444
--purple    #a855f7
--orange    #f59e0b
--grey      #475569

--phys      #06b6d4          (cyan  — Physics)
--chem      #10b981          (green — Chemistry)
--math      #f59e0b          (amber — Mathematics)
```

**Always use CSS variables, never hardcode hex colors in new code.**

### Dark/light toggle

Toggle adds/removes `.light` class on `document.documentElement`. Managed by `dark` state in `App`, passed down as prop.

---

## Question Palette — State Constants

```js
const S = {
  NOT_VISITED:      0,   // grey bubble
  NOT_ANSWERED:     1,   // red bubble
  ANSWERED:         2,   // green bubble
  MARKED:           3,   // purple bubble
  MARKED_ANSWERED:  4,   // purple bubble + green border
}
```

The `bubbleStyle(state, selected)` function handles all visual states. Do not duplicate this logic.

---

## Evaluation Engine

Located inside `handleFinalSubmit` in `TestScreen`:

```
MCQ correct     → score += 4
MCQ wrong       → score -= 1
Integer correct → score += 4
Integer wrong   → score -= 1
Skipped         → score += 0
```

The result object stored in localStorage:
```js
{
  score, correct, wrong, skipped,
  details: [{ qid, ans, correct, result }],
  answers: [...],
  date: ISO string
}
```

---

## Practice Mode — Media Conventions

When building practice mode features:

- Question images live in `public/q/` → served as `/q/q{id}.jpg`
- Solution images live in `public/a/` → served as `/a/a{id}.jpg`
- Multiple solution images per question are supported (array)
- Images must be responsive: `max-width: 100%`, `height: auto`
- Click-to-zoom should be handled with a lightbox pattern (simple state toggle, no library)

---

## Common Patterns

### Adding a new screen

1. Create a new component function in `page.js`
2. Add a new state value to the `screen` state in `App`
3. Add a conditional render block at the bottom of `App`'s return
4. Pass `dark` and `setDark` as props (every screen needs the toggle)

### Adding a new test

Only `src/data/questions.js` needs to change. Drop a new object into `tests`. The UI auto-discovers it.

### Adding a new question type

1. Define rendering logic in the question area of `TestScreen`
2. Define evaluation logic in `handleFinalSubmit`
3. Define answer input handling (like `handleIntInput` for integer type)
4. Update the `ResultsScreen` comparison display

---

## Do Not

- **Do not** add any npm dependencies without explicit instruction — the app is intentionally zero-dependency beyond Next.js and React
- **Do not** convert inline styles to Tailwind, CSS modules, or styled-components
- **Do not** split `page.js` into multiple files unless explicitly asked
- **Do not** add a backend, API routes, or database
- **Do not** use `next/image` — images are unoptimized (`images: { unoptimized: true }`)
- **Do not** change `output: 'export'` in `next.config.js`
- **Do not** use 0-indexed values for `correctAnswer` in exam mode MCQ questions (it is 1-indexed)
- **Do not** hardcode colors — use CSS variables

---

## Frequent Tasks & Where to Look

| Task | Where |
|---|---|
| Add a new test | `src/data/questions.js` → `tests` array |
| Change marking scheme | `handleFinalSubmit` in `TestScreen` |
| Change timer behavior | `useEffect` with `timerRef` in `TestScreen` |
| Change palette colors/states | `bubbleStyle()` and `S` constants |
| Add a new screen | New component + `screen` state in `App` |
| Change subject grouping | `getTestsBySubject` in `questions.js` |
| Change fonts | `@import` at top of `globalCSS` string |
| Change dark mode colors | `:root` and `.light` blocks in `globalCSS` |
| Add practice mode question | Add `q` and `solution` image paths to question object |

---

## Build & Dev Commands

```bash
npm run dev       # local dev server
npm run build     # static export to /out (runs next build)
```

Deployment: push to GitHub, connect to Vercel. Zero config needed — `output: 'export'` handles everything.

---

## Known Architecture Decisions (and Why)

| Decision | Reason |
|---|---|
| Single `page.js` file | Fast iteration, no import overhead, everything visible at once |
| Inline styles throughout | Avoids build-time CSS tooling, works with static export cleanly |
| No math rendering library (KaTeX etc.) | Questions use unicode/ASCII math; avoids bundle size cost |
| localStorage only | No backend required; works offline; easy to reset |
| `correctAnswer` is 1-indexed | Matches human-readable option labeling (A=1, B=2, C=3, D=4) |
| Integer questions skip negative marking | Matches official JEE Main rules exactly |