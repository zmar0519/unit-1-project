function getRandomMovieQuestion() {
    return movieTrivia[Math.floor(Math.random() * (movieTrivia.length - 1))] // This should generate a random movie question.
}

function getRandomCodingQuestion() {
    return codingTrivia[Math.floor(Math.random() * (codingTrivia.length - 1))] // This should generate a random coding question.
}

function getRandomHistoryQuestion(question) {
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
        options: ['1. Red',' 2. Blue ',' 3. Neither'],
        answer: '1'},
    
    {
        question: 'Who played Forest Gump in the movie Forest Gump?',
        options: ['1. Robin Williams', ' 2. Tom Hanks', ' 3. Robert De Niro'],
        answer: '2'},

    {
        question: 'Who did Rose tell she would never let go in Titanic (immediately before letting go)?',
        options: ['1. Jack', ' 2. Bill ', ' 3. Frank '],
        answer: '1'},
    
    {
        question: "How many sun(s) does Luke's home plannet of Tatoine have?",
        options: ['1. 1 sun', ' 2. 2 suns ', ' 3. 4 suns'],
        answer: '2'},

    {
        question: "What movie has the record for most 'F-Bombs' in a single move?",
        options: ['1. Uncut Gems', ' 2. End of Watch', ' 3. Wolf of Wall Street'],
        answer: '3'},
    
    {
        question: "What character in Monty Python famously says 'Tis but a scratch?'",
        options: ['1. The Black Knight', ' 2. Lancelot ', ' 3. The Green Knight '],
        answer: '1'},

    {
        question: 'What is the name of the movie about the Jamaican Bobsled team?',
        options: ['1. Bobsled: The Dream', ' 2. The Challenge', ' 3. Cool Runnings '],
        answer: '3'},
    
    {
        question: "Who directed Titanic, Avatar, and Terminator?",
        options: ['1. Steven Spielberg', ' 2. James Cameron', ' 3. Michael Bay '],
        answer: '2'},

    {
        question: 'Who is the main antagonist from the Harry Potter series?',
        options: ['1. Voldemort', ' 2. Harry Potter', ' 3. Dumbledore '],
        answer: '1'},
    
    {
        question: "Which Indianna Jone's movie starred Shia Labeouf?",
        options: ['1. Raiders of the Lost Ark', ' 2. Kingdom of the Crystal Skull', ' 3. The Last Crusade'],
        answer: '2'}
] // Array of movie questions.

const codingTrivia = [
    {
        question: 'What year was the first computer virus created in?',
        options: ['1. 1976', ' 2. 1986', ' 3. 1991'],
        answer: '2'},

    {
        question: 'How many different programming languages are there?',
        options: ['1. Over 300', ' 2. Over 700', ' 3. Over 1000'],
        answer: '2'},

    {
        question: 'What is the format that is used for transporting and storing code called?',
        options: ['1. JSON', ' 2. HTML', ' 3. HTTPS'],
        answer: '1'},

    {
        question: 'What is the code used to perform a specific task called?',
        options: ['1. Variable', ' 2. Object', ' 3. Function'],
        answer: '3'},

    {
        question: 'JavaScript is which of the following?',
        options: ['1. Single Paradigm', ' 2. Single Threaded', ' 3. The language of the internet'],
        answer: '3'},

    {
        question: 'What type of variable would a line of text be?',
        options: ['1. Boolean', ' 2. String', ' 3. Operator'],
        answer: '2'},

    {
        question: 'Which syntax for defining a variable is no longer considered best practice?',
        options: ['1. Let', ' 2. Const', ' 3. Var'],
        answer: '3'},

    {
        question: 'Which of the following languages is not a frontend language?',
        options: ['1. Java', ' 2. JavaScript', ' 3. HTML'],
        answer: '1'},

    {
        question: 'Which of the following tags denotes a header text in HTML',
        options: ['1. p', ' 2. header', ' 3. h1'],
        answer: '3'},

    {
        questions: 'Currently, what is the most popular coding language in the world according to GitHub?',
        options: ['1. JavaScript', ' 2. Python', ' 3. Java'],
        answer: '1'}
] // Array of coding questions.

const historyTrivia = [
    {
        question: 'What was the first sport played on the Moon?',
        options: ['1. Baseball', ' 2. Tennis', ' 3. Golf'],
        answer: '3'},

    {
        question: 'How many plays did Shakespear write?',
        options: ['1. 21 plays', ' 2. 26 plays', ' 3. 37 plays'],
        answer: '3'},
    
    {
        question: 'Who was the first person to circumnavigate the globe?',
        options: ['1. Christopher Columbus', ' 2. Ferdinand Mangellan', ' 3. Phileas Fogg'],
        answer: '2'},
    
    {
        question: 'How many amendments are there to the constitution?',
        options: ['1. 21 amendments', ' 2. 27 amendments', ' 3. 31 amendments'],
        answer: '2'},
    
    {
        question: 'What year did the United States become a country?',
        options: ['1. 1776', ' 2. 1783', ' 3. 1791'],
        answer: '1'},
        
    {
        question: 'What president is on the $20 bill?',
        options: ['1. Ulysses S. Grant', ' 2. Alexander Hamilton', ' 3. Andrew Jackson'],
        answer: '3'},
    
    {
        question: 'How many blimps are there in the world?',
        options: ['1. 25 blimps', ' 2. 76 blimps', ' 3. 111 blimps'],
        answer: '1'},
    
    {
        question: 'During the Cold War what beverage company had the 7th largest Navy in the world?',
        options: ['1. Coca Cola', ' 2. Pepsi Co.', ' 3. Anheuser-Busch'],
        answer: '2'},
        
    {
        question: 'In 1932 Australia declared war against what type of bird?',
        options: ['1. Emus', ' 2. Ostriches', ' 3. Southern Cassowary'],
        answer: '1'},

    {
        question: 'What was the crown at the Empire State Building originally for?',
        options: ['1. Dropping for Airships', ' 2. Observation Deck', ' 3. Bungee Jumping'],
        answer: '1'},    
] // Array of history question.

const scienceTrivia = [
    {
        question: 'What is the second element on the periodic table?',
        options: ['1. Hydrogen', ' 2. Oxygen', ' 3. Helium'],
        answer: '3'},

    {
        question: 'How many states of matter are there?',
        options: ['1. 3 states of matter', ' 2. 4 states of matter', '3. 5 states of matter'],
        answer: '2'},

    {
        question: 'What is the powerhouse of the cell?',
        options: ['1. Mitochondria', ' 2. Lysosomes', ' 3. Nucleus'],
        answer: '1'},
    
    {
        question: 'Who came up with the theory of relativity?',
        options: ['1. Einstein', ' 2. Galileo', ' 3. Hawking'],
        answer: '1'},

    {
        question: 'Which planet has the most moons?',
        options: ['1. Saturn', ' 2. Jupiter', ' 3. Earth'],
        answer: '2'},

    {
        question: 'What does it mean if a cloud has nimbus in its name?',
        options: ['1. It is in the stratosphere', ' 2. It contains precipitation', ' 3. It will cause thunderstorms'],
        answer: '3'},
        
    {
        question: 'What is the average BPM of a hummingbirds heart?',
        options: ['1. 210 BPM', ' 2. 567 BPM', ' 3. 1270 BPM'],
        answer: '3'},
    
    {
        question: 'How many new species are discovered each year on average?',
        options: ['1. 18', ' 2. 1800', ' 3. 3450'],
        answer: '2'},

    {
        question: 'How many eggs can a queen bee lay in a day?',
        options: ['1. 500+', ' 2. 3000+', ' 3. 5000+'],
        answer: '2'},

    {
        question: 'How fast does a skydiving person fall when they hit terminal velocity?',
        options: ['1. 80mph', ' 2. 100mph', ' 3. 120mph'],
        answer: '3'},    
] // Array of science questions.

const randomTrivia = [
    {
        question: 'In the matrix does Neo take the blue pill or the red pill?',
        options: ['1. Red',' 2. Blue ',' 3. Neither'],
        answer: '1'},
        
    {
        question: 'Who played Forest Gump in the movie Forest Gump?',
        options: ['1. Robin Williams', ' 2. Tom Hanks', ' 3. Robert De Niro'],
        answer: '2'},

    {
        question: 'Who did Rose tell she would never let go in Titanic (immediately before letting go)?',
        options: ['1. Jack', ' 2. Bill ', ' 3. Frank '],
        answer: '1'},
    
    {
        question: "How many sun(s) does Luke's home plannet of Tatoine have?",
        options: ['1. 1 sun', ' 2. 2 suns ', ' 3. 4 suns'],
        answer: '2'},
    
    {
        question: "What movie has the record for most 'F-Bombs' in a single move?",
        options: ['1. Uncut Gems', ' 2. End of Watch', ' 3. Wolf of Wall Street'],
        answer: '3'},
        
    {
        question: "What character in Monty Python famously says 'Tis but a scratch?'",
        options: ['1. The Black Knight', ' 2. Lancelot ', ' 3. The Green Knight '],
        answer: '1'},
    
    {
        question: 'What is the name of the movie about the Jamaican Bobsled team?',
        options: ['1. Bobsled: The Dream', ' 2. The Challenge', ' 3. Cool Runnings '],
        answer: '3'},
        
    {
        question: "Who directed Titanic, Avatar, and Terminator?",
        options: ['1. Steven Spielberg', ' 2. James Cameron', ' 3. Michael Bay '],
        answer: '2'},
    
    {
        question: 'Who is the main antagonist from the Harry Potter series?',
        options: ['1. Voldemort', ' 2. Harry Potter', ' 3. Dumbledore '],
        answer: '1'},
        
    {
        question: "Which Indianna Jone's movie starred Shia Labeouf?",
        options: ['1. Raiders of the Lost Ark', ' 2. Kingdom of the Crystal Skull', ' 3. The Last Crusade'],
        answer: '2'},
    
    {
        question: 'What year was the first computer virus created in?',
        options: ['1. 1976', ' 2. 1986', ' 3. 1991'],
        answer: '2'},
    
    {
        question: 'How many different programming languages are there?',
        options: ['1. Over 300', ' 2. Over 700', ' 3. Over 1000'],
        answer: '2'},
    
    {
        question: 'What is the format that is used for transporting and storing code called?',
        options: ['1. JSON', ' 2. HTML', ' 3. HTTPS'],
        answer: '1'},
    
    {
        question: 'What is the code used to perform a specific task called?',
        options: ['1. Variable', ' 2. Object', ' 3. Function'],
        answer: '3'},
    
    {
        question: 'JavaScript is which of the following?',
        options: ['1. Single Paradigm', ' 2. Single Threaded', ' 3. The language of the internet'],
        answer: '3'},
    
    {
        question: 'What type of variable would a line of text be?',
        options: ['1. Boolean', ' 2. String', ' 3. Operator'],
        answer: '2'},
    
    {
        question: 'Which syntax for defining a variable is no longer considered best practice?',
        options: ['1. Let', ' 2. Const', ' 3. Var'],
        answer: '3'},
    
    {
        question: 'Which of the following languages is not a frontend language?',
        options: ['1. Java', ' 2. JavaScript', ' 3. HTML'],
        answer: '1'},
    
    {
        question: 'Which of the following tags denotes a header text in HTML',
        options: ['1. p', ' 2. header', ' 3. h1'],
        answer: '3'},
    
    {
        questions: 'Currently, what is the most popular coding language in the world according to GitHub?',
        options: ['1. JavaScript', ' 2. Python', ' 3. Java'],
        answer: '1'},
    
    {
        question: 'What was the first sport played on the Moon?',
        options: ['1. Baseball', ' 2. Tennis', ' 3. Golf'],
        answer: '3'},
    
    {
        question: 'How many plays did Shakespear write?',
        options: ['1. 21 plays', ' 2. 26 plays', ' 3. 37 plays'],
        answer: '3'},
        
    {
        question: 'Who was the first person to circumnavigate the globe?',
        options: ['1. Christopher Columbus', ' 2. Ferdinand Mangellan', ' 3. Phileas Fogg'],
        answer: '2'},
        
    {
        question: 'How many amendments are there to the constitution?',
        options: ['1. 21 amendments', ' 2. 27 amendments', ' 3. 31 amendments'],
        answer: '2'},
        
    {
        question: 'What year did the United States become a country?',
        options: ['1. 1776', ' 2. 1783', ' 3. 1791'],
        answer: '1'},
            
    {
        question: 'What president is on the $20 bill?',
        options: ['1. Ulysses S. Grant', ' 2. Alexander Hamilton', ' 3. Andrew Jackson'],
        answer: '3'},
        
    {
        question: 'How many blimps are there in the world?',
        options: ['1. 25 blimps', ' 2. 76 blimps', ' 3. 111 blimps'],
        answer: '1'},
        
    {
        question: 'During the Cold War what beverage company had the 7th largest Navy in the world?',
        options: ['1. Coca Cola', ' 2. Pepsi Co.', ' 3. Anheuser-Busch'],
        answer: '2'},
            
    {
        question: 'In 1932 Australia declared war against what type of bird?',
        options: ['1. Emus', ' 2. Ostriches', ' 3. Southern Cassowary'],
        answer: '1'},
    
    {
        question: 'What was the crown at the Empire State Building originally for?',
        options: ['1. Dropping for Airships', ' 2. Observation Deck', ' 3. Bungee Jumping'],
        answer: '1'},    
    
    {
        question: 'What is the second element on the periodic table?',
        options: ['1. Hydrogen', ' 2. Oxygen', ' 3. Helium'],
        answer: '3'},
    
    {
        question: 'How many states of matter are there?',
        options: ['1. 3 states of matter', ' 2. 4 states of matter', '3. 5 states of matter'],
        answer: '2'},
    
    {
        question: 'What is the powerhouse of the cell?',
        options: ['1. Mitochondria', ' 2. Lysosomes', ' 3. Nucleus'],
        answer: '1'},
        
    {
        question: 'Who came up with the theory of relativity?',
        options: ['1. Einstein', ' 2. Galileo', ' 3. Hawking'],
        answer: '1'},
    
    {
        question: 'Which planet has the most moons?',
        options: ['1. Saturn', ' 2. Jupiter', ' 3. Earth'],
        answer: '2'},
    
    {
        question: 'What does it mean if a cloud has nimbus in its name?',
        options: ['1. It is in the stratosphere', ' 2. It contains precipitation', ' 3. It will cause thunderstorms'],
        answer: '3'},
            
    {
        question: 'What is the average BPM of a hummingbirds heart?',
        options: ['1. 210 BPM', ' 2. 567 BPM', ' 3. 1270 BPM'],
        answer: '3'},
    
    {
        question: 'How many new species are discovered each year on average?',
        options: ['1. 18', ' 2. 1800', ' 3. 3450'],
        answer: '2'},

    {
        question: 'How many eggs can a queen bee lay in a day?',
        options: ['1. 500+', ' 2. 3000+', ' 3. 5000+'],
        answer: '2'},

    {
        question: 'How fast does a skydiving person fall when they hit terminal velocity?',
        options: ['1. 80mph', ' 2. 100mph', ' 3. 120mph'],
        answer: '3'},    
] // Array of all questions.

export {
    getRandomMovieQuestion,
    getRandomCodingQuestion,
    getRandomHistoryQuestion,
    getRandomScienceQuestion,
    getRandomQuestion
  } // Exporting the functions at the top of the page to my main JS page so that I can use/call them there.