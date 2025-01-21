API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = "";

// GLOBAL VARIABLES

// Data for every city
let mapIsPresent = document.getElementById("map")
let cities = {
  parisCity: {
    cityName: "Paris",
    cityDescription: "Paris fill content",
    cityLatitude: 48.856566667515224,
    cityLongitude: 2.355958775816939,
    cityDescription: "This is the fantastic description about the city of paris",
    cityPlacesToVisit: [{
      place: "Eiffel tower",
      image: "./assets/images/paris_eiffel_tower.webp",
      description: "The iconic symbol of Paris, the Eiffel Tower offers breathtaking views of the city from its observation decks. Completed in 1889, it stands as a testament to architectural innovation and attracts millions of visitors annually.",
      findOutMore: "https://en.wikipedia.org/wiki/Eiffel_Tower",
      alt: "The beautiful Eiffel tower with an amazing sunset behind it"
    }, {
      place: "Louvre Museum",
      image: "./assets/images/louvre_museum.jpg",
      description: "Home to thousands of masterpieces, including the Mona Lisa and the Venus de Milo, the Louvre is the world’s largest art museum. Its stunning glass pyramid entrance is a modern architectural landmark in the heart of Paris.",
      findOutMore: "https://en.wikipedia.org/wiki/Louvre",
      alt: "The louvre located in paris, houses in the background and the beautiful blue sky"
    }, {
      place: "Notre-Dame Cathedral",
      image: "./assets/images/notre_dame_cathedral.jpg",
      description: "This Gothic masterpiece, located on the Île de la Cité, is renowned for its stunning architecture, rose windows, and historic significance. Though under restoration after the 2019 fire, it remains a symbol of Parisian heritage.",
      findOutMore: "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
      alt: "The notre dame cathedral with trees on the right and the beautiful sky"
    }, {
      place: "Sacré-Cœur Basilica",
      image: "./assets/images/Sacré-Cœur Basilica.webp",
      description: "is a Roman Catholic church on Montmartre hill, known for its striking white domes. Completed in 1914, it features a large mosaic inside and offers panoramic views of Paris from its terrace. It’s a symbol of hope and a popular site for both worship and tourism.",
      findOutMore: "https://en.wikipedia.org/wiki/Sacr%C3%A9-C%C5%93ur,_Paris",
      alt: "The Sacré-Cœur Basilica with refreshingly green grass out front and surrounded by nature"
    },
    ]
  },
  londonCity: {
    cityName: "London",
    cityDescription: "London fill content",
    cityLatitude: 51.50758961962817,
    cityLongitude: -0.12083456114608788,
    cityDescription: "This is the fantastic description about the city of london",
    cityPlacesToVisit: [{
      place: "Big Ben",
      image: "./assets/images/london_big_ben.jpg",
      description: "Big Ben, officially the Elizabeth Tower, is an iconic symbol of London at the Palace of Westminster. Built in 1859, its towering Gothic design and clock face are globally recognized, offering a classic view from Westminster Bridge.",
      findOutMore: "https://en.wikipedia.org/wiki/Big_Ben",
      alt: "The big ben and buildings surrounding it"
    }, {
      place: "The British Museum",
      image: "./assets/images/british_museum.jpg",
      description: "The British Museum, located in Bloomsbury, is one of the world’s largest museums, showcasing human history, art, and culture. Opened in 1753, it houses iconic artifacts like the Rosetta Stone and the Elgin Marbles. With free entry, it offers a fascinating journey through over two million years of history.",
      findOutMore: "https://en.wikipedia.org/wiki/British_Museum",
      alt: "The british museum and the dreadful british weather on display for all to see "
    }, {
      place: "Tower of London",
      image: "./assets/images/tower_of_london.webp",
      description: "The Tower of London, a historic fortress on the Thames, has been a royal palace, prison, and treasury since 1066. It’s home to the Crown Jewels and guarded by the Yeoman Warders. Visitors can explore its medieval structures and learn about its rich and sometimes eerie past.",
      findOutMore: "https://en.wikipedia.org/wiki/Tower_of_London",
      alt: "The tower of london, the thames river out front and surrounded by trees"
    }, {
      place: "Covent Garden",
      image: "./assets/images/covent_garden.webp",
      description: "Covent Garden, in London’s West End, is a lively district famous for its historic market, boutique shops, and vibrant street performances. It’s a hub for entertainment, featuring the Royal Opera House and an array of restaurants and theaters.",
      findOutMore: "https://en.wikipedia.org/wiki/Covent_Garden",
      alt: "A picture inside covent garden displaying the beauty of the modern building and the christmas balls hanging from the ceiling"
    },
    ]
  }
};

let locationAllowed = false;
let cityName;
let cityId;
let map;
let userDetails = {
  currentUserLatitude: 20,
  currentUserLongitude: 20,
  // If a user approves location permissions successCallBack will be invoked, this will update and centre the map position to the users location
  successCallBack: (position) => {
    userDetails.currentUserLongitude = position.coords.longitude;
    userDetails.currentUserLatitude = position.coords.latitude;
    chosenCityDetails.chosenCityLatitude = userDetails.currentUserLatitude;
    chosenCityDetails.chosenCityLongitude = userDetails.currentUserLongitude;
    locationAllowed = true;
    initMap();
  },
  errorCallBack: () => {
    locationAllowed = false;
    alert("If user location permissions are denied, not all features of this website will be available. Please update your location permissions and then resfresh this page")
    initMap();
  }
};

// On click of a city or on approval of user location permissions this will update the chosen cities position attributes
// On update of these attributes google maps API location is updated 
let chosenCityDetails = {
  chosenCityLatitude: userDetails.currentUserLatitude,
  chosenCityLongitude: userDetails.currentUserLongitude,
};

// City selection click handlers
let images = document.getElementsByClassName("cityImageButton")
for (image of images) {
  image.addEventListener("click", handleCityClick)
};

// User Geolocation, gets users current location
// When website is opened, the below code prompts the user to give the website location permissions
navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)

// Code to initialise, add and update google maps API
// Copy pasted from google official documentation and then tweaked to suit the websites needs url https://developers.google.com/maps/documentation/javascript/load-maps-js-api?_gl=1*1u5062j*_up*MQ..*_ga*MTc1NzYyMDgxOC4xNzM2MDA2NjIy*_ga_NRWSTWS78N*MTczNjAwNjYyMi4xLjEuMTczNjAwNjYyMi4wLjAuMA..
async function initMap() {
  if (mapIsPresent !== null) {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const userPin = new PinElement({
      background: "#FBBC04",
    });

    map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
      mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
      title: cityName,
    });

    if (locationAllowed) {
      const marker2 = new AdvancedMarkerElement({
        map: map,
        position: { lat: userDetails.currentUserLatitude, lng: userDetails.currentUserLongitude },
        title: "You :)",
        content: userPin.element,
      });
    }
  }
};

initMap();

// On the click of each city, displayed details such as map location, map marker, city name, city description, city places to visit are updated
async function handleCityClick(e) {
  // Dot notation is used across this script code, in this instance however dot notation on its own was not able to make the code work through various
  // attempts, I have instead used a mix of the two (ONLY in this instance). Understandably bad practice but could not find any other way of making this work
  chosenCityDetails.chosenCityLatitude = cities[e.target.id].cityLatitude;
  chosenCityDetails.chosenCityLongitude = cities[e.target.id].cityLongitude;
  chosenCityName = cities[e.target.id].cityName
  cityId = e.target.id
  displayCityInformation();
  initMap();

};

async function displayCityInformation() {
  let cityCount = 0;
  let cityInformationContainer = document.getElementById("cityInformationContainer");
  cityInformationContainer.innerHTML = `<h2>${chosenCityName}</h2>
          <h3>Here are some place to visit</h3>`
  for (place of cities[cityId].cityPlacesToVisit) {
    cityInformationContainer.innerHTML += `
      <div class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${cities[cityId].cityPlacesToVisit[cityCount].image}" class="img-fluid rounded-start placesToVisitCardImg h-100" alt="${cities[cityId].cityPlacesToVisit[cityCount.alt]}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${cities[cityId].cityPlacesToVisit[cityCount].place}</h5>
              <p class="card-text">${cities[cityId].cityPlacesToVisit[cityCount].description}</p>
              <p class="card-text"><small class="text-body-secondary">Want to find out more about ${cities[cityId].cityPlacesToVisit[cityCount].place}?<a href="${cities[cityId].cityPlacesToVisit[cityCount].findOutMore}" target="_blank">Click here!</a></small></p>
            </div>
          </div>
        </div>
      </div>
      `
    cityCount++
  }

}

// Toggle for package buttons
let buttons = document.getElementsByClassName("styleButton")
for (let button of buttons) {
  button.addEventListener("click", function toggleSelectedPackageCardButton(e) {
    let targetedElement = e.target;
    let isElementActive = targetedElement.classList.contains("styleButtonActive")
    targetedElement.classList.remove("styleButtonActive")
    if (isElementActive === false) {
      for (button of buttons) {
        button.classList.remove("styleButtonActive")
      }
      targetedElement.classList += " styleButtonActive"
    } else if (isElementActive === true) {
      targetedElement.classList.remove("styleButtonActive")
    }

  })

}

// Toggle for selecting a city
// Copy pasted from code above using function toggleSelectedPackageCardButton
let cityButtons = document.getElementsByClassName("cityButton")
for (let button of cityButtons) {
  button.addEventListener("click", function toggleSelectedCityButton(e) {
    let targetedElement = e.target;
    let isElementActive = targetedElement.classList.contains("cityActive")
    targetedElement.classList.remove("cityActive")
    if (isElementActive === false) {
      for (button of cityButtons) {
        button.classList.remove("cityActive")
      }
      targetedElement.classList += " cityActive"
    } else if (isElementActive === true) {
      targetedElement.classList.remove("cityActive")
    }

  })

}



// Form matching emails validation 
const emailInput = document.getElementById("email");
const confirmEmailInput = document.getElementById("confirmEmail")
const confirmEmailFeedback = document.getElementById("confirmEmailFeedback")
const emailFeedback = document.getElementById("emailFeedback");

const bookingForm = document.getElementById("bookingForm");
let bookingFormInputs = [confirmEmailInput, termsAndConditionsCheck]

// Adding event listeners for our booking form email inputs
for (input of bookingFormInputs) {
  input.addEventListener("submit", onBookingFormFocusSubmit)
}

// On submit of the form validation checks within this function are performed
function onBookingFormFocusSubmit() {
  // Cycle through with a for loop the elements if an input has been placed, if no input display the correllating error messages below the input
  for (let input of bookingFormInputs) {
    if (input.value.length === 0 || input.value.length < 1) {
      console.log("Cycle working")
    }
  }
  // input.classList.add("redBorder")
  // targetErrorElement.classList.remove("inactiveError")
  console.log(emailInput.value)
  console.log(confirmEmailInput.value)
  const isEmailMatching = ""
  // if()
}

// When there are any buttons press or changes made when in focus in the booking input elements, this function is invoked
function onBookingFormChange(e) {
  let targetErrorElement = document.getElementById(`${e.target.id + "EmptyFeedback"}`)
  let targetedElement = e.target


  if (e.target.value.length > 0) {
    targetErrorElement.classList.add("inactiveError")
    targetedElement.classList.remove("redBorder")
  }
}

let cityCards = document.getElementsByClassName("cityCard")

for (card of cityCards) {
  card.addEventListener("click", toggleCityOutline)
}

function toggleCityOutline(e) {
  let selectedCityCard = e.target.parentNode
  let cardOutlinedBoolean = selectedCityCard.classList.contains("cityCardOutlined")
  if (cardOutlinedBoolean) {
    selectedCityCard.classList.remove("cityCardOutlined")
  } else {
    for (card of cityCards) {
      card.classList.remove("cityCardOutlined")
      selectedCityCard.classList.add("cityCardOutlined")
    }
  }
}
// Email must match


// -------------------------------------------------------------------
// TASKS
//
//
// Add media section to readme

// MAYBE
// Fix zoom, add data to each city and make this adjust dynamically
// Re prompt the user on warning to enable locations
// Create routing from user pin to selected city pin
//

// Basic form validation, leaving out for now if reusable form validation is achieved