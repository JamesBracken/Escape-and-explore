API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = ""

// GLOBAL VARIABLES

// data for every city
let cities = {
  parisCity: {
    cityName: "Paris",
    cityDescription: "Paris fill content",
    cityLatitude: 48.856566667515224,
    cityLongitude: 2.355958775816939,
  },
  londonCity: {
    cityName: "London",
    cityDescription: "London fill content",
    cityLatitude: 51.50758961962817,
    cityLongitude: -0.12083456114608788,
  }
}

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
    console.log("lat:" + userDetails.currentUserLatitude)
    console.log("lon:" + userDetails.currentUserLongitude)
    initMap();
  },
  errorCallBack: () => {
    console.log("error")
    alert("If user location permissions are denied, not all features of this website will be available")
  }
}
// On click of a city or on approval of user location permissions this will update the chosen cities position attributes
// On update of these attributes google maps API location is updated 
let chosenCityDetails = {
  chosenCityLatitude: userDetails.currentUserLatitude,
  chosenCityLongitude: userDetails.currentUserLongitude,
}

// CLICK HANDLERS
let images = document.getElementsByClassName("cityImageButton")
for (let image of images) {
  image.addEventListener("click", handleCityClick)
}
// USER LOCATION UPDATING

// When website is opened, the below code prompts the user to give the website location permissions
navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)

// Code to initialise, add and update google maps API 
// Copy pasted from google official documentation and then tweaked to suit the websites needs
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
    title: "Uluru",
  });
}

initMap();


async function handleCityClick() {
  let cityInformationContainer = document.getElementById("cityInformationContainer");
  cityInformationContainer.innerHTML = `<h1>The code worked</h1> <br>
    <p>This would be content about the chosen city</p>`
}
// Re prompt the user on warning to enable locations
// Fix event listener to update  location on city click
// Add data pull into handleCityClick function based on which city is clicked