import API from "./stationCollection"

let ValidUser = false


const authorization = {
  generateLogInForm() {
    // 1. GENERATE SIGN IN FORM
    const header = document.querySelector("#header")
    const user = document.createElement("input")
    user.setAttribute("placeholder", "USERNAME")

    const pw = document.createElement("input")
    pw.setAttribute("placeholder", "PASSWORD")

    const buttonWrapper = document.createElement("div")
    buttonWrapper.setAttribute("class", "buttonWrapper")
    const loginButton = document.createElement("button")
    loginButton.textContent = "LOG IN"
    loginButton.setAttribute("class", "button")
    buttonWrapper.appendChild(loginButton)

    const registerButton = document.createElement("button")
    registerButton.textContent = "CREATE ACCOUNT"
    registerButton.setAttribute("class", "button")
    buttonWrapper.appendChild(registerButton)

    header.appendChild(buttonWrapper)

    loginButton.addEventListener("click", () => {
      authorization.generateLogInForm()


      const userObject = {
        userName: user.value,
        password: pw.value
      }
      getUserLogIn(userObject)

    })

    registerButton.addEventListener("click", () => {
      const userObject = {
        userName: user.value,
        password: pw.value
      }

    })
  },
  getUserLogIn(userObject) {
    API.getUsers()
      .then(res => {
        ValidUser = res.some(user => user.userName.toLowerCase() === userObject.userName.toLowerCase() && user.password === userObject.password)
        return ValidUser
      })
  },
  registration() {

  },
}

export default authorization

// 2. VALIDATE USER INPUT
  // 2a. IF SUCCESSFUL, DESTROY SIGN IN AND DISPLAY APP
  //2b. IF UNSUCCESSFUL, DISPLAY WARNING
