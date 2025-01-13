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

* During development of the booking page I noticed an error in the console showing

![In browser console showing an error due to no map on the booking page](./assets/images/readme_imgs/map-api-null.PNG)

It appeared as though the issue was revolving around the google maps api trying to initialise the map when the map didnt exist on the new page
so to resolve the issue I added an if check on the initMap function contents to prevent these running if there is no map in the current page.
I then proceeded to check that this did not impact the map on the home page and indeed, success!

* As I was implementing the google maps API, the map was refusing to show regardless of any changes I made to the API code. I soon realised I had the incorrect attribute on the script tags in the html file. All was working after changing 

This was the incorrect script attribute

![This was the incorrect script attribute](./assets/images/readme_imgs/incorrect-script-attribute.PNG)

This is the corrected one

![This is the correct script attribute](./assets/images/readme_imgs/correct-script-attribute.PNG)

* In the handleCityClick function which changes the chosen city, I was unable to target the clicked city. I had to use dot notation in this instance to get the code working, I would normally stick to only one in my script but in this instance I had to mix it up a bit.

![Code displaying a mix of dot notation and square bracket notation](./assets/images/readme_imgs/mixed-notation-code.PNG)

* When I made my navbar fixed the bootstrap cards were showing on top of it

![Bootstrap cards showing on top of navbar](./assets/images/readme_imgs/bootstrap-cards-nav.PNG)

To resolve this issue I used z index on the navbar to keep it on top of every other element in the webpage


## Deployment

<!-- This deployment guide is copy pasted from my own code in the repository Jamie's Gym -->
This website is deployed on github pages - [Jamie's Gyms](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file)

How to deploy a site using GitHub Pages:

1.Create a github account
2.Sign in to github
3.Click on settings
4.Go to the project repository - [Escape and explore](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file)
5.Choose *Pages* in the navigation menu on the left side of the screen
6.In the source dropdown, Make sure you are on *main* branch and then click on save

After you have completed all these the website will start to be constructed by github pages, following this you will be able to open your page from the home page of your repository on the right side within the *Deployments* section

**Forking** 
To fork this repository follow these steps

1.Setup Git and make sure your git has github authentication
2.Go to the web page repository [Escape and explore](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file) 
3.Click on *fork* on the upper right portion of the page.
4.This has now forked the repository to your own profile. 
5.Go to your profile and navigate to the forked repository.
6.Click on *Code* above the list of forked files
7.Choose the option you need from the dropdown menu. 

Further assistance can be found [HERE](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) on the github Fork a Repo page
### Environmental variables / scripts
This webpage does not require any additional environmental variables or scripts, all scripts used in this project are imported within the code itself. 


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
