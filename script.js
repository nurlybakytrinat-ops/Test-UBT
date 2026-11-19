* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #0b0f19;
    color: #e2e8f0;
    line-height: 1.6;
}

/* Навигация */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 18px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(11, 15, 25, 0.9);
    backdrop-filter: blur(12px);
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.logo {
    font-size: 1.45rem;
    font-weight: 700;
    color: #fff;
}

.logo span {
    color: #818cf8;
}

.nav-links a {
    color: #94a3b8;
    text-decoration: none;
    margin-left: 28px;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #818cf8;
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 7%;
    background: radial-gradient(ellipse at top right, #1e1b4b 0%, #0b0f19 60%);
}

.hero-content {
    max-width: 650px;
}

.hero h1 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 18px;
}

.hero h1 span {
    background: linear-gradient(90deg, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-size: 1.35rem;
    color: #94a3b8;
    margin-bottom: 10px;
}

.description {
    color: #64748b;
    margin-bottom: 36px;
    font-size: 1.05rem;
}

.btn {
    display: inline-block;
    padding: 14px 32px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.35);
}

/* Пәндер */
.subjects {
    padding: 100px 0;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

h2 {
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 50px;
    background: linear-gradient(90deg, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subjects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
}

.subject-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    padding: 36px 28px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.subject-card:hover {
    transform: translateY(-8px);
    border-color: #818cf8;
    background: rgba(129, 140, 248, 0.08);
}

.subject-icon {
    font-size: 2.8rem;
    margin-bottom: 18px;
}

.subject-card h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
}

.subject-card p {
    color: #94a3b8;
    font-size: 0.95rem;
}

/* Тест бөлімі */
.test-section {
    padding: 100px 0;
    background: rgba(255, 255, 255, 0.02);
}

.test-container {
    max-width: 700px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 40px;
}

.quiz-start {
    text-align: center;
}

.quiz-start p {
    margin-bottom: 28px;
    font-size: 1.15rem;
    color: #cbd5e1;
}

.quiz-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    font-size: 0.95rem;
    color: #94a3b8;
}

.question-text {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 28px;
    line-height: 1.5;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
}

.option {
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1.05rem;
}

.option:hover {
    background: rgba(129, 140, 248, 0.15);
    border-color: #818cf8;
}

.option.selected {
    background: rgba(129, 140, 248, 0.25);
    border-color: #818cf8;
}

.option.correct {
    background: rgba(34, 197, 94, 0.2);
    border-color: #22c55e;
}

.option.wrong {
    background: rgba(239, 68, 68, 0.2);
    border-color: #ef4444;
}

.result {
    text-align: center;
}

.result h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
}

.result-score {
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
}

#result-message {
    margin-bottom: 28px;
    font-size: 1.15rem;
    color: #cbd5e1;
}

.hidden {
    display: none;
}

/* About */
.about {
    padding: 100px 0;
}

.about-card {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    padding: 40px;
    color: #cbd5e1;
    font-size: 1.1rem;
}

.about-card p {
    margin-bottom: 14px;
}

/* Footer */
footer {
    text-align: center;
    padding: 28px;
    color: #64748b;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.95rem;
}

/* Адаптив */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    .nav-links {
        display: none;
    }
    .test-container {
        padding: 28px 20px;
    }
}
