// I am aware that sensitive information such as API keys should not be on display, this one however would be visible even in the HTML.
API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = "";

// GLOBAL VARIABLES
// Constant variable
const emailFeedback = document.getElementById("emailFeedback");
const confirmEmailFeedback = document.getElementById("confirmEmailFeedback")
const emailInput = document.getElementById("email");
const bookingFormEmailFeedbacks = [confirmEmailFeedback, emailFeedback]
const bookingForm = document.getElementById("bookingForm");
const confirmEmailInput = document.getElementById("confirmEmail")
const mapIsPresent = document.getElementById("map")
const cityButtons = document.getElementsByClassName("cityButton")
const cityCards = document.getElementsByClassName("cityCard")
const bookingFormEmailInputs = [confirmEmailInput, emailInput]
const packageInput = document.getElementById("packageInput")
// User Geolocation, gets users current location
// When website is opened, the below code prompts the user to give the website location permissions

// Let variables
let isHomePage = document.querySelector("main").id == "home-page"
let isBookingPage = document.querySelector("main").id == "booking-page"
let isDefaultDataSet = false;
let styleButtons = document.getElementsByClassName("styleButton")
let locationAllowed = false;
let cityName;
let cityId;
let map;
// Data for each city
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
// Full user details
let userDetails = {
  currentUserLatitude: 20,
  currentUserLongitude: 20,
  // If a user approves location permissions successCallBack will be invoked, this will update and centre the map position to the users location
  successCallBack: (position) => {
    userDetails.currentUserLongitude = position.coords.longitude;
    userDetails.currentUserLatitude = position.coords.latitude;
    chosenCityDetails.chosenCityLatitude = cities.londonCity.cityLatitude;
    chosenCityDetails.chosenCityLongitude = cities.londonCity.cityLongitude;
    locationAllowed = true;
    initMap();
  },
  errorCallBack: () => {

    locationAllowed = false;
    // If check is added to prevent alert on other pages
    if (isHomePage) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "If user location permissions are denied you will not be able to see your current location marker on the map."
      });
    }
    // alert("If user location permissions are denied, not all features of this website will be available. Please update your location permissions and then resfresh this page")
    initMap();
  }
};
// On click of a city or on approval of user location permissions this will update the chosen cities position attributes
// On update of these attributes google maps API location is updated 
let chosenCityDetails = {
  // chosenCityLatitude: userDetails.currentUserLatitude,
  // chosenCityLongitude: userDetails.currentUserLongitude,
  chosenCityLatitude: userDetails.currentUserLatitude,
  chosenCityLongitude: userDetails.currentUserLongitude,
};

// EVENT LISTENERS 
document.addEventListener("DOMContentLoaded", (event) => {
  navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)
});
for (card of cityCards) {
  card.addEventListener("click", handleCityClick)
};


for (let button of styleButtons) {
  button.addEventListener("click", toggleSelectedPackageCardButton)
}

for (let button of cityButtons) {
  button.addEventListener("click", toggleSelectedCityButton)
}

for (card of cityCards) {
  card.addEventListener("click", toggleCityOutline)
}

if (isBookingPage) {
  let isEmailMatching = emailInput.value === confirmEmailInput.value
  for (let input of bookingFormEmailInputs) {
    input.addEventListener("input", onBookingFormInput)
  }
  bookingForm.addEventListener("submit", onBookingFormSubmit)
}
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

// On the click of each city, displayed details such as map location, map marker, city name, city description, city places to visit are updated
async function handleCityClick(e) {
  // Dot notation is used across this script code, in this instance however dot notation on its own was not able to make the code work through various
  // attempts, I have instead used a mix of the two. Understandably bad practice but could not find any other way of making this work
  chosenCityDetails.chosenCityLatitude = cities[e.target.closest(".cityCard").id].cityLatitude;
  chosenCityDetails.chosenCityLongitude = cities[e.target.closest(".cityCard").id].cityLongitude;
  chosenCityName = cities[e.target.closest(".cityCard").id].cityName
  cityId = e.target.closest(".cityCard").id
  displayCityInformation();
  initMap();
};

async function displayCityInformation() {
  let cityCount = 0;
  let cityInformationContainer = document.getElementById("cityInformationContainer");
  cityInformationContainer.innerHTML = `<h2 class="mt-2">${chosenCityName}</h2>
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

/** Adds the styleButtonActive class 
 * 
 * @param {Click} e - This is information of the event that triggers the function 
 */

function toggleSelectedPackageCardButton(e) {
  let defaultPackage = "silver";
  let chosenPackage = e.target.id
  let targetedElement = e.target;
  let isElementActive = targetedElement.classList.contains("styleButtonActive")
  targetedElement.classList.remove("styleButtonActive")
  if (isElementActive === false) {
    for (button of styleButtons) {
      button.classList.remove("styleButtonActive")
    }
    targetedElement.classList += " styleButtonActive"
  } else if (isElementActive === true) {
    targetedElement.classList.remove("styleButtonActive")
    console.log("removing active class")
    chosenPackage = defaultPackage;
    // packageInput.setAttribute("value", defaultPackage)
  }
  // Setting hidden input data to propagate chosen package to backend 
  packageInput.setAttribute("value", chosenPackage)
  console.log(chosenPackage)

}

/** Adds the cityActive class if it is not present, removes it if it is present and removes the class from elements other than the selected one, if it is found.
 * 
 *@param {Click} e - This is information of the event that triggers the function 
 */
function toggleSelectedCityButton(e) {
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
}

/** Adds a red border to the email and confirm email inputs and adds an error below each
 * 
 * @param {Submit} e - This is information of the event that triggers the function 
 */
function onBookingFormSubmit(e) {
  if (!isEmailMatching) {
    e.preventDefault()
    for (let input of bookingFormEmailInputs) {
      input.classList.add("redBorder")
    }
    for (let feedback of bookingFormEmailFeedbacks) {
      feedback.classList.remove("inactiveError")
    }
  }
}
/** Removes the red border and error message once email and confirm email inputs are matching  
 * 
*/
function onBookingFormInput() {
  isEmailMatching = emailInput.value === confirmEmailInput.value
  if (isEmailMatching) {
    for (let input of bookingFormEmailInputs) {
      input.classList.remove("redBorder")
    }
    for (let feedback of bookingFormEmailFeedbacks) {
      feedback.classList.add("inactiveError")
    }
  }
}

/** Places an outline on the selected city card and removes previously selected city card outlines.
 * @param {ClickEvent} e - This is information of the event that triggers the function 
*/
function toggleCityOutline(e) {
  let selectedCityCard = e.target.closest(".cityCard")
  let cardOutlinedBoolean = selectedCityCard.classList.contains("cityCardOutlined")
  if (!cardOutlinedBoolean) {
    for (card of cityCards) {
      card.classList.remove("cityCardOutlined")
      selectedCityCard.classList.add("cityCardOutlined")
    }
  }
}

// NAKED CODE, no specific organisation for this code and does not fit into other categories
// Set the map initially to london incase the user declines permission, in this way the map is not placed in the middle of nowhere
// May have to place this code into a function which will only be invoked once, on page open //////////////////////////////

if(isHomePage) {
  if (!isDefaultDataSet) {
    isDefaultDataSet = true;
    chosenCityDetails.chosenCityLatitude = cities.londonCity.cityLatitude
    chosenCityDetails.chosenCityLongitude = cities.londonCity.cityLongitude
    initMap()
  }
}
