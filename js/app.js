/*-------------------------------- Constants --------------------------------*/

import { getRandomMovieQuestion, getRandomCodingQuestion, getRandomHistoryQuestion, getRandomScienceQuestion, getRandomQuestion } from "../Data/questions.js" // Importing functions from other JS sheet that will handle the grabbing of random questions.

const colorScheme = {
    dark: "",
    change: function () {
      colorScheme.dark = colorScheme.dark ? "" : "dark"
      document.querySelector("body").setAttribute("class", colorScheme.dark)
      colorScheme.dark ? lightDarkBtn.innerText = 'Light Mode' : lightDarkBtn.innerText = 'Dark Mode'
    }
}
/*-------------------------------- Variables --------------------------------*/

let question
let currentAnswers
let score = 0
let currentQuestion
let objectArray = []
let category = ''
let questionsAnswered = 0
let timer

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.querySelector('#movie-button')
const codingBtn = document.querySelector('#coding-button')
const historyBtn = document.querySelector('#history-button')
const scienceBtn = document.querySelector('#science-button')
const randomBtn = document.querySelector('#random-button')
const questionHolder = document.querySelector('#question-holder')
const answerHolder = document.querySelector('#answer-holder')
const answerOne = document.querySelector('#answer-1')
const answerTwo = document.querySelector('#answer-2')
const answerThree = document.querySelector('#answer-3')
const displayScore = document.getElementById('score')
const countdownEl = document.getElementById('countdown')
const lightDarkBtn = document.querySelector("#light-dark-button")
// const endClap = new Audio("../audio/clap.wav")

/*----------------------------- Event Listeners -----------------------------*/

movieBtn.addEventListener('click', initMovieQuiz)
codingBtn.addEventListener('click', initCodingQuiz)
historyBtn.addEventListener('click', initHistoryQuiz)
scienceBtn.addEventListener('click', initScienceQuiz)
randomBtn.addEventListener('click', initRandomQuiz)
answerOne.addEventListener('click', checkResponse)
answerTwo.addEventListener('click', checkResponse)
answerThree.addEventListener('click', checkResponse)
lightDarkBtn.addEventListener("click", colorScheme.change)

/*-------------------------------- Functions --------------------------------*/

answerOne.style.display = "none"
answerTwo.style.display = "none"
answerThree.style.display = "none"

function initMovieQuiz() {
    answerOne.style.display = ""
    answerTwo.style.display = ""
    answerThree.style.display = ""
    let timeLeft = 100
    timer = setInterval(function(){
    timeLeft -= 1
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderLossScreen()
        clearInterval(timer)
    }
    }, 1000)
    category = 'movie'
    objectArray = getRandomMovieQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Movie Array.

function initCodingQuiz() {
    answerOne.style.display = ""
    answerTwo.style.display = ""
    answerThree.style.display = ""
    let timeLeft = 100
    timer = setInterval(function(){
    timeLeft -= 1
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderLossScreen()
        clearInterval(timer)
    }
    }, 1000)
    category = 'coding'
    objectArray = getRandomCodingQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Coding Array.

function initHistoryQuiz() {
    answerOne.style.display = ""
    answerTwo.style.display = ""
    answerThree.style.display = ""
    let timeLeft = 100
    timer = setInterval(function(){
    timeLeft -= 1
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderLossScreen()
        clearInterval(timer)
    }
    }, 1000)
    category = 'history'
    objectArray = getRandomHistoryQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from History Array.

function initScienceQuiz() {
    answerOne.style.display = ""
    answerTwo.style.display = ""
    answerThree.style.display = ""
    let timeLeft = 100
    timer = setInterval(function(){
    timeLeft -= 1
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderLossScreen()
        clearInterval(timer)
    }
    }, 1000)
    category = 'science'
    objectArray = getRandomScienceQuestion(questionsAnswered)
    render()
} // This makes the logic for each of the buttons work. Pressing will return a question from Science Array.

function initRandomQuiz() {
    answerOne.style.display = ""
    answerTwo.style.display = ""
    answerThree.style.display = ""
    let timeLeft = 100
    timer = setInterval(function(){
    timeLeft -= 1
    countdownEl.textContent = `${timeLeft} seconds remaining.`
    if (timeLeft < 1) {
        renderLossScreen()
        clearInterval(timer)
    }
    }, 1000)
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
        console.log(questionsAnswered)
        clearInterval(timer)
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
    displayScore.innerHTML = `Score: ${score}` // Gives real time score.
    // This will render the question as well as the answers for all categories.
}

function renderEndScreen() {
    questionHolder.innerHTML = `Thanks for playing your score is ${score}!`
    answerHolder.innerHTML = ''
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerThree.style.display = "none"
    questionsAnswered = 0
    displayScore.innerHTML = `Score: ${score}`
}

function renderLossScreen() {
    questionHolder.innerHTML = `You ran out of time you lose! Get wrekt kid!`
    answerHolder.innerHTML = ''
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerThree.style.display = "none"
    questionsAnswered = 0
    displayScore.innerHTML = `Score: 0`
}

checkUserColorSchemePreference()

function checkUserColorSchemePreference() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    !colorScheme.dark
  ) {
    colorScheme.change()
  }
}