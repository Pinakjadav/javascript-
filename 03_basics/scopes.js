

let a = 300

if (true){

let a = 10
const b = 20
// console.log("INNER: ", a);
}



//console.log(a);
//console.log(b);

function one (){
    const username = "PINAK"

    function two (){

            const website = "YT"
            console.log(username);
    }
   console.log(website);

    two()
}

// one ()

if(true){
        const username = "PINAK"
        if(username === "PINAK"){

            const website = " YT"
           //  console.log(username + website);

        }
        //console.log(website);
        

}
//console.log(username);

// intrestinggggggggg*******************************************

console.log(addone (5));

function addone (num){

    return num +1

}


const addTwo = function(num){
    return num + 2
}

addTwo(5)



//  node 03_basics/scopes.js