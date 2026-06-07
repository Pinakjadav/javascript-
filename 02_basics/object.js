// Singelton
//object.create
// object literals


const mySym = Symbol("key1")



const jsUser = {
    name : "PINAKSINH AJITSINH",
    "full name" : " PNAKSINH AJITSINH JADAV",
    [mySym] : "mykey1",
    age : 22,
    location : "NAVADRA",
    email : "jadavajitsinh@gmail.com",
    isLoggedin : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "ajitdjadav@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "email.email@email.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("HELLO JAVASCRIPT NA MAZDOORO");
}

// console.log(jsUser.greetings);
console.log(jsUser.greeting());



jsUser.greetingtwo = function(){
    console.log(`HELLO JAVASCRIPT NA MAZDOORO,  ${this.name}`); 
}
console.log(jsUser.greetingtwo());





// node 02_basics/object.js