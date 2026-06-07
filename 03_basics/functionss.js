
function sayMyName (){

console.log("J");
console.log("A");
console.log("D");
console.log("A");
console.log("V");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);
// }

// addTwoNumbers(3, "4");
// addTwoNumbers(3, 4);

function addTwoNumbers(number1, number2){
//   let result = number1 + number2
//   return result
//   console.log("PINAK");
        return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log("results : " + result);



function loginUserMessage (username= "SAM"){
        // if(username === undefined){
        if(!username){
            console.log("PLEASE ENTER A USERNAME !!!!");
            return
        }

    return `${username } just logged in`

}

// console.log(loginUserMessage("PINAKSINH"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("BAPU"))


function calculateCartPrice (...num1){

    return num1


}

//console.log(calculateCartPrice(200,400,500))


const user = {
        username: "hitesh",
        price: "199"

}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({

    username : "sam",
    price: 399

})


const myNewArrey = [200, 400, 100, 600 ]
function returnsecondvalue(getArray){

    return getArray[1]
} 
// console.log(returnsecondvalue(myNewArrey));

console.log(returnsecondvalue([200, 400, 500, 1000]));

// node 03_basics/functionss.js