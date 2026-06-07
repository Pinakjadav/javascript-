const marvel_heroes = ["thor","Ironman","spoiderman"]
const dc_heroes = ["Superman", "flash", "spiderman"]


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// spread is work as when you spread broken glass or when you drop a glass from a top and it behaves as the spreaded glass...

const all_newHeroes = [...marvel_heroes,...dc_heroes]
console.log(all_newHeroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const allAnotherArray = anotherArray.flat(Infinity)
console.log(allAnotherArray)



console.log(Array.isArray("Pinak"))

console.log(Array.from("Pinak"))

console.log(Array.from({name : "Pinak"}))  // INTRESTING // THAT WE NEED TO DISCUSS FIRST THAT WE CAN EASILY DEFINE AND AFTER THAT DEFINATION IT CREATES MORE EASY TO DISCUSS

let score1 = 100
let score2 = 200
let score3 = 200 

console.log(Array.of(score1, score2, score3));



//      node 02_basics/newarrays.js


