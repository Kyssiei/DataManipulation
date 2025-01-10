console.log("Running Script...")

//========== Part 1 =====================

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//print all the numbers 
console.log("numbers", n1, n2, n3, n4);

//check if all numbers are divisible by 5 
//cache the result in a variable
const isDivisableBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log("is divisable by 5", isDivisableBy5)

//check if the first number is larger than the last number
console.log("The first number is larger than the last number", 10 > 5)
// console.log(10 > 5)

//Acomplish the following arithmic chain:
let answer = (n2 - n1)
answer = (answer * n3)
answer = answer / n4
console.log("The answer to the arithmic chain",answer);


// change the way that isOver 25 calculates
//see lines 50-53

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)

const isNotOver25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
console.log(isNotOver25)
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);






// ================= PART 2 ======================
//The distance of the trip is is 1,500 miles
const totalDistance = 1500

//You have a fuel budget of $175
const fuelBudget = 175

// The average cost of fuel is $3 per gallon 
const fuelCost = 3

// Gallons needed for the entire trip
//============== At 55mph ===========================
console.log("=========== Gallons Needed =============")
const fuelEffeciency = 30;
const gallonsNeeded55 = (totalDistance/fuelEffeciency);
console.log("The amount of gallons needed for 55mph is", gallonsNeeded55);

//============== At 60mph ============================
const fuelEffeciency1 = 28;
const gallonsNeeded60 = Math.ceil(totalDistance/fuelEffeciency1);
console.log("The amount of gallons needed for 60mph is", gallonsNeeded60);

//============= At 75mph ============================
const fuelEffeciency2 = 23;
const gallonsNeeded75 = Math.ceil(totalDistance/fuelEffeciency2);
console.log("The amount of gallons needed for 75mph is", gallonsNeeded75);

//===================================================
console.log("====== Will your budget be enough ======")
//will your budget be enough to cover the fuel expense? for 55mph

const budgetNeeded = gallonsNeeded55 * fuelCost;
const isBudgEnough = fuelBudget >= budgetNeeded;
console.log(`The budget needed for 55mph is $ ${budgetNeeded}`)
console.log(`Is the budget enough: ${isBudgEnough}`)

//will your budget be enough to cover the fuel expense? for 60mph
const budgetNeeded1 = gallonsNeeded60 * fuelCost;
const isBudgEnough1 = fuelBudget >= budgetNeeded1;
console.log(`The budget needed for 60mph is $ ${budgetNeeded1}`)
console.log(`Is the budget enough: ${isBudgEnough1}`)

//will your budget be enough to cover the fuel expense? for 75mph
const budgetNeeded2 = gallonsNeeded75 * fuelCost;
const isBudgEnough2 = fuelBudget >= budgetNeeded2;
console.log(`The budget needed for 60mph is $ ${budgetNeeded2}`)
console.log(`Is the budget enough: ${isBudgEnough2}`)

//=========================================================
console.log("========== length of trip =============")
const mph55 = 55
const mph60 = 60
const mph75 = 75

 const tripLength55 = Math.ceil(totalDistance/mph55)
 console.log(`If you are going 55mph it will take you ${tripLength55} hours.`)

 //==========================================================
 const tripLength60 = Math.ceil(totalDistance/mph60)
 console.log(`If you are going 60mph it will take you ${tripLength60} hours.`)

 //==========================================================
 const tripLength75 = Math.ceil(totalDistance/mph75)
 console.log(`If you are going 75mph it will take you ${tripLength75} hours.`)

//==========================================================
console.log("============== Summary ================")

console.log(`It makes the most sense to travel ay ${mph60}mph so that you can get to your destination as fast as possible while staying within your budget of $${fuelBudget} `)
