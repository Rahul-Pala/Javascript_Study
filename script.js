// let x = "Hello"
// if (x==="Hello") alert("Hello Rahul - the Software Engineer")
// else alert("I am Rich")

console.log(10 + 10)

let country = 'Portugal';
let continent = 'Europe';
let population = 10;
let good = true;

console.log(country);
console.log(continent);
console.log(population);
console.log(true)
console.log(good)

console.log(typeof country)
console.log(typeof population)
console.log(typeof good)
console.log(typeof "Rahul")

let notDefined 
console.log(notDefined)
console.log(typeof notDefined)

notDefined = 1991
console.log(notDefined)
console.log(typeof notDefined)
console.log(typeof null)

const birthDate = 1989
console.log(birthDate)

const now = 1989
const ageRahul = 2025 - now
const ageSomeOne = 2026 - now
console.log(ageRahul * 2, ageSomeOne)

console.log('5' + '5')
console.log("Rahul" + ' ' + "Pala")

let x = 10 + 5
x += 5
console.log(x)
x++
console.log(x)

const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

BMIMark = massMark / (heightMark * heightMark)
BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark)
console.log(BMIJohn)

console.log(BMIJohn < BMIMark)

console.log(`I am ${massMark}kg`)
console.log(`String 
    multiple 
    lines`)

const clientAge = 20

const age = 15
if (age >= 18) {
console.log("You can apply for driving licence")
}

else
console.log("You do not need the age limit")

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}
else 
console.log("John's BMI is higher than Mark's!")

const year = "1000"
console.log(year)
console.log(Number(year) + 500)

console.log(Number("Hello"))
console.log(Number("100"))
console.log(23)
console.log(String(23))

const money = 0
if(money > 9) {
    console.log("I am rich")
}

else console.log("you can save money")

//const favorite = Number(prompt("What's you're favorite number?"))
// console.log(favorite)

// if (favorite === 1)
//     console.log("you're number one")
// else if (favorite === 2)
// console.log("Keep tring to be 1")

// else if(favorite === 3)
//     console.log("keep trying")
// else (favorite === 4)
// console.log("other numbers")

// if (favorite !== 1) console.log("why not 1?")

    const scoreDolphins = (96 + 108 + 89) / 3
    const ScoreKoalas = (88 + 91 + 110) / 3
    
    console.log(scoreDolphins)
    console.log(ScoreKoalas)

    if (scoreDolphins > ScoreKoalas){
        console.log("Dolphins Win")
    }

    else if (ScoreKoalas > scoreDolphins)
        {console.log("Koalas Win")
        }

    else if (scoreDolphins === ScoreKoalas)
   { console.log("Draw")
   }

   const day = 'Thursday'

   switch (day) {
    case 'Monday' :
        console.log("It's Monday")
    break;

    case 'Tuesday':
        console.log("It's Tuesday")
    break;

    case 'Wednesday':
    case 'Thursday':
        console.log("Wed and Thurs")
    break;
    default:
        console.log("not a valid day")
   }

if (day === "Monday") {
    console.log("if Monday")
}

    else if
    (day === "Tuesday") {
        console.log("if tuesday")
    }

    else if (day === "Wednesday || Thursday") {
        console.log("Wed and thurs if")
    }
    else
     console.log("default if")

const myage = 17

myage >= 18 ? console.log("can get licence") : console.log("not yet")

const drink = myage >= 18 ? "Wine" : "water mate" ;
console.log(drink)

// function myjuice(apples, oranges) {

//     const juiceA = 'I want ${apples} apples and ${oranges} oranges ';
//     return juiceA ;
// }

// myjuice()

// const juiceAA = myjuice(1, 2)
// console.log(juiceAA)

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.` ;
    return juice
}

const fruitjuice = fruitProcessor(1) ; 
console.log(fruitjuice)

function calcAge1(birthYear) {
    return 2024 - birthYear ;
}
const age1 = calcAge1(1989)
console.log(age1)

const calAge2 = function(birthYear) {
    return 2024 - birthYear;
}
const age2 = calAge2(1993);
console.log(age2)

console.log(age1, age2)

const calAge3 = birthYear => 2024 - birthYear
const age3 = calAge3(1989)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear ;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years` ;
}

const yearsLeft = yearsUntilRetirement(1989, "Bob")
console.log(yearsLeft)

function cutFruitPieces(fruit) {
    return fruit * 4
}

function foodP(lemon, lime) {
const lemonPieces = cutFruitPieces(lemon);
const limePieces = cutFruitPieces(lime);

const juice = `Juice with ${lemonPieces} piece of lemon and ${lime} piece of Lime.`;
return juice
}

const Ljuice = foodP(3, 4)
console.log(Ljuice)

const calculateAge = function(birthYear) {
    return 2024 - birthYear
}

const yearsForRetire = function(yearOfBirth, firstName) {
    //const age = 2024 - yearOfBirth;
    const age = calculateAge(yearOfBirth)
    const retirementIn = 65 - age;

    if (retirementIn > 0) {
        return `${retirementIn} more year to retire ${firstName}`;
    }
    
    else {
        return "not now"
    }
}

const retirementYear = yearsForRetire(1989, "Rahul")
const retirementYear2 = yearsForRetire(1993, "Ridhi")
console.log(retirementYear)
console.log(retirementYear2)


const calcAverage = (a, b, c) => (a + b + c) / 3;


const scoreDolphinss = calcAverage(44, 23, 71);
const scoreKoalass = calcAverage(65, 54, 49)

const checkWinner = function(aveDolphins, aveKoalas) {
    if (aveDolphins >= aveKoalas * 2)
        return "Dolphins Win"

    else if (aveKoalas >= aveDolphins * 2)
        return "Koalas Win"

    else return "no one wins"
}
const winnerCheck = checkWinner(scoreDolphinss, scoreKoalass)
console.log(winnerCheck)

const friends = ["Rahul", "Monto", "Merrick"]
console.log(friends)

const friend = new Array (34, 23 , 23)
    console.log(friend)

    console.log(friends[0])
    console.log(friends[2])
    console.log(friends.length)
    console.log(friends[friends.length -1])

friends[2] = "Jaineil"
console.log(friends)

const uni = "AUT"

const Rahul = ["Rahul", "Pala", 2024 - 1989, friends, uni]
console.log(Rahul)

//Exerise
const CalAge = function(birthYear) {
    return 2040 - birthYear
}
const years = [2000, 2001, 2002, 2003, 2004];

const ageOne = CalAge(years[0])
const ageTwo = CalAge(years[2])
const ageThree = CalAge(years[4])
console.log(ageOne, ageTwo, ageThree)

//PUSH - Adds elements to the end of an Array
const mFriend = ["Rahul", "Pala", "Simon"]
mFriend.push("Amit")
console.log(mFriend)

//unshift - adds elements to beginning of an array
mFriend.unshift("Ridhi")
console.log(mFriend)

//Remove elements - Last
mFriend.pop()
console.log(mFriend)

//Remove elements - First
mFriend.shift()
console.log(mFriend)

//indexOf
console.log(mFriend.indexOf("Pala"))

//includes
console.log(mFriend.includes("Rahul"))
console.log(mFriend.includes("Bob"))

//if
if (mFriend.includes("Rahul")) {
    console.log("My name is Rahul")
}

//Challenge #2

//Arrow Function
// const calcTip = bill => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20

const calcTip = function(bill) {
    if (bill >= 50 && bill <=300) {
        return bill * 0.15
    }

    else return bill * 0.2

    //return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
}

const givenTip = calcTip(100)
console.log(givenTip)

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)

//OBJECTS
//Key - Value pairs
const Raahul = {
firstName : "Rahul", 
lastName : "Pala",
birthYear: 1991,
job : "Software Engineer", 
Friends : ["Mitesh", "Monish", "Aditya"],
hasDriverLicence : true,

calcuAge : function() {
    this.age = 2037 - this.birthYear;
    return this.age;
} ,

getSummary : function() {
return `${this.firstName} id s ${this.calcuAge} year young boy`
} 
} ;
console.log(Raahul.getSummary)

console.log(Raahul.age)
console.log(Raahul.calcuAge(2005))

// calcuAge : function (birthYear) {
//     console.log(this)
//     return 2024 - birthYear
// }
//Same as:
// const calcuAge = function(birthYear) {
//return 2024 - 1989}

//Any function that is attached to an object is called a method.


console.log(Raahul)
console.log(Raahul.calcuAge(2000));
console.log(Raahul['calcuAge'](2001))


//43
//Dot Notation. E.g., To get lastName
console.log(Raahul.lastName)


//Brackets Notation
console.log(Raahul['lastName'])
const nameKey = "Name"
console.log(Raahul['first' + nameKey])
console.log(Raahul['last' + nameKey])

//const interestedIn = prompt('What do you want to know about Raahul? firstName, lastName, age')

// if (Raahul[interestedIn]) {
//     console.log(Raahul[interestedIn])
// } else {
//     console.log("Wrong Request")
// }

Raahul.location = "Melbourne",
Raahul['degree'] = "Computer Science"
console.log(Raahul)

//Challenge
console.log(` ${Raahul.firstName} has ${Raahul.Friends.length} friends, best friend is ${Raahul.Friends[1]}`)

//Challenge #3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark.calcBMI()
console.log(mark.bmi)
console.log(mark)

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

calcBMI: function() {
     this.bmi =  this.mass / (this.height * this.height)
     return this.bmi
}
}
john.calcBMI()
console.log(john.bmi)
console.log(john)

//Iteration : The For Loop
//similar to if else statement, but its for loop
//has 3 parts

//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <=10; rep = rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

const raul = [
     "Rahul", 
     "Pala",
    1991,
    "Software Engineer", 
    ["Mitesh", "Monish", "Aditya"],
    true,
]

const types = [];
//Reading from Array
for(let i = 0; i < raul.length; i++) {
    console.log(raul[i], typeof raul[i])

types[i] = typeof raul[i]
types.push(typeof raul[i]);
}

//Filling types Array

console.log(types)

//Example of calculating age
const yeahs = [198, 1988, 1989, 1990]
const agge = []

for(i = 0; i <= yeahs.length; i++) {
    agge.push(2024 - yeahs[i]) //push pushes it to the end of array
}
console.log(agge)

//Continue and break
//So continue - is to exit the current iteration of the loop
//and continue to the next one.

// break is used to completely terminate the whole loop.











