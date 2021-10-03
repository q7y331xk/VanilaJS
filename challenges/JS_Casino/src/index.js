const form = document.getElementById("form");

function randomGenerator(rangeNumber) {
    return (Math.ceil(Math.random() * rangeNumber));
}
function gamePlay(choseNumber, randomNumber) {
    let returnValue = -1;
    if (choseNumber == randomNumber) {
        returnValue = 1;
    } else {
        returnValue = 0;
    }
    return returnValue;
}


function game(event) {
    event.preventDefault();
    const rangeNumber = event.target[0].value;
    const choseNumber = event.target[1].value;
    const randomNumber = randomGenerator(rangeNumber);

    document.getElementById("choseNumber").innerText = choseNumber;
    document.getElementById("randomNumber").innerText = randomNumber;
    document.getElementsByClassName("hidden")[0].style.display = "block";

    const result = gamePlay(choseNumber, randomNumber);
    if (result == 1) {
        document.getElementById("answer").innerText = "You won!";
    } else if (result == 0) {
        document.getElementById("answer").innerText = "You lost!";
    }
}

form.addEventListener("submit", game);


