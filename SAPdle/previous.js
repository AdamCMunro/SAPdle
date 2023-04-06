const answerData = '[{ "date": "2023-4-5", "numberOfPets": 5, "turn": 14, "wins": 3, "pets": [{ "name": "Fish","lvl": 3,"attack": 27, "health": 32,"food": null},{ "name": "Warthog","lvl": 2,"attack": 24,"health": 23,"food": "Mushroom"},{"name": "Whale","lvl": 1,"attack": 21,"health": 26,"food": null},{"name": "Siberian_Husky","lvl": 2,"attack": 11,"health": 10,"food": null},{"name": "Siberian_Husky","lvl": 1,"attack": 11,"health": 10,"food": null}]},{ "date": "2023-4-6", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "Camel","lvl": 1,"attack": 14, "health": 11,"food": "Lemon"},{ "name": "Leech","lvl": 2,"attack": 30,"health": 39,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 5,"health": 7,"food": null},{"name": "Dolphin","lvl": 3,"attack": 16,"health": 15,"food": "Pineapple"},{"name": "Dragonfly","lvl": 2,"attack": 4,"health": 6,"food": null}]},{ "date": "2023-4-8", "numberOfPets": 5, "turn": 15, "wins": 6, "pets": [{ "name": "Fish","lvl": 3,"attack": 35, "health": 35,"food": "Lemon"},{ "name": "Rhino","lvl": 2,"attack": 28,"health": 31,"food": "Lemon"},{"name": "Dragonfly","lvl": 3,"attack": 26,"health": 28,"food": "Melon"},{"name": "Giraffe","lvl": 2,"attack": 20,"health": 22,"food": null},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 14,"health": 14,"food": null}]}, { "date": "2023-4-9", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Camel","lvl": 1,"attack": 25, "health": 24,"food": "Donut"},{ "name": "Leech","lvl": 2,"attack": 34,"health": 42,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 13,"health": 15,"food": "Chili"},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Penguin","lvl": 2,"attack": 4,"health": 6,"food": "Honey"}]},{ "date": "2023-4-10", "numberOfPets": 5, "turn": 18, "wins": 9, "pets": [{ "name": "Scorpion","lvl": 2,"attack": 11, "health": 38,"food": "Peanut"},{ "name": "Armadillo","lvl": 3,"attack": 26,"health": 19,"food": "Lemon"},{"name": "Leech","lvl": 3,"attack": 41,"health": 44,"food": "Melon"},{"name": "Ox","lvl": 2,"attack": 21,"health": 50,"food": null},{"name": "Penguin","lvl": 3,"attack": 7,"health": 33,"food": "Lemon"}]},{ "date": "2023-4-11", "numberOfPets": 5, "turn": 11, "wins": 4, "pets": [{ "name": "White_Tiger","lvl": 1,"attack": 8, "health": 7,"food": null},{ "name": "Eagle","lvl": 1,"attack": 9,"health": 8,"food": "Melon"},{"name": "Slug","lvl": 2,"attack": 16,"health": 16,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null}]},{ "date": "2023-4-12", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Badger","lvl": 3,"attack": 28, "health": 26,"food": "Lemon"},{ "name": "Hatching_Chick","lvl": 2,"attack": 10,"health": 10,"food": null},{"name": "Beluga_Whale","lvl": 1,"attack": 15,"health": 20,"food": "Egg"},{"name": "Moose","lvl": 2,"attack": 11,"health": 12,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": "Grapes"}]}]';

window.addEventListener("load", displayTodayPuzzle(), displayPreviousPuzzles(0));

function displayTodayPuzzle() {
    date = new Date();
    div = document.getElementById("todayContainer");
    a = document.createElement("a");
    a.classList.add("puzzleLink");
    a.innerHTML = (date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear())
    a.href = "index.html?" + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    div.appendChild(a);

}

function displayPreviousPuzzles(i) {
    date = new Date();
    parsedAnswerData = JSON.parse(answerData);
    div = document.getElementById("previousContainer");

    if (parsedAnswerData[i].date != date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()) {
        
        a = document.createElement("a");
        a.classList.add("puzzleLink");
        date = new Date(parsedAnswerData[i].date);
        a.innerHTML = (date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear())
        a.href = "index.html?" + parsedAnswerData[i].date;
        div.appendChild(a);

        i++;

        displayPreviousPuzzles(i);

    }
}