// Математика сұрақтары (пробный)
const questions = [
    {
        question: "2x + 5 = 15 теңдеуінің шешімі қандай?",
        options: ["x = 5", "x = 10", "x = 2", "x = 7"],
        correct: 0
    },
    {
        question: "Үшбұрыштың ішкі бұрыштарының қосындысы неге тең?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1
    },
    {
        question: "√144 = ?",
        options: ["10", "12", "14", "16"],
        correct: 1
    },
    {
        question: "5² + 3² = ?",
        options: ["25", "34", "28", "15"],
        correct: 1
    },
    {
        question: "Тік төртбұрыштың ауданы қалай есептеледі?",
        options: ["a + b", "a × b", "2(a + b)", "a² + b²"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const startBtn = document.getElementById('startBtn');
const quizStart = document.getElementById('quiz-start');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const questionNumber = document.getElementById('question-number');
const scoreDisplay = document.getElementById('score-display');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restartBtn');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    quizStart.classList.add('hidden');
    quiz.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    selectedOption = null;
    nextBtn.classList.add('hidden');
    
    const q = questions[currentQuestion];
    questionNumber.textContent = `Сұрақ ${currentQuestion + 1} / ${questions.length}`;
    scoreDisplay.textContent = `Ұпай: ${score}`;
    questionText.textContent = q.question;
    
    optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.addEventListener('click', () => selectOption(index, div));
        optionsContainer.appendChild(div);
    });
}

function selectOption(index, element) {
    if (selectedOption !== null) return; // бір рет қана таңдауға болады
    
    selectedOption = index;
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    const correctIndex = questions[currentQuestion].correct;
    
    if (index === correctIndex) {
        element.classList.add('correct');
        score++;
        scoreDisplay.textContent = `Ұпай: ${score}`;
    } else {
        element.classList.add('wrong');
        options[correctIndex].classList.add('correct');
    }
    
    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.classList.add('hidden');
    result.classList.remove('hidden');
    
    finalScore.textContent = `${score} / ${questions.length}`;
    
    if (score === 5) {
        resultMessage.textContent = "Керемет! Өте жақсы нәтиже 🔥";
    } else if (score >= 3) {
        resultMessage.textContent = "Жақсы! Тағы да жаттығыңыз 👍";
    } else {
        resultMessage.textContent = "Қайталап көріңіз, сізге сәттілік!";
    }
}

function restartQuiz() {
    result.classList.add('hidden');
    quizStart.classList.remove('hidden');
}
