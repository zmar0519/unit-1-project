/*-------------------------------- Constants --------------------------------*/

import { getRandomMovieQuestion, getRandomCodingQuestion, getRandomHistoryQuestion, getRandomScienceQuestion, getRandomQuestion } from "../Data/questions.js" // Importing functions from other JS sheet that will handle the grabbing of random questions.

/*-------------------------------- Variables --------------------------------*/

let question
let questionAnswer
let score
let previousQuestions = []
let currentQuestion

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.querySelector('#movie-button')
const codingBtn = document.querySelector('#coding-button')
const historyBtn = document.querySelector('#history-button')
const scienceBtn = document.querySelector('#science-button')
const randomBtn = document.querySelector('#random-button')
const questionHolder = document.querySelector('#question-holder')

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
codingBtn.addEventListener('click', initCodingQuiz)
historyBtn.addEventListener('click', initHistoryQuiz)
scienceBtn.addEventListener('click', initScienceQuiz)
randomBtn.addEventListener('click', initRandomQuiz)

/*-------------------------------- Functions --------------------------------*/

function initMovieQuiz() {
    currentQuestion = getRandomMovieQuestion().question
    questionHolder.innerHTML = `${currentQuestion}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Movie Array.

function initCodingQuiz() {
    currentQuestion = getRandomCodingQuestion().question
    questionHolder.innerHTML = `${currentQuestion}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Coding Array.

function initHistoryQuiz(){
    currentQuestion = getRandomHistoryQuestion().question
    questionHolder.innerHTML = `${currentQuestion}`
} // This makes the logic for each of the buttons work. Pressing will return a question from History Array.

function initScienceQuiz(){
    currentQuestion = getRandomScienceQuestion().question
    questionHolder.innerHTML = `${currentQuestion}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Science Array.

function initRandomQuiz() {
    currentQuestion = getRandomQuestion().question
    questionHolder.innerHTML = `${currentQuestion}`
} // This makes the logic for each of the buttons work. Pressing will return a question from Random Array.