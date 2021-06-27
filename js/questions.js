function getRandomMovieQuestion() {
    return movieTrivia[Math.floor(Math.random() * (movieTrivia.length - 1))] // This should generate a random movie question.
}

function getRandomCodingQuestion() {
    return codingTrivia[Math.floor(Math.random() * (codingTivia.length - 1))] // This should generate a random coding question.
}

function getRandomHistoryQuestion() {
    return historyTrivia[Math.floor(Math.random() * (historyTrivia.length - 1))] // This should generate a random history question.
}

function getRandomScienceQuestion() {
    return scienceTrivia[Math.floor(Math.random() * (scienceTrivia.length - 1))] // This should generate a random science question.
}

function getRandomQuestion() {
    return randomTrivia[Math.floor(Math.random() * (scienceTrivia.length - 1))] // This should generate a random question from the large array
}


const movieTrivia = [
    'In the matrix does Neo take the blue pill or the red pill?',
    'Who played Forest Gump in the movie Forest Gump?',
    'Who did Rose tell she would never let go in Titanic(immediately before letting go)?',
    "How many suns does Luke's home plannet of Tatoine have?",
    "What movie has the record for most 'F-Bombs' in a single move?",
    "What character in Monty Python famously says 'Tis just a flesh wound?'",
    "What is the name of the movie about the Jamaican Bobsled team?",
    "Who directed Titanic, Avatar, and Terminator?",
    "Who is the main antagonist from the Harry Potter series?",
    "Which Indianna Jone's movie starred Shia Labeouf?"
] // Array of movie questions.

const codingTrivia = [
    'What year was the first computer virus created in?',
    'How many different programming languages are there?',
    'What is the format that is used for transporting and storing code called?',
    'What is the code used to perform a specific task called?',
    'JavaScript is which of the following?',
    'What type of variable would a line of text be?',
    'Which syntax for defining a variable is no longer considered best practice?',
    'Which of the following languages is not a frontend language?',
    'Which of the following tags denotes a header in HTML',
    'What is the most popular coding language in the world according to GitHub?'
] // Array of coding questions.

const historyTrivia = [
    'What was the first sport played on the Moon?',
    'How many plays did Shakespear write?',
    'Who was the first person to circumnavigate the globe?',
    'How many ammendments are there to the constitution?',
    'What year did the United States become a country?',
    'What president is on the $20 bill?',
    'How many blimps are there in the world?',
    'During the Cold War what beverage company had the 7th largest Navy in the world?',
    'In 1932 Australia declared war against what type of bird?',
    'What was the crown at the Empire State Building originally for?'
] // Array of history question.

const scienceTrivia = [
    'What is the second element on the periodic table?',
    'How many states of matter are there?',
    'What is the powerhouse of the cell?',
    'Who came up with the theory of relativity?',
    'Which planet has the most moons?',
    "What does it mean if a cloud has nimbus in its name?",
    'What is the average BPM of a hummingbirds heart?',
    'How many new species are discovered each year on average?',
    'How many eggs does a queen bee lay in a day?',
    'How fast does a skydiving person fall when they hit terminal velocity?'
] // Array of scient questions.

const randomTrivia = [
    'In the matrix does Neo take the blue pill or the red pill?',
    'Who played Forest Gump in the movie Forest Gump?',
    'Who did Rose tell she would never let go in Titanic(immediately before letting go)?',
    "How many suns does Luke's home plannet of Tatoine have?",
    "What movie has the record for most 'F-Bombs' in a single move?",
    "What character in Monty Python famously says 'Tis just a flesh wound?'",
    "What is the name of the movie about the Jamaican Bobsled team?",
    "Who directed Titanic, Avatar, and Terminator?",
    "Who is the main antagonist from the Harry Potter series?",
    "Which Indianna Jone's movie starred Shia Labeouf?",
    'What year was the first computer virus created in?',
    'How many different programming languages are there?',
    'What is the format that is used for transporting and storing code called?',
    'What is the code used to perform a specific task called?',
    'JavaScript is which of the following?',
    'What type of variable would a line of text be?',
    'Which syntax for defining a variable is no longer considered best practice?',
    'Which of the following languages is not a frontend language?',
    'Which of the following tags denotes a header in HTML',
    'What is the most popular coding language in the world according to GitHub?',
    'What was the first sport played on the Moon?',
    'How many plays did Shakespear write?',
    'Who was the first person to circumnavigate the globe?',
    'How many ammendments are there to the constitution?',
    'What year did the United States become a country?',
    'What president is on the $20 bill?',
    'How many blimps are there in the world?',
    'During the Cold War what beverage company had the 7th largest Navy in the world?',
    'In 1932 Australia declared war against what type of bird?',
    'What was the crown at the Empire State Building originally for?',
    'What is the second element on the periodic table?',
    'How many states of matter are there?',
    'What is the powerhouse of the cell?',
    'Who came up with the theory of relativity?',
    'Which planet has the most moons?',
    "What does it mean if a cloud has nimbus in its name?",
    'What is the average BPM of a hummingbirds heart?',
    'How many new species are discovered each year on average?',
    'How many eggs does a queen bee lay in a day?',
    'How fast does a skydiving person fall when they hit terminal velocity?'
] // Array that has all the questions in it.

export {
    getRandomMovieQuestion,
    getRandomCodingQuestion,
    getRandomHistoryQuestion,
    getRandomScienceQuestion
  } // Exporting the functions at the top of the page to my main JS page so that I can use/call them there.