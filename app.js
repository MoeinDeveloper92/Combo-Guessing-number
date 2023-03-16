const output = document.querySelector('.output')
const message = document.createElement('div');
const gameArea = document.createElement('div');
const btn = document.createElement('button');

const game = {
    score: 0,
    num: 2,
    guesses: 0
}

output.append(message);
output.append(gameArea)
output.append(btn)
btn.classList.add('btn')
message.classList.add('message')


btn.textContent = "Start Game"
outputMessage("Click button to start game")


btn.addEventListener('click', e => {
    if (btn.textContent === "Start Game") {
        game.score = 0
        game.guesses = 0
        makeBoard();
        btn.textContent = "Check Answer"
        outputMessage("Guess the combo and Adjust the dials")
    } else if (btn.textContent = "Check Answer") {
        game.guesses++;
        checkAnswer();
    }
})


function makeBoard() {
    gameArea.innerHTML = ""
    for (let x = 0; x < game.num; x++) {
        const ele = document.createElement('input')
        ele.setAttribute('type', 'number');
        ele.max = 9
        ele.min = 0
        // here once we have cretaed a node, we need to assign a value to it as a hidden number and the user should gues what is that number
        ele.correct = Math.floor(Math.random() * 10)
        ele.value = 5
        ele.classList.add('dial');
        gameArea.append(ele);
    }
}



// below we want to have a function in order to guess the answer
// we run the funtion if the check function gets cleicked
function checkAnswer() {
    let winners = 0;
    const combos = document.querySelectorAll('.dial');
    // we have got a nodeList of all of our input list
    combos.forEach((el) => {
        el.style.color = "white"

        if (el.correct == el.value) {
            winners++;
            el.style.backgroundColor = "green"
        } else if (el.correct > el.value) {
            el.style.backgroundColor = "red"
        } else if (el.correct < el.value) {
            el.style.backgroundColor = "blue"
        }
    })
    if (winners === combos.length) {
        outputMessage("Game Over!!!")
        gameOver();
    } else {
        outputMessage(`You got ${winners} of ${combos.length}-(${game.guesses} guesses)`)
    }
}


function gameOver() {
    outputMessage(`Game Over and it took ${game.guesses} Guesses`)
    btn.textContent = "Start Game"
}


function outputMessage(html) {
    message.innerHTML = html;
}