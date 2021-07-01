/*-------------------------------- Constants --------------------------------*/

import { getRandomMovieQuestion, getRandomCodingQuestion, getRandomHistoryQuestion, getRandomScienceQuestion, getRandomQuestion } from "../Data/questions.js" // Importing functions from other JS sheet that will handle the grabbing of random questions.

const colorScheme = {
    dark: "",
    change: function () {
      console.log(colorScheme.dark)
      colorScheme.dark = colorScheme.dark ? "" : "dark"
      document.querySelector("body").setAttribute("class", colorScheme.dark)
      console.log(colorScheme.dark)
    }
}
/*-------------------------------- Variables --------------------------------*/

let question
let currentAnswers
let score = 0
let currentQuestion
let objectArray = []
let previousQuestions = []
let category = ''
let questionsAnswered = 0

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.querySelector('#movie-button')
const codingBtn = document.querySelector('#coding-button')
const historyBtn = document.querySelector('#history-button')
const scienceBtn = document.querySelector('#science-button')
const randomBtn = document.querySelector('#random-button')
const questionHolder = document.querySelector('#question-holder')
const answerHolder = document.querySelector('#answer-holder')
const darkMode = document.getElementById('dark-mode')
let answerOne = document.querySelector('#answer-1')
let answerTwo = document.querySelector('#answer-2')
let answerThree = document.querySelector('#answer-3')
let displayScore = document.getElementById('score')
const endClap = new Audio("../audio/fox.mp3")
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
codingBtn.addEventListener('click', initCodingQuiz)
historyBtn.addEventListener('click', initHistoryQuiz)
scienceBtn.addEventListener('click', initScienceQuiz)
randomBtn.addEventListener('click', initRandomQuiz)
answerOne.addEventListener('click', checkResponse)
answerTwo.addEventListener('click', checkResponse)
answerThree.addEventListener('click', checkResponse)
darkMode.addEventListener('click', () => {document.body.classList.toggle('dark')})

/*-------------------------------- Functions --------------------------------*/

function initMovieQuiz() {
    category = 'movie'
    objectArray = getRandomMovieQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Movie Array.

function initCodingQuiz() {
    category = 'coding'
    objectArray = getRandomCodingQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Coding Array.

function initHistoryQuiz() {
    category = 'history'
    objectArray = getRandomHistoryQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from History Array.

function initScienceQuiz() {
    category = 'science'
    objectArray = getRandomScienceQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Science Array.

function initRandomQuiz() {
    category = 'random'
    objectArray = getRandomQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Random Array.

function checkResponse (e) {
    if (e.target.id === objectArray.answer) score += 10;
    questionsAnswered++
    switch(category){
        case 'movie':
            objectArray = getRandomMovieQuestion(questionsAnswered)
            break;
        case 'coding':
            objectArray = getRandomCodingQuestion(questionsAnswered)
            break;
        case 'history':
            objectArray = getRandomHistoryQuestion(questionsAnswered)
            break;
        case 'science':
            objectArray = getRandomScienceQuestion(questionsAnswered)
            break;
        case 'random':
            objectArray = getRandomQuestion(questionsAnswered)
            break;
    }
    if (questionsAnswered == 10) {
        renderEndScreen()
    } else {
    render()
    // This checks if the answer is correct and adds score.
    // Also sets the category of the questions so they are from the same category.
    }
}

function render() {
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
    console.log(score)
    displayScore.innerHTML = `Score: ${score}` // Gives real time score.
    // This will render the question as well as the answers for all categories.
    let timeLeft = 100
    let timer = setInterval(function(){
    timeLeft -= 1
    console.log(timeLeft)
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderEndScreen()
        clearInterval(timer)
    }
    }, 1000)
}

function renderEndScreen() {
    questionHolder.innerHTML = `Thanks for playing your score is ${score}!`
    answerHolder.innerHTML = ''
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerThree.style.display = "none"
    questionsAnswered = 0
    displayScore.innerHTML = `Score: ${score}`
    endClap.play()
}