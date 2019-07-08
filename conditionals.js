



// function lovejavascript(){
//     console.log("i love javascript!!!");
//   }
//   lovejavascript(); 

// function namedestination (friendName, destination){
//     console.log("Hello, my name is" ,{friendName},"i want to visit",{destination});
//   }
//   namedestination("justin","hyrule");

// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. 
//(Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready.
// Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.


// function myTaco(shelltype, topping){
//     console.log( "A"+ {shelltype}+ "taco with"+ {topping});
      
// }
//    console.log(myTaco("soft","beef"));

//    function makeAtaco(crustType, toppingsArray){
//     var finishedTaco = `A ${size} taco with ${crustType} crust and ${toppingsArray}(", ")} on top.`;
//     return finishedTaco;
//   }
  
//   var mytaco = makeATaco("soft", "hard", "green peppers", "onions", "jalapeno");

//    console.log(mytaco);


// function add(p1, p2) {
//     return p1 + p2;
//   }
//   console.log (add(10, 30));

//   function subtract(p1, p2) {
//     return p1 - p2;
//   }
//   console.log (subtract(10, 30));

//   function multiply(p1, p2) {
//     return p1 * p2;
//   }
//   console.log (multiply(10, 30));

//   function divide(p1, p2) {
//     return p1 / p2;
//   }
//   console.log (divide(10, 30));





// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the 
// console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// function hello(name, language){

// if(language==="english"){
//     console.log("hello"+ name);
// }else if
//     (language==="spanish"){
//         console.log("Hola"+name);   
// }else if 
// (language==="french"){
//     console.log("bonjour"+name);
// }
// }
// console.log(hello("justin", "spanish"));

// Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.

// function sandwhich(breadType,sandwichName,isToasted){
//     if(isToasted===true){
//         console.log("your toasted"+breadType+sandwichName+"is ready");
//     }else if(isToasted===false){
//         console.log("your untoasted"+breadType+sandwichName+"is ready");
//     }
// }
// console.log(sandwhich("white","hoagie",false));

// var dwayneObject = {
//     firstName: "Dwayne",
//     nickName: "The Rock",
//     lastName: "Johnson",
//     favoriteFood: "Eggs",
//     hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
//   }
  
//    function printHobbies(){
//    console.log(dwayneObject.hobbies);
//    }
//   console.log(printHobbies(dwayneObject.hobbies));



// var partyGuests = [
//     {
//       name: "Sam",
//       age: 18
//     },
//     {
//       name: "Jerry",
//       age: 45
//     },
//     {
//       name: "Lila",
//       age: 29
//     },
//     {
//       name: "Mary",
//       age: 68
//     },
//     {
//       name: "Todd",
//       age: 10
//     }
//   ]
  
// //   Fill in the ageChecker function so that it does the following things:
// // Loop through the partyGuests and check if each guest is at least 21.
// // Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// // Log the sentnece to the console.
//   function ageChecker(name, age){
//   for(i=0; i<partyGuests;i++){
//       if (partyGuests.age>=21)
//       console.log("go get a drink");
//   }
//   }
// console.log(ageChecker);


// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
// Output the temperature in Celsius to the console

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(90);
// fToC(90);

// In your JavaScript file, create (declare) a function named addThemUp.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.

var outsideArray =  [4, 7, 8008, 11, 9, -1];
function addThemUp (outsideArrray){
var outsideArray = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);   
}
}
console.log(outsideArray);
