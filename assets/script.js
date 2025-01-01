API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = ""

// GLOBAL VARIABLES
let map;
let userDetails = {
  currentUserLatitude: 20,
  currentUserLongitude: 20,
  successCallBack: (position) => {
    userDetails.currentUserLongitude = position.coords.longitude;
    userDetails.currentUserLatitude = position.coords.latitude;
    chosenCityDetails.chosenCityLatitude = userDetails.currentUserLatitude;
    chosenCityDetails.chosenCityLongitude = userDetails.currentUserLongitude;
console.log("lat:" + userDetails.currentUserLatitude)
console.log("lon:" + userDetails.currentUserLongitude)
    initMap();
  },
  errorCallBack: console.log("error"),
}
let chosenCityDetails = {
  chosenCityLatitude: userDetails.currentUserLatitude,
  chosenCityLongitude: userDetails.currentUserLongitude,
}
let ;
}
document.getElementsByClassName()

// let currentUserLatitude;
// let successCallBack = (position) => {
//   currentUserLongitude = position.coords.longitude;
//   currentUserLatitude = position.coords.latitude;
//   console.log(currentUserLongitude);
navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)

// Code to initialise, add and update google maps api 
// Copy pasted from google official documentation and then tweaked to suit website needs

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: {lat: chosenCityDetails.chosenCityLatitude , lng: chosenCityDetails.chosenCityLongitude },
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: {lat: chosenCityDetails.chosenCityLatitude , lng: chosenCityDetails.chosenCityLongitude },
    title: "Uluru",
  });
}

initMap();

// Get user location
// Use user location to set initial location of map if permission is allowed
// Display warning if location permissions is denied that this will affect the functionality of the website
