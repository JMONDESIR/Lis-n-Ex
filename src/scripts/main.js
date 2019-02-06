import stationList from "./stationList"

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

// DASHBOARD
const dashboard = document.querySelector("#dashboard")
const dashboardHeading = document.createElement("h2")
dashboardHeading.textContent = "STATIONS"
dashboard.appendChild(dashboardHeading)

stationList.showCards()