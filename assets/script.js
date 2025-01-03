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
  },
  londonCity: {
    cityName: "London",
    cityDescription: "London fill content",
    cityLatitude: 51.50758961962817,
    cityLongitude: -0.12083456114608788,
  }
};
locationAllowed = false;
let cityName;
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
// Copy pasted from google official documentation and then tweaked to suit the websites needs
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude },
    title: cityName,
  })

  // { lat: chosenCityDetails.chosenCityLatitude, lng: chosenCityDetails.chosenCityLongitude }

  if(locationAllowed) {
    const marker2 = new AdvancedMarkerElement({
      map: map,
      position: {lat:userDetails.currentUserLatitude, lng:userDetails.currentUserLongitude},
      title: "You :)",
    })
    console.log(userDetails.currentUserLatitude)
    console.log(userDetails.currentUserLongitude)
  }

};

initMap();

// On the click of each city, details such as map location, map marker, city name, city description, city places to visit are updated
async function handleCityClick(e) {
  // Dot notation is used across this script code, in this instance however dot notation on its own was not able to make the code work through various
  // attempts, I have instead used a mix of the two (ONLY in this instance). Understandably bad practice but could not find any other way of making this work
  chosenCityDetails.chosenCityLatitude = cities[e.target.id].cityLatitude;
  chosenCityDetails.chosenCityLongitude = cities[e.target.id].cityLongitude;
  cityName = cities[e.target.id].cityName
  initMap();
  let cityInformationContainer = document.getElementById("cityInformationContainer");
  cityInformationContainer.innerHTML = `<h1>The code worked</h1> <br>
    <p>This would be content about the chosen city</p>`
};

// -------------------------------------------------------------------
// TASKS
// Add a permanent marker for user location, preferrably different to the normal marker, probably by color


// MAYBE
// Fix zoom, add data to each city and make this adjust dynamically
// Re prompt the user on warning to enable locations
// 