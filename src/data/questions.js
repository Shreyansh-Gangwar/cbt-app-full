// ─────────────────────────────────────────────────────────────
//  JEE CBT — Question Bank
//
//  EXAM MODE TEST  (mode: "exam")
//  ─────────────────────────────
//  Each question needs:
//    id            – unique number
//    section       – "Physics" | "Chemistry" | "Mathematics"
//    type          – "mcq" | "integer"
//    questionImage – path to image in /public/q/  e.g. "/q/q1.jpg"
//                   (if omitted, auto-falls-back to /q/q{id}.jpg)
//    correctAnswer – option number 1-4 for MCQ; integer value for integer type
//    solution      – (optional) kept for reference; NOT shown in exam results
//
//  PRACTICE MODE TEST  (mode: "practice")
//  ──────────────────────────────────────
//  Same as above PLUS:
//    solutionImage – path to solution image e.g. "/a/a1.jpg"
//                   (if omitted, auto-falls-back to /a/a{id}.jpg)
//
//  OPTIONS are NOT needed — the UI shows A / B / C / D buttons only.
//  The full question (text + options) lives inside the question image.
// ─────────────────────────────────────────────────────────────

export const tests = [
  // ───────────────────────────────────────────────────────────
  //  EXAM MODE TEST
  // ───────────────────────────────────────────────────────────
  {
    id: "pt01",
    name: "Practice Test 01",
    mode: "exam",                  // "exam" → timer + full CBT mode
    subject: "Part Test",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    chapter: "Electric Charges & Fields | Solutions | Determinants",
    duration: 10800,               // seconds (180 min)
    date: "11/05/2025",
    maxMarks: 300,
    totalQuestions: 75,
    questions: [
      // ── PHYSICS (Q1–Q25) ────────────────────────────────────
      {
        id: 1, section: "Physics", type: "mcq",
        // Image at /public/q/q1.jpg  (the full question with all 4 options printed inside)
        questionImage: "/q/q1.jpg",
        correctAnswer: 2,          // option B is correct
      },
      {
        id: 2, section: "Physics", type: "mcq",
        questionImage: "/q/q2.jpg",
        correctAnswer: 4,
      },
      {
        id: 3, section: "Physics", type: "mcq",
        questionImage: "/q/q3.jpg",
        correctAnswer: 2,
      },
      {
        id: 4, section: "Physics", type: "mcq",
        questionImage: "/q/q4.jpg",
        correctAnswer: 1,
      },
      {
        id: 5, section: "Physics", type: "mcq",
        questionImage: "/q/q5.jpg",
        correctAnswer: 3,
      },
      {
        id: 6, section: "Physics", type: "mcq",
        questionImage: "/q/q6.jpg",
        correctAnswer: 2,
      },
      {
        id: 7, section: "Physics", type: "mcq",
        questionImage: "/q/q7.jpg",
        correctAnswer: 2,
      },
      {
        id: 8, section: "Physics", type: "mcq",
        questionImage: "/q/q8.jpg",
        correctAnswer: 1,
      },
      {
        id: 9, section: "Physics", type: "mcq",
        questionImage: "/q/q9.jpg",
        correctAnswer: 3,
      },
      {
        id: 10, section: "Physics", type: "mcq",
        questionImage: "/q/q10.jpg",
        correctAnswer: 3,
      },
      {
        id: 11, section: "Physics", type: "mcq",
        questionImage: "/q/q11.jpg",
        correctAnswer: 1,
      },
      {
        id: 12, section: "Physics", type: "mcq",
        questionImage: "/q/q12.jpg",
        correctAnswer: 4,
      },
      {
        id: 13, section: "Physics", type: "mcq",
        questionImage: "/q/q13.jpg",
        correctAnswer: 4,
      },
      {
        id: 14, section: "Physics", type: "mcq",
        questionImage: "/q/q14.jpg",
        correctAnswer: 2,
      },
      {
        id: 15, section: "Physics", type: "mcq",
        questionImage: "/q/q15.jpg",
        correctAnswer: 2,
      },
      {
        id: 16, section: "Physics", type: "mcq",
        questionImage: "/q/q16.jpg",
        correctAnswer: 4,
      },
      {
        id: 17, section: "Physics", type: "mcq",
        questionImage: "/q/q17.jpg",
        correctAnswer: 2,
      },
      {
        id: 18, section: "Physics", type: "mcq",
        questionImage: "/q/q18.jpg",
        correctAnswer: 3,
      },
      {
        id: 19, section: "Physics", type: "mcq",
        questionImage: "/q/q19.jpg",
        correctAnswer: 2,
      },
      {
        id: 20, section: "Physics", type: "mcq",
        questionImage: "/q/q20.jpg",
        correctAnswer: 1,
      },
      // Integer type — Physics
      {
        id: 21, section: "Physics", type: "integer",
        questionImage: "/q/q21.jpg",
        correctAnswer: 180,
      },
      {
        id: 22, section: "Physics", type: "integer",
        questionImage: "/q/q22.jpg",
        correctAnswer: 150,
      },
      {
        id: 23, section: "Physics", type: "integer",
        questionImage: "/q/q23.jpg",
        correctAnswer: 40,
      },
      {
        id: 24, section: "Physics", type: "integer",
        questionImage: "/q/q24.jpg",
        correctAnswer: 1,
      },
      {
        id: 25, section: "Physics", type: "integer",
        questionImage: "/q/q25.jpg",
        correctAnswer: 17,
      },

      // ── CHEMISTRY (Q26–Q50) ─────────────────────────────────
      {
        id: 26, section: "Chemistry", type: "mcq",
        questionImage: "/q/q26.jpg",
        correctAnswer: 1,
      },
      {
        id: 27, section: "Chemistry", type: "mcq",
        questionImage: "/q/q27.jpg",
        correctAnswer: 1,
      },
      {
        id: 28, section: "Chemistry", type: "mcq",
        questionImage: "/q/q28.jpg",
        correctAnswer: 3,
      },
      {
        id: 29, section: "Chemistry", type: "mcq",
        questionImage: "/q/q29.jpg",
        correctAnswer: 4,
      },
      {
        id: 30, section: "Chemistry", type: "mcq",
        questionImage: "/q/q30.jpg",
        correctAnswer: 2,
      },
      {
        id: 31, section: "Chemistry", type: "mcq",
        questionImage: "/q/q31.jpg",
        correctAnswer: 2,
      },
      {
        id: 32, section: "Chemistry", type: "mcq",
        questionImage: "/q/q32.jpg",
        correctAnswer: 3,
      },
      {
        id: 33, section: "Chemistry", type: "mcq",
        questionImage: "/q/q33.jpg",
        correctAnswer: 1,
      },
      {
        id: 34, section: "Chemistry", type: "mcq",
        questionImage: "/q/q34.jpg",
        correctAnswer: 1,
      },
      {
        id: 35, section: "Chemistry", type: "mcq",
        questionImage: "/q/q35.jpg",
        correctAnswer: 2,
      },
      {
        id: 36, section: "Chemistry", type: "mcq",
        questionImage: "/q/q36.jpg",
        correctAnswer: 3,
      },
      {
        id: 37, section: "Chemistry", type: "mcq",
        questionImage: "/q/q37.jpg",
        correctAnswer: 1,
      },
      {
        id: 38, section: "Chemistry", type: "mcq",
        questionImage: "/q/q38.jpg",
        correctAnswer: 4,
      },
      {
        id: 39, section: "Chemistry", type: "mcq",
        questionImage: "/q/q39.jpg",
        correctAnswer: 2,
      },
      {
        id: 40, section: "Chemistry", type: "mcq",
        questionImage: "/q/q40.jpg",
        correctAnswer: 3,
      },
      {
        id: 41, section: "Chemistry", type: "mcq",
        questionImage: "/q/q41.jpg",
        correctAnswer: 4,
      },
      {
        id: 42, section: "Chemistry", type: "mcq",
        questionImage: "/q/q42.jpg",
        correctAnswer: 2,
      },
      {
        id: 43, section: "Chemistry", type: "mcq",
        questionImage: "/q/q43.jpg",
        correctAnswer: 3,
      },
      {
        id: 44, section: "Chemistry", type: "mcq",
        questionImage: "/q/q44.jpg",
        correctAnswer: 2,
      },
      {
        id: 45, section: "Chemistry", type: "mcq",
        questionImage: "/q/q45.jpg",
        correctAnswer: 3,
      },
      // Integer type — Chemistry
      {
        id: 46, section: "Chemistry", type: "integer",
        questionImage: "/q/q46.jpg",
        correctAnswer: 3,
      },
      {
        id: 47, section: "Chemistry", type: "integer",
        questionImage: "/q/q47.jpg",
        correctAnswer: 253,
      },
      {
        id: 48, section: "Chemistry", type: "integer",
        questionImage: "/q/q48.jpg",
        correctAnswer: 73,
      },
      {
        id: 49, section: "Chemistry", type: "integer",
        questionImage: "/q/q49.jpg",
        correctAnswer: 13,
      },
      {
        id: 50, section: "Chemistry", type: "integer",
        questionImage: "/q/q50.jpg",
        correctAnswer: 4,
      },

      // ── MATHEMATICS (Q51–Q75) ───────────────────────────────
      {
        id: 51, section: "Mathematics", type: "mcq",
        questionImage: "/q/q51.jpg",
        correctAnswer: 2,
      },
      {
        id: 52, section: "Mathematics", type: "mcq",
        questionImage: "/q/q52.jpg",
        correctAnswer: 1,
      },
      {
        id: 53, section: "Mathematics", type: "mcq",
        questionImage: "/q/q53.jpg",
        correctAnswer: 3,
      },
      {
        id: 54, section: "Mathematics", type: "mcq",
        questionImage: "/q/q54.jpg",
        correctAnswer: 3,
      },
      {
        id: 55, section: "Mathematics", type: "mcq",
        questionImage: "/q/q55.jpg",
        correctAnswer: 1,
      },
      {
        id: 56, section: "Mathematics", type: "mcq",
        questionImage: "/q/q56.jpg",
        correctAnswer: 3,
      },
      {
        id: 57, section: "Mathematics", type: "mcq",
        questionImage: "/q/q57.jpg",
        correctAnswer: 4,
      },
      {
        id: 58, section: "Mathematics", type: "mcq",
        questionImage: "/q/q58.jpg",
        correctAnswer: 1,
      },
      {
        id: 59, section: "Mathematics", type: "mcq",
        questionImage: "/q/q59.jpg",
        correctAnswer: 3,
      },
      {
        id: 60, section: "Mathematics", type: "mcq",
        questionImage: "/q/q60.jpg",
        correctAnswer: 2,
      },
      {
        id: 61, section: "Mathematics", type: "mcq",
        questionImage: "/q/q61.jpg",
        correctAnswer: 1,
      },
      {
        id: 62, section: "Mathematics", type: "mcq",
        questionImage: "/q/q62.jpg",
        correctAnswer: 3,
      },
      {
        id: 63, section: "Mathematics", type: "mcq",
        questionImage: "/q/q63.jpg",
        correctAnswer: 4,
      },
      {
        id: 64, section: "Mathematics", type: "mcq",
        questionImage: "/q/q64.jpg",
        correctAnswer: 1,
      },
      {
        id: 65, section: "Mathematics", type: "mcq",
        questionImage: "/q/q65.jpg",
        correctAnswer: 1,
      },
      {
        id: 66, section: "Mathematics", type: "mcq",
        questionImage: "/q/q66.jpg",
        correctAnswer: 1,
      },
      {
        id: 67, section: "Mathematics", type: "mcq",
        questionImage: "/q/q67.jpg",
        correctAnswer: 4,
      },
      {
        id: 68, section: "Mathematics", type: "mcq",
        questionImage: "/q/q68.jpg",
        correctAnswer: 2,
      },
      {
        id: 69, section: "Mathematics", type: "mcq",
        questionImage: "/q/q69.jpg",
        correctAnswer: 2,
      },
      {
        id: 70, section: "Mathematics", type: "mcq",
        questionImage: "/q/q70.jpg",
        correctAnswer: 3,
      },
      // Integer type — Mathematics
      {
        id: 71, section: "Mathematics", type: "integer",
        questionImage: "/q/q71.jpg",
        correctAnswer: 0,
      },
      {
        id: 72, section: "Mathematics", type: "integer",
        questionImage: "/q/q72.jpg",
        correctAnswer: 7,
      },
      {
        id: 73, section: "Mathematics", type: "integer",
        questionImage: "/q/q73.jpg",
        correctAnswer: 1,
      },
      {
        id: 74, section: "Mathematics", type: "integer",
        questionImage: "/q/q74.jpg",
        correctAnswer: 0,
      },
      {
        id: 75, section: "Mathematics", type: "integer",
        questionImage: "/q/q75.jpg",
        correctAnswer: 1,
      },
    ]
  },

  // ───────────────────────────────────────────────────────────
  //  PRACTICE MODE TEST EXAMPLE
  //  Add mode: "practice" → skips timer & instructions,
  //  goes straight to the practice screen with solution images.
  // ───────────────────────────────────────────────────────────
  // {
  //   id: "pr01",
  //   name: "Practice Set 01",
  //   mode: "practice",            // "practice" → no timer, solution images shown
  //   subject: "Physics",
  //   subjects: ["Physics", "Chemistry", "Mathematics"],
  //   chapter: "Electrostatics | Solutions | Matrices",
  //   duration: 10800,             // ignored in practice mode
  //   date: "11/05/2025",
  //   maxMarks: 300,
  //   totalQuestions: 75,
  //   questions: [
  //     {
  //       id: 1, section: "Physics", type: "mcq",
  //       questionImage: "/q/SBT-Electrostatics/q1.jpeg",   // question image (with options printed inside)
  //       solutionImage: "/a/SBT-Electrostatics/a1.jpeg",   // solution image shown after "Show Answer"
  //       correctAnswer: 2,
  //     },
  //     // ... rest of questions
  //   ]
  // },

  // ───────────────────────────────────────────────────────────
  //  PRACTICE ONLY — Electrostatics Selected Questions
  // ───────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────
  //  PRACTICE TEST: Electrostatics SBT — Selected Questions
  //  Question numbering in comments refers to the ORIGINAL book Q numbers.
  //  id numbers are sequential (1–60).
  //
  //  correctAnswer field: for MCQ, 1-indexed option number.
  //  For questions with multi-part answers (a,b,c…), the answer text
  //  is provided in the `answerText` field for display.
  // ─────────────────────────────────────────────────────────────

  {
    id: "pr_electrostatics",
    name: "Electrostatics SBT",
    mode: "practice",
    subject: "Physics",
    subjects: ["Physics"],
    chapter: "Electrostatics — SBT Selected Questions",
    duration: 0,
    date: "03/04/2026",
    maxMarks: 0,
    totalQuestions: 61,
    questions: [

      // id 1 ← Book Q3
      { id: 1, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q1.png", solutionImage: "/a/SBT-Electrostatics/a1.png", correctAnswer: 1, answerText: "Zero" },

      // id 2 ← Book Q6
      { id: 2, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q2.png", solutionImage: "/a/SBT-Electrostatics/a2.png", correctAnswer: 1, answerText: "$$k = \\frac{q^2}{4\\pi\\varepsilon_0 L^3}\\left(\\frac{2\\sqrt{2}+1}{\\sqrt{2}}\\right)$$" },

      // id 3 ← Book Q8
      { id: 3, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q3.png", solutionImage: "/a/SBT-Electrostatics/a3.png", correctAnswer: 1, answerText: "(i) $T = 2\\pi\\sqrt{\\dfrac{L}{2g}}$ &ensp; (ii) $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$ &ensp; (iii) $T = 2\\pi\\sqrt{\\dfrac{L}{\\sqrt{2}\\,g}}$ &ensp; (iv) $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$" },

      // id 4 ← Book Q15
      { id: 4, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q4.png", solutionImage: "/a/SBT-Electrostatics/a4.png", correctAnswer: 1, answerText: "50 V" },

      // id 5 ← Book Q18
      { id: 5, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q5.png", solutionImage: "/a/SBT-Electrostatics/a5.png", correctAnswer: 1, answerText: "$E_A > E_B$, $\\;V_A > V_B$" },

      // id 6 ← Book Q22
      { id: 6, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q6.png", solutionImage: "/a/SBT-Electrostatics/a6.png", correctAnswer: 1, answerText: "For both (a) and (b): $W = \\dfrac{Qq}{8\\pi\\varepsilon_0 r}$" },

      // id 7 ← Book Q25
      { id: 7, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q7.png", solutionImage: "/a/SBT-Electrostatics/a7.png", correctAnswer: 1, answerText: "(a) $\\theta_0 = 2\\tan^{-1}\\!\\left(\\dfrac{qE}{mg}\\right)$ &ensp; (b) $E = \\dfrac{mg}{q}$" },

      // id 8 ← Book Q26
      { id: 8, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q8.png", solutionImage: "/a/SBT-Electrostatics/a8.png", correctAnswer: 1, answerText: "$$-\\frac{Q^2}{16\\pi\\varepsilon_0 R}$$" },

      // id 9 ← Book Q29
      { id: 9, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q9.png", solutionImage: "/a/SBT-Electrostatics/a9.png", correctAnswer: 1, answerText: "$$E = \\frac{6\\sqrt{3}\\,KP}{L^3},\\quad V = 0$$" },

      // id 10 ← Book Q32
      { id: 10, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q10.png", solutionImage: "/a/SBT-Electrostatics/a10.png", correctAnswer: 1, answerText: "$$\\left(\\frac{\\sqrt{17}-3}{2}\\right)mg$$" },

      // id 11 ← Book Q33
      { id: 11, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q11.png", solutionImage: "/a/SBT-Electrostatics/a11.png", correctAnswer: 1, answerText: "$$\\frac{32\\pi\\varepsilon_0 L^2 mg}{q}$$" },

      // id 12 ← Book Q35
      { id: 12, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q12.png", solutionImage: "/a/SBT-Electrostatics/a12.png", correctAnswer: 1, answerText: "(a) $Q = +3.14\\,q$ &ensp; (b) $Q = -0.22\\,q$" },

      // id 13 ← Book Q38
      { id: 13, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q13.png", solutionImage: "/a/SBT-Electrostatics/a13.png", correctAnswer: 1, answerText: "$$\\frac{8KQq}{r^2}$$" },

      // id 14 ← Book Q54
      { id: 14, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q14.png", solutionImage: "/a/SBT-Electrostatics/a14.png", correctAnswer: 1, answerText: "(a) $T = 2\\pi\\sqrt{\\dfrac{L}{g - \\dfrac{q\\sigma}{2m\\varepsilon_0}}}$ &ensp;&ensp; (b) $T = 2\\pi\\sqrt{\\dfrac{L}{\\sqrt{g^2 + \\left(\\dfrac{qE}{m}\\right)^2 - 2g\\dfrac{qE}{m}\\cos\\beta}}}$" },

      // id 15 ← Book Q55
      { id: 15, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q15.png", solutionImage: "/a/SBT-Electrostatics/a15.png", correctAnswer: 1, answerText: "(a) $\\theta = \\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)$ &ensp; (b) Yes" },

      // id 16 ← Book Q60
      { id: 16, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q16.png", solutionImage: "/a/SBT-Electrostatics/a16.png", correctAnswer: 1, answerText: "$2 : 1$" },

      // id 17 ← Book Q61
      { id: 17, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q17.png", solutionImage: "/a/SBT-Electrostatics/a17.png", correctAnswer: 1, answerText: "(a) $q_0 = 4\\pi\\varepsilon_0 a$ &ensp; (b) $q = -4\\pi\\varepsilon_0 a$" },

      // id 18 ← Book Q64
      { id: 18, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q18.png", solutionImage: "/a/SBT-Electrostatics/a18.png", correctAnswer: 1, answerText: "$\\sigma\\phi$" },

      // id 19 ← Book Q65
      { id: 19, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q19.png", solutionImage: "/a/SBT-Electrostatics/a19.png", correctAnswer: 1, answerText: "(a) $\\dfrac{\\sqrt{5}}{6}\\,\\dfrac{\\rho R}{\\varepsilon_0}$ &ensp; (b) $\\dfrac{\\sqrt{41}}{24}\\,\\dfrac{\\rho R}{\\varepsilon_0}$" },

      // id 20 ← Book Q68
      { id: 20, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q20.png", solutionImage: "/a/SBT-Electrostatics/a20.png", correctAnswer: 1, answerText: "(a) $t_0$ &ensp; (b) $\\sqrt{6mK_0}$" },

      // id 21 ← Book Q69
      { id: 21, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q21.png", solutionImage: "/a/SBT-Electrostatics/a21.png", correctAnswer: 1, answerText: "$$\\sqrt{\\frac{2qa}{3mV_0^2}\\left(y^3 - y_0^2\\right)}$$" },

      // id 22 ← Book Q73
      { id: 22, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q22.png", solutionImage: "/a/SBT-Electrostatics/a22.png", correctAnswer: 1, answerText: "(a) 5 V &ensp; (b) $\\sqrt{\\dfrac{2}{3}}$ m" },

      // id 23 ← Book Q74
      { id: 23, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q23.png", solutionImage: "/a/SBT-Electrostatics/a23.png", correctAnswer: 1, answerText: "$E = 15$ V/cm; $\\;\\cos^{-1}\\!\\left(\\dfrac{2}{3}\\right)$" },

      // id 24 ← Book Q77
      { id: 24, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q24.png", solutionImage: "/a/SBT-Electrostatics/a24.png", correctAnswer: 1, answerText: "$$\\frac{mR^2\\omega^2}{2e}$$" },

      // id 25 ← Book Q78
      { id: 25, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q25.png", solutionImage: "/a/SBT-Electrostatics/a25.png", correctAnswer: 1, answerText: "$2 : 1$" },

      // id 26 ← Book Q88
      { id: 26, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q26.png", solutionImage: "/a/SBT-Electrostatics/a26.png", correctAnswer: 1, answerText: "$$E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{b^2},\\quad V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{b}$$" },

      // id 27 ← Book Q91
      { id: 27, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q27.png", solutionImage: "/a/SBT-Electrostatics/a27.png", correctAnswer: 1, answerText: "(a) $r = \\dfrac{16\\sqrt{2}\\,\\pi\\varepsilon_0 R^2 mu^2}{Qq}$ &ensp; (b) $V = \\sqrt{u^2 + \\dfrac{Qq}{4\\pi\\varepsilon_0 mR}}$" },

      // id 28 ← Book Q95
      { id: 28, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q28.png", solutionImage: "/a/SBT-Electrostatics/a28.png", correctAnswer: 1, answerText: "(a) $\\sqrt{4gL}$ &ensp; (b) $\\sqrt{4.5\\,gL}$" },

      // id 29 ← Book Q96
      { id: 29, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q29.png", solutionImage: "/a/SBT-Electrostatics/a29.png", correctAnswer: 1, answerText: "(a) $72\\,g$ &ensp; (b) $4.32$ N &ensp; (c) Unstable" },

      // id 30 ← Book Q97
      { id: 30, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q30.png", solutionImage: "/a/SBT-Electrostatics/a30.png", correctAnswer: 1, answerText: "$$W_{ext} = -3\\,mgL$$" },

      // id 31 ← Book Q100
      { id: 31, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q31.png", solutionImage: "/a/SBT-Electrostatics/a31.png", correctAnswer: 1, answerText: "(a) $\\theta = \\tan^{-1}\\!\\left(\\dfrac{1}{2}\\right)$ &ensp; (b) $6\\,mgh$" },

      // id 32 ← Book Q101
      { id: 32, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q32.png", solutionImage: "/a/SBT-Electrostatics/a32.png", correctAnswer: 1, answerText: "(a) $\\dfrac{KQe}{2R}$ &ensp; (b) $\\dfrac{3}{2}\\,\\dfrac{KQe}{R}$" },

      // id 33 ← Book Q103
      { id: 33, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q33.png", solutionImage: "/a/SBT-Electrostatics/a33.png", correctAnswer: 1, answerText: "$$\\frac{U_0}{3}$$" },

      // id 34 ← Book Q105
      { id: 34, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q34.png", solutionImage: "/a/SBT-Electrostatics/a34.png", correctAnswer: 1, answerText: "$$\\frac{10}{3}\\pi\\varepsilon_0 R V^2$$" },

      // id 35 ← Book Q108
      { id: 35, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q35.png", solutionImage: "/a/SBT-Electrostatics/a35.png", correctAnswer: 1, answerText: "$$V = \\frac{qr}{\\pi^2\\varepsilon_0 R^2}$$" },

      // id 36 ← Book Q109
      { id: 36, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q36.png", solutionImage: "/a/SBT-Electrostatics/a36.png", correctAnswer: 1, answerText: "(a) $\\left(\\dfrac{2}{3}\\right)^{1/3} a$ &ensp; (b) $\\left(\\dfrac{1}{9}\\right)^{1/3} a$" },

      // id 37 ← Book Q112
      { id: 37, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q37.png", solutionImage: "/a/SBT-Electrostatics/a37.png", correctAnswer: 1, answerText: "(a) $\\left|\\dfrac{q_1}{q_2}\\right| = \\dfrac{2}{1}$ &ensp; (b) $\\alpha_{\\max} = 90°$" },

      // id 38 ← Book Q116
      { id: 38, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q38.png", solutionImage: "/a/SBT-Electrostatics/a38.png", correctAnswer: 1, answerText: "$$\\frac{1}{4\\pi\\varepsilon_0}\\,\\frac{\\lambda}{R}\\ln(\\sqrt{2}+1)$$" },

      // id 39 ← Book Q122
      { id: 39, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q39.png", solutionImage: "/a/SBT-Electrostatics/a39.png", correctAnswer: 1, answerText: "(a) $6\\,dx\\,dy\\,dz$ &ensp; (b) $8\\pi\\varepsilon_0 r^3$" },

      // id 40 ← Book Q124
      { id: 40, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q40.png", solutionImage: "/a/SBT-Electrostatics/a40.png", correctAnswer: 1, answerText: "(a) $E_x = \\dfrac{K\\lambda R\\pi\\, x}{(R^2+x^2)^{3/2}}$ &ensp; (b) $E_y = 0$ &ensp; (c) $E_z = -\\dfrac{2K\\lambda R^2}{(R^2+x^2)^{3/2}}$" },

      // id 41 ← Book Q128
      { id: 41, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q41.png", solutionImage: "/a/SBT-Electrostatics/a41.png", correctAnswer: 1, answerText: "$$8\\pi r^2\\left[\\varepsilon_0\\left(7P_0 + \\frac{12T}{r}\\right)\\right]^{1/2}$$" },

      // id 42 ← Book Q129
      { id: 42, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q42.png", solutionImage: "/a/SBT-Electrostatics/a42.png", correctAnswer: 1, answerText: "$$\\frac{\\sigma}{\\varepsilon_0}\\text{ in radially inward direction}$$" },

      // id 43 ← Book Q130
      { id: 43, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q43.png", solutionImage: "/a/SBT-Electrostatics/a43.png", correctAnswer: 1, answerText: "$$\\frac{Qq}{4\\pi\\varepsilon_0 R^2}\\left(1 - \\frac{1}{\\sqrt{2}}\\right)$$" },

      // id 44 ← Book Q131
      { id: 44, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q44.png", solutionImage: "/a/SBT-Electrostatics/a44.png", correctAnswer: 1, answerText: "$$\\frac{Qq}{8\\pi\\varepsilon_0 R^2}\\left(1 - \\frac{1}{\\sqrt{2}}\\right)\\text{ in both cases}$$" },

      // id 45 ← Book Q134
      { id: 45, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q45.png", solutionImage: "/a/SBT-Electrostatics/a45.png", correctAnswer: 1, answerText: "(a) $b = \\dfrac{a}{15}$; $n = 2$ &ensp; (b) $\\sqrt{2}\\,mg$" },

      // id 46 ← Book Q138 (not in answer PDF)
      { id: 46, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q46.png", solutionImage: "/a/SBT-Electrostatics/a46.png", correctAnswer: 1, answerText: "See solution image" },

      // id 47 ← Book Q144
      { id: 47, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q47.png", solutionImage: "/a/SBT-Electrostatics/a47.png", correctAnswer: 1, answerText: "(a) Yes, spherical &ensp; (b) $\\dfrac{d}{\\sqrt{3}-1}$" },

      // id 48 ← Book Q145
      { id: 48, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q48.png", solutionImage: "/a/SBT-Electrostatics/a48.png", correctAnswer: 1, answerText: "See diagrams in solution image" },

      // id 49 ← Book Q147
      { id: 49, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q49.png", solutionImage: "/a/SBT-Electrostatics/a49.png", correctAnswer: 1, answerText: "$$\\frac{2Q}{3}$$" },

      // id 50 ← Book Q148
      { id: 50, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q50.png", solutionImage: "/a/SBT-Electrostatics/a50.png", correctAnswer: 1, answerText: "(a) $\\pm 2\\pi\\varepsilon_0 ErL$ &ensp; (b) $k_0 = 2\\pi\\varepsilon_0 rE^2$ &ensp; (c) $\\dfrac{1}{E}\\sqrt{\\dfrac{\\pi m}{\\varepsilon_0 r}}$" },

      // id 51 ← Book Q150
      { id: 51, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q51.png", solutionImage: "/a/SBT-Electrostatics/a51.png", correctAnswer: 1, answerText: "$$V_0 = \\sqrt{\\frac{Kq^2(4R-7r)}{2mrR}}$$" },

      // id 52 ← Book Q151
      { id: 52, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q52.png", solutionImage: "/a/SBT-Electrostatics/a52.png", correctAnswer: 1, answerText: "(a) $\\dfrac{\\sqrt{3}}{4}\\,l$ &ensp; (b) $\\dfrac{q}{4}\\sqrt{\\dfrac{1}{\\pi\\varepsilon_0 ml}}$ &ensp; (c) $\\dfrac{q}{16\\pi\\varepsilon_0 l^2}(5q+4Q)$" },

      // id 53 ← Book Q154
      { id: 53, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q53.png", solutionImage: "/a/SBT-Electrostatics/a53.png", correctAnswer: 1, answerText: "(a) $V = \\sqrt{V_0^2 + \\dfrac{\\lambda Q}{\\pi\\varepsilon_0 m}\\ln I}$ &ensp; (b) $V_r = \\sqrt{V_0^2\\!\\left(1-\\dfrac{1}{I^2}\\right) + \\dfrac{\\lambda Q}{\\pi\\varepsilon_0 m}\\ln I}$" },

      // id 54 ← Book Q155  ← NEW
      { id: 54, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q54.png", solutionImage: "/a/SBT-Electrostatics/a54.png", correctAnswer: 1, answerText: "(a) $E_0 = \\dfrac{Mg}{\\lambda L}$ &ensp; (b) $\\omega = \\sqrt{3(\\sqrt{2}-1)\\,\\dfrac{g}{L}}$" },

      // id 55 ← Book Q156
      { id: 55, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q55.png", solutionImage: "/a/SBT-Electrostatics/a55.png", correctAnswer: 1, answerText: "(a) Not possible &ensp; (b) $E = \\left(\\dfrac{2}{\\sqrt{3}-1}\\right)\\dfrac{Mg}{\\lambda L}$ &ensp; (c) $\\theta_0 = 45°$" },

      // id 56 ← Book Q157
      { id: 56, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q56.png", solutionImage: "/a/SBT-Electrostatics/a56.png", correctAnswer: 1, answerText: "(b) $\\Delta U = \\dfrac{EqL}{2}(1-\\cos\\Delta\\theta)$ &ensp; (c) $T = \\pi\\sqrt{\\dfrac{5mL}{Eq}}$" },

      // id 57 ← Book Q158
      { id: 57, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q57.png", solutionImage: "/a/SBT-Electrostatics/a57.png", correctAnswer: 1, answerText: "(b) $v_0/2$ &ensp; (c) $\\dfrac{3mPv_0^2}{8e}$" },

      // id 58 ← Book Q160
      { id: 58, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q58.png", solutionImage: "/a/SBT-Electrostatics/a58.png", correctAnswer: 1, answerText: "(a) $\\dfrac{3}{5}\\,\\dfrac{Q^2}{4\\pi\\varepsilon_0 R}$ &ensp; (b) $\\dfrac{147}{320}\\,\\dfrac{Q^2}{4\\pi\\varepsilon_0 R}$" },

      // id 59 ← Book Q162
      { id: 59, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q59.png", solutionImage: "/a/SBT-Electrostatics/a59.png", correctAnswer: 1, answerText: "(a) $\\dfrac{3}{2}\\,\\dfrac{KP}{r_0^3}$ &ensp; (b) $\\dfrac{1}{\\sqrt{2}}$" },

      // id 60 ← Book Q165
      { id: 60, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q60.png", solutionImage: "/a/SBT-Electrostatics/a60.png", correctAnswer: 1, answerText: "$$\\frac{\\rho R^3 d}{3\\varepsilon_0 r^3}\\sqrt{3\\cos^2\\theta + 1}$$" },

      // id 61 ← Book Q166
      { id: 61, section: "Physics", type: "mcq", questionImage: "/q/SBT-Electrostatics/q61.png", solutionImage: "/a/SBT-Electrostatics/a61.png", correctAnswer: 1, answerText: "(a) $v = \\sqrt{\\dfrac{-2QKP\\cos\\theta}{mr^2}}$ &ensp; (b) Zero &ensp; (c) Bead oscillates; stops at diametrically opposite point &ensp; (d) Identical motion" },

    ]
  },
  {
    id: "app_electrostatics",
    name: "APP-Electrostatics",
    mode: "practice",
    subject: "Physics",
    subjects: ["Physics"],
    chapter: "Electrostatics — Advanced Practice Problems",
    duration: 0,
    date: "03/04/2026",
    maxMarks: 0,
    totalQuestions: 70,
    questions: [

      // ── 1–15 SINGLE CORRECT ──
      { id: 1, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q1.png", solutionImage: "/a/APP-Electrostatics/a1.png", solution: "Solution", correctAnswer: 3 },
      { id: 2, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q2.png", solutionImage: "/a/APP-Electrostatics/a2.png", solution: "Solution", correctAnswer: 3 },
      { id: 3, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q3.png", solutionImage: "/a/APP-Electrostatics/a3.png", solution: "Solution", correctAnswer: 2 },
      { id: 4, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q4.png", solutionImage: "/a/APP-Electrostatics/a4.png", solution: "Solution", correctAnswer: 3 },
      { id: 5, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q5.png", solutionImage: "/a/APP-Electrostatics/a5.png", solution: "Solution", correctAnswer: 4 },
      { id: 6, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q6.png", solutionImage: "/a/APP-Electrostatics/a6.png", solution: "Solution", correctAnswer: 2 },
      { id: 7, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q7.png", solutionImage: "/a/APP-Electrostatics/a7.png", solution: "Solution", correctAnswer: 2 },
      { id: 8, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q8.png", solutionImage: "/a/APP-Electrostatics/a8.png", solution: "Solution", correctAnswer: 1 },
      { id: 9, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q9.png", solutionImage: "/a/APP-Electrostatics/a9.png", solution: "Solution", correctAnswer: 2 },
      { id: 10, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q10.png", solutionImage: "/a/APP-Electrostatics/a10.png", solution: "Solution", correctAnswer: 4 },
      { id: 11, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q11.png", solutionImage: "/a/APP-Electrostatics/a11.png", solution: "Solution", correctAnswer: 2 },
      { id: 12, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q12.png", solutionImage: "/a/APP-Electrostatics/a12.png", solution: "Solution", correctAnswer: 3 },
      { id: 13, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q13.png", solutionImage: "/a/APP-Electrostatics/a13.png", solution: "Solution", correctAnswer: 1 },
      { id: 14, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q14.png", solutionImage: "/a/APP-Electrostatics/a14.png", solution: "Solution", correctAnswer: 1 },
      { id: 15, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q15.png", solutionImage: "/a/APP-Electrostatics/a15.png", solution: "Solution", correctAnswer: 2 },

      // ── 16–45 MULTI CORRECT ──
      { id: 16, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q16.png", solutionImage: "/a/APP-Electrostatics/a16.png", solution: "Solution", correctAnswer: "AC" },
      { id: 17, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q17.png", solutionImage: "/a/APP-Electrostatics/a17.png", solution: "Solution", correctAnswer: "AD" },
      { id: 18, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q18.png", solutionImage: "/a/APP-Electrostatics/a18.png", solution: "Solution", correctAnswer: "ABD" },
      { id: 19, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q19.png", solutionImage: "/a/APP-Electrostatics/a19.png", solution: "Solution", correctAnswer: "AB" },
      { id: 20, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q20.png", solutionImage: "/a/APP-Electrostatics/a20.png", solution: "Solution", correctAnswer: "AD" },

      { id: 21, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q21.png", solutionImage: "/a/APP-Electrostatics/a21.png", solution: "Solution", correctAnswer: "BCD" },
      { id: 22, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q22.png", solutionImage: "/a/APP-Electrostatics/a22.png", solution: "Solution", correctAnswer: "BCD" },
      { id: 23, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q23.png", solutionImage: "/a/APP-Electrostatics/a23.png", solution: "Solution", correctAnswer: "BC" },
      { id: 24, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q24.png", solutionImage: "/a/APP-Electrostatics/a24.png", solution: "Solution", correctAnswer: "AC" },
      { id: 25, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q25.png", solutionImage: "/a/APP-Electrostatics/a25.png", solution: "Solution", correctAnswer: "AB" },

      { id: 26, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q26.png", solutionImage: "/a/APP-Electrostatics/a26.png", solution: "Solution", correctAnswer: 2 },
      { id: 27, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q27.png", solutionImage: "/a/APP-Electrostatics/a27.png", solution: "Solution", correctAnswer: "ABD" },
      { id: 28, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q28.png", solutionImage: "/a/APP-Electrostatics/a28.png", solution: "Solution", correctAnswer: "ABCD" },
      { id: 29, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q29.png", solutionImage: "/a/APP-Electrostatics/a29.png", solution: "Solution", correctAnswer: "AD" },
      { id: 30, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q30.png", solutionImage: "/a/APP-Electrostatics/a30.png", solution: "Solution", correctAnswer: "ABC" },

      { id: 31, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q31.png", solutionImage: "/a/APP-Electrostatics/a31.png", solution: "Solution", correctAnswer: "ABC" },
      { id: 32, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q32.png", solutionImage: "/a/APP-Electrostatics/a32.png", solution: "Solution", correctAnswer: "ABCD" },
      { id: 33, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q33.png", solutionImage: "/a/APP-Electrostatics/a33.png", solution: "Solution", correctAnswer: 2 },
      { id: 34, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q34.png", solutionImage: "/a/APP-Electrostatics/a34.png", solution: "Solution", correctAnswer: "AD" },
      { id: 35, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q35.png", solutionImage: "/a/APP-Electrostatics/a35.png", solution: "Solution", correctAnswer: "ACD" },

      { id: 36, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q36.png", solutionImage: "/a/APP-Electrostatics/a36.png", solution: "Solution", correctAnswer: "BC" },
      { id: 37, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q37.png", solutionImage: "/a/APP-Electrostatics/a37.png", solution: "Solution", correctAnswer: "AD" },
      { id: 38, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q38.png", solutionImage: "/a/APP-Electrostatics/a38.png", solution: "Solution", correctAnswer: "ABCD" },
      { id: 39, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q39.png", solutionImage: "/a/APP-Electrostatics/a39.png", solution: "Solution", correctAnswer: "AB" },
      { id: 40, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q40.png", solutionImage: "/a/APP-Electrostatics/a40.png", solution: "Solution", correctAnswer: "ACD" },

      // ── 41–45 (single correct resumed) ──
      { id: 41, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q41.png", solutionImage: "/a/APP-Electrostatics/a41.png", solution: "Solution", correctAnswer: 1 },
      { id: 42, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q42.png", solutionImage: "/a/APP-Electrostatics/a42.png", solution: "Solution", correctAnswer: 1 },
      { id: 43, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q43.png", solutionImage: "/a/APP-Electrostatics/a43.png", solution: "Solution", correctAnswer: 3 },
      { id: 44, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q44.png", solutionImage: "/a/APP-Electrostatics/a44.png", solution: "Solution", correctAnswer: 3 },
      { id: 45, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q45.png", solutionImage: "/a/APP-Electrostatics/a45.png", solution: "Solution", correctAnswer: 3 },

      // ── 46–50 MATRIX MATCH ──
      { id: 46, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q46.png", solutionImage: "/a/APP-Electrostatics/a46.png", solution: "A-q,r ; B-p,s,t ; C-p,q,t ; D-p,s,t", correctAnswer: "matrix" },
      { id: 47, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q47.png", solutionImage: "/a/APP-Electrostatics/a47.png", solution: "Solution", correctAnswer: 4 },
      { id: 48, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q48.png", solutionImage: "/a/APP-Electrostatics/a48.png", solution: "Solution", correctAnswer: 2 },
      { id: 49, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q49.png", solutionImage: "/a/APP-Electrostatics/a49.png", solution: "A-pq ; B-s ; C-s ; D-r", correctAnswer: "matrix" },
      { id: 50, section: "Physics", type: "mcq", questionImage: "/q/APP-Electrostatics/q50.png", solutionImage: "/a/APP-Electrostatics/a50.png", solution: "A-q ; B-p ; C-s ; D-r", correctAnswer: "matrix" },

      // ── 51–70 INTEGER ──
      { id: 51, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q51.png", solutionImage: "/a/APP-Electrostatics/a51.png", solution: "Solution", correctAnswer: 9 },
      { id: 52, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q52.png", solutionImage: "/a/APP-Electrostatics/a52.png", solution: "Solution", correctAnswer: 2 },
      { id: 53, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q53.png", solutionImage: "/a/APP-Electrostatics/a53.png", solution: "Solution", correctAnswer: 4 },
      { id: 54, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q54.png", solutionImage: "/a/APP-Electrostatics/a54.png", solution: "Solution", correctAnswer: 2 },
      { id: 55, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q55.png", solutionImage: "/a/APP-Electrostatics/a55.png", solution: "Solution", correctAnswer: 3 },

      { id: 56, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q56.png", solutionImage: "/a/APP-Electrostatics/a56.png", solution: "Solution", correctAnswer: 9 },
      { id: 57, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q57.png", solutionImage: "/a/APP-Electrostatics/a57.png", solution: "Solution", correctAnswer: 6 },
      { id: 58, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q58.png", solutionImage: "/a/APP-Electrostatics/a58.png", solution: "Solution", correctAnswer: 1 },
      { id: 59, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q59.png", solutionImage: "/a/APP-Electrostatics/a59.png", solution: "Solution", correctAnswer: 3 },
      { id: 60, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q60.png", solutionImage: "/a/APP-Electrostatics/a60.png", solution: "Solution", correctAnswer: 8 },

      { id: 61, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q61.png", solutionImage: "/a/APP-Electrostatics/a61.png", solution: "Solution", correctAnswer: 5 },
      { id: 62, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q62.png", solutionImage: "/a/APP-Electrostatics/a62.png", solution: "Solution", correctAnswer: 0.75 },
      { id: 63, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q63.png", solutionImage: "/a/APP-Electrostatics/a63.png", solution: "Solution", correctAnswer: 2 },
      { id: 64, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q64.png", solutionImage: "/a/APP-Electrostatics/a64.png", solution: "Solution", correctAnswer: 1 },
      { id: 65, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q65.png", solutionImage: "/a/APP-Electrostatics/a65.png", solution: "Solution", correctAnswer: 2.5 },

      { id: 66, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q66.png", solutionImage: "/a/APP-Electrostatics/a66.png", solution: "Solution", correctAnswer: 4.8 },
      { id: 67, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q67.png", solutionImage: "/a/APP-Electrostatics/a67.png", solution: "Solution", correctAnswer: 9 },
      { id: 68, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q68.png", solutionImage: "/a/APP-Electrostatics/a68.png", solution: "Solution", correctAnswer: 4 },
      { id: 69, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q69.png", solutionImage: "/a/APP-Electrostatics/a69.png", solution: "Solution", correctAnswer: 20 },
      { id: 70, section: "Physics", type: "integer", questionImage: "/q/APP-Electrostatics/q70.png", solutionImage: "/a/APP-Electrostatics/a70.png", solution: "Solution", correctAnswer: 4 },

    ]
  },
  // ─────────────────────────────────────────────────────────────
  // TEST: Quizrr Chapterwise — Determinants Test 1
  // ─────────────────────────────────────────────────────────────
  {
    id: "qcm_determinants_1",
    name: "Determinants — Test 1",
    subject: "Mathematics",
    subjects: ["Mathematics"],
    chapter: "Determinants",
    duration: 1800,           // 30 minutes (20 MCQ chapter-wise)
    date: "11/04/2026",
    maxMarks: 80,
    totalQuestions: 20,
    mode: "exam",
    questions: [
      {
        id: 1, section: "Mathematics", type: "mcq",
        questionText: "Q1",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q1.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a1.png",
      },
      {
        id: 2, section: "Mathematics", type: "mcq",
        questionText: "Q2",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q2.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a2.png",
      },
      {
        id: 3, section: "Mathematics", type: "mcq",
        questionText: "Q3",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q3.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a3.png",
      },
      {
        id: 4, section: "Mathematics", type: "mcq",
        questionText: "Q4",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q4.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a4.png",
      },
      {
        id: 5, section: "Mathematics", type: "mcq",
        questionText: "Q5",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q5.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a5.png",
      },
      {
        id: 6, section: "Mathematics", type: "mcq",
        questionText: "Q6",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q6.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a6.png",
      },
      {
        id: 7, section: "Mathematics", type: "mcq",
        questionText: "Q7",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q7.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a7.png",
      },
      {
        id: 8, section: "Mathematics", type: "mcq",
        questionText: "Q8",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q8.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a8.png",
      },
      {
        id: 9, section: "Mathematics", type: "mcq",
        questionText: "Q9",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q9.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a9.png",
      },
      {
        id: 10, section: "Mathematics", type: "mcq",
        questionText: "Q10",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q10.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a10.png",
      },
      {
        id: 11, section: "Mathematics", type: "mcq",
        questionText: "Q11",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q11.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a11.png",
      },
      {
        id: 12, section: "Mathematics", type: "mcq",
        questionText: "Q12",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q12.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a12.png",
      },
      {
        id: 13, section: "Mathematics", type: "mcq",
        questionText: "Q13",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q13.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a13.png",
      },
      {
        id: 14, section: "Mathematics", type: "mcq",
        questionText: "Q14",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q14.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a14.png",
      },
      {
        id: 15, section: "Mathematics", type: "mcq",
        questionText: "Q15",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q15.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a15.png",
      },
      {
        id: 16, section: "Mathematics", type: "mcq",
        questionText: "Q16",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q16.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a16.png",
      },
      {
        id: 17, section: "Mathematics", type: "mcq",
        questionText: "Q17",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q17.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a17.png",
      },
      {
        id: 18, section: "Mathematics", type: "mcq",
        questionText: "Q18",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q18.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a18.png",
      },
      {
        id: 19, section: "Mathematics", type: "mcq",
        questionText: "Q19",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q19.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a19.png",
      },
      {
        id: 20, section: "Mathematics", type: "mcq",
        questionText: "Q20",
        questionImage: "/q/quizrr/chapterwise-mains/mathematics/determinants/test-1/q20.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/mathematics/determinants/test-1/a20.png",
      },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // TEST: Quizrr Chapterwise — Electrostatics Test 1
  // ─────────────────────────────────────────────────────────────
  {
    id: "qcp_electrostatics_1",
    name: "Electrostatics — Test 1",
    subject: "Physics",
    subjects: ["Physics"],
    chapter: "Electrostatics",
    duration: 1800,           // 30 minutes (20 MCQ chapter-wise)
    date: "11/04/2026",
    maxMarks: 80,
    totalQuestions: 20,
    mode: "exam",
    questions: [
      {
        id: 1, section: "Physics", type: "mcq",
        questionText: "Q1",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q1.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a1.png",
      },
      {
        id: 2, section: "Physics", type: "mcq",
        questionText: "Q2",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q2.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a2.png",
      },
      {
        id: 3, section: "Physics", type: "mcq",
        questionText: "Q3",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q3.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a3.png",
      },
      {
        id: 4, section: "Physics", type: "mcq",
        questionText: "Q4",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q4.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a4.png",
      },
      {
        id: 5, section: "Physics", type: "mcq",
        questionText: "Q5",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q5.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a5.png",
      },
      {
        id: 6, section: "Physics", type: "mcq",
        questionText: "Q6",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q6.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a6.png",
      },
      {
        id: 7, section: "Physics", type: "mcq",
        questionText: "Q7",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q7.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a7.png",
      },
      {
        id: 8, section: "Physics", type: "mcq",
        questionText: "Q8",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q8.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 3,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a8.png",
      },
      {
        id: 9, section: "Physics", type: "mcq",
        questionText: "Q9",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q9.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a9.png",
      },
      {
        id: 10, section: "Physics", type: "mcq",
        questionText: "Q10",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q10.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a10.png",
      },
      {
        id: 11, section: "Physics", type: "mcq",
        questionText: "Q11",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q11.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a11.png",
      },
      {
        id: 12, section: "Physics", type: "mcq",
        questionText: "Q12",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q12.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a12.png",
      },
      {
        id: 13, section: "Physics", type: "mcq",
        questionText: "Q13",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q13.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a13.png",
      },
      {
        id: 14, section: "Physics", type: "mcq",
        questionText: "Q14",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q14.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a14.png",
      },
      {
        id: 15, section: "Physics", type: "mcq",
        questionText: "Q15",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q15.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a15.png",
      },
      {
        id: 16, section: "Physics", type: "mcq",
        questionText: "Q16",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q16.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a16.png",
      },
      {
        id: 17, section: "Physics", type: "mcq",
        questionText: "Q17",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q17.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a17.png",
      },
      {
        id: 18, section: "Physics", type: "mcq",
        questionText: "Q18",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q18.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a18.png",
      },
      {
        id: 19, section: "Physics", type: "mcq",
        questionText: "Q19",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q19.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 2,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a19.png",
      },
      {
        id: 20, section: "Physics", type: "mcq",
        questionText: "Q20",
        questionImage: "/q/quizrr/chapterwise-mains/physics/electrostatics/test-1/q20.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 4,
        solutionImage: "/a/quizrr/chapterwise-mains/physics/electrostatics/test-1/a20.png",
      },
    ]
  },

];

// ── Helpers ────────────────────────────────────────────────────
export const getTestsBySubject = () => {
  const grouped = {};
  tests.forEach(test => {
    const key = test.subject;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(test);
  });
  return grouped;
};

export const getTestById = (id) => tests.find(t => t.id === id);