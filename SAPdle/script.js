var guess1 = [];
var guess2 = [];
var guess3 = [];
var guess4 = [];
var guess5 = [];
var guesses = [];
var answer;
var solved;
var turn;
var reload;
var pets = [];
var numberOfPets;
var wrongGuess = [];
var petsRevealed = [];
var numberOfGuesses = 0;
petCol = [];
petCol = document.getElementsByClassName("petCol");
const answerData = '[{ "date": "2023-4-5", "numberOfPets": 5, "turn": 14, "wins": 3, "pets": [{ "name": "Fish","lvl": 3,"attack": 27, "health": 32,"food": null},{ "name": "Warthog","lvl": 2,"attack": 24,"health": 23,"food": "Mushroom"},{"name": "Whale","lvl": 1,"attack": 21,"health": 26,"food": null},{"name": "Siberian_Husky","lvl": 2,"attack": 11,"health": 10,"food": null},{"name": "Siberian_Husky","lvl": 1,"attack": 11,"health": 10,"food": null}]},{ "date": "2023-4-6", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "Camel","lvl": 1,"attack": 14, "health": 11,"food": "Lemon"},{ "name": "Leech","lvl": 2,"attack": 30,"health": 39,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 5,"health": 7,"food": null},{"name": "Dolphin","lvl": 3,"attack": 16,"health": 15,"food": "Pineapple"},{"name": "Dragonfly","lvl": 2,"attack": 4,"health": 6,"food": null}]},{ "date": "2023-4-7", "numberOfPets": 5, "turn": 15, "wins": 6, "pets": [{ "name": "Fish","lvl": 3,"attack": 35, "health": 35,"food": "Lemon"},{ "name": "Rhino","lvl": 2,"attack": 28,"health": 31,"food": "Lemon"},{"name": "Dragonfly","lvl": 3,"attack": 26,"health": 28,"food": "Melon"},{"name": "Giraffe","lvl": 2,"attack": 20,"health": 22,"food": null},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 14,"health": 14,"food": null}]},{ "date": "2023-4-8", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Camel","lvl": 1,"attack": 25, "health": 24,"food": "Donut"},{ "name": "Leech","lvl": 2,"attack": 34,"health": 42,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 13,"health": 15,"food": "Chili"},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Penguin","lvl": 2,"attack": 4,"health": 6,"food": "Honey"}]},{ "date": "2023-4-9", "numberOfPets": 5, "turn": 18, "wins": 9, "pets": [{ "name": "Scorpion","lvl": 2,"attack": 11, "health": 38,"food": "Peanut"},{ "name": "Armadillo","lvl": 3,"attack": 26,"health": 19,"food": "Lemon"},{"name": "Leech","lvl": 3,"attack": 41,"health": 44,"food": "Melon"},{"name": "Ox","lvl": 2,"attack": 21,"health": 50,"food": null},{"name": "Penguin","lvl": 3,"attack": 7,"health": 33,"food": "Lemon"}]},{ "date": "2023-4-10", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Camel","lvl": 2,"attack": 35, "health": 30,"food": "Donut"},{ "name": "Leech","lvl": 3,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Giraffe","lvl": 2,"attack": 27,"health": 29,"food": "Melon"},{"name": "Penguin","lvl": 2,"attack": 8,"health": 10,"food": "Meat_Bone"},{"name": "Penguin","lvl": 2,"attack": 5,"health": 7,"food": null}]},{ "date": "2023-4-11", "numberOfPets": 5, "turn": 13, "wins": 10, "pets": [{ "name": "Fish","lvl": 3,"attack": 30, "health": 30,"food": "Melon"},{ "name": "Rhino","lvl": 2,"attack": 36,"health": 39,"food": "Lemon"},{"name": "Dolphin","lvl": 2,"attack": 28,"health": 27,"food": "Pineapple"},{"name": "Moose","lvl": 2,"attack": 10,"health": 11,"food": null},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 5,"health": 5,"food": null}]},{ "date": "2023-4-12", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Elephant","lvl": 2,"attack": 21, "health": 23,"food": "Lemon"},{ "name": "Camel","lvl": 2,"attack": 40,"health": 36,"food": "Donut"},{"name": "Leech","lvl": 3,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Penguin","lvl": 2,"attack": 15,"health": 17,"food": "Chili"},{"name": "Moose","lvl": 2,"attack": 9,"health": 10,"food": "Honey"}]},{ "date": "2023-4-13", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Camel","lvl": 3,"attack": 40, "health": 35,"food": "Lemon"},{ "name": "Dragonfly","lvl": 2,"attack": 18,"health": 19,"food": null},{"name": "Leech","lvl": 1,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Penguin","lvl": 3,"attack": 15,"health": 17,"food": null},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 15,"health": 15,"food": null}]},{ "date": "2023-4-14", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Camel","lvl": 3,"attack": 50, "health": 50,"food": "Donut"},{ "name": "Leech","lvl": 2,"attack": 50,"health": 50,"food": "Melon"},{"name": "Wolf","lvl": 1,"attack": 5,"health": 5,"food": null},{"name": "Moose","lvl": 2,"attack": 8,"health": 9,"food": null},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null}]},{ "date": "2023-4-15", "numberOfPets": 5, "turn": 13, "wins": 10, "pets": [{ "name": "Jellyfish","lvl": 3,"attack": 44, "health": 39,"food": "Lemon"},{ "name": "Crane","lvl": 2,"attack": 34,"health": 18,"food": "Lemon"},{"name": "Dragon","lvl": 2,"attack": 10,"health": 12,"food": null},{"name": "Sauropod","lvl": 1,"attack": 6,"health": 4,"food": null},{"name": "Reindeer","lvl": 1,"attack": 6,"health": 4,"food": null}]},{ "date": "2023-4-16", "numberOfPets": 5, "turn": 11, "wins": 10, "pets": [{ "name": "Bison","lvl": 2,"attack": 32, "health": 36,"food": "Lemon"},{ "name": "Crane","lvl": 2,"attack": 13,"health": 6,"food": null},{"name": "Beetle","lvl": 2,"attack": 19,"health": 17,"food": "Lemon"},{"name": "Otter","lvl": 3,"attack": 7,"health": 10,"food": null},{"name": "ClownFish","lvl": 1,"attack": 3,"health": 4,"food": null}]},{ "date": "2023-4-17", "numberOfPets": 5, "turn": 18, "wins": 10, "pets": [{ "name": "Jellyfish","lvl": 3,"attack": 50, "health": 50,"food": "Lemon"},{ "name": "Manta_Ray","lvl": 3,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Manta_Ray","lvl": 2,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Dragon","lvl": 3,"attack": 14,"health": 20,"food": "Potato"},{"name": "Sauropod","lvl": 1,"attack": 4,"health": 12,"food": "Popcorn"}]},{ "date": "2023-4-18", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Triceratops","lvl": 3,"attack": 50, "health": 50,"food": "Lemon"},{ "name": "Crane","lvl": 2,"attack": 22,"health": 21,"food": null},{"name": "Jellyfish","lvl": 2,"attack": 23,"health": 28,"food": null},{"name": "Cow","lvl": 2,"attack": 10,"health": 12,"food": null},{"name": "Clownfish","lvl": 2,"attack": 8,"health": 9,"food": null}]},{ "date": "2023-4-19", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Octopus","lvl": 2,"attack": 19, "health": 28,"food": "Lemon"},{ "name": "Falcon","lvl": 2,"attack": 26,"health": 38,"food": "Lemon"},{"name": "Jellyfish","lvl": 2,"attack": 24,"health": 26,"food": null},{"name": "Baboon","lvl": 3,"attack": 10,"health": 12,"food": null},{"name": "Crocodile","lvl": 2,"attack": 14,"health": 13,"food": null}]},{ "date": "2023-4-20", "numberOfPets": 5, "turn": 12, "wins": 5, "pets": [{ "name": "Beluga_Whale","lvl": 2,"attack": 9, "health": 14,"food": null},{ "name": "Peacock","lvl": 2,"attack": 5,"health": 8,"food": "Garlic"},{"name": "Turkey","lvl": 1,"attack": 3,"health": 4,"food": null},{"name": "Spinosaurus","lvl": 1,"attack": 7,"health": 11,"food": null},{"name": "Shark","lvl": 2,"attack": 22,"health": 24,"food": null}]},{ "date": "2023-4-21", "numberOfPets": 5, "turn": 16, "wins": 6, "pets": [{ "name": "Woodpecker","lvl": 2,"attack": 40, "health": 50,"food": "Pineapple"},{ "name": "Cobra","lvl": 2,"attack": 22,"health": 20,"food": "Pineapple"},{"name": "Cow","lvl": 1,"attack": 5,"health": 7,"food": null},{"name": "Lynx","lvl": 3,"attack": 10,"health": 11,"food": null},{"name": "Monkey","lvl": 1,"attack": 4,"health": 4,"food": null}]},{ "date": "2023-4-22", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Warthog","lvl": 1,"attack": 18, "health": 17,"food": null},{ "name": "Armadillo","lvl": 2,"attack": 4,"health": 20,"food": "Garlic"},{"name": "Peacock","lvl": 3,"attack": 11,"health": 21,"food": "Garlic"},{"name": "Rhino","lvl": 1,"attack": 7,"health": 10,"food": null},{"name": "Frigatebird","lvl": 2,"attack": 5,"health": 8,"food": "Meat_Bone"}]},{ "date": "2023-4-23", "numberOfPets": 5, "turn": 13, "wins": 7, "pets": [{ "name": "Mammoth","lvl": 1,"attack": 15, "health": 22,"food": null},{ "name": "Mammoth","lvl": 1,"attack": 13,"health": 20,"food": null},{"name": "Octopus","lvl": 1,"attack": 18,"health": 18,"food": null},{"name": "Lioness","lvl": 3,"attack": 27,"health": 39,"food": null},{"name": "Hawk","lvl": 1,"attack": 16,"health": 15,"food": null}]},{ "date": "2023-4-24", "numberOfPets": 5, "turn": 17, "wins": 9, "pets": [{ "name": "Starfish","lvl": 2,"attack": 29, "health": 34,"food": "Peanut"},{ "name": "Dragon","lvl": 1,"attack": 13,"health": 15,"food": "Peanut"},{"name": "Dolphin","lvl": 3,"attack": 45,"health": 46,"food": "Melon"},{"name": "Lioness","lvl": 2,"attack": 27,"health": 28,"food": null},{"name": "Crocodile","lvl": 1,"attack": 26,"health": 22,"food": null}]},{ "date": "2023-4-25", "numberOfPets": 5, "turn": 22, "wins": 9, "pets": [{ "name": "Sealion","lvl": 2,"attack": 50, "health": 50,"food": "Melon"},{ "name": "Scorpion","lvl": 1,"attack": 15,"health": 15,"food": "Mushroom"},{"name": "Lobster","lvl": 2,"attack": 50,"health": 50,"food": "Melon"},{"name": "Dragon","lvl": 2,"attack": 40,"health": 46,"food": "Melon"},{"name": "Sealion","lvl": 2,"attack": 47,"health": 50,"food": "Melon"}]},{ "date": "2023-4-26", "numberOfPets": 5, "turn": 14, "wins": 8, "pets": [{ "name": "Mosquito","lvl": 1,"attack": 4, "health": 4,"food": null},{ "name": "Camel","lvl": 2,"attack": 36,"health": 46,"food": "Garlic"},{"name": "Beaver","lvl": 3,"attack": 40,"health": 40,"food": "Melon"},{"name": "Dragon","lvl": 2,"attack": 15,"health": 21,"food": null},{"name": "Sealion","lvl": 1,"attack": 30,"health": 31,"food": "Melon"}]},{ "date": "2023-4-27", "numberOfPets": 5, "turn": 15, "wins": 9, "pets": [{ "name": "Walrus","lvl": 1,"attack": 26, "health": 24,"food": "Tomato"},{ "name": "Leopard","lvl": 1,"attack": 28,"health": 24,"food": null},{"name": "Tiger","lvl": 2,"attack": 29,"health": 28,"food": null},{"name": "Lioness","lvl": 2,"attack": 24,"health": 25,"food": null},{"name": "Lizard","lvl": 3,"attack": 21,"health": 24,"food": "Melon"}]},{ "date": "2023-4-28", "numberOfPets": 5, "turn": 13, "wins": 6, "pets": [{ "name": "Fish","lvl": 3,"attack": 31, "health": 30,"food": "Garlic"},{ "name": "Otter","lvl": 3,"attack": 27, "health": 26,"food": "Garlic"},{"name": null,"lvl": null,"attack": null,"health": null,"food": null},{"name": "Moose","lvl": 2,"attack": 24,"health": 25,"food": null},{"name": "Dragon","lvl": 1,"attack": 16,"health": 18,"food": null}]},{ "date": "2023-4-29", "numberOfPets": 5, "turn": 16, "wins": 10, "pets": [{ "name": "Octopus","lvl": 2,"attack": 39, "health": 49,"food": "Mushroom"},{ "name": "Wombat","lvl": 2,"attack": 30, "health": 49,"food": "Steak"},{"name": "Monkey","lvl": 2,"attack": 7,"health": 7,"food": "Banana"},{"name": "Shark","lvl": 1,"attack": 9,"health": 11,"food": "Banana"},{"name": "Seagull","lvl": 2,"attack": 5,"health": 15,"food": "Steak"}]},{ "date": "2023-4-30", "numberOfPets": 5, "turn": 15, "wins": 8, "pets": [{ "name": "Mammoth","lvl": 1,"attack": 9, "health": 16,"food": "Mushroom"},{ "name": "Peacock","lvl": 2,"attack": 9, "health": 23,"food": "Garlic"},{"name": "Turkey","lvl": 2,"attack": 5,"health": 6,"food": "Steak"},{"name": "Spinosaurus","lvl": 1,"attack": 11,"health": 15,"food": "Steak"},{"name": "Shark","lvl": 3,"attack": 15,"health": 13,"food": null}]},{ "date": "2023-5-1", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Woodpecker","lvl": 2,"attack": 11, "health": 5,"food": "Banana"},{ "name": null,"lvl": null,"attack": null, "health": null,"food": null},{"name": "Macaque","lvl": 2,"attack": 9,"health": 6,"food": "Meat_Bone"},{"name": "White_Tiger","lvl": 1,"attack": 4,"health": 3,"food": null},{"name": "Spinosaurus","lvl": 2,"attack": 8,"health": 14,"food": null}]},{ "date": "2023-5-2", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Peacock","lvl": 3,"attack": 20, "health": 45,"food": "Garlic"},{ "name": "Siberian_Husky","lvl": 3,"attack": 10, "health": 9,"food": "Steak"},{"name": "Wildebeest","lvl": 1,"attack": 23,"health": 21,"food": null},{"name": "Monkey","lvl": 1,"attack": 13,"health": 13,"food": null},{"name": "Saiga_Antelope","lvl": 2,"attack": 17,"health": 16,"food": null}]},{ "date": "2023-5-3", "numberOfPets": 5, "turn": 13, "wins": 7, "pets": [{ "name": "Warthog","lvl": 2,"attack": 18, "health": 17,"food": "Steak"},{ "name": "Rhino","lvl": 2,"attack": 30, "health": 47,"food": "Garlic"},{"name": "Pug","lvl": 2,"attack": 30,"health": 47,"food": "Banana"},{"name": "Beluga_Whale","lvl": 1,"attack": 5,"health": 15,"food": "Grapes"},{"name": "Monkey","lvl": 1,"attack": 4,"health": 4,"food": "Meat_Bone"}]},{ "date": "2023-5-4", "numberOfPets": 5, "turn": 17, "wins": 10, "pets": [{ "name": "Crab","lvl": 2,"attack": 5, "health": 3,"food": null},{ "name": "Salamander","lvl": 3,"attack": 50, "health": 50,"food": "Lemon"},{"name": "Swan","lvl": 3,"attack": 25,"health": 26,"food": "Lemon"},{"name": "Lion","lvl": 3,"attack": 21,"health": 20,"food": "Lemon"},{"name": "Penguin","lvl": 3,"attack": 8,"health": 9,"food": "Grapes"}]},{ "date": "2023-5-5", "numberOfPets": 5, "turn": 11, "wins": 4, "pets": [{ "name": "Dragonfly","lvl": 2,"attack": 4, "health": 6,"food": null},{ "name": "Ox","lvl": 2,"attack": 7, "health": 7,"food": null},{"name": "Leech","lvl": 1,"attack": 15,"health": 20,"food": "Grapes"},{"name": "Rhino","lvl": 2,"attack": 8,"health": 11,"food": "Pineapple"},{"name": "Stegosaurus","lvl": 2,"attack": 7,"health": 12,"food": null}]},{ "date": "2023-5-6", "numberOfPets": 5, "turn": 15, "wins": 9, "pets": [{ "name": "Ant","lvl": 3,"attack": 11, "health": 10,"food": null},{ "name": "Camel","lvl": 3,"attack": 11, "health": 7,"food": "Lemon"},{"name": "Leech","lvl": 2,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Snake","lvl": 2,"attack": 9,"health": 9,"food": "Pineapple"},{"name": "Eagle","lvl": 2,"attack": 11,"health": 10,"food": "Melon"}]},{ "date": "2023-5-7", "numberOfPets": 5, "turn": 13, "wins": 7, "pets": [{ "name": "Eagle","lvl": 1,"attack": 7, "health": 6,"food": null},{ "name": "Whale","lvl": 3,"attack": 8, "health": 13,"food": "Chili"},{"name": "Poison_Dart_Frog","lvl": 2,"attack": 8,"health": 5,"food": "Melon"},{"name": "Scorpion","lvl": 1,"attack": 1,"health": 1,"food": "Peanut"},{"name": "Salamander","lvl": 2,"attack": 47,"health": 21,"food": "Melon"}]},{ "date": "2023-5-8", "numberOfPets": 5, "turn": 15, "wins": 7, "pets": [{ "name": "Salamander","lvl": 1,"attack": 34, "health": 36,"food": "Grapes"},{ "name": "White_Tiger","lvl": 1,"attack": 4, "health": 3,"food": "Egg"},{"name": "Gorilla","lvl": 1,"attack": 6,"health": 9,"food": null},{"name": "Stegosaurus","lvl": 2,"attack": 5,"health": 10,"food": null},{"name": "Bird_Of_Paradise","lvl": 1,"attack": 3,"health": 3,"food": "Lemon"}]},{ "date": "2023-5-9", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Beluga_Whale","lvl": 3,"attack": 28, "health": 32,"food": "Melon"},{ "name": "Snake","lvl": 1,"attack": 12, "health": 12,"food": "Mushroom"},{"name": "Ant","lvl": 2,"attack": 21,"health": 19,"food": "Melon"},{"name": "Osprey","lvl": 3,"attack": 19,"health": 18,"food": "Lemon"},{"name": "Dragonfly","lvl": 3,"attack": 10,"health": 11,"food": "Honey"}]},{ "date": "2023-5-10", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "Racoon","lvl": 2,"attack": 17, "health": 15,"food": "Donut"},{ "name": "Beluga_Whale","lvl": 2,"attack": 9, "health": 13,"food": null},{"name": "Magpie","lvl": 3,"attack": 14,"health": 16,"food": "Honey"},{"name": "Penguin","lvl": 2,"attack": 6,"health": 7,"food": "Melon"},{"name": "Stegosaurus","lvl": 1,"attack": 4,"health": 8,"food": null}]},{ "date": "2023-5-11", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Armadillo","lvl": 2,"attack": 4, "health": 8,"food": null},{ "name": "Whale","lvl": 2,"attack": 5, "health": 10,"food": null},{"name": "Beluga_Whale","lvl": 2,"attack": 5,"health": 10,"food": null},{"name": "Salamander","lvl": 3,"attack": 42,"health": 30,"food": "Melon"},{"name": "Snake","lvl": 1,"attack": 7,"health": 7,"food": null}]},{ "date": "2023-5-12", "numberOfPets": 5, "turn": 13, "wins": 4, "pets": [{ "name": "Elephant","lvl": 3,"attack": 25, "health": 27,"food": "Lemon"},{ "name": "Armadillo","lvl": 2,"attack": 18, "health": 22,"food": "Mushroom"},{"name": "Scorpion","lvl": 1,"attack": 5,"health": 5,"food": "Peanut"},{"name": "Dragonfly","lvl": 2,"attack": 9,"health": 11,"food": "Grapes"},{"name": "Bird_Of_Paradise","lvl": 2,"attack": 11,"health": 11,"food": "Grapes"}]},{ "date": "2023-5-13", "numberOfPets": 5, "turn": 12, "wins": 5, "pets": [{ "name": "Moose","lvl": 2,"attack": 7, "health": 8,"food": null},{ "name": "Ox","lvl": 2,"attack": 24, "health": 26,"food": null},{"name": "Salamander","lvl": 3,"attack": 25,"health": 50,"food": "Lemon"},{"name": "Penguin","lvl": 1,"attack": 6,"health": 8,"food": null},{"name": null,"lvl": null,"attack": null,"health": null,"food": null}]},{ "date": "2023-5-14", "numberOfPets": 5, "turn": 14, "wins": 7, "pets": [{ "name": "Dragonfly","lvl": 2,"attack": 4, "health": 6,"food": null},{ "name": "Beluga_Whale","lvl": 2,"attack": 12, "health": 17,"food": "Grapes"},{"name": "Poison_Dart_Frog","lvl": 3,"attack": 17,"health": 14,"food": "Pineapple"},{"name": "Black_Necked_Stilt","lvl": 3,"attack": 19,"health": 18,"food": "Lemon"},{"name": "Stegosaurus","lvl": 2,"attack": 9,"health": 14,"food": null}]},{ "date": "2023-5-15", "numberOfPets": 5, "turn": 20, "wins": 10, "pets": [{ "name": "Leopard","lvl": 3,"attack": 50, "health": 50,"food": "Steak"},{ "name": "Sloth","lvl": 3,"attack": 50, "health": 50,"food": "Garlic"},{"name": "Leopard","lvl": 2,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Lionfish","lvl": 1,"attack": 50,"health": 50,"food": null},{"name": "Eagle","lvl": 1,"attack": 50,"health": 50,"food": null}]},{ "date": "2023-5-16", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Dolphin","lvl": 3,"attack": 11, "health": 10,"food": "Pineapple"},{ "name": "Salamander","lvl": 3,"attack": 50, "health": 39,"food": "Lemon"},{"name": "Snake","lvl": 2,"attack": 10,"health": 10,"food": "Melon"},{"name": "White_Tiger","lvl": 2,"attack": 8,"health": 7,"food": null},{"name": "Orca","lvl": 1,"attack": 6,"health": 10,"food": "Lemon"}]},{ "date": "2023-5-17", "numberOfPets": 5, "turn": 12, "wins": 4, "pets": [{ "name": "Armadillo","lvl": 2,"attack": 18, "health": 35,"food": "Garlic"},{ "name": "Woodpecker","lvl": 3,"attack": 9, "health": 8,"food": "Pineapple"},{"name": "Cow","lvl": 1,"attack": 5,"health": 7,"food": null},{"name": "Peacock","lvl": 2,"attack": 8,"health": 11,"food": "Garlic"},{"name": "Monkey","lvl": 1,"attack": 4,"health": 4,"food": null}]},{ "date": "2023-5-18", "numberOfPets": 5, "turn": 18, "wins": 9, "pets": [{ "name": "Macaque","lvl": 3,"attack": 36, "health": 50,"food": "Steak"},{ "name": "Frigatebird","lvl": 3,"attack": 8, "health": 10,"food": "Steak"},{"name": null,"lvl": null,"attack": null,"health": null,"food": null},{"name": "Peacock","lvl": 3,"attack": 14,"health": 50,"food": "Garlic"},{"name": "Monkey","lvl": 2,"attack": 7,"health": 7,"food": "Steak"}]},{ "date": "2023-5-19", "numberOfPets": 5, "turn": 14, "wins": 8, "pets": [{ "name": "Cow","lvl": 1,"attack": 5, "health": 7,"food": "Meat_Bone"},{ "name": "Warthog","lvl": 1,"attack": 9, "health": 6,"food": "Mushroom"},{"name": "Whale","lvl": 2,"attack": 25,"health": 33,"food": "Meat_Bone"},{"name": "Seagull","lvl": 3,"attack": 9,"health": 8,"food": "Mushroom"},{"name": "Spinosaurus","lvl": 1,"attack": 4,"health": 8,"food": "Meat_Bone"}]},{ "date": "2023-5-20", "numberOfPets": 5, "turn": 19, "wins": 8, "pets": [{ "name": "Monkey","lvl": 2,"attack": 31, "health": 38,"food": null},{ "name": "Beluga_Whale","lvl": 2,"attack": 13, "health": 20,"food": "Mushroom"},{"name": "Peacock","lvl": 3,"attack": 28,"health": 50,"food": "Garlic"},{"name": "Spinosaurus","lvl": 3,"attack": 12,"health": 16,"food": null},{"name": "Shark","lvl": 2,"attack": 24,"health": 38,"food": "Garlic"}]},{ "date": "2023-5-21", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Beluga_Whale","lvl": 3,"attack": 12, "health": 19,"food": "Garlic"},{ "name": "Lynx","lvl": 1,"attack": 24, "health": 45,"food": "Pineapple"},{"name": "Hawk","lvl": 1,"attack": 5,"health": 4,"food": "Pineapple"},{"name": "Beetle","lvl": 3,"attack": 9,"health": 17,"food": "Garlic"},{"name": "Cow","lvl": 2,"attack": 6,"health": 8,"food": null}]},{ "date": "2023-5-22", "numberOfPets": 5, "turn": 17, "wins": 10, "pets": [{ "name": "Monkey","lvl": 2,"attack": 24, "health": 26,"food": null},{ "name": "White_Tiger","lvl": 2,"attack": 34, "health": 50,"food": "Steak"},{"name": "Hawk","lvl": 2,"attack": 8,"health": 9,"food": null},{"name": "Macaque","lvl": 3,"attack": 43,"health": 50,"food": "Garlic"},{"name": null,"lvl": null,"attack": null,"health": null,"food": null}]},{ "date": "2023-5-23", "numberOfPets": 5, "turn": 14, "wins": 6, "pets": [{ "name": "Armadillo","lvl": 1,"attack": 10, "health": 15,"food": null},{ "name": "Camel","lvl": 2,"attack": 17, "health": 21,"food": "Donut"},{"name": "Leech","lvl": 2,"attack": 44,"health": 50,"food": "Melon"},{"name": "Dragonfly","lvl": 2,"attack": 5,"health": 7,"food": "Grapes"},{"name": "Stegosaurus","lvl": 3,"attack": 14,"health": 19,"food": null}]},{ "date": "2023-5-24", "numberOfPets": 5, "turn": 19, "wins": 9, "pets": [{ "name": "Leech","lvl": 2,"attack": 42, "health": 21,"food": "Melon"},{ "name": "Rhino","lvl": 3,"attack": 38, "health": 41,"food": "Melon"},{"name": "Snake","lvl": 3,"attack": 18,"health": 18,"food": "Pineapple"},{"name": "Eagle","lvl": 3,"attack": 11,"health": 10,"food": "Mushroom"},{"name": "Orca","lvl": 1,"attack": 4,"health": 8,"food": null}]},{ "date": "2023-5-25", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Scorpion","lvl": 1,"attack": 2, "health": 2,"food": "Peanut"},{ "name": "Rhino","lvl": 3,"attack": 21, "health": 24,"food": "Melon"},{"name": "Snake","lvl": 1,"attack": 6,"health": 6,"food": null},{"name": "Bird_Of_Paradise","lvl": 1,"attack": 3,"health": 3,"food": null},{"name": "Stegosaurus","lvl": 1,"attack": 4,"health": 9,"food": null}]},{ "date": "2023-5-26", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Armadillo","lvl": 2,"attack": 10, "health": 13,"food": "Egg"},{ "name": "Leech","lvl": 2,"attack": 50, "health": 50,"food": "Melon"},{"name": "Camel","lvl": 3,"attack": 31,"health": 31,"food": "Meat_Bone"},{"name": "Dragonfly","lvl": 1,"attack": 21,"health": 25,"food": "Lemon"},{"name": "Moose","lvl": 2,"attack": 10,"health": 13,"food": "Grapes"}]},{ "date": "2023-5-27", "numberOfPets": 5, "turn": 11, "wins": 4, "pets": [{ "name": "Scorpion","lvl": 1,"attack": 1, "health": 1,"food": "Mushroom"},{ "name": "Salamander","lvl": 1,"attack": 27, "health": 23,"food": "Donut"},{"name": "Frilled_Dragon","lvl": 1,"attack": 1,"health": 1,"food": null},{"name": "Dolphin","lvl": 2,"attack": 8,"health": 7,"food": "Pineapple"},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": null}]},{ "date": "2023-5-28", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Penguin","lvl": 2,"attack": 5, "health": 6,"food": null},{ "name": "Camel","lvl": 3,"attack": 24, "health": 17,"food": "Donut"},{"name": "Leech","lvl": 2,"attack": 50,"health": 50,"food": "Lemon"},{"name": "Beluga_Whale","lvl": 2,"attack": 9,"health": 13,"food": "Chili"},{"name": "Poison_Dart_Frog","lvl": 3,"attack": 22,"health": 18,"food": "Pineapple"}]},{ "date": "2023-5-29", "numberOfPets": 5, "turn": 16, "wins": 8, "pets": [{ "name": "Salamander","lvl": 3,"attack": 50, "health": 25,"food": "Melon"},{ "name": "Gorilla","lvl": 3,"attack": 17, "health": 20,"food": null},{"name": "Stegosaurus","lvl": 3,"attack": 8,"health": 13,"food": "Melon"},{"name": null,"lvl": null,"attack": null,"health": null,"food": null},{"name": null,"lvl": null,"attack": null,"health": null,"food": null}]},{ "date": "2023-5-30", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Salamander","lvl": 3,"attack": 50, "health": 50,"food": "Lemon"},{ "name": "Slug","lvl": 1,"attack": 18, "health": 18,"food": null},{"name": "Poison_Dart_Frog","lvl": 2,"attack": 26,"health": 23,"food": "Pineapple"},{"name": "Moose","lvl": 2,"attack": 8,"health": 9,"food": null},{"name": "Stegosaurus","lvl": 1,"attack": 4,"health": 9,"food": null}]},{ "date": "2023-5-31", "numberOfPets": 5, "turn": 13, "wins": 6, "pets": [{ "name": "Scorpion","lvl": 1,"attack": 5, "health": 5,"food": "Peanut"},{ "name": "Ox","lvl": 2,"attack": 24, "health": 26,"food": "Donut"},{"name": "Snake","lvl": 1,"attack": 9,"health": 9,"food": null},{"name": "Moose","lvl": 3,"attack": 10,"health": 10,"food": "Fortune_Cookie"},{"name": "Leech","lvl": 2,"attack": 9,"health": 20,"food": "Melon"}]},{ "date": "2023-6-1", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Moose","lvl": 3,"attack": 10, "health": 11,"food": null},{ "name": "Ox","lvl": 2,"attack": 40, "health": 42,"food": "Donut"},{"name": "Snake","lvl": 1,"attack": 18,"health": 18,"food": "Lemon"},{"name": "Stegosaurus","lvl": 2,"attack": 22,"health": 27,"food": null},{"name": "Stegosaurus","lvl": 1,"attack": 5,"health": 10,"food": "Meat_Bone"}]},{ "date": "2023-6-2", "numberOfPets": 5, "turn": 16, "wins": 10, "pets": [{ "name": null,"lvl": null,"attack": null, "health": null,"food": null},{ "name": "Salamander","lvl": 3,"attack": 42, "health": 50,"food": "Lemon"},{"name": "Eagle","lvl": 3,"attack": 11,"health": 10,"food": "Mushroom"},{"name": "Gorilla","lvl": 1,"attack": 7,"health": 10,"food": null},{"name": "Stegosaurus","lvl": 2,"attack": 5,"health": 10,"food": null}]},{ "date": "2023-6-3", "numberOfPets": 5, "turn": 13, "wins": 10, "pets": [{ "name": "Skunk","lvl": 2,"attack": 16, "health": 22,"food": "Carrot"},{ "name": "Woodpecker","lvl": 2,"attack": 37, "health": 50,"food": "Pineapple"},{"name": "Crocodile","lvl": 2,"attack": 13,"health": 9,"food": "Carrot"},{"name": "Monkey","lvl": 2,"attack": 7,"health": 8,"food": "Carrot"},{"name": "Monkey","lvl": 2,"attack": 3,"health": 4,"food": null}]},{ "date": "2023-6-4", "numberOfPets": 5, "turn": 13, "wins": 6, "pets": [{ "name": "Doberman","lvl": 2,"attack": 35, "health": 43,"food": "Donut"},{ "name": "Walrus","lvl": 2,"attack": 9, "health": 7,"food": "Tomato"},{"name": "Moose","lvl": 1,"attack": 5,"health": 6,"food": "Tomato"},{"name": "Crocodile","lvl": 1,"attack": 8,"health": 4,"food": null},{"name": "Monkey","lvl": 1,"attack": 2,"health": 3,"food": null}]},{ "date": "2023-6-5", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Marmoset","lvl": 3,"attack": 34, "health": 35,"food": "Chili"},{ "name": "Hippo","lvl": 2,"attack": 46, "health": 50,"food": "Melon"},{"name": "Penguin","lvl": 2,"attack": 11,"health": 12,"food": "Tomato"},{"name": "Dragonfly","lvl": 2,"attack": 13,"health": 14,"food": "Tomato"},{"name": "Monkey","lvl": 1,"attack": 11,"health": 11,"food": "Chili"}]},{ "date": "2023-6-6", "numberOfPets": 5, "turn": 14, "wins": 7, "pets": [{ "name": "Doberman","lvl": 2,"attack": 29, "health": 36,"food": "Carrot"},{ "name": "Octopus","lvl": 3,"attack": 16, "health": 16,"food": "Pineapple"},{"name": "Ostrich","lvl": 1,"attack": 24,"health": 30,"food": "Carrot"},{"name": "Boar","lvl": 1,"attack": 13,"health": 9,"food": null},{"name": "Monkey","lvl": 1,"attack": 5,"health": 6,"food": "Tomato"}]},{ "date": "2023-6-7", "numberOfPets": 5, "turn": 13, "wins": 6, "pets": [{ "name": "Scorpion","lvl": 1,"attack": 2, "health": 2,"food": "Peanut"},{ "name": "Bison","lvl": 2,"attack": 33, "health": 33,"food": "Carrot"},{"name": "Rooster","lvl": 2,"attack": 14,"health": 12,"food": "Melon"},{"name": "Moth","lvl": 3,"attack": 15,"health": 14,"food": null},{"name": "Dragonfly","lvl": 1,"attack": 2,"health": 4,"food": null}]},{ "date": "2023-6-8", "numberOfPets": 5, "turn": 14, "wins": 9, "pets": [{ "name": "Clownfish","lvl": 3,"attack": 18, "health": 19,"food": "Melon"},{ "name": "Stork","lvl": 3,"attack": 19, "health": 18,"food": "Tomato"},{"name": "Sheep","lvl": 3,"attack": 23,"health": 23,"food": "Carrot"},{"name": "Sea_Turtle","lvl": 3,"attack": 17,"health": 18,"food": null},{"name": "Shark","lvl": 2,"attack": 18,"health": 19,"food": "Carrot"}]},{ "date": "2023-6-9", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Gorilla","lvl": 2,"attack": 36, "health": 46,"food": "Melon"},{ "name": "Doberman","lvl": 2,"attack": 27, "health": 22,"food": null},{"name": "Scorpion","lvl": 1,"attack": 11,"health": 5,"food": "Peanut"},{"name": "Monkey","lvl": 1,"attack": 9,"health": 6,"food": "Tomato"},{"name": "Monkey","lvl": 1,"attack": 7,"health": 4,"food": null}]},{ "date": "2023-6-10", "numberOfPets": 5, "turn": 15, "wins": 8, "pets": [{ "name": "Crocodile","lvl": 2,"attack": 10, "health": 6,"food": "Chili"},{ "name": "Orca","lvl": 2,"attack": 6, "health": 10,"food": "Tomato"},{"name": "Skunk","lvl": 2,"attack": 9,"health": 11,"food": "Tomato"},{"name": "Fly","lvl": 1,"attack": 5,"health": 5,"food": "Tomato"},{"name": "Turkey","lvl": 1,"attack": 4,"health": 5,"food": "Melon"}]},{ "date": "2023-6-11", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Shrimp","lvl": 3,"attack": 31, "health": 40,"food": "Melon"},{ "name": "Buffalo","lvl": 2,"attack": 44, "health": 50,"food": "Melon"},{"name": "Clownfish","lvl": 2,"attack": 13,"health": 33,"food": "Tomato"},{"name": "Monkey","lvl": 2,"attack": 10,"health": 11,"food": null},{"name": "Crocodile","lvl": 2,"attack": 15,"health": 11,"food": "Pineapple"}]},{ "date": "2023-6-12", "numberOfPets": 5, "turn": 16, "wins": 10, "pets": [{ "name": "Dragonfly","lvl": 2,"attack": 25, "health": 25,"food": "Steak"},{ "name": "Beaver","lvl": 3,"attack": 50, "health": 50,"food": "Pita_Bread"},{"name": "Marmoset","lvl": 3,"attack": 33,"health": 30,"food": "Pita_Bread"},{"name": "Lion","lvl": 2,"attack": 36,"health": 34,"food": "Pita_Bread"},{"name": "Dragonfly","lvl": 3,"attack": 23,"health": 25,"food": "Garlic"}]},{ "date": "2023-6-13", "numberOfPets": 5, "turn": 16, "wins": 9, "pets": [{ "name": "Puppy","lvl": 2,"attack": 29, "health": 50,"food": "Pita_Bread"},{ "name": "Flamingo","lvl": 3,"attack": 35, "health": 48,"food": "Melon"},{"name": "Walrus","lvl": 2,"attack": 10,"health": 8,"food": null},{"name": "Octopus","lvl": 2,"attack": 15,"health": 17,"food": null},{"name": "Monkey","lvl": 2,"attack": 9,"health": 4,"food": null}]},{ "date": "2023-6-14", "numberOfPets": 5, "turn": 15, "wins": 10, "pets": [{ "name": "Octopus","lvl": 2,"attack": 19, "health": 27,"food": null},{ "name": "Buffalo","lvl": 2,"attack": 50, "health": 50,"food": "Garlic"},{"name": "Kangaroo","lvl": 2,"attack": 17,"health": 28,"food": "Garlic"},{"name": "Walrus","lvl": 1,"attack": 8,"health": 21,"food": null},{"name": "Orangutan","lvl": 2,"attack": 11,"health": 29,"food": null}]},{ "date": "2023-6-15", "numberOfPets": 5, "turn": 11, "wins": 5, "pets": [{ "name": "Slug","lvl": 1,"attack": 14, "health": 19,"food": null},{ "name": "Ox","lvl": 2,"attack": 20, "health": 13,"food": "Melon"},{"name": "Kangaroo","lvl": 2,"attack": 8,"health": 10,"food": null},{"name": "Orca","lvl": 1,"attack": 4,"health": 8,"food": null},{"name": "Monkey","lvl": 2,"attack": 3,"health": 4,"food": null}]},{ "date": "2023-6-16", "numberOfPets": 5, "turn": 11, "wins": 5, "pets": [{ "name": "Betta_Fish","lvl": 1,"attack": 2, "health": 3,"food": null},{ "name": "Ox","lvl": 2,"attack": 10, "health": 10,"food": "Melon"},{"name": "Lion","lvl": 2,"attack": 14,"health": 12,"food": null},{"name": "Marmoset","lvl": 2,"attack": 11,"health": 12,"food": "Garlic"},{"name": "Moth","lvl": 2,"attack": 6,"health": 5,"food": "Honey"}]},{ "date": "2023-6-17", "numberOfPets": 5, "turn": 14, "wins": 9, "pets": [{ "name": "White_Tiger","lvl": 2,"attack": 9, "health": 16,"food": "Steak"},{ "name": "Octopus","lvl": 1,"attack": 9, "health": 17,"food": "Chili"},{"name": "Boar","lvl": 1,"attack": 13,"health": 15,"food": "Pita_Bread"},{"name": "Snake","lvl": 1,"attack": 6,"health": 14,"food": null},{"name": "Orangutan","lvl": 2,"attack": 13,"health": 22,"food": null}]},{ "date": "2023-6-18", "numberOfPets": 5, "turn": 15, "wins": 7, "pets": [{ "name": "Baboon","lvl": 2,"attack": 30, "health": 29,"food": "Peanut"},{ "name": "Boar","lvl": 2,"attack": 44, "health": 46,"food": "Chili"},{"name": "Poodle","lvl": 3,"attack": 15,"health": 15,"food": null},{"name": "Donkey","lvl": 2,"attack": 16,"health": 18,"food": null},{"name": "Elephant","lvl": 2,"attack": 41,"health": 27,"food": "Croissant"}]},{ "date": "2023-6-19", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "White_Tiger","lvl": 1,"attack": 7, "health": 3,"food": "Croissant"},{ "name": "Walrus","lvl": 1,"attack": 10, "health": 5,"food": "Croissant"},{"name": "Slug","lvl": 2,"attack": 10,"health": 10,"food": "Croissant"},{"name": "Seagull","lvl": 2,"attack": 17,"health": 7,"food": "Croissant"},{"name": "Macaque","lvl": 1,"attack": 3,"health": 2,"food": "Croissant"}]},{ "date": "2023-6-20", "numberOfPets": 5, "turn": 16, "wins": 7, "pets": [{ "name": "Boar","lvl": 1,"attack": 30, "health": 34,"food": "Melon"},{ "name": "Buffalo","lvl": 2,"attack": 50, "health": 50,"food": "Garlic"},{"name": "Orca","lvl": 2,"attack": 7,"health": 11,"food": null},{"name": "Monkey","lvl": 2,"attack": 3,"health": 4,"food": null},{"name": "Monkey","lvl": 1,"attack": 2,"health": 3,"food": null}]},{ "date": "2023-6-21", "numberOfPets": 5, "turn": 14, "wins": 9, "pets": [{ "name": "Boar","lvl": 1,"attack": 17, "health": 14,"food": "Melon"},{ "name": "Hedgehog","lvl": 1,"attack": 10, "health": 13,"food": "Chili"},{"name": "Blowfish","lvl": 2,"attack": 20,"health": 19,"food": "Garlic"},{"name": "Orangutan","lvl": 2,"attack": 13,"health": 17,"food": "Pita_Bread"},{"name": "Seal","lvl": 1,"attack": 8,"health": 20,"food": "Honey"}]},{ "date": "2023-6-22", "numberOfPets": 5, "turn": 15, "wins": 8, "pets": [{ "name": "Octopus","lvl": 2,"attack": 22, "health": 26,"food": null},{ "name": "Bat","lvl": 2,"attack": 37, "health": 48,"food": "Garlic"},{"name": "Kangaroo","lvl": 2,"attack": 19,"health": 18,"food": "Pita_Bread"},{"name": "Dragonfly","lvl": 3,"attack": 12,"health": 12,"food": null},{"name": "Monkey","lvl": 2,"attack": 15,"health": 14,"food": null}]},{ "date": "2023-6-23", "numberOfPets": 5, "turn": 14, "wins": 9, "pets": [{ "name": "Monkey","lvl": 2,"attack": 23, "health": 30,"food": "Steak"},{ "name": "Monkey","lvl": 2,"attack": 4, "health": 5,"food": "Steak"},{"name": "Squirrel","lvl": 2,"attack": 44,"health": 50,"food": "Garlic"},{"name": "Kangaroo","lvl": 2,"attack": 6,"health": 5,"food": "Garlic"},{"name": "Bat","lvl": 3,"attack": 7,"health": 6,"food": "Honey"}]},{ "date": "2023-6-24", "numberOfPets": 5, "turn": 10, "wins": 3, "pets": [{ "name": "Bat","lvl": 2,"attack": 10, "health": 13,"food": null},{ "name": "Hippo","lvl": 1,"attack": 12, "health": 13,"food": "Garlic"},{"name": "Giraffe","lvl": 1,"attack": 5,"health": 7,"food": null},{"name": "Dragonfly","lvl": 2,"attack": 6,"health": 8,"food": null},{"name": "Poodle","lvl": 1,"attack": 5,"health": 5,"food": null}]},{ "date": "2023-6-25", "numberOfPets": 5, "turn": 16, "wins": 10, "pets": [{ "name": "Walrus","lvl": 1,"attack": 7, "health": 5,"food": "Steak"},{ "name": "Buffalo","lvl": 2,"attack": 50, "health": 50,"food": "Melon"},{"name": "Kangaroo","lvl": 2,"attack": 18,"health": 12,"food": "Peanut"},{"name": "Swan","lvl": 3,"attack": 32,"health": 20,"food": "Croissant"},{"name": "Shark","lvl": 2,"attack": 26,"health": 36,"food": "Garlic"}]},{ "date": "2023-6-26", "numberOfPets": 5, "turn": 14, "wins": 8, "pets": [{ "name": "Turtle","lvl": 1,"attack": 2, "health": 17,"food": null},{ "name": "Orangutan","lvl": 3,"attack": 23, "health": 36,"food": null},{"name": "Hedgehog","lvl": 1,"attack": 27,"health": 32,"food": "Garlic"},{"name": "Giraffe","lvl": 2,"attack": 12,"health": 31,"food": null},{"name": "Shark","lvl": 1,"attack": 33,"health": 38,"food": "Garlic"}]},{ "date": "2023-6-27", "numberOfPets": 5, "turn": 13, "wins": 10, "pets": [{ "name": "Goose","lvl": 2,"attack": 24, "health": 26,"food": "Melon"},{ "name": "Marmoset","lvl": 3,"attack": 47, "health": 50,"food": "Peanut"},{"name": "Monkey","lvl": 1,"attack": 14,"health": 15,"food": "Peanut"},{"name": "Dragonfly","lvl": 2,"attack": 11,"health": 13,"food": "Peanut"},{"name": "Dragonfly","lvl": 1,"attack": 5,"health": 7,"food": null}]},{ "date": "2023-6-28", "numberOfPets": 5, "turn": 17, "wins": 10, "pets": [{ "name": "Bat","lvl": 3,"attack": 36, "health": 50,"food": "Peanut"},{ "name": "Blowfish","lvl": 2,"attack": 37, "health": 42,"food": "Peanut"},{"name": "Kangaroo","lvl": 3,"attack": 13,"health": 14,"food": "Peanut"},{"name": "Monkey","lvl": 2,"attack": 9,"health": 12,"food": null},{"name": "Monkey","lvl": 1,"attack": 1,"health": 2,"food": null}]},{ "date": "2023-6-29", "numberOfPets": 5, "turn": 17, "wins": 10, "pets": [{ "name": "White_Tiger","lvl": 1,"attack": 17, "health": 16,"food": "Peanut"},{ "name": "Octopus","lvl": 2,"attack": 12, "health": 12,"food": null},{"name": "Bat","lvl": 2,"attack": 48,"health": 46,"food": "Pita_Bread"},{"name": "Dragonfly","lvl": 2,"attack": 14,"health": 19,"food": "Melon"},{"name": "Shark","lvl": 3,"attack": 37,"health": 47,"food": "Garlic"}]},{ "date": "2023-6-30", "numberOfPets": 5, "turn": 12, "wins": 6, "pets": [{ "name": "Bat","lvl": 2,"attack": 7, "health": 8,"food": "Steak"},{ "name": "Sheep","lvl": 1,"attack": 5, "health": 9,"food": "Cucumber"},{"name": "Wolf","lvl": 1,"attack": 10,"health": 10,"food": "Lemon"},{"name": "Wolf","lvl": 1,"attack": 9,"health": 9,"food": null},{"name": "Turkey","lvl": 2,"attack": 7,"health": 8,"food": null}]},{ "date": "2023-7-1", "numberOfPets": 5, "turn": 15, "wins": 6, "pets": [{ "name": "Moth","lvl": 2,"attack": 6, "health": 13,"food": "Cucumber"},{ "name": "Hedgehog","lvl": 3,"attack": 13, "health": 12,"food": "Carrot"},{"name": "Rooster","lvl": 2,"attack": 13,"health": 9,"food": "Pita_Bread"},{"name": "Sabertooth_Tiger","lvl": 2,"attack": 13,"health": 11,"food": "Pita_Bread"},{"name": "Toad","lvl": 3,"attack": 9,"health": 19,"food": "Cucumber"}]},{ "date": "2023-7-2", "numberOfPets": 5, "turn": 17, "wins": 9, "pets": [{ "name": "Eagle","lvl": 1,"attack": 13, "health": 12,"food": "Steak"},{ "name": "Wolf","lvl": 1,"attack": 11, "health": 11,"food": null},{"name": "Rooster","lvl": 3,"attack": 16,"health": 14,"food": "Melon"},{"name": "Fly","lvl": 1,"attack": 12,"health": 12,"food": "Melon"},{"name": "Turkey","lvl": 2,"attack": 10,"health": 11,"food": "Lemon"}]},{ "date": "2023-7-3", "numberOfPets": 5, "turn": 16, "wins": 8, "pets": [{ "name": "Reindeer","lvl": 2,"attack": 20, "health": 18,"food": null},{ "name": "Rooster","lvl": 2,"attack": 29, "health": 27,"food": "Melon"},{"name": "Snake","lvl": 2,"attack": 10,"health": 10,"food": "Pineapple"},{"name": "Eagle","lvl": 2,"attack": 11,"health": 10,"food": "Melon"},{"name": "Bird_Of_Paradise","lvl": 1,"attack": 3,"health": 3,"food": null}]},{ "date": "2023-7-4", "numberOfPets": 5, "turn": 11, "wins": 3, "pets": [{ "name": "Bat","lvl": 3,"attack": 13, "health": 19,"food": "Cucumber"},{ "name": "Buffalo","lvl": 1,"attack": 22, "health": 26,"food": "Cucumber"},{"name": "Bison","lvl": 2,"attack": 22,"health": 19,"food": null},{"name": "Bird_Of_Paradise","lvl": 1,"attack": 3,"health": 3,"food": null},{"name": null,"lvl": null,"attack": null,"health": null,"food": null}]},{ "date": "2023-7-5", "numberOfPets": 5, "turn": 18, "wins": 8, "pets": [{ "name": "Eagle","lvl": 2,"attack": 11, "health": 14,"food": "Pita_Bread"},{ "name": "Buffalo","lvl": 2,"attack": 50, "health": 50,"food": "Lemon"},{"name": "Snake","lvl": 2,"attack": 9,"health": 9,"food": "Pineapple"},{"name": "Wolf","lvl": 3,"attack": 9,"health": 9,"food": null},{"name": "Turkey","lvl": 2,"attack": 6,"health": 7,"food": "Melon"}]},{ "date": "2023-7-6", "numberOfPets": 5, "turn": 10, "wins": 4, "pets": [{ "name": "Deer","lvl": 2,"attack": 10, "health": 7,"food": "Garlic"},{ "name": "Moose","lvl": 1,"attack": 6, "health": 7,"food": null},{"name": "Dolphin","lvl": 2,"attack": 10,"health": 9,"food": "Garlic"},{"name": "Chicken","lvl": 1,"attack": 5,"health": 6,"food": null},{"name": "Cockatoo","lvl": 1,"attack": 9,"health": 7,"food": null}]},{ "date": "2023-7-7", "numberOfPets": 5, "turn": 14, "wins": 10, "pets": [{ "name": "Ladybug","lvl": 2,"attack": 23, "health": 13,"food": "Tomato"},{ "name": "Lizard","lvl": 3,"attack": 16, "health": 19,"food": "Meat_Bone"},{"name": "Snake","lvl": 2,"attack": 15,"health": 19,"food": "Onion"},{"name": "Tiger","lvl": 1,"attack": 6,"health": 5,"food": null},{"name": "Seal","lvl": 2,"attack": 14,"health": 23,"food": "Popcorn"}]},{ "date": "2023-7-8", "numberOfPets": 5, "turn": 11, "wins": 5, "pets": [{ "name": "Beluga_Whale","lvl": 2,"attack": 5, "health": 10,"food": null},{ "name": "Whale","lvl": 2,"attack": 5, "health": 10,"food": "Popcorn"},{"name": "Lizard","lvl": 2,"attack": 5,"health": 7,"food": "Mushroom"},{"name": "Vulture","lvl": 1,"attack": 4,"health": 6,"food": "Cucumber"},{"name": "Parrot","lvl": 2,"attack": 6,"health": 4,"food": null}]},{ "date": "2023-7-9", "numberOfPets": 5, "turn": 13, "wins": 8, "pets": [{ "name": "Hippo","lvl": 2,"attack": 19, "health": 20,"food": "Garlic"},{ "name": "Crocodile","lvl": 2,"attack": 14, "health": 10,"food": "Tomato"},{"name": "Door_Head_Ant","lvl": 2,"attack": 9,"health": 7,"food": "Onion"},{"name": "Dromedary","lvl": 3,"attack": 9,"health": 11,"food": "Garlic"},{"name": "Lionfish","lvl": 1,"attack": 9,"health": 11,"food": null}]},{ "date": "2023-7-10", "numberOfPets": 5, "turn": 15, "wins": 7, "pets": [{ "name": "Ostrich","lvl": 2,"attack": 41, "health": 47,"food": null},{ "name": "Rooster","lvl": 1,"attack": 6, "health": 4,"food": null},{"name": "Parrot","lvl": 1,"attack": 9,"health": 7,"food": null},{"name": "Rooster","lvl": 3,"attack": 13,"health": 11,"food": "Banana"},{"name": "Vulture","lvl": 3,"attack": 15,"health": 11,"food": "Mushroom"}]},{ "date": "2023-7-11", "numberOfPets": 5, "turn": 10, "wins": 3, "pets": [{ "name": "Lizard","lvl": 3,"attack": 9, "health": 12,"food": "Garlic"},{ "name": "Panda","lvl": 2,"attack": 8, "health": 9,"food": "Carrot"},{"name": "Dromedary","lvl": 2,"attack": 10,"health": 7,"food": "Meat_Bone"},{"name": "Turkey","lvl": 1,"attack": 4,"health": 9,"food": null},{"name": "Orangutan","lvl": 1,"attack": 7,"health": 10,"food": null}]},{ "date": "2023-7-12", "numberOfPets": 5, "turn": 16, "wins": 9, "pets": [{ "name": "Deer","lvl": 3,"attack": 14, "health": 30,"food": "Tomato"},{ "name": "Bluebird","lvl": 2,"attack": 25, "health": 23,"food": "Tomato"},{"name": "Orangutan","lvl": 2,"attack": 19,"health": 24,"food": "Popcorn"},{"name": "Crocodile","lvl": 1,"attack": 14,"health": 24,"food": "Popcorn"},{"name": "Turkey","lvl": 3,"attack": 14,"health": 25,"food": "Banana"}]},{ "date": "2023-7-13", "numberOfPets": 5, "turn": 15, "wins": 9, "pets": [{ "name": "Crocodile","lvl": 2,"attack": 16, "health": 10,"food": "Tomato"},{ "name": "Beluga_Whale","lvl": 3,"attack": 14, "health": 21,"food": "Meat_Bone"},{"name": "Tiger","lvl": 1,"attack": 5,"health": 4,"food": null},{"name": "Hippo","lvl": 2,"attack": 15,"health": 19,"food": "Garlic"},{"name": "Leopard","lvl": 2,"attack": 16,"health": 8,"food": null}]}]'
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

window.addEventListener("load", readIn(), createSolved(), checkSolved(), displayStartScreen());

function displayStartScreen() {
    if (reload == false && (window.location.href).includes("?") == false) {
    body = document.getElementsByTagName("body");
    main = document.getElementById("mainContainer");
    div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("bg-dark");
    div.classList.add("startScreen");
    main.classList.add("solved");
    text = document.createElement("p");
    text.classList.add("startText");
    text.innerHTML = "You will be presented with a hidden Super Auto Pets team and the turn on which they lost/won. You have to guess how many wins the team got. Before every guess you can reveal one pet from the team and will be shown the pet itself, its level, attack, health and held food. If the space was left empty, no pet will be displayed. No teams presented achieved zero wins and all teams were used on normal difficulty during their respective weeks weekly pack.";
    div.appendChild(text);
    exit = document.createElement("h1");
    exit.classList.add("exit");
    exit.innerHTML = "X"

    exit.addEventListener('click', hideStartScreen);

    div.appendChild(exit);

    body[0].appendChild(div);
    }
}

function hideStartScreen() {
    div = document.getElementsByClassName("startScreen");
    div[0].remove();
    main = document.getElementById("mainContainer");
    main.classList.remove("solved");
}

function trophyIn(x, y) {
    if (guesses[y][x - 1].classList.contains('inactive') == false && gameEnd == false) {
        for (let i = 0; i < x; i++) {

            guesses[y][i].src = "images/trophies/colorTrophy.png";
            guesses[y][i].classList.toggle("color");
        }
    }
}

function trophyOut(x, y) {
    if (guesses[y][x - 1].classList.contains('inactive') == false && gameEnd == false) {
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

        for (j = 0; j < x; j++) {
            guesses[y][j].src = "images/trophies/blackTrophy.png";
        }
        revealGuessWrong(0, x, y)

    }
    else if (guesses[y][x - 1].classList.contains('inactive') == false && x != answer && !wrongGuessContains(x) && gameEnd == false && numberOfGuesses == 4) {

        for (j = 0; j < x; j++) {
            guesses[y][j].src = "images/trophies/blackTrophy.png";
        }
        revealGuessLose(0, x, y)

    }
    else if (guesses[y][x - 1].classList.contains('inactive') == false && wrongGuessContains(x) && gameEnd == false) {

        shake(y);

    }
    else if (guesses[y][x - 1].classList.contains('inactive') == false && x == answer && gameEnd == false) {

        for (j = 0; j < x; j++) {
            guesses[y][j].src = "images/trophies/blackTrophy.png";
        }
        revealGuessRight(0, x, y)

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
    index = getAnswer();
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
        if (pets[x - 1].name != null) {
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
            statsDiv.classList.add("statsDiv");
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
                if (pets[x-1].name == "Penguin" || pets[x-1].name == "Moose" || pets[x-1].name == "Jellyfish" || pets[x-1].name == "Crane" || pets[x-1].name == "Falcon" || pets[x-1].name == "Lion" || pets[x-1].name == "Racoon" || pets[x-1].name == "Doberman" || pets[x-1].name == "Gorilla" || pets[x-1].name == "Flamingo" || pets[x-1].name == "Wolf" || pets[x-1].name == "Deer") {
                    foodImg.classList.add("food2");
                }
                else {
                    foodImg.classList.add("food");
                }
                div.appendChild(foodImg);
            }
        }
    }
    else {
        h1.innerHTML = "...";
        h1.classList.add("nullPet");
        div.classList.add("nullPet");
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
    if ((occurences[i - 1] / max) < 0.75) {
        return ((occurences[i - 1] / max) * 100 + 12);
    }
    else {
        return ((occurences[i - 1] / max) * 100 - 18);
    }
}

function getStreak() {
    storedList = JSON.parse(localStorage.getItem("guessList"));
    for (let i = storedList.length - 1; i >= 0; i--) {
        if (storedList[i] == 0) {
            return storedList.length - 1 - i;
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

function getAnswer() {
    parsedAnswerData = JSON.parse(answerData);

    if ((window.location.href).includes("?")) {
        url = (window.location.href).split("?");
        answerDate = url[1];
        for (let i = 0; i < parsedAnswerData.length; i++) {
            if (answerDate == parsedAnswerData[i].date) {
                return i;
            }
        }
    }

    const date = new Date();

    for (let i = 0; i < parsedAnswerData.length; i++) {
        if ((date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()) == parsedAnswerData[i].date) {
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
    answerIndex = getAnswer();
    parsedAnswerData = JSON.parse(answerData);
    storedList = JSON.parse(localStorage.getItem("solvedList"));
    storedList.push({ solved: solved, date: parsedAnswerData[answerIndex].date, guesses: wrongGuess, pets: petsRevealed });
    for (let i = 0; i < storedList.length; i++) {
    }
    localStorage.setItem('solvedList', JSON.stringify(storedList));
}

function gameWin(y, x) {
    guessDivId = "guess" + (y + 1);
    guessDiv = document.getElementById(guessDivId);
    numberOfGuesses++;
    for (let i = 0; i < 10; i++) {
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
        statsDiv = document.getElementsByClassName("statsDiv")
        petCol[j].classList.add("solved");
        if (petCol[j].classList.contains("active")) {
            petCol[j].classList.remove("active");
        }
        statsDiv[j].classList.add("solved");
    }
    document.getElementById("pets").classList.add("solved");
    document.getElementById("turnText").remove();
    solved = true;
    updateSolved()
    setTimeout(function () {
        if (!gameEnd) {
            updateGuesses();
        }
        gameEnd = true;
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
    updateSolved();
    setTimeout(function () {
        if (!gameEnd) {
            updateGuesses();
        }
        gameEnd = true;
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
    reload = false;
    var index = null;
    storedList = JSON.parse(localStorage.getItem("solvedList"));
    parsedAnswerData = JSON.parse(answerData);
    answerIndex = getAnswer();
    for (let i = storedList.length - 1; i >= 0; i--) {
        if (storedList[i].date == parsedAnswerData[answerIndex].date) {
            index = i;
            break;
        }
    }

    if (index == null) {
        solved = false;
    }
    else if (index != null) {
        solved = storedList[index].solved;


        if (solved == true) {
            reload = true;
            gameEnd = true;
            for (let i = 0; i < storedList[index].guesses.length; i++) {
                displayPet(storedList[index].pets[i]);
                wrongGuessMade(i, storedList[index].guesses[i]);
            }
            gameWin(storedList[index].guesses.length, answer);
        }
        else if (solved == false && storedList[index].guesses.length < 5 && storedList[index].guesses.length > 0) {
            reload = true;
            for (let i = 0; i < storedList[index].guesses.length; i++) {
                displayPet(storedList[index].pets[i]);
                wrongGuessMade(i, storedList[index].guesses[i]);
            }
            if (storedList[index].pets.length > storedList[index].guesses.length) {
                activateNextGuess(storedList[index].pets[storedList[index].pets.length - 1]);
                displayPet(storedList[index].pets[storedList[index].pets.length - 1]);
            }
        }
        else if (solved == false && storedList[index].guesses.length == 5) {
            reload = true;
            gameEnd = true;
            for (let i = 0; i < 4; i++) {
                displayPet(i + 1);
                wrongGuessMade(i, storedList[index].guesses[i]);
            }
            displayPet(5);
            gameLose(4, storedList[index].guesses[4]);

        }
    }
}

function createSolved() {
    if (localStorage.getItem("solvedList") === null) {
        blankArray = [];
        localStorage.setItem("solvedList", JSON.stringify(blankArray));
    }
}

function revealGuessRight(i, x, y) {
    for (j = 0; j < 10; j++) {
        guesses[y][j].classList.toggle("visible", true);
        guesses[y][j].classList.toggle("inactive", true);
        guesses[y][j].classList.toggle("color", false);
    }

    setTimeout(function () {
        guesses[y][i].classList.toggle("color", true);
        guesses[y][i].src = "images/trophies/colorTrophy.png"
        guesses[y][i].classList.add('subtleShake')
        guesses[y][i].addEventListener("animationend", function (e) {
            guesses[y][i].classList.remove('subtleShake');

        });
        i++
        if (i < x) {
            revealGuessRight(i, x, y)
        }
        else if (i == x) {
            setTimeout(function () {
                for (j = 0; j < 10; j++) {
                    guesses[y][j].classList.toggle("visible", false);
                }
                gameWin(y, x);
            }, 1000);
        }

    }, 2500 / x);
}

function revealGuessWrong(i, x, y) {
    for (j = 0; j < 10; j++) {
        guesses[y][j].classList.toggle("visible", true);
        guesses[y][j].classList.toggle("inactive", true);
        guesses[y][j].classList.toggle("color", false);
    }
    setTimeout(function () {
        guesses[y][i].classList.toggle("color", true);
        guesses[y][i].src = "images/trophies/colorTrophy.png"
        guesses[y][i].classList.add('subtleShake')
        guesses[y][i].addEventListener("animationend", function (e) {
            guesses[y][i].classList.remove('subtleShake');

        });
        i++
        if (i < x) {
            revealGuessWrong(i, x, y)
        }
        else if (i == x) {
            setTimeout(function () {
                for (j = 0; j < 10; j++) {
                    guesses[y][j].classList.toggle("visible", false);
                }
                wrongGuessMade(y, x);
                shake(y);
            }, 1000);
        }

    }, 2500 / x);
}

function revealGuessLose(i, x, y) {

    for (j = 0; j < 10; j++) {
        guesses[y][j].classList.toggle("inactive", true);
        guesses[y][j].classList.toggle("visible", true);
        guesses[y][j].classList.toggle("color", false);
    }

    setTimeout(function () {
        guesses[y][i].classList.toggle("color", true);
        guesses[y][i].src = "images/trophies/colorTrophy.png"
        guesses[y][i].classList.add('subtleShake')
        guesses[y][i].addEventListener("animationend", function (e) {
            guesses[y][i].classList.remove('subtleShake');

        });
        i++
        if (i < x) {
            revealGuessLose(i, x, y)
        }
        else if (i == x) {
            setTimeout(function () {
                for (j = 0; j < 10; j++) {
                    guesses[y][j].classList.toggle("visible", false);
                }
                gameLose(y, x);
            }, 1000);
        }

    }, 2500 / x);
}

function shake(y) {
    guessDivId = "guess" + (y + 1);
    guessDiv = document.getElementById(guessDivId);
    guessDiv.classList.add('shake')
    guessDiv.addEventListener("animationend", function (e) {
        guessDiv.classList.remove('shake');

    });
}