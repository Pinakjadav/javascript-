// const userEmail = "Pinak@gmail.com"

// if (userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");   
// }



//       falsy values >> FALSE,, ZERO,, -ZERO,, BIGINT 0N," "  ,NULL, UNDEFINED, NAN        //
// TRUTHY VALUES
// "0", 'FALSE', "", [], {}, FUNCTION(){}



// if(userEmail.length === 0){
//     console.log("array is empty");
// }


// const emptyobj = {}


// if (Object.keys(emptyobj).length === 0){
//     console.log("OBJECT IS EMPTY");
    
// }



// NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED

let val1;

//val1 = 5 ?? 10
//val1  = null ?? 10 
//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

//    ternary operator
        //  condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80"): console.log("more than 80")


// node 04_control_flow/truthy.js