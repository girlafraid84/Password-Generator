const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// create variable for random password
// create function that 1. picks 15 random items from the above array, and renders them onto the screen
// function will be called getPasswords()
let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")
let passwordBtn = document.getElementById("generate-password-btn")
let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getPasswords() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacter()
    }
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacter()
    }
    passwordElOne.textContent = randomPasswordOne
    passwordElTwo.textContent = randomPasswordTwo
}









