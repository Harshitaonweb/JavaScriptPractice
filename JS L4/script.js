// ARRAYS

let marks = [97 ,82, 75, 64, 36];
console.log(marks);
let heroes = ["ironman", "hulk", "thor", "batman", "spiderman", "antman", "blackwidow", "msmarvel", "doctorstrange", "hawkeye"];
console.log(heroes);

// To Access items in array
m = marks[3]
console.log(m);
h = heroes[6]
console.log(h);

// To Change values
marks[2] = 99
console.log(marks);

heroes[3] = "captainAmerica"
console.log(heroes);

// Array Looping
for(let i=0; i < heroes.length; i++) {
    console.log(heroes[i])
}

// For-Of loop
for(let hero of heroes) {
    console.log(hero);
}



