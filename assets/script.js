API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = "";

// GLOBAL VARIABLES

// data for every city
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
      description: "The lovely eiffel tower, how fantastique",

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
      description: "The lovely big ben, how fantastic",
      findOutMore: "https://en.wikipedia.org/wiki/Big_Ben"
    },{
      place: "The British Museum",
      image: "./assets/images/london_big_ben.jpg",
      description: "A public museum in the Bloomsbury area, dedicated to human history, art, and culture, housing a vast collection of world art and artifacts.",
      findOutMore: "https://en.wikipedia.org/wiki/British_Museum"
    },{
      place: "Tower of London",
      image: "./assets/images/london_big_ben.jpg",
      description: "A historic castle on the north bank of the River Thames, known for its rich history as a royal palace, prison, and home to the Crown Jewels.",
      findOutMore: "https://en.wikipedia.org/wiki/Tower_of_London"
    },{
      place: "Covent Garden",
      image: "./assets/images/london_big_ben.jpg",
      description: "A district in London, renowned for its vibrant market, street performers, and as a cultural and entertainment hub.",
      findOutMore: "https://en.wikipedia.org/wiki/Covent_Garden"
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

// CLICK HANDLERS
let images = document.getElementsByClassName("cityImageButton")
for (image of images) {
  image.addEventListener("click", handleCityClick)
};
// USER LOCATION UPDATING

// When website is opened, the below code prompts the user to give the website location permissions
navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)

// Code to initialise, add and update google maps API
// Copy pasted from google official documentation and then tweaked to suit the websites needs url https://developers.google.com/maps/documentation/javascript/load-maps-js-api?_gl=1*1u5062j*_up*MQ..*_ga*MTc1NzYyMDgxOC4xNzM2MDA2NjIy*_ga_NRWSTWS78N*MTczNjAwNjYyMi4xLjEuMTczNjAwNjYyMi4wLjAuMA..
async function initMap() {
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
  cityInformationContainer.innerHTML = `<h1>The wonderful ${chosenCityName}</h1> <br>
      <p>${cities[cityId].cityPlacesToVisit[0].description}</p>`
  for (place of cities[cityId].cityPlacesToVisit) {
    cityInformationContainer.innerHTML += `
    <div class="card mb-3" style="max-width: 740px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${cities[cityId].cityPlacesToVisit[cityCount].image}" class="img-fluid rounded-start placesToVisitCardImg" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${cities[cityId].cityPlacesToVisit[cityCount].place}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    `
    cityCount++
  }
  // HTML Displayed content


}
// -------------------------------------------------------------------
// TASKS
//
// Add data to each city for destinations
// Create routing from user pin to selected city pin
//
// Add media section to readme

// MAYBE
// Fix zoom, add data to each city and make this adjust dynamically
// Re prompt the user on warning to enable locations
// 