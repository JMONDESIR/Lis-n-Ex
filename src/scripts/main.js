import stationList from "./stationList"
import form from "./form";
import authorization from "./authorization"
import mediaPlayer from "./mediaPlayer"
const { generateLogInForm, getUserLogIn } = authorization

// NAVIGATION BAR, MENU AND HEADER
// TODO: get user ID from session
const userId = "1234"

const header = document.querySelector("#header")
const logoWrapper = document.createElement("div")
logoWrapper.setAttribute("class", "logoWrapper")
const logo = document.createElement("img");
logo.setAttribute("class", "logo")
// logo.src = "src/images/logo.png"
logoWrapper.appendChild(logo)

const searchbarWrapper = document.createElement("div")
searchbarWrapper.setAttribute("class", "searchbarWrapper")
const searchbar = document.createElement("input")
searchbar.setAttribute("class", "searchbar")
searchbar.setAttribute("placeholder", "SEARCH")
searchbarWrapper.appendChild(searchbar)

header.appendChild(logoWrapper)
header.appendChild(searchbarWrapper)

// CONTAINER
const containerHead = document.querySelector("#containerHead")
const containerHeading = document.createElement("h2")
containerHeading.textContent = "MY STATIONS"
containerHead.appendChild(containerHeading)

stationList.showCards()
form.formBuilder(userId)
stationList.showPlaylist()

let validated = generateLogInForm()

if (validated) {
}