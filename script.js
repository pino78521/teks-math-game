const strandMap = {
  Numerical: ["6.2A", "6.2B", "6.2C", "6.2D", "6.3A", "6.3B"],
  Algebraic: ["6.4A", "6.4B", "6.5A", "6.5B", "6.6A", "6.6B", "6.7A", "6.7B", "6.7C"],
  Geometry: ["6.8A", "6.8B", "6.9A", "6.9B", "6.10A"],
  Data: ["6.12A", "6.12B", "6.13A", "6.13B", "6.13C", "6.14A", "6.14B", "6.14C", "6.14D", "6.14E", "6.14F", "6.14G"]
};

const questionsByTEKS = {
  "6.2A": [
    ["Classify -3: integer or whole?", "integer"],
    ["Is 0 an integer?", "yes"],
    ["Which is not a whole number: 3, 0, -2?", "-2"]
  ],
  "6.2B": [
    ["Simplify: 4 × 1/4", "1"],
    ["Simplify: 5 × 1/5", "1"],
    ["Simplify: 3 × 1/3", "1"]
  ]
  // Add more TEKS with multiple questions if needed
};

let selectedTEKS = "";
let score = 0;
let totalQuestions = 20;
let currentIndex = 0;
let questionPool = [];
let questionOrder = [];

document.getElementById("strand").addEventListener("change", function () {
  const strand = this.value;
  const teksDropdown = document.getElementById("teks");
  teksDropdown.innerHTML = '<option value="">-- Choose TEKS --</option>';

  if (strandMap[strand]) {
    strandMap[strand].forEach(teks => {
      const option = document.createElement("option");
      option.value = teks;
      option.textContent = teks;
      teksDropdown.appendChild(option);
    });
  }
});

function startGame() {
  const teks = document.getElementById("teks").value;
  const student = document.getElementById("studentName").value;
  if (!student || !teks) {
    alert("Please enter a name and select a TEKS.");
    return;
  }

  selectedTEKS = teks;
  score = 0;
  currentIndex = 0;
  document.getElementById("scoreBox").style.display = "none";

  questionPool = questionsByTEKS[selectedTEKS] || [["No questions available.", ""]];
  questionOrder = shuffleArray([...Array(questionPool.length).keys()]);
  showQuestion();
}

function showQuestion() {
  const qIndex = questionOrder[currentIndex % questionOrder.length];
  const [question, answer] = questionPool[qIndex];
  currentQuestion = question;
  correctAnswer = answer.toLowerCase();
  document.getElementById("question").textContent = `Q${currentIndex + 1}: ${question}`;
  document.getElementById("questionBox").style.display = "block";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = `❌ Incorrect. Correct answer: ${correctAnswer}`;
  }

  currentIndex++;
  if (currentIndex < totalQuestions) {
    setTimeout(() => showQuestion(), 1500);
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("scoreBox").style.display = "block";
  document.getElementById("score").textContent = `You scored ${score}/${totalQuestions}`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}