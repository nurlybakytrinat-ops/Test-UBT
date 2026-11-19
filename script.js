// ========== СҰРАҚТАР ==========
const allQuestions = {
    math: [
        {
            question: "Теңдеуді шешіңіз: 3(x - 4) = 2x + 5",
            options: ["x = 17", "x = 7", "x = 13", "x = -7"],
            correct: 0,
            explanation: "3x - 12 = 2x + 5 → x = 17"
        },
        {
            question: "Егер a = 3, b = -2 болса, a² - 2ab + b² = ?",
            options: ["1", "25", "5", "13"],
            correct: 1,
            explanation: "(a - b)² = 5² = 25"
        },
        {
            question: "Катеттері 6 және 8 болатын тікбұрышты үшбұрыштың гипотенузасы?",
            options: ["10", "12", "14", "9"],
            correct: 0,
            explanation: "√(36 + 64) = √100 = 10"
        },
        {
            question: "f(x) = 2x - 5. f(4) = ?",
            options: ["3", "8", "1", "13"],
            correct: 0,
            explanation: "2×4 - 5 = 3"
        },
        {
            question: "a₁ = 5, d = 3. a₇ мүшесі неге тең?",
            options: ["23", "26", "20", "17"],
            correct: 0,
            explanation: "5 + 6×3 = 23"
        }
    ],
    kazakh: [
        {
            question: "«Жаз» сөзінің барыс септігі?",
            options: ["жазға", "жазқа", "жазна", "жаза"],
            correct: 0,
            explanation: "Дауыссыздан кейін -ға жалғанады"
        },
        {
            question: "Қай сөйлемде анықтауыш бар?",
            options: ["Бала барды", "Қызыл гүл тұр", "Ол жүгірді", "Мен оқыдым"],
            correct: 1,
            explanation: "«Қызыл» — анықтауыш"
        },
        {
            question: "Синонимдік қатарды табыңыз:",
            options: ["Батыл – қорқақ", "Әдемі – сұлу – көрікті", "Үлкен – кіші", "Жақсы – жаман"],
            correct: 1,
            explanation: "Әдемі, сұлу, көрікті — синонимдер"
        },
        {
            question: "«Оқушы» сөзінің I жақ тәуелдік жалғауы?",
            options: ["оқушым", "оқушың", "оқушысы", "оқушымыз"],
            correct: 0,
            explanation: "I жақ — -ым/-ім"
        },
        {
            question: "Қай сөз туынды зат есім?",
            options: ["Қалам", "Оқулық", "Мектеп", "Дәптер"],
            correct: 1,
            explanation: "Оқу + лық = оқулық"
        }
    ],
    history: [
        {
            question: "Қазақ хандығының негізін қалаған хандар?",
            options: ["Тәуке мен Хақназар", "Керей мен Жәнібек", "Абылай мен Уәли", "Қасым мен Бұрындық"],
            correct: 1,
            explanation: "1465 жылы Керей мен Жәнібек"
        },
        {
            question: "«Жеті жарғы» заңдарын кім шығарды?",
            options: ["Қасым хан", "Хақназар хан", "Тәуке хан", "Абылай хан"],
            correct: 2,
            explanation: "Тәуке хан"
        },
        {
            question: "Алаш Орда қашан жарияланды?",
            options: ["1916 ж.", "1917 ж.", "1918 ж.", "1919 ж."],
            correct: 1,
            explanation: "1917 жылғы 13 желтоқсан"
        },
        {
            question: "Тұңғыш Президент кім?",
            options: ["Қ. Тоқаев", "Н. Назарбаев", "Д. Қонаев", "Ж. Шаяхметов"],
            correct: 1,
            explanation: "Нұрсұлтан Назарбаев"
        },
        {
            question: "Ақтабан шұбырынды қай жылдары болды?",
            options: ["1723–1727", "1710–1715", "1730–1735", "1741–1745"],
            correct: 0,
            explanation: "1723–1727 жылдар"
        }
    ],
    english: [
        {
            question: "She _____ to school every day.",
            options: ["go", "goes", "going", "gone"],
            correct: 1,
            explanation: "He/She/It + V + s"
        },
        {
            question: "Past form of «write»?",
            options: ["writed", "wrote", "written", "writing"],
            correct: 1,
            explanation: "write – wrote – written"
        },
        {
            question: "___ sun rises in the east.",
            options: ["A", "An", "The", "—"],
            correct: 2,
            explanation: "The sun — unique object"
        },
        {
            question: "If I _____ hard, I will pass the exam.",
            options: ["study", "studied", "will study", "studies"],
            correct: 0,
            explanation: "If + Present Simple, will + V1"
        },
        {
            question: "Synonym of «happy»?",
            options: ["sad", "angry", "joyful", "tired"],
            correct: 2,
            explanation: "happy = joyful"
        }
    ]
};

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let timer;
let timeLeft = 30;
let currentSubject = "math";

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

if (startBtn) startBtn.addEventListener('click', () => startSubject('math'));
if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
if (restartBtn) restartBtn.addEventListener('click', restartQuiz);

function startSubject(subject) {
    currentSubject = subject;
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        startQuiz();
    }, 350);
}

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function startQuiz() {
    currentQuestions = shuffleArray(allQuestions[currentSubject]).slice(0, 5);
    currentQuestion = 0;
    score = 0;

    quizStart.classList.add('hidden');
    quiz.classList.remove('hidden');
    result.classList.add('hidden');

    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    selectedOption = null;
    timeLeft = 30;
    nextBtn.classList.add('hidden');

    const q = currentQuestions[currentQuestion];

    questionNumber.textContent = `Сұрақ ${currentQuestion + 1} / ${currentQuestions.length}`;
    scoreDisplay.textContent = `Ұпай: ${score}`;
    questionText.innerHTML = `
        <div>${q.question}</div>
        <div id="timer" style="margin-top:12px; font-size:1rem; color:#fbbf24;">
            Уақыт: <span id="time">30</span> сек
        </div>
        <div id="explanation" style="margin-top:12px; color:#94a3b8; font-size:0.95rem;"></div>
    `;

    optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.addEventListener('click', () => selectOption(index, div));
        optionsContainer.appendChild(div);
    });

    startTimer();
}

function startTimer() {
    const timeEl = document.getElementById('time');
    timer = setInterval(() => {
        timeLeft--;
        if (timeEl) timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (selectedOption === null) selectOption(-1, null);
        }
    }, 1000);
}

function selectOption(index, element) {
    if (selectedOption !== null) return;
    clearInterval(timer);
    selectedOption = index;

    const q = currentQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    const explanationEl = document.getElementById('explanation');

    options.forEach(opt => opt.style.pointerEvents = 'none');

    if (index === q.correct) {
        if (element) element.classList.add('correct');
        score++;
        scoreDisplay.textContent = `Ұпай: ${score}`;
        if (explanationEl) explanationEl.innerHTML = `<span style="color:#22c55e">✓ Дұрыс!</span> ${q.explanation}`;
    } else {
        if (element) element.classList.add('wrong');
        if (options[q.correct]) options[q.correct].classList.add('correct');
        if (explanationEl) explanationEl.innerHTML = `<span style="color:#ef4444">✗ Қате.</span> ${q.explanation}`;
    }

    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timer);
    quiz.classList.add('hidden');
    result.classList.remove('hidden');

    const percent = Math.round((score / currentQuestions.length) * 100);
    finalScore.textContent = `${score} / ${currentQuestions.length} (${percent}%)`;

    if (percent === 100) resultMessage.textContent = "Керемет! Толық балл! 🔥";
    else if (percent >= 80) resultMessage.textContent = "Өте жақсы нәтиже! 👏";
    else if (percent >= 60) resultMessage.textContent = "Жақсы! Тағы да жаттығыңыз 👍";
    else resultMessage.textContent = "Қайталап көріңіз!";
}

function restartQuiz() {
    result.classList.add('hidden');
    quizStart.classList.remove('hidden');
}
