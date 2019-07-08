
var leviObject = {
    firstName: "Levi"+" "+"Samples",
    lastName: "Samples",
    favoriteMovies: ["Shrek 1", "Shrek 2", "Shrek 3"],
    favFood: "Fruity Pebbles",
    hobbies: ["Piano", "Dirt bikes","Video Games"],
    funFact: "Drives a mini Cooper",
    specialTalent: "Can do dirt bike wheelies"
}
document.querySelector("#name").innerHTML = `${leviObject.firstName}`

 for(i=0; i<leviObject.favoriteMovies.length; i++){ 

 document.querySelector("#movies").innerHTML += `<li>${leviObject.favoriteMovies[i]}</li>`
}

document.querySelector("#food").innerHTML =  `${leviObject.favFood}`

for(i=0; i<leviObject.hobbies.length; i++){ 

    document.querySelector("#hobbies").innerHTML += `<li>${leviObject.hobbies[i]}</li>`
   }

document.querySelector("#funfact").innerHTML =  `${leviObject.funFact}`

document.querySelector("#talent").innerHTML =  `${leviObject.specialTalent}`
