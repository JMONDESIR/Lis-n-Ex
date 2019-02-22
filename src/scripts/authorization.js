import API from "./stationCollection"
import stationList from "./stationList"
import form from "./form";

let ValidUser = false

const authorization = {
  generateLogInForm() {
    const loginWrapper = document.createElement("div")
    const formWrapper = document.createElement("div")
    const header = document.querySelector("#header")
    const user = document.createElement("input")
    user.setAttribute("placeholder", "USERNAME")
    user.setAttribute("id", "username")

    const pw = document.createElement("input")
    pw.setAttribute("placeholder", "PASSWORD")
    pw.setAttribute("type", "password")
    pw.setAttribute("id", "password")

    const buttonWrapper = document.createElement("div")
    buttonWrapper.setAttribute("class", "buttonWrapper")
    const loginButton = document.createElement("button")
    loginButton.textContent = "LOG IN"
    loginButton.setAttribute("class", "button")
    loginButton.setAttribute("id", "login")
    formWrapper.appendChild(user)
    formWrapper.appendChild(pw)
    buttonWrapper.appendChild(loginButton)

    const registerButton = document.createElement("button")
    registerButton.textContent = "CREATE ACCOUNT"
    registerButton.setAttribute("class", "button")
    buttonWrapper.appendChild(registerButton)

    header.appendChild(loginWrapper)
    loginWrapper.appendChild(formWrapper)
    loginWrapper.appendChild(buttonWrapper)

    // LOGIN BUTTON EVENT
    loginButton.addEventListener("click", () => {
      user.parentNode.removeChild(user)
      pw.parentNode.removeChild(pw)
      registerButton.parentNode.removeChild(registerButton)
      loginButton.textContent = "LOG OUT"
      loginButton.setAttribute("id", "logout")
      loginButton.setAttribute("class", "button")
      loginButton.addEventListener("click", () => {
        sessionStorage.clear()
        loginWrapper.removeChild(formWrapper)
        loginWrapper.removeChild(buttonWrapper)
        authorization.destroyApp()
        authorization.generateLogInForm()
      })
      API.getUsers()
        .then(res => {

          const returnUser = res.filter(person => person.userName.toLowerCase() === user.value.toLowerCase() && person.password === pw.value)
          const loginObject = { userId: returnUser[0].id, valid: returnUser.length > 0 }
          console.log(res)
          if (loginObject.valid === true) {
            authorization.mountApp(loginObject.userId)
          }
          sessionStorage.setItem("userName", returnUser[0].userName)
          sessionStorage.setItem("userId", returnUser[0].id)
          console.log(returnUser[0].userName)
        })
    })

    registerButton.addEventListener("click", () => {
      const email = document.createElement("input")
      email.setAttribute("placeholder", "ENTER EMAIL ADDRESS")
      email.setAttribute("id", "email")

      const name = document.createElement("input")
      name.setAttribute("placeholder", "FULL NAME")
      name.setAttribute("id", "name")

      formWrapper.appendChild(email)
      formWrapper.appendChild(name)

      registerButton.setAttribute("id", "submit")
      registerButton.setAttribute("class", "button")
      registerButton.textContent = "SUBMIT"
      registerButton.addEventListener("click", () => {
        const userObject = {
          userName: user.value,
          password: pw.value,
          email: email.value,
          name: name.value
        }
        API.postNewUser(userObject)
          .then(response => {

            authorization.mountApp(response.id)
            registerButton.parentNode.removeChild(registerButton)
            loginButton.textContent = "LOG OUT"
            loginButton.setAttribute("id", "logout")
            loginButton.setAttribute("class", "button")
            formWrapper.innerHTML = ""

          })

      })
    })
  },

  destroyApp() {
    const dashboardHead = document.getElementById("dashboardHead")
    const dashboard = document.getElementById("dashboard")
    const panelHead = document.getElementById("panelHead")
    const panel = document.getElementById("panel")
    const containerHead = document.getElementById("containerHead")
    const container = document.getElementById("container")
    const footer = document.getElementById("footer")

    dashboardHead.innerHTML = ""
    dashboard.innerHTML = ""
    panelHead.innerHTML = ""
    panel.innerHTML = ""
    containerHead.innerHTML = ""
    container.innerHTML = ""
    footer.innerHTML = ""
  },
  mountApp(userId) {
    stationList.showCards(userId)
    form.formBuilder(userId)
    stationList.showPlaylist(userId)
  },

}

export default authorization
