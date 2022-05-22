var programming_languages = [
 "red" , "blue" , "fearless" , "twilight" , "jumanji" , "anaconda" , "eldorado"
  , "lost" , "rocky" , "talash" , "broken", "badlapur", "castaway"
]

let answer = ''
let maxWrong = 6
let guessed = []
let mistakes = 0

// to pick a random word from the list of words 
function randomWord(){
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)]


}

// generate the alphabet buttons 

function generateButtons(){
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>`
    
      <button class="btn btn-lg btn-primary m-2" id = "` +letter+ `"
      onClick = "handleGuess('` +letter+ `')" > ` +letter+ `
      </button>
    
    
    `).join('')
    document.getElementById('keyboard').innerHTML = buttonsHTML
}

document.getElementById('maxWrong').innerHTML = maxWrong

function handleGuess(chosenletter){
    guessed.indexOf(chosenletter) === -1 ? guessed.push(chosenletter) : null
    document.getElementById(chosenletter).setAttribute('disabled',true)
      
    if(answer.indexOf(chosenletter)>=0){
        guessedWord()
        checkIfGameWon()
    } else if (answer.indexOf(chosenletter) === -1){
        mistakes++
        updateMistake()
        checkIfGameLost()
        updateHangmanPicture()
    }
}

function updateHangmanPicture(){
  const img = document.getElementById("hangmanPic").src = './images/' + mistakes + '.jpg'
 console.log(img)
}


function checkIfGameWon(){
    if (wordStatus === answer){
        document.getElementById("keyboard").innerHTML = "you won!"
    }
}

function checkIfGameLost(){
    if (mistakes === maxWrong){
        document.getElementById("keyboard").innerHTML = "you lost!"
        document.getElementById('wordSpotlight').innerHTML = " The Answer was " + answer
    }
}

function updateMistake(){
    document.getElementById('mistakes').innerHTML = mistakes
}

function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter)>=0? letter : " _ ")).join('')
    document.getElementById('wordSpotlight').innerHTML = wordStatus
}

function reset(){
    mistakes = 0
    guessed = []
    document.getElementById('hangmanPic').src = './images/0.jpg'
   
    randomWord()
    guessedWord()
    updateMistake()
    generateButtons()
}

randomWord()

generateButtons()
guessedWord()
// randomWord()