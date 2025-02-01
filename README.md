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


Navbar

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Navbar is fully responsive|Navbar adjusts well for different device sizes|Adjust screen size|||
|Company logo|On click this leads you to the home page|Logo is clicked|||
|CTA button|On click this leads you to the booking page|Booking button clicked|||

Home page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Hero image|On screen resize the image still displays well|Screen resize|||
|Map|On allow of location permission the map displays the users location with a gold marker|Location permissions are allowed|||
|Alert|On decline of location permission a modal is displayed displaying a message|Location permissions denied|||

City selection(Home page)

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Map|On selection of a city the map is moved to be centred to that city and previous city marker is removed|City selected|||
|Map|On page load the map is loaded and displayed|Page reload|||
|Map|On page load the map is set to a default city which is London|Page reload|||
|City cards|On screen resize the city cards display well |Screen resize|||
|City cards|On hover of each city card a shadow appears surrounding the card|Mouse hover over city card|||
|City cards|On page load the London city card is set as the default city displayed and is outlined|Page reload|||
|City cards|The selected city title is responsively displayed under the map||||
|City selecardsction|On selection of a different city a previously selected city outline must be removed|Different city is selected|||
|City cards|On Selection of a city the city is outlined|City is selected|||
|Places to visit|On selection of a city, places within the chosen city are displayed|City is selected|||
|Places to visit|When cards are rendered the image displays correctly|Select different cities and check image rendering|||
|Places to visit|On selection of a city, each cards title is displayed correcty and is accurate|Check each displayed place title|||
|Places to visit|On selection of a city, each cards description is displayed correctly and is accurate|Check each displayed description|||
|Places to visit|On selection of a city, each card displays a link so that the user can find out more information about each place|Check each card is displaying a link|||
|Places to visit|On click of a places anchor link, a new tab is opened which will give the user more information about the chosen place|Click all links|||
|Places to visit|Each card is displayed responsively so that users on different devices can see this properly|Screen resize|||
|CTA at the bottom of the home page|CTA is additionally displayed at the bottom of the page under the displayed places to visit|Scroll to bottom of the home page|||
|CTA at the bottom of the home page|On click the user is brought to our booking page|Button clicked|||

Partner sponsorships(Booking page)

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Cards responsiveness|On screen resize the cards are displayed well|Screen resize|||
|Cards image|Each cards image displays well, and on most screen sizes|Screen resize|||
|Cards links|Links of each cards opens a new tab leading to the correct partner websites|Links clicked|||

Package deals

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Select buttons |On hover the buttons change color|Button hover|||
|Select buttons|If not selected a clicked button will change color|Button clicked|||
|Select buttons|On select of any button the hidden input found in the booking form reflects the selected package deal||||
|Select buttons|On deselect of a button the color reverts back to the original color|Deselect button|||
|Select buttons|On deselect of a button the value of the hidden input reverts back to the default value of silver|Deselect button|||
|Select buttons|If a package was selected and another is clicked, the initially selected button reverts back to the original color|Select one package, then select another|||
|Package deal input|By default the hidden input in the booking form for package deals value is set to silver|Reload page and check hidden input value|||

City selection

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Select buttons|On select of a city, the button changes color|Button clicked|||
|Select buttons|On select of a city, the hidden city input found in the booking form |Click a city|||
|Select buttons|On deselect of a city the color of the city reverts back to the original|Deselect button|||
|Select buttons|On deselect of a city the hidden input value of this city in the booking form is removed|Deselect city|||
|Select buttons|If a city is selected and another city button is clicked, the previously selected city color reverts back to the original|Select a city then select a different one|||
|Select buttons|If a city is selected and another city button is clicked, the hidden input value in the booking form changes to this new value|Select a city then select another|||

Booking form

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|HTML validation|If any of the visible form inputs are incorrectly filled and the form is submitted HTML validation displays errors|Incorrectly fill out the form or leave blank and submit|||
|JS validation|If the emails input do not match, custom JS validation kicks in and displays a red error||||
|JS validation|If the emails input do not match, the form inputs turn red|Input different emails and submit|||
|JS validation|If the emails input did not match and then the emails are corrected to match, the error messages displayed are removed|Input different emails, submit the form, then make the emails match|||
|JS validation|If the emails input did not match and then the emails are corrected to match, the red borders around the email inputs revert back to normal|Input different emails, submit the form, then make the emails match|||
|Form submit|If the form is correctly filled out and submitted, the success page opens and the user is given a message informing them they have successfully booked their holiday|Form filled out and submitted|||
|Form responsiveness|Form is responsive across multiple screen sizes|Screen resize|||

Footer

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Footer contacts|Contacts displays responsively so that it is properly visible for different devices|Screen resize|||
|Footer socials|Contacts displays responsively so that it is properly visible for different devices|Screen resize|||
|Footer socials|On hover of each icon it changes color|Hover over icon|||
|Footer socials|On click of each icon it opens a new tab which is the corresponds to the icon clicked||||



Success page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|Success page responsiveness|The success page displays well across different screen sizes|Screen resize|||
|Success page|The page is displayed on correctly filling out the booking form and submitting|Correctly fill out the form and submit|||
|Home button|The user is able to easily locate the home button, which redirects the user back to the home page without using the browser back buttons|Click the home button|||


404 page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|---------|-------------------|-------------------|--------|-----------|
|404 page|On type of an non-existent/incorrect link, click of an incorrect link, the user is led to the 404 page|Type in an incorrect link|||
|Home button|Without using the browser back buttons, the user is able to navigate back to the home page of the website using the home button displayed|Click home button|||


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

* I changed the selectable item in the city cards on the home page to be the whole card as ooposed to the image, but this caused some
issues with the javascript code working with the bootstrap cards. The image and title's were able to be selected but the targeting needed to be on the parent instead so that the user could click anywhere on the card.

![Console logs in google chrome to help me locate where the origin of the problem is, and a cannot read properties of a variable error in the console](./assets/images/readme_imgs/city-card-selection.PNG)

To resolve the issue I used the same code but just added the parentNode syntax to the targeting so that I could target the parent regardless of where I clicked in the city cards 

## Deployment & Development

### Deployment

<!-- This deployment guide is copy pasted from my own code in the repository Jamie's Gym -->
This website is deployed on github pages - [Escape & Explore](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file)

**Deploying**

How to deploy a site using GitHub Pages:

1.Create a github account
2.Sign in to github
3.Click on settings
4.Go to the project repository - [Escape and explore](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file)
5.Choose *Pages* in the navigation menu on the left side of the screen
6.In the source dropdown, Make sure you are on *main* branch and then click on save

After you have completed all these the website will start to be constructed by github pages, following this you will be able to open your page from the home page of your repository on the right side within the *Deployments* section

### Local Development

**Cloning**
To clone a repository follow these steps

1.Login in to Github or create an account if you haven't already

2.Go to this project repository [Escape & Explore](https://github.com/JamesBracken/Escape-and-explore?tab=readme-ov-file)

3.Click on the *Code* button and select whether you would like to cline with HTTPS, SSH or the Github CLI and then copy the link shown

4.Open your terminal in your IDE/code editor of choice then change the current working directory to the location you would like to use for the cloned directory

5.type "git clone" into the terminal and paste the link you copied in the third step the press Enter

**Commiting and Pushing Changes**

1.Open the termin in the directory of your cloned repository

2.Using "git status" check to see your changes are correct

3.If you are ready to commit  type "git add ." to stage all saved changes to be commited, you can alternatively use "git add YOUR_FILENAME" to stage specific files for commit

4.Using "git commit -m "Write your commit message here" commit your changes with a descriptive message, give a good amount of detail but try not to go over 50 characters

5.Finally use "git push origin main" to push your changes to the main branch of your github repository


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
