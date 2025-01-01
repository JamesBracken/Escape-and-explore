API_KEY = "AIzaSyB4fcJiibwlX8tcRe5dNnllSifqBCKqeqA";
API_URL = ""

// Global variables
let userDetails = {
  currentUserLongitude: -25.344,
  currentUserLatitude: 131.031,
  successCallBack: (position) => {
    currentUserLongitude = position.coords.longitude;
    currentUserLatitude = position.coords.latitude;
    console.log(position);
    console.log(currentUserLongitude);
    console.log(currentUserLatitude);
  },
  errorCallBack: console.log("error"),

}
// let currentUserLongitude;
// let currentUserLatitude;
// let successCallBack = (position) => {
//   currentUserLongitude = position.coords.longitude;
//   currentUserLatitude = position.coords.latitude;
//   console.log(position);
//   console.log(currentUserLongitude);
//   console.log(currentUserLatitude);
// }
let errorCallBack = console.log("error")
let userCurrentLocation = navigator.geolocation.getCurrentPosition(userDetails.successCallBack, userDetails.errorCallBack)
console.log(userDetails.currentUserLongitude + userDetails.currentUserLatitude)

// Code to initialise, add and update google maps api 
// Copy pasted from google official documentation and then tweaked to suit website needs
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

// Get user location
// Use user location to set initial location of map if permission is allowed
// Display warning if location permissions is denied that this will affect the functionality of the website
