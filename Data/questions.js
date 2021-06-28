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
    { 
        question: 'In the matrix does Neo take the blue pill or the red pill?',
        options: ['Red','Blue','Neither'],
        answer: '1'},
    
    {
        question: 'Who played Forest Gump in the movie Forest Gump?',
        options: ['Robin Williams', 'Tom Hanks', 'Robert De Niro'],
        answer: '2'},

    {
        question: 'Who did Rose tell she would never let go in Titanic(immediately before letting go)?',
        options: ['Jack', 'Bill', 'Frank'],
        answer: '1'},
    
    {
        question: "How many suns does Luke's home plannet of Tatoine have?",
        options: ['1', '2', '4'],
        answer: '2'},

    {
        questions: "What movie has the record for most 'F-Bombs' in a single move?",
        options: ['Uncut Gems', 'End of Watch', 'Wolf of Wall Street'],
        answer: '3'},
    
    {
        question: "What character in Monty Python famously says 'Tis but a scratch?'",
        options: ['The Black Knight', 'Lancelot', 'The Green Knight'],
        answer: '1'},
    

    {
        question: 'What is the name of the movie about the Jamaican Bobsled team?',
        options: ['Bobsled: The Dream', 'The Challenge', 'Cool Runnings'],
        answer: '3'},
    
    {
        question: "Who directed Titanic, Avatar, and Terminator?",
        options: ['Steven Spielberg', 'James Cameron', 'Michael Bay'],
        answer: '2'},

    {
        question: 'Who is the main antagonist from the Harry Potter series?',
        options: ['Voldemort', 'Harry Potter', 'Dumbledore'],
        answer: '1'},
    
    {
        question: "Which Indianna Jone's movie starred Shia Labeouf?",
        options: ['Raiders of the Lost Ark', 'Kingdom of the Crystal Skull', 'The Last Crusade'],
        answer: '2'},
    ] // Array of movie questions.

const codingTrivia = [
    {
        question: 'What year was the first computer virus created in?',
        options: ['1976', '1986', '1991'],
        answer: '2'},

    {
        question: 'How many different programming languages are there?',
        options: ['Over 300', 'Over 700', 'Over 1000'],
        answer: '2'},

    {
        question: 'What is the format that is used for transporting and storing code called?',
        options: ['JSON', 'HTML', 'HTTPS'],
        answer: '1'},

    {
        question: 'What is the code used to perform a specific task called?',
        options: ['Variable', 'Object', 'Function'],
        answer: '3'},

    {
        question: 'JavaScript is which of the following?',
        options: ['Single Paradigm', 'Single Threaded', 'The language of the internet'],
        answer: '3'},

    {
        question: 'What type of variable would a line of text be?',
        options: ['Boolean', 'String', 'Operator'],
        answer: '2'},

    {
        question: 'Which syntax for defining a variable is no longer considered best practice?',
        options: ['Let', 'Const', 'Var'],
        answer: '3'},

    {
        question: 'Which of the following languages is not a frontend language?',
        options: ['Java', 'JavaScript', 'HTML'],
        answer: '1'},

    {
        question: 'Which of the following tags denotes a header text in HTML',
        options: ['<p>', '<header>', '<h1>'],
        answer: '3'},

    {
        questions: 'Currently, what is the most popular coding language in the world according to GitHub?',
        options: ['JavaScript', 'Python', 'Java'],
        answer: '1'}
] // Array of coding questions.

const historyTrivia = [
    {
        question: 'What was the first sport played on the Moon?',
        options: ['Baseball', 'Tennis', 'Golf'],
        answer: '3'},

    {
        question: 'How many plays did Shakespear write?',
        options: ['21', '26', '37'],
        answer: '3'},
    
    {
        question: 'Who was the first person to circumnavigate the globe?',
        options: ['Christopher Columbus', 'Ferdinand Mangellan', 'Phileas Fogg'],
        answer: '2'},
    
    {
        question: 'How many ammendments are there to the constitution?',
        options: ['21', '27', '31'],
        answer: '2'},
    
    {
        question: 'What year did the United States become a country?',
        options: ['1776', '1783', '1791'],
        answer: '1'},
        
    {
        question: 'What president is on the $20 bill?',
        options: ['Ulysses S. Grant', 'Alexander Hamilton', 'Andrew Jackson'],
        answer: '3'},
    
    {
        question: 'How many blimps are there in the world?',
        options: ['25', '76', '111'],
        answer: '1'},
    
    {
        question: 'During the Cold War what beverage company had the 7th largest Navy in the world?',
        options: ['Coca Cola', 'Pepsi Co.', 'Anheuser-Busch'],
        answer: '2'},
        
    {
        question: 'In 1932 Australia declared war against what type of bird?',
        options: ['Emus', 'Ostriches', 'Southern Cassowary'],
        answer: '1'},

    {
        question: 'What was the crown at the Empire State Building originally for?',
        options: ['Dropping for Airships', 'Observation Deck', 'Bungee Jumping'],
        answer: '1'},    
] // Array of history question.

const scienceTrivia = [
    {
        question: 'What is the second element on the periodic table?',
        options: ['Hydrogen', 'Oxygen', 'Helium'],
        answer: '3'},

    {
        question: 'How many states of matter are there?',
        options: ['3', '4', '5'],
        answer: '2'},

    {
        question: 'What is the powerhouse of the cell?',
        options: ['Mitochondria', 'Lysosomes', 'Nucleus'],
        answer: '1'},
    
    {
        question: 'Who came up with the theory of relativity?',
        options: ['Einstein', 'Galileo', 'Hawking'],
        answer: '1'},

    {
        question: 'Which planet has the most moons?',
        options: ['Saturn', 'Jupiter', 'Earth'],
        answer: '2'},

    {
        question: 'What does it mean if a cloud has nimbus in its name?',
        options: ['It is in the stratosphere', 'It contains precipitation', 'It will cause thunderstorms'],
        answer: '3'},
        
    {
        question: 'What is the average BPM of a hummingbirds heart?',
        options: ['210', '567', '1270'],
        answer: '3'},
    
    {
        question: 'How many new species are discovered each year on average?',
        options: ['18', '1800', '3450'],
        answer: '2'},

    {
        question: 'How many eggs can a queen bee lay in a day?',
        options: ['500+', '3000+', '5000+'],
        answer: '2'},

    {
        question: 'How fast does a skydiving person fall when they hit terminal velocity?',
        options: ['80mph', '100mph', '120mph'],
        answer: '3'},    
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