/*-------------------------------- Constants --------------------------------*/

import { getRandomMovieQuestion, getRandomCodingQuestion, getRandomHistoryQuestion, getRandomScienceQuestion } from "../Data/questions.js" // Importing functions from other JS sheet that will handle the grabbing of random questions.

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

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
// codingBtn.addEventListener('click', initCodingQuiz)
// historyBtn.addEventListener('click', initHistoryQuiz)
// scienceBtn.addEventListener('click', initScienceQuiz)
// randomBtn.addEventListener('click', initRandomQuiz)

/*-------------------------------- Functions --------------------------------*/

function initMovieQuiz() {
questionHolder.innerHTML = "`${currentQuestion}`"
}


function initCodingQuiz()

function initHistoryQuiz()

function initScienceQuiz()

function initRandomQuiz()