const teksByStrand = {
  "Numerical Representations & Relationships": [
    "6.2A", "6.2B", "6.2C", "6.2D", "6.3A", "6.3B", "6.3C", "6.3D"
  ],
  "Computations & Algebraic Relationships": [
    "6.4A", "6.4B", "6.4C", "6.4D", "6.5A", "6.5B", "6.5C", "6.5D",
    "6.6A", "6.6B", "6.6C", "6.6D"
  ],
  "Geometry & Measurement": [
    "6.7A", "6.8A", "6.8B", "6.8C", "6.9A", "6.9B", "6.10A", "6.10B",
    "6.11A", "6.11B"
  ],
  "Data Analysis & Financial Literacy": [
    "6.12A", "6.12B", "6.12C", "6.13A", "6.13B", "6.13C"
  ]
};

const questions = {
  "6.2A": [
    { question: "What is 25% of 160?", answer: "40" },
    { question: "Find 50% of 200.", answer: "100" },
    { question: "What is 10% of 90?", answer: "9" }
  ],
  "6.5A": [
    { question: "Simplify: 2x + 3x", answer: "5x" },
    { question: "Simplify: 4a - 2a", answer: "2a" },
    { question: "Combine like terms: 7y + 2y", answer: "9y" }
  ],
  "6.9B": [
    { question: "Find the area of a triangle with base 10 and height 5.", answer: "25" },
    { question: "Area of triangle: base 8, height 4", answer: "16" },
    { question: "Area of triangle: base 12, height 6", answer: "36" }
  ]
};

let selectedTEKS = [];
let gameQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", function () {
  const teksMultiSelect = document.getElementById("teks-multiselect");

  for (const strand in teksByStrand) {
    teksByStrand[strand].forEach(teks => {
      const option = document.createElement("option");
      option.value = teks;
      option.textContent = teks;
      teksMultiSelect.appendChild(option);
    });
  }
});

function startGame() {
  const selectedOptions = Array.from(document.getElementById("teks-multiselect").selectedOptions);
  selectedTEKS = selectedOptions.map(opt => opt.value);
  const questionCount = parseInt(document.getElementById("question-count").value);

  // Build pool of available questions
  let pool = [];
  selectedTEKS.forEach(teks => {
    if (questions[teks]) {
      pool = pool.concat(questions[teks].map(q => ({ ...q, teks })));
    }
  });

  // Shuffle and select questions
  pool.sort(() => 0.5 - Math.random());
  gameQuestions = pool.slice(0, questionCount);

  if (gameQuestions.length === 0) {
    alert("No questions available for selected TEKS.");
    return;
  }

  document.getElementById("teacher-settings").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  currentQuestionIndex = 0;
  correctAnswers = 0;
  showQuestion();
}

function showQuestion() {
  const q = gameQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("student-answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function submitAnswer() {
  const userAnswer = document.getElementById("student-answer").value.trim().toLowerCase();
  const correctAnswer = gameQuestions[currentQuestionIndex].answer.toLowerCase();

  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    correctAnswers++;
  } else {
    feedback.textContent = "❌ Incorrect.";
    feedback.style.color = "red";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < gameQuestions.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showScore, 1000);
  }
}

function showScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("report-section").style.display = "block";
  document.getElementById("score-summary").textContent = `Final Score: ${correctAnswers}/${gameQuestions.length}`;
}

function downloadPDF() {
  const summary = `TEKS Math Game Report\nScore: ${correctAnswers}/${gameQuestions.length}\n\n`;
  const blob = new Blob([summary], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "teks_math_game_report.pdf";
  link.click();
}
