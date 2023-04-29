//Question 1
let ages =[3, 9, 23, 64, 2, 8, 28, 93];/// ages array 
console.log(ages);// subtracting the first and last number of the array
let last = ages[ages.length - 1]; //last number
let first = ages[ages.length - ages.length];//first number
let difference = last - first // subtractiing the first and last numbers
console.log(difference); // loging the answer to the console
// 1b 
ages.push(24) // put age 24 in the end of the array
console.log(ages) // logged out new array
let newLast = ages[ages.length -1] //new last number
let newFirst = ages[ages.length - ages.length];// new last number
let newDifference = newLast - newFirst; // subtracting again
console.log(newDifference); /// 24 - 3 = 21
// 1c
let sum = 0
for (let i = 0; i < ages.length; i++){ // loop that iterates all numbers in array
    console.log(ages[i])
   
sum += ages[i] // sums up the numbers in the ages array

} console.log(sum/ ages.length)

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// variable to start letters at 0
let sumOfLetters = 0 
// array names that contains all the names 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob',] 
/// for loop that iterates all the indexes in the array
for (let i = 0; i < names.length; i++){
   sumOfLetters += names[i].length
} 
/// loging to the console the sum of the letters divided by the length of the names
console.log(sumOfLetters / names.length)
//2b.
let allNames = ""
// for loop to iterate all names 
for (let i = 0; i < names.length; i++){
// what the process of the for lop does to the variable allNames
    allNames = allNames.concat( " ", names[i])
// logging out allNames to the console
} console.log(allNames)
  
// 3.  How do you access the last element of any array?
// to access the last element of the array you use the .length -1 
// example myArray[0, 1, 2, 3,] you would do myArray.length -1
let myArray = [2, 1, 2, 3,]
console.log(myArray.length -1)

//4.  How do you access the first element of any array?
// To access the first element of an array you state the name of the array followed by [0] since arrays are zero based
console.log(myArray[0])

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
//add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// New array with lengths of the names
let nameLengths = [];
// for loop that iterates names array and the length of each name from namesLenghts
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length
} console.log(nameLengths) 

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// sum elements variable
let elementsSum = 0
// for loop that iterates the namelengths array
for (let i = 0; i < nameLengths.length; i++){
   /// math part that sums it together
    elementsSum += nameLengths[i]
}
console.log('The sum of the elements in the array is ' + elementsSum )

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
//to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function myFunction(word, n){ // function with the two parameters
    let concatenatedWord = word // making a variable for the word parameter
    for (let i = 1; i < n; i++){ /// for loop to iterate the length of the number
        concatenatedWord  = concatenatedWord.concat(word) // used .concat to concatenate the word
    }
    
    return concatenatedWord /// returns the variable after it goes through the function
}
console.log(myFunction("Hello", 3)) //calling back the function with the arguments

/// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the 
//first and the last name separated by a space.

// made a new functin with firstName and lastName parameters
function nameFunction(firstName, lastName) {
    // firstName plus a space plus the lastName
    return firstName + " " + lastName
}
/// Logging out my first and last name as the arguments of the function
console.log((nameFunction("Martin" , "Almaraz")))
 
///9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// Made an arrow function for the function that tests to see if it is greter than 100
let greaterThan100 = (arr) =>{
   let total = 0; /// total is originally 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total > 100) {
        return true;
    } else{
        return false
    }
     
};

console.log(greaterThan100(nameLengths)+ " The sum of all the letters in the array is less than 100 so it returns false")

///10.
/// function that takes the namesLengths array and returns thr average of the elements 
let arrayFunction = (array1) => {
    let sum = 0;
    for (let i = 0; i <array1.length; i++) {
        sum = sum + array1[i]
    }
    return (sum/array1.length);
}
// consoling out the function with the argument nameLengths
console.log(arrayFunction(nameLengths))

/// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
//the average of the elements in the second array.
let arr1 = [23, 17, 12, 25] // new arrays 
let arr2 = [24, 15, 16, 22] // new array
let sumOfAverages = 0; 
// function that sees if the average of one 
// is greater than the other
let average = (arr1, arr2) => {
for (let i = 0; i < arr1.length; i++){
   sumOfAverages = sumOfAverages + arr1[i].length
}
if (sumOfAverages /arr1.length > arr2.length){
    return true;
}
else {
    return false;
}
} 
console.log(average(arr1, arr2))

// 12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = 20 
let willBuyDrink =(isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50){
        return true;
    } return willBuyDrink

} 
console.log(willBuyDrink(isHotOutside, moneyInPocket)+ " We have 20 in our pocket")

/// 13. My own function 
/// I made a function that asks if you are thirsty if so it prints that you are to the console.
let thirsty = true
let areYouThirsty = (thirsty) => {
    if (thirsty = true){
        return `Yes I am very thirsty`
    }
    else {
        return false 
    }
}

console.log(areYouThirsty(thirsty))
