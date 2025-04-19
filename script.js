
const strandMap = {
  Numerical: ["6.2A", "6.2B", "6.2C", "6.2D", "6.3A", "6.3B"],
  Algebraic: ["6.4A", "6.4B", "6.5A", "6.5B", "6.6A", "6.6B", "6.7A", "6.7B", "6.7C"],
  Geometry: ["6.8A", "6.8B", "6.9A", "6.9B", "6.10A"],
  Data: ["6.12A", "6.12B", "6.13A", "6.13B", "6.13C", "6.14A", "6.14B", "6.14C", "6.14D", "6.14E", "6.14F", "6.14G"]
};

const questionsByTEKS = {
  "6.2A": () => ["Classify -3: integer or whole?", "integer"],
  "6.2B": () => ["Simplify: 4 × 1/4", "1"],
  "6.2C": () => ["Convert 0.75 to fraction (tenths)", "0.8"],
  "6.2D": () => ["Order: 0.2, -1, 0, 1", "-1, 0, 0.2, 1"],
  "6.3A": () => ["What is the reciprocal of 1/4?", "4"],
  "6.3B": () => ["What is 2/3 × 3/2?", "1"],
  "6.4A": () => ["Which grows faster: y=3x or y=5x?", "y=5x"],
  "6.4B": () => ["What is 5 × -3?", "-15"],
  "6.5A": () => ["Solve: x + 4 = 9", "5"],
  "6.5B": () => ["Write: Juan has $x and spends $7", "x - 7"],
  "6.6A": () => ["What's the dependent variable: time or distance?", "distance"],
  "6.6B": () => ["$20/day for 3 days = ?", "$60"],
  "6.7A": () => ["Distribute: 3(x + 2)", "3x + 6"],
  "6.7B": () => ["Are 2(a + 3) and 2a + 6 equivalent?", "yes"],
  "6.7C": () => ["If y = 2x + 1, find y when x = 4", "9"],
  "6.8A": () => ["Area of base=5, height=4?", "20"],
  "6.8B": () => ["Perimeter expression for 4x5 rectangle", "2(4 + 5)"],
  "6.9A": () => ["Convert 3 ft to inches", "36"],
  "6.9B": () => ["Ribbon is 6 ft. Inches?", "72"],
  "6.10A": () => ["Area of 1/2 × 3/4?", "3/8"],
  "6.12A": () => ["What chart shows frequency with bars?", "histogram"],
  "6.12B": () => ["Mean of 10, 20, 30?", "20"],
  "6.13A": () => ["Price=$50, tax=8%. Total?", "$54"],
  "6.13B": () => ["Gross: $500, tax: $75. Net?", "$425"],
  "6.13C": () => ["One way to pay for college?", "scholarships"],
  "6.14A": () => ["What is credit?", "borrowed money"],
  "6.14B": () => ["Is rent fixed or variable?", "fixed"],
  "6.14C": () => ["Is a power bill fixed or variable?", "variable"],
  "6.14D": () => ["What’s a budget?", "a plan to manage money"],
  "6.14E": () => ["Why is saving important?", "for emergencies"],
  "6.14F": () => ["What does a savings account help with?", "interest"],
  "6.14G": () => ["What is a financial goal?", "plan for your money"]
};

let selectedTEKS = "";
let currentQuestion = "";
let correctAnswer = "";
let score = 0;
let totalQuestions = 3;
let currentIndex = 0;

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
  totalQuestions = 3;
  document.getElementById("scoreBox").style.display = "none";
  showQuestion();
}

function showQuestion() {
  let qFunc = questionsByTEKS[selectedTEKS];
  if (!qFunc) {
    qFunc = () => ["No question available for this TEKS yet.", "n/a"];
  }

  const [q, a] = qFunc();
  currentQuestion = q;
  correctAnswer = a.toLowerCase();
  document.getElementById("question").textContent = `Q${currentIndex + 1}: ${q}`;
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
    setTimeout(() => {
      showQuestion();
    }, 1500);
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("scoreBox").style.display = "block";
  document.getElementById("score").textContent = `You scored ${score}/${totalQuestions}`;
}
