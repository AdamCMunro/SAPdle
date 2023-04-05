var guess1 = [];
var guess2 = [];
var guess3 = [];
var guess4 = [];
var guess5 = [];
var guesses = [];
var answer;
var solved;
var turn;
var pets = [];
var numberOfPets;
var wrongGuess = [];
var petsRevealed = [];
var numberOfGuesses = 0;
petCol = [];
petCol = document.getElementsByClassName("petCol");
const answerData = '[{ "date": "2023-4-5", "numberOfPets": 5, "turn": 14, "wins": 3, "pets": [{ "name": "Fish","lvl": 3,"attack": 27, "health": 32,"food": null},{ "name": "Warthog","lvl": 2,"attack": 24,"health": 23,"food": "Mushroom"},{"name": "Whale","lvl": 1,"attack": 21,"health": 26,"food": null},{"name": "Siberian_Husky","lvl": 2,"attack": 11,"health": 10,"food": null},{"name": "Siberian_Husky","lvl": 1,"attack": 11,"health": 10,"food": null}]},{ "date": "2023-4-6", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "Camel","lvl": 1,"attack": 14, "health": 11,"food": "Lemon"},{ "name": "Leech","lvl": 2,"attack": 30,"health": 39,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 5,"health": 7,"food": null},{"name": "Dolphin","lvl": 3,"attack": 16,"health": 15,"food": "Pineapple"},{"name": "Dragonfly","lvl": 2,"attack": 4,"health": 6,"food": null}]},{ "date": "2023-4-8", "numberOfPets": 5, "turn": 15, "wins": 6, "pets": [{ "name": "Fish","lvl": 3,"attack": 35, "health": 35,"food": "Lemon"},{ "name": "Rhino","lvl": 2,"attack": 28,"health": 31,"food": "Lemon"},{"name": "Dragonfly","lvl": 3,"attack": 26,"health": 28,"food": "Melon"},{"name": "Giraffe","lvl": 2,"attack": 20,"health": 22,"food": null},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 14,"health": 14,"food": null}]}, { "date": "2023-4-9", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Camel","lvl": 1,"attack": 25, "health": 24,"food": "Donut"},{ "name": "Leech","lvl": 2,"attack": 34,"health": 42,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 13,"health": 15,"food": "Chili"},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Penguin","lvl": 2,"attack": 4,"health": 6,"food": "Honey"}]},{ "date": "2023-4-10", "numberOfPets": 5, "turn": 18, "wins": 9, "pets": [{ "name": "Scorpion","lvl": 2,"attack": 11, "health": 38,"food": "Peanut"},{ "name": "Armadillo","lvl": 3,"attack": 26,"health": 19,"food": "Lemon"},{"name": "Leech","lvl": 3,"attack": 41,"health": 44,"food": "Melon"},{"name": "Ox","lvl": 2,"attack": 21,"health": 50,"food": null},{"name": "Penguin","lvl": 3,"attack": 7,"health": 33,"food": "Lemon"}]},{ "date": "2023-4-11", "numberOfPets": 5, "turn": 11, "wins": 4, "pets": [{ "name": "White_Tiger","lvl": 1,"attack": 8, "health": 7,"food": null},{ "name": "Eagle","lvl": 1,"attack": 9,"health": 8,"food": "Melon"},{"name": "Slug","lvl": 2,"attack": 16,"health": 16,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null}]},{ "date": "2023-4-12", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Badger","lvl": 3,"attack": 28, "health": 26,"food": "Lemon"},{ "name": "Hatching_Chick","lvl": 2,"attack": 10,"health": 10,"food": null},{"name": "Beluga_Whale","lvl": 1,"attack": 15,"health": 20,"food": "Egg"},{"name": "Moose","lvl": 2,"attack": 11,"health": 12,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": "Grapes"}]}]';
var gameEnd = false;

guess1 = [document.getElementById("g1t1"), document.getElementById("g1t2"), document.getElementById("g1t3"),
document.getElementById("g1t4"), document.getElementById("g1t5"), document.getElementById("g1t6"),
document.getElementById("g1t7"), document.getElementById("g1t8"), document.getElementById("g1t9"),
document.getElementById("g1t10")];
guess2 = [document.getElementById("g2t1"), document.getElementById("g2t2"), document.getElementById("g2t3"),
document.getElementById("g2t4"), document.getElementById("g2t5"), document.getElementById("g2t6"),
document.getElementById("g2t7"), document.getElementById("g2t8"), document.getElementById("g2t9"),
document.getElementById("g2t10")];
guess3 = [document.getElementById("g3t1"), document.getElementById("g3t2"), document.getElementById("g3t3"),
document.getElementById("g3t4"), document.getElementById("g3t5"), document.getElementById("g3t6"),
document.getElementById("g3t7"), document.getElementById("g3t8"), document.getElementById("g3t9"),
document.getElementById("g3t10")];
guess4 = [document.getElementById("g4t1"), document.getElementById("g4t2"), document.getElementById("g4t3"),
document.getElementById("g4t4"), document.getElementById("g4t5"), document.getElementById("g4t6"),
document.getElementById("g4t7"), document.getElementById("g4t8"), document.getElementById("g4t9"),
document.getElementById("g4t10")];
guess5 = [document.getElementById("g5t1"), document.getElementById("g5t2"), document.getElementById("g5t3"),
document.getElementById("g5t4"), document.getElementById("g5t5"), document.getElementById("g5t6"),
document.getElementById("g5t7"), document.getElementById("g5t8"), document.getElementById("g5t9"),
document.getElementById("g5t10")];

guesses = [guess1, guess2, guess3, guess4, guess5]

window.addEventListener("load", readIn(), createSolved(), checkSolved());

function trophyIn(x, y) {
    if (guesses[y][x - 1].classList.contains('inactive') == false && solved == false) {
        for (let i = 0; i < x; i++) {

            guesses[y][i].src = "images/trophies/colorTrophy.png";
            guesses[y][i].classList.toggle("color");
        }
    }
}

function trophyOut(x, y) {
    if (guesses[y][x - 1].classList.contains('inactive') == false && solved == false) {
        for (let i = 0; i < x; i++) {

            guesses[y][i].src = "images/trophies/blackTrophy.png";
            guesses[y][i].classList.toggle("color");
        }
    }
}

function trophyClick(x, y) {
    guessDivId = "guess" + (y + 1);
    guessDiv = document.getElementById(guessDivId);
    if (guesses[y][x - 1].classList.contains('inactive') == false && x != answer && !wrongGuessContains(x) && gameEnd == false && numberOfGuesses < 4) {
        
        wrongGuessMade(y, x);

        guessDiv.classList.add('shake')
        guessDiv.addEventListener("animationend", function (e) {
            guessDiv.classList.remove('shake');

        });
    }
    else if(guesses[y][x - 1].classList.contains('inactive') == false && x != answer && !wrongGuessContains(x) && gameEnd == false && numberOfGuesses == 4) {

        gameLose(y, x);

    }
    else if (guesses[y][x - 1].classList.contains('inactive') == false && wrongGuessContains(x) && gameEnd == false) {

        guessDiv.classList.add('shake')
        guessDiv.addEventListener("animationend", function (e) {
            guessDiv.classList.remove('shake');

        });
    }
    else if (guesses[y][x - 1].classList.contains('inactive') == false && x == answer && gameEnd == false) {

        gameWin(y, x);

    }
}

function wrongGuessContains(a) {
    for (let i = 0; i < wrongGuess.length; i++) {

        if (wrongGuess[i] == a) {
            return true;
        }

    }
    return false;
}

function readIn() {
    index = getTodayAnswer();
    parsedAnswerData = JSON.parse(answerData);
    answer = parsedAnswerData[index].wins;
    numberOfPets = parsedAnswerData[index].numberOfPets;
    turn = parsedAnswerData[index].turn; 
    for (let i = 0; i < numberOfPets; i++) {
        pets[i] = parsedAnswerData[index].pets[i];
    }
    h1 = document.getElementById("turnText");
    h1.innerHTML = "Turn: " + turn;

}

function displayPet(x) {
    petsRevealed.push(x);
    if (petCol[5 - x].classList.contains("hidden") && petCol[5 - x].classList.contains("active")) {
        if (document.getElementById("pets").classList.contains("active")) {
            document.getElementById("pets").classList.remove("active");
        }
        petPick = document.getElementsByClassName("petPick");
        if (petPick.length > 0) {
            petPick[0].remove();
        }
        for (let i = 0; i < petCol.length; i++) {
            if (petCol[i].classList.contains("active")) {
                petCol[i].classList.remove("active");
            }
        }
        pet = "pet" + x
        petText = "petText" + x
        petCol[5 - x].classList.remove("hidden")
        div = document.getElementById(pet);
        h1 = document.getElementById(petText);
        h1.remove();
        div.classList.remove("circle");
        level = document.createElement("h1");
        level.innerHTML = "Lvl" + pets[x - 1].lvl;
        level.classList.add("level");
        img = document.createElement("img");
        img.src = "images/pets/" + pets[x - 1].name + "_Icon.webp";
        img.classList.add("pet");
        statsDiv = document.createElement("div");
        statsDiv.classList.add("row");
        attackDiv = document.createElement("div");
        attackDiv.classList.add("attack");
        attackH1 = document.createElement("h1");
        attackH1.classList.add("stat");
        attackH1.innerHTML = pets[x - 1].attack;
        healthDiv = document.createElement("div");
        healthDiv.classList.add("health");
        healthH1 = document.createElement("h1");
        healthH1.classList.add("stat");
        healthH1.innerHTML = pets[x - 1].health;
        div.appendChild(level);
        div.appendChild(img);
        attackDiv.appendChild(attackH1);
        healthDiv.appendChild(healthH1);
        statsDiv.appendChild(attackDiv);
        statsDiv.appendChild(healthDiv);
        div.appendChild(statsDiv);
        if (pets[x - 1].food != null) {
            foodImg = document.createElement("img");
            foodImg.src = "images/foods/" + pets[x - 1].food + "_Icon.webp";
            foodImg.classList.add("food");
            div.appendChild(foodImg);
        }
    }
    updateSolved();
}

function activateNextGuess(x) {
    if (petCol[5 - x].classList.contains("active")) {
        for (let i = 0; i < guesses.length; i++) {
            let source = guesses[i][0].src;
            if (source.includes("blackTrophy.png") == true) {
                for (let j = 0; j < guesses[i].length; j++) {
                    guesses[i][j].classList.toggle("inactive");
                }
                break;
            }
        }
    }
}

function displayEndScreen() {
    body = document.getElementsByTagName("body");
    main = document.getElementById("mainContainer");
    div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("bg-dark");
    div.classList.add("endScreen");
    main.classList.add("solved");
    text = document.createElement("h1");
    text.classList.add("endText");
    if (solved == true) {
        text.innerHTML = "Nice! You got it in " + numberOfGuesses + "!";
    }
    else {
        text.innerHTML = "Unlucky!";
    }
    div.appendChild(text);
    exit = document.createElement("h1");
    exit.classList.add("exit");
    exit.innerHTML = "X"

exit.addEventListener('click', hideEndScreen);

    div.appendChild(exit);
    trophyDiv = document.createElement("div");
    trophyDiv.classList.add("row");
    trophyDiv.classList.add("endTrophyDiv")
    trophy = document.createElement("img");
    trophy.classList.add("endTrophyDiv");
    for (i = 0; i < 10; i++) {
        trophy = document.createElement("img");
    trophy.classList.add("endTrophy");
        if (i < answer) {
            trophy.src = "images/trophies/colorTrophy.png";
        }
        else {
            trophy.src = "images/trophies/blackTrophy.png";
        }
        trophyDiv.appendChild(trophy);
    }
    div.appendChild(trophyDiv)
    playedText = document.createElement("h1");
    playedText.classList.add("endText");
    playedText.innerHTML = "Games Played: " + JSON.parse(localStorage.getItem("guessList")).length;
    div.appendChild(playedText);
    streakText = document.createElement("h1");
    streakText.classList.add("endText");
    streakText.innerHTML = "Win Streak: " + getStreak();
    div.appendChild(streakText);
    section = document.createElement("section");
    section.classList.add("bar-graph", "bar-graph-horizontal", "bar-graph-one")
    for (let i = 1; i < 6; i++) {
        barHolder = document.createElement("div");
        barHolder.classList.add("bar-" + i);
        guessData = document.createElement("span");
        guessData.classList.add("guessData");
        guessData.innerHTML = i;
        bar = document.createElement("div");
        bar.classList.add("bar");
        bar.setAttribute("data-percentage", (getOccurences(storedList, i)));
        barHolder.appendChild(guessData);
        barHolder.appendChild(bar);
        section.appendChild(barHolder);
    }
    div.appendChild(section);
    body[0].appendChild(div);
    if (numberOfGuesses > 0) {
    document.querySelector('div.bar-' + numberOfGuesses + ' div.bar').style.setProperty('background-color', '#e0b700')
    }
    for (let i = 1; i < 6; i++) {
        document.querySelector('div.bar-' + i + ' div.bar').style.setProperty('--w', getGuessPercentage(i) + '%')
    }
}

function hideEndScreen() {
    if (document.getElementsByClassName("endButton").length == 0) {
        createEndButton();
    }
    div = document.getElementsByClassName("endScreen");
    div[0].remove();
    main = document.getElementById("mainContainer");
    main.classList.remove("solved");
}

function updateGuesses() {
    if (localStorage.getItem("guessList") === null) {
        blankArray = [];
        localStorage.setItem("guessList", JSON.stringify(blankArray));
        addGuess()
    }
    else {
        addGuess();
    }
}

function addGuess() {
    storedList = JSON.parse(localStorage.getItem("guessList"));
    storedList.push(numberOfGuesses);
    localStorage.setItem('guessList', JSON.stringify(storedList));
}

function getOccurences(arr, x) {
    var occurences = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            occurences++
        }
    }
    return occurences;
}

function getGuessPercentage(i) {
    var occurences = [];
    storedList = JSON.parse(localStorage.getItem("guessList"));
    for (let x = 1; x < 6; x++) {
    occurences.push(getOccurences(storedList, x));
    }
    var max = Math.max(...occurences);
    if ((occurences[i-1]/max) < 0.80) {
        return ((occurences[i-1]/max)*100 + 12);
    }
    else {
        return ((occurences[i-1]/max)*100-20);
    }
}

function getStreak() {
    storedList = JSON.parse(localStorage.getItem("guessList"));
    for (let i = storedList.length-1; i > 0; i--) {
        if (storedList[i] == 0) {
            return storedList.length-1-i;
        }
    }
    if (storedList.length > 0) {
        return storedList.length;
    }
    return 0;
}

function createEndButton() {
    div = document.createElement("div");
    div.classList.add("endButton");
    h1 = document.createElement("h1");
    h1.classList.add("endButtonText")
    h1.innerHTML = "View Stats";
    div.addEventListener("click", displayEndScreen);
    div.appendChild(h1);
    main = document.getElementById("mainContainer");
    main.appendChild(div);
}

function getTodayAnswer() {
    const date = new Date();
    parsedAnswerData = JSON.parse(answerData);
    for (let i = 0; i < parsedAnswerData.length; i ++)
    {
        if ((date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()) == parsedAnswerData[i].date) {
            return i;
        }
    }
}

function updateSolved() {
    if (localStorage.getItem("solvedList") === null) {
        blankArray = [];
        localStorage.setItem("solvedList", JSON.stringify(blankArray));
        addSolved()
    }
    else {
        addSolved();
    }
}

function addSolved() {
    const date = new Date();
    storedList = JSON.parse(localStorage.getItem("solvedList"));
    storedList.push({solved: solved, date: (date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()), guesses: wrongGuess, pets: petsRevealed});
    for (let i =0; i < storedList.length; i ++) {
    }
    localStorage.setItem('solvedList', JSON.stringify(storedList));
}

function gameWin(y, x) {
    guessDivId = "guess" + (y + 1);
    guessDiv = document.getElementById(guessDivId);
    numberOfGuesses++;
    for (let i = 0; i < 10; i ++) {
    guesses[y][i].classList.toggle("inactive", false)
    }
    for (let i = 0; i < x; i++) {
        guessDiv.classList.add("solved");
        guesses[y][i].classList.toggle("color", true)
        guesses[y][i].src = "images/trophies/colorTrophy.png";
    }
    for (let j = 0; j < petCol.length; j++) {
        petCol[j].classList.add("active");
        displayPet(5 - j);
        petCol[j].classList.add("solved");
        if (petCol[j].classList.contains("active")) {
            petCol[j].classList.remove("active");
        }
    }
    document.getElementById("pets").classList.add("solved");
    document.getElementById("turnText").remove();
    solved = true;
    updateSolved()
        gameEnd = true;
    setTimeout(function () {
        updateGuesses();
        displayEndScreen();
    }, 1500);
}

function gameLose(y, x) {
    guessDivId = "guess" + (y + 1);
    guessDiv = document.getElementById(guessDivId);
    for (let i = 0; i < guesses[y].length; i++) {

        if (i < x) {
            guesses[y][i].classList.toggle("inactive", true);
            guesses[y][i].classList.toggle("color", false);
            guesses[y][i].src = "images/trophies/redTrophy.png";

        }
        else {
            guesses[y][i].classList.toggle("inactive", true);
        }
    }
    guessDiv.classList.add('shake')
    guessDiv.addEventListener("animationend", function (e) {
        guessDiv.classList.remove('shake');
    });
    wrongGuess.push(x);
    numberOfGuesses = 0;
    gameEnd = true;
    updateSolved();
    setTimeout(function () {
        updateGuesses();
        displayEndScreen();
    }, 1500);
}

function wrongGuessMade(y, x) {
    numberOfGuesses++;
        for (let i = 0; i < guesses[y].length; i++) {

            if (i < x) {
                guesses[y][i].classList.toggle("inactive", true);
                guesses[y][i].classList.toggle("color", false);
                guesses[y][i].src = "images/trophies/redTrophy.png";

            }
            else {
                guesses[y][i].classList.toggle("inactive", true);
            }
        }
        document.getElementById("pets").classList.add("active");
        div = document.getElementById("petPickTitle");
        if (document.getElementsByClassName("petPick").length == 0) {
        h1 = document.createElement("h1");
        h1.innerHTML = "Pick a pet to reveal";
        h1.classList.add("petPick");
        div.appendChild(h1);
        }
        for (let i = 0; i < petCol.length; i++) {
            if (petCol[i].classList.contains("hidden")) {
                petCol[i].classList.add("active");
            }
        }
        wrongGuess.push(x);
        updateSolved()
}

function checkSolved() {
    storedList = JSON.parse(localStorage.getItem("solvedList"));
    parsedAnswerData = JSON.parse(answerData);
    answerIndex = getTodayAnswer();
    for (let i = storedList.length - 1; i >= 0; i--) {
        if (storedList[i].date == parsedAnswerData[answerIndex].date) {
            index = i;
            break;
        }
    }

solved = storedList[index].solved;

    if (solved == true) {
        for (let i = 0; i < storedList[index].guesses.length; i++) {
            displayPet(storedList[index].pets[i]);
            wrongGuessMade(i, storedList[index].guesses[i]);
        }
        gameWin(storedList[index].guesses.length, answer);
    }
    else if (solved == false && storedList[index].guesses.length < 5 && storedList[index].guesses.length > 0) {
        for (let i = 0; i < storedList[index].guesses.length; i++) {
            displayPet(storedList[index].pets[i]);
            wrongGuessMade(i, storedList[index].guesses[i]);

            if (storedList[index].pets.length > storedList[index].guesses.length) {
                activateNextGuess(storedList[index].pets[storedList[index].pets.length-1]);
                displayPet(storedList[index].pets[storedList[index].pets.length-1]);
            }
    }
}
    else if (solved == false && storedList[index].guesses.length == 5) {
        for (let i = 0; i < 4; i++) {
            displayPet(i+1);
            wrongGuessMade(i, storedList[index].guesses[i]);
        }
        displayPet(5);
        gameLose(4, storedList[index].guesses[4]);

    }
}

function createSolved() {
    if (localStorage.getItem("solvedList") === null) {
        blankArray = [];
        localStorage.setItem("solvedList", JSON.stringify(blankArray));
    }
}