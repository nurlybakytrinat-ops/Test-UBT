let currentSubject = null;
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startTest(subjectKey) {
    currentSubject = subjects[subjectKey];

    currentQuestions = shuffle(
        currentSubject.questions.map(question => {
            const shuffledOptions = shuffle(
                question.o.map((option, index) => ({
                    text: option,
                    isCorrect: index === question.a
                }))
            );

            return {
                q: question.q,
                o: shuffledOptions.map(option => option.text),
                a: shuffledOptions.findIndex(option => option.isCorrect)
            };
        })
    );

    currentQuestion = 0;
    score = 0;
    userAnswers = [];

    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestion];

    document.getElementById("test-container").innerHTML = `
        <h2>${currentSubject.name}</h2>

        <div class="progress">
            Вопрос ${currentQuestion + 1} из ${currentQuestions.length}
        </div>

        <h3>${question.q}</h3>

        <div class="answers">
            ${question.o.map((option, index) => `
                <button class="answer-btn"
                    onclick="checkAnswer(${index})">
                    ${String.fromCharCode(65 + index)}. ${option}
                </button>
            `).join("")}
        </div>
    `;
}

function checkAnswer(selected) {
    const question = currentQuestions[currentQuestion];

    const correct = selected === question.a;

    if (correct) {
        score++;
    }

    userAnswers.push({
        question: question.q,
        selected: question.o[selected],
        correctAnswer: question.o[question.a],
        correct: correct
    });

    currentQuestion++;

    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const percent = Math.round(
        (score / currentQuestions.length) * 100
    );

    document.getElementById("test-container").innerHTML = `
        <div class="result">
            <h2>Тест завершён!</h2>

            <h3>${currentSubject.name}</h3>

            <div class="score">
                ${score} / ${currentQuestions.length}
            </div>

            <p>Результат: ${percent}%</p>

            <p>
                ${percent >= 80
                    ? "Отличный результат!"
                    : percent >= 50
                    ? "Хороший результат, продолжай подготовку!"
                    : "Нужно ещё потренироваться."}
            </p>

            <button onclick="showReview()">
                Разбор ошибок
            </button>

            <button onclick="startTest(
                '${Object.keys(subjects).find(
                    key => subjects[key] === currentSubject
                )}'
            )">
                Пройти заново
            </button>
        </div>
    `;
}

function showReview() {
    const mistakes = userAnswers.filter(answer => !answer.correct);

    document.getElementById("test-container").innerHTML = `
        <h2>Разбор ошибок</h2>

        ${mistakes.length === 0
            ? "<h3>Поздравляем! Все ответы правильные 🎉</h3>"
            : mistakes.map((mistake, index) => `
                <div class="review-item">
                    <h3>${index + 1}. ${mistake.question}</h3>

                    <p>Твой ответ: ${mistake.selected}</p>

                    <p>
                        Правильный ответ:
                        <strong>${mistake.correctAnswer}</strong>
                    </p>
                </div>
            `).join("")}

        <button onclick="location.reload()">
            На главную
        </button>
    `;
}
