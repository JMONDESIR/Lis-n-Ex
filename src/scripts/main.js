import authorization from "./authorization"
import mediaPlayer from "./mediaPlayer";

const { generateLogInForm, loginHandler } = authorization

// NAVIGATION BAR, MENU AND HEADER

const header = document.querySelector("#header")
const logoWrapper = document.createElement("div")
logoWrapper.setAttribute("class", "logoWrapper")
const logo = document.createElement("img");
logo.setAttribute("class", "logo")
// logo.src = "src/images/logo.png"
logoWrapper.appendChild(logo)

// CONTAINER
mediaPlayer.media()
generateLogInForm()

