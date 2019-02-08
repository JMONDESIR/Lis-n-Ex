import stationList from "./stationList"
import form from "./form";

// NAVIGATION BAR, MENU AND HEADER
const header = document.querySelector("#header")
const navBar = document.createElement("div")
navBar.setAttribute("class", "menu__bar")

let welcomeMessage = document.createElement("h2")
welcomeMessage.textContent = "Welcome, Joel"

const menu = document.createElement("ul")
const home = document.createElement("li")
const library = document.createElement("li")

home.textContent = "HOME"
library.textContent = "LIBRARY"

header.appendChild(navBar)
navBar.appendChild(welcomeMessage)
navBar.appendChild(menu)
menu.appendChild(home)
menu.appendChild(library)

// DASHBOARD & CASE
const dashboardHead = document.querySelector("#dashboardHead")
const dashboardHeading = document.createElement("h2")
dashboardHeading.textContent = "VIEW STATIONS"
dashboardHead.appendChild(dashboardHeading)


// PANEL & CASE
const panelHead = document.querySelector("#panelHead")
const panelHeading = document.createElement("h2")
panelHeading.textContent = "ADD STATION"
panelHead.appendChild(panelHeading)

// CONTAINER
const container = document.querySelector("#container")
const containerHeading = document.createElement("h2")
containerHeading.textContent = "MY STATIONS"
container.appendChild(containerHeading)


stationList.showCards()
stationList.showPlaylist()
form.formBuilder()