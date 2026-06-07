// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123qwe"
tinderUser.name = "Sammyyy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "hagyy@gmail.com",
    fullname : {
            userName : {
                    firstName : "PINAK",
                    lastName : "JADAV"
            }
     }
}

//console.log(regularUser.fullname?.userName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// THIS IS THE TYPE OF THE GLASS DROPPINGGGGG


const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

const users = [{
    id : 1,
    email : "hasrg@gmail.com"
},

{
    id : 2,
    email : "hasrg@gmail.com"
},

{
    id : 3,
    email : "hasrg@gmail.com"
},
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName :" js in hiindi",
    price : "9999",
    courseInstructor: "jpa"
}

//course.courseInstructor

const { courseInstructor: sir} = course
// console.log (courseInstructor)
console.log (sir)



// node 02_basics/newobjects.js