# Escape & Explore


## Introduction
Welcome to BLANK, PAGE OPENING INTRO
<!-- Must include what the project is for, why it exists and who it is intended for -->
<!-- Describe the projects purpose and the target audience -->
![Different sized screens on different devices showing what my website looks like on each](LINK)


## UX
---
- Responsive Design
- Demographic Based Design

### User Stories
#### Site Owner Goals


The primary goal of NAME is to do BLANK

#### User Goals


1. As a USER I want a X

[//]: <> (UX Developer and business goals)

## Design


- ### Color Scheme

![Description](link)

Description of colors
- ### Typography


<!-- FONTS -->
- ### Images

- ### Wireframes


- [Home page](link) 
- 
- 

## Features

### Existing Features

### Further Possible Implementations

## Technologies

#### Programming Languages
* [Name](https://link.com/)
* 
* 

#### Applications Used

1. [Name](https://link.com/) - Description
2. 
3. 
4. 
5. 
6. 

## Testing

### HTML Validator

### CSS Validator

### Lighthouse

### Notes of errors, bugs, issues and incomplete items
* As I was implementing the google maps API, the map was refusing to show regardless of any changes I made to the API code. I soon realised I had the incorrect attribute on the script tags in the html file. All was working after changing 

This was the incorrect script attribute

![This was the incorrect script attribute](./assets/images/readme_imgs/incorrect-script-attribute.PNG)

This is the corrected one

![This is the correct script attribute](./assets/images/readme_imgs/correct-script-attribute.PNG)

* In the handleCityClick function which changes the chosen city, I was unable to target the clicked city. I had to use dot notation in this instance to get the code working, I would normally stick to only one in my script but in this instance I had to mix it up a bit.

![Code displaying a mix of dot notation and square bracket notation](./assets/images/readme_imgs/mixed-notation-code.PNG)

| Activity | Expected |  Actual  |  Action  | Screenshot |
|----------|----------|----------|----------|------------|
|          |          |          |          |            |
|          |          |          |          |            |
## Deployment


## Credits
### Code Used

* For the initMap function I copy pasted this from the google maps javascript API documentation and then tweaked the code to make the code dynamically update
to the users actions, code is below 

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
### Acknowledgements / Tutorials

#### Tutorials
- [CI README.md guide](https://www.youtube.com/watch?v=l1DE7L-4eKQ)

#### Used code
- [Bootstrap form in booking page](https://getbootstrap.com/docs/5.3/forms/validation/)
