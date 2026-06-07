// const name = "AJITSINH"
// const repoCount = 5

// //console.log(name + repoCount + "value");

// console.log(`HELLO MY NAME IS ${name} AND MY REPORASITORY COUNT IS ${repoCount}`);

const gameName = new String('PINAKSINHS FATHER')  

// console.log (gameName[0]);
// console.log (gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-17,4);
console.log(anotherString);

const newStringOne = "         PINAKJADAV     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://histeshchaudhary.com/hitesh%20chaudhary"
console.log(url.replace(`%20`, `-`))
console.log(url.includes('hitesh'));
console.log(url.includes('bbha'))

console.log (gameName.split(' '));