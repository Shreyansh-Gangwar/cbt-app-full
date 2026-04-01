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
    subject: "Physics",
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
  //       questionImage: "/q/q1.jpg",   // question image (with options printed inside)
  //       solutionImage: "/a/a1.jpg",   // solution image shown after "Show Answer"
  //       correctAnswer: 2,
  //     },
  //     // ... rest of questions
  //   ]
  // },
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