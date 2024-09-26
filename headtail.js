var userChoice = null;
var lastFlipResult = null;
var flipDone = false;

document.getElementById("headsBtn").onclick = function() {
    userChoice = "heads";
    document.getElementById("choice").textContent = "You chose Heads.";
    flipCoin();
    disableButtons();
};

document.getElementById("tailsBtn").onclick = function() {
    userChoice = "tails";
    document.getElementById("choice").textContent = "You chose Tails.";
    flipCoin();
    disableButtons();
};

function flipCoin() {
    if (userChoice === null) {
        document.getElementById("choice").textContent = "Choose first!";
        return;
    }

    flipDone = true;

    var randomNumber = Math.random();
    var resultText = document.getElementById("result");
    var coin = document.getElementById("coin");

    coin.classList.add("flip");

    setTimeout(function() {
        coin.classList.remove("flip");

        if (randomNumber < 0.5) {
            coin.src = "1.png";
            resultText.textContent = "It's Heads!";
            lastFlipResult = "heads";
        } else {
            coin.src = "2.png";
            resultText.textContent = "It's Tails!";
            lastFlipResult = "tails";
        }

        if (userChoice === lastFlipResult) {
            resultText.textContent += " YOU WIN!!! >▽<";
        } else {
            resultText.textContent += " you lose...╥﹏╥";
        }

        document.getElementById("history").textContent = "Last Flip: " + lastFlipResult + " (" + (userChoice === lastFlipResult ? "Win >▽<" : "Loss ╥﹏╥") + ")";

        document.getElementById("resetBtn").style.display = "inline";
    }, 1000);
}

function resetGame() {
    if (!flipDone) {
        document.getElementById("choice").textContent = "You didn't flip the coin yet!";
        return;
    }

    userChoice = null;
    flipDone = false;
    document.getElementById("choice").textContent = "Make your choice first!";
    document.getElementById("result").textContent = "";
    document.getElementById("coin").src = "1.png";
    document.getElementById("resetBtn").style.display = "none";
    enableButtons();
}

function disableButtons() {
    document.getElementById("headsBtn").disabled = true;
    document.getElementById("tailsBtn").disabled = true;
}

function enableButtons() {
    document.getElementById("headsBtn").disabled = false;
    document.getElementById("tailsBtn").disabled = false;
}

document.getElementById("resetBtn").onclick = resetGame;
