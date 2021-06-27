/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let question
let questionAnswer
let score
let previousQuestions = []

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.querySelector('#movie-button')
const codingBtn = document.querySelector('#coding-button')
const historyBtn = document.querySelector('#history-button')
const scienceBtn = document.querySelector('#science-button')
const randomBtn = document.querySelector('#random-button')

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
codingBtn.addEventListener('click', initCodingQuiz)
historyBtn.addEventListener('click', initHistoryQuiz)
scienceBtn.addEventListener('click', initScienceQuiz)
randomBtn.addEventListener('click', initRandomQuiz)

/*-------------------------------- Functions --------------------------------*/

import { getRandomMovieQuestion, getRandomCodingQuestion, getRandomHistoryQuestion, getRandomScienceQuestion } from "../Data/questions.js"

function render() {

}