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
let score
let currentQuestion
let objectArray = []
let previousQuestions = []

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.querySelector('#movie-button')
const codingBtn = document.querySelector('#coding-button')
const historyBtn = document.querySelector('#history-button')
const scienceBtn = document.querySelector('#science-button')
const randomBtn = document.querySelector('#random-button')
const questionHolder = document.querySelector('#question-holder')
const answerHolder = document.querySelector('#answer-holder')
let answerOne = document.querySelector('#answer-1')
let answerTwo = document.querySelector('#answer-2')
let answerThree = document.querySelector('#answer-3')

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
codingBtn.addEventListener('click', initCodingQuiz)
historyBtn.addEventListener('click', initHistoryQuiz)
scienceBtn.addEventListener('click', initScienceQuiz)
randomBtn.addEventListener('click', initRandomQuiz)
answerOne.addEventListener('click', checkResponse)
answerTwo.addEventListener('click', checkResponse)
answerThree.addEventListener('click', checkResponse)

/*-------------------------------- Functions --------------------------------*/

function initMovieQuiz() {
    objectArray = getRandomMovieQuestion()
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Movie Array.

function initCodingQuiz() {
    objectArray = getRandomCodingQuestion()
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Coding Array.

function initHistoryQuiz() {
    objectArray = getRandomHistoryQuestion()
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
} // This makes the logic for each of the buttons work. Pressing will return a question from History Array.

function initScienceQuiz() {
    objectArray = getRandomScienceQuestion()
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Science Array.

function initRandomQuiz() {
    objectArray = getRandomQuestion()
    currentQuestion = objectArray.question
    questionHolder.innerHTML = `${currentQuestion}`
    currentAnswers = objectArray.options
    answerHolder.innerHTML = `${currentAnswers}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Random Array.

function checkResponse () {
    let answer = ''
    if (target.id === 'button-1') { answer = objectArray.answer}
}