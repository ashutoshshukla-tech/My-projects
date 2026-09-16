const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
            { text: "Home Text Markup Language", correct: false }
        ]
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },

    {
        question: "Which language is used to add interactivity to a web page?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    },

    {
        question: "Which HTML tag is used to create a button?",
        answers: [
            { text: "<button>", correct: true },
            { text: "<btn>", correct: false },
            { text: "<inputbutton>", correct: false },
            { text: "<click>", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");


let currentQuestionIndex = 0;
let score = 0;


// Quiz start
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = "Next";

    resultElement.classList.add("hide");
    quizElement.classList.remove("hide");

    showQuestion();
}


// Question display karna
function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML =
        (currentQuestionIndex + 1) + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("answer-btn");

        answerButtons.appendChild(button);


        if (answer.correct) {
            button.dataset.correct = "true";
        }


        button.addEventListener("click", selectAnswer);

    });
}


// Previous buttons remove karna
function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


// Answer select karna
function selectAnswer(event) {

    const selectedButton = event.target;

    const isCorrect = selectedButton.dataset.correct === "true";


    if (isCorrect) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("wrong");

    }


    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;

    });


    nextButton.style.display = "block";
}


// Next button
nextButton.addEventListener("click", () => {

    currentQuestionIndex++;


    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// Result show karna
function showResult() {

    quizElement.classList.add("hide");
    resultElement.classList.remove("hide");

    scoreElement.innerHTML =
        "Your Score: " + score + " / " + questions.length;
}


// Restart quiz
function restartQuiz() {

    startQuiz();

}


// Quiz start
startQuiz();