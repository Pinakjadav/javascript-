// DATESSSSSS

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date (2026, 9, 23)
// console.log(myCreateDate.toDateString());


// let myCreateDate = new Date (2026, 9, 23, 15, 3)
// console.log(myCreateDate.toLocaleString());


// let myCreateDate = new Date ("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date ("09-23-2026")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+ 1 );
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})

//          node 01_basics/datesin.js