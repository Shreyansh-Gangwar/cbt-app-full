# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

JEE CBT Platform — a Computer Based Test (CBT) web app for JEE exam preparation. Built with Next.js 14 as a **fully static, single-page application**. All state is client-side (no backend, no API routes).

## Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server
npm run build        # production static build (outputs to /out)
```

No lint or test configuration exists in this project.

## Architecture

**Single-file app** — the entire CBT logic lives in `src/app/page.js` as one `'use client'` component (~600+ lines). There are no separate component files or pages.

### File structure

| File | Purpose |
|---|---|
| `src/app/page.js` | Entire app: home screen, test UI, timer, question palette, results. All state managed via React hooks (`useState`, `useRef`). |
| `src/app/layout.js` | Root layout with dark/light theme toggle. |
| `src/app/globals.css` | Minimal — just `box-sizing: border-box`. All actual styles are injected via a `const globalCSS` template literal inside `page.js`. |
| `src/data/questions.js` | All test/question data. Exported: `tests` array, `getTestsBySubject()` helper. |

### Key design decisions

- **Static export** (`output: 'export'` in `next.config.js`) — no SSR, no server-side features. Deployable as static files on Vercel/GitHub Pages.
- **No external UI libraries** — all styling is inline CSS-in-JS via a single injected `<style>` block. No Tailwind, no component library.
- **Client-only state** — test answers, timer, palette states all live in React state. No database.
- **Results persisted to `localStorage`** — last attempt scores are shown on test cards and loaded via `saveResult`/`loadResult` helpers in `page.js`.
- **Question palette** uses 5 color states: Not Visited (grey), Not Answered (red), Answered (green), Marked for Review (purple), Marked & Answered (purple+green border).
- **Timer** pulses red in the last 5 minutes.

### Adding a new test

Add a new object to the `tests` array in `src/data/questions.js`. See `README.md` for the exact schema.
