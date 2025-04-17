let studentName = "";
let studentId = "";

const teksByStrand = {
  "Numerical Representations & Relationships": ["6.2A", "6.2B", "6.2C", "6.2D", "6.3A", "6.3B", "6.3C", "6.3D"],
  "Computations & Algebraic Relationships": ["6.4A", "6.4B", "6.4C", "6.4D", "6.5A", "6.5B", "6.5C", "6.5D", "6.6A", "6.6B", "6.6C", "6.6D"],
  "Geometry & Measurement": ["6.7A", "6.8A", "6.8B", "6.8C", "6.9A", "6.9B", "6.10A", "6.10B", "6.11A", "6.11B"],
  "Data Analysis & Financial Literacy": ["6.12A", "6.12B", "6.12C", "6.13A", "6.13B", "6.13C"]
};

const questions = {};
for (let strand in teksByStrand) {
  teksByStrand[strand].forEach(teks => {
    questions[teks] = [];
    for (let i = 1; i <= 20; i++) {
      questions[teks].push({
        question: `${teks} Q${i}: Placeholder question?`,
        answer: "Placeholder"
      });
    }
  });
}

let selectedTEKS = [];
let gameQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
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

function goToTeacherSettings() {
  studentName = document.getElementById("student-name").value.trim();
  studentId = document.getElementById("student-id").value.trim();

  if (!studentName || !studentId) {
    alert("Please fill in both name and ID.");
    return;
  }

  document.getElementById("student-info").style.display = "none";
  document.getElementById("teacher-settings").style.display = "block";
}

function startGame() {
  const selectedOptions = Array.from(document.getElementById("teks-multiselect").selectedOptions);
  selectedTEKS = selectedOptions.map(opt => opt.value);
  const requestedCount = parseInt(document.getElementById("question-count").value);

  let pool = [];
  selectedTEKS.forEach(teks => {
    if (questions[teks]) {
      pool = pool.concat(questions[teks].map(q => ({ ...q, teks })));
    }
  });

  pool.sort(() => 0.5 - Math.random());
  const questionCount = Math.min(requestedCount, pool.length);
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
  document.getElementById("progress").textContent = `Question ${currentQuestionIndex + 1} of ${gameQuestions.length}`;
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
  document.getElementById("score-summary").textContent = `Final Score for ${studentName} (${studentId}): ${correctAnswers}/${gameQuestions.length}`;
}

function resetGame() {
  studentName = "";
  studentId = "";
  selectedTEKS = [];
  gameQuestions = [];
  currentQuestionIndex = 0;
  correctAnswers = 0;

  document.getElementById("student-name").value = "";
  document.getElementById("student-id").value = "";
  document.getElementById("teacher-settings").style.display = "none";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("report-section").style.display = "none";
  document.getElementById("student-info").style.display = "block";
}
