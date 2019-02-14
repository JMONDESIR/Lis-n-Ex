import API from "./stationCollection"
import login from "./login"

const userNameActual = document.createElement("input")
const userNameInput = document.createElement("input")
const userPasswordInput = document.createElement("input")
const userEmailInput = document.createElement("input")

const createNewUser = document.createElement("button")
createNewUser.setAttribute("class", "button")
const registrationForm = {

  createAndAppendRegistrationForm() {
    const registerContainer = document.querySelector("#registration")
    const registerHeader = document.createElement("h3")
    registerContainer.appendChild(registerHeader)

    registerHeader.textContent = "REGISTER"
    userNameActual.type = "text"
    userNameInput.type = "text"
    userPasswordInput.type = "text"
    userEmailInput.type = "text"

    userNameActual.placeholder = "Enter your name"
    userNameInput.placeholder = "Enter a UserName"
    userPasswordInput.placeholder = "Create Password"
    userEmailInput.placeholder = "Enter Email Address"
    createNewUser.textContent = "Register"


    registerContainer.appendChild(userNameActual)
    registerContainer.appendChild(userNameInput)
    registerContainer.appendChild(userPasswordInput)
    registerContainer.appendChild(userEmailInput)
    registerContainer.appendChild(createNewUser)

    createNewUser.addEventListener("click", this.registerUser)
  },
  registerUser() {
    const userNameActualValue = userNameInput.value;
    const userNameValue = userNameInput.value;
    const userPasswordValue = userPasswordInput.value;
    const userEmailValue = userEmailInput.value;

    let newUser = {
      name: userNameActualValue,
      userName: userNameValue,
      password: userPasswordValue,
      email: userEmailValue
    }

    API.postNewData(users, newUser)

    login.replaceWithLoginForm();
  }

}
export default registrationForm