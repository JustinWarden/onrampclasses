
// var greeting="hello world";
// document.querySelector("#hello-container").innerHTML=greeting;


// In your index.html file, add an h1 element with an id of #hello-container.
// In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
// Use document.querySelector to target your #hello-container
// User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.

// var currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }
//   var htmlString = `
//   <h3 class="dish-name">${currentSpecial.name}</h3>
//   <p class="dish-description">
//     ${currentSpecial.description}
//   </p>
//   <h5 class= "dish-price">${currentSpecial.price}</h5>
//   `
//   document.querySelector("#daily-special").innerHTML = htmlString;

// var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"];

// for(var i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
  
//   }
//   document.querySelector("#menu-items-container").innerHTML =  document.querySelector("#menu-items-container").innerHTML

// In your index.html file, create an empty <ul> element and give it an id of #chores-container
// In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
// Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
// You should end up with a bulleted list of all your regular chores.
// var choresArray=["cut grass","feed animals","feed babies"];
// htmlStringList=" ";
// for(var i = 0; i <= choresArray.length; i++){
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`

//   }
  
// Use document.querySelector() to grab a reference to each element in your HTML. 
// Use the .innerHTML property to set the text of each element to the matching value in your object. 
// (For example, the h1 with the id of "title"
//  should contain the title property of your movieObject, etc).

//   var movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }
// document.querySelector("#title").innerHTML += `<li>${movieObject.title}</li>`
// document.querySelector("#genre").innerHTML += `<li>${movieObject.genre}</li>`
// document.querySelector("#release-date").innerHTML += `<li>${movieObject.releaseDate}</li>`

// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", 
// "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia",
//  "Le Bistro", "Charlie Graingers", "The Cellar Door"];

//  for(i=0; i<downtownRestaurants.length; i++){ 

//  document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
// }

// var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
 
// for(i=0; i<sandwichToppings.length; i++){ 

//      document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
//      }

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

  for(i=0; i< movieSchedule.length; i++){
    document.querySelector("#ralph").innerHTML += `<li>${movieSchedule[i]}</li>`

  }
  


