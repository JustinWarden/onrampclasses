// // if(2+2 === 6){
//     console.log("Math works!");
//   } else {
//     console.log("Math is broken.")
//   }
  
// var time ="morning";

// if (time === "morning"){
//   console.log("Good morning!");
// } else if (time === "afternoon"){
//   console.log("Good afternoon!");
// } else if (time === "evening"){
//   console.log("Good evening!");
// } else {
//   console.log("Hello!");
// }

// Lightning Exercise
// Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

// var likesToTravel=true;
// if(likesToTravel===true){
//     console.log("Bon Voyage!!");
// }else{
//     console.log("enjoy your couch");
// }
// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" 
// OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. 
// Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

// var favoriteFood="pepp Rolls";

// if (favoriteFood ==="pepp Rolls"){
//     console.log("Congratulations! You have excellent taste!");
// } else{
//     console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
// }

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" 
//to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

// if (1+1==5){
//     console.log("truefact");
// }else{
//     console.log("lies");
// }

// if (4*5==20){
//         console.log("truefact");
//  }else{
//     console.log("lies");
//      }

//      if (6-2>=20){
//         console.log("truefact");
//  }else{
//     console.log("lies");
//      }

// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

// var likesdogs= false;
// if (likesdogs==true){
//     console.log("your a dog person")
// }else{
//     console.log("your a cat person")
// }

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

// var birthYear=1982;
// if (birthYear<=1982){
//     console.log("your too old")
// }else{
//     console.log("your just right")
// }

// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: 
//one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// var person={
// name:"justin",
// language:"french",
// }
// if (person.language=="english"){
//     console.log("hello"+person.name);
// }else if(person.language=="spanish"){
//     console.log("hola"+person.name);
// }else if (person.language=="french"){
//     console.log("bonjour"+person.name)
// }

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

// var time=["7:30AM","12:00PM","7:00pm","8:00pm"];
// var isHungry= true;

// if (time[0]===isHungry){
//     console.log("time for breakfast")
// }else if(time[1]===isHungry){
//     console.log("time for lunch")
// }else if(time[2] || time[3])
// console.log("time for dinner")

 var movie= ["starwars", "kingkong","spaceballs"];

// var i = 1;

// while(i < 20){
//   console.log("Hello, world");
//   i++;
// }

// var i = 1;
// while (i <= 100){
// console.log("tweet tweet");
// i++;     
// }

// var i=0
// for(i=0; i<100; i++){
//     console.log("tweet tweet");
// }





// // Favorite Foods
// // In your JavaScript array, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
// // Loop through the array and print each food item to the console.
// var favfoods=["pizza","hamburger","cheese","beef","taco"];
// var i=0;
// for(i=0; i<favfoods.length;i++){
//     console.log(favfoods[i]);
// }

// var cohortOneStudents = ['Sable', 'David', 'Joey', 'Nick', 'Tommy', 'Connor', 
//     'Charles', 'Russ', 'Bobby', 'Josh', 'Nikki', 'Matt', 'Dale', 'Sydney'];

// for( i = 0; i < cohortOneStudents.length; i++){
//     console.log(cohortOneStudents[i]);
//   }

// var hobbies=["camping","fishing","hiking","swimming","partying"];


// for(i=0; i<hobbies.length; i++){
// console.log("hi"+ "im"+ "justin" +"my"+ "hobbies"+ "are"+ hobbies[i]);
// }

// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", 
// "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// for (i=0; i<harryPotterTitles.length; i++){
//     console.log(harryPotterTitles[i])
// }
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
// var score=75;
// for(i=0; i<grades.length; i++){
//     console.log(grades[i]);
// }if (score>=0 && score <= 69){
//     console.log("you got an F");
// }else if (score<=70 && score>= 76){
//     console.log("you got a D");
// }


// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// console.log(sentenceArray);
// var moo="MOOOOOO";
// for(i=0; i<sentenceArray.length; i++){
//     console.log(sentenceArray[i]);
// }