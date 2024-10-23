let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#Comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd]
}

const drawGame = () => {
    msg.innerText = "Draw Was Draw. Play again !"
    msg.style.backgroundColor = "#081b31"

}
    const showWinner = (userWin,userChoice,CompChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win ! Your ${userChoice} beats ${CompChoice}`
            msg.style.backgroundColor = "green"
        } else {
            CompScore++;
            compScorePara.innerText = CompScore;
            msg.innerText = `You lose !${CompChoice} beats yours ${userChoice}`
            msg.style.backgroundColor = "red"
        }
    }

const playGame = (userChoice) => {
    //Generate computer choice
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper ,scissors
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        } else {
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});


