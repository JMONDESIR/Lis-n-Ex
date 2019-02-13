import API from "./stationCollection"
import registrationForm from "./registrationForm"

const registrationPage = document.querySelector("registration")
const userNameInput = document.createElement("input");
const passwordInput = document.createElement("input");
const loginPage = document.querySelector("login");

const login = {
  createAndAppendLoginInput() {

    const outEl = document.querySelector("#login");
    userNameInput.type = "text";
    userNameInput.placeholder = "username";
    passwordInput.type = "password";
    passwordInput.placeholder = "password";
    outEl.appendChild(userNameInput);
    outEl.appendChild(passwordInput);

    const loginButton = document.createElement("button")
    loginButton.setAttribute("class", "button")
    loginButton.textContent = ("login");
    const registerButton = document.createElement("button");
    registerButton.textContent = ("register");
    outEl.appendChild(loginButton);
    outEl.appendChild(registerButton);
    loginButton.addEventListener("click", this.getUserData);
    registerButton.addEventListener("click", this.replaceWithRegistrationForm);
  },
  getUserData() {
    const username = userNameInput.value;
    const password = passwordInput.value;
    API.getUsers()
      .then(allUsers => {
        let usersProcessed = 1;
        allUsers.forEach(user => {
          if (username === user.userName && password === user.password) {
            console.log(`${user.userName} with user ID ${user.id} is the current user`)
            sessionStorage.setItem("userId", user.id)
            let userId = sessionStorage.getItem("userId");
            sessionStorage.setItem("userName", user.userName)

            loadUserSpecificPage(userId);

          } else if (usersProcessed === allUsers.length) {
            alert("Username/password invalid. If new user, please register. :)")
          } else {
            usersProcessed++
          };
          function loadUserSpecificPage(userId) {
            loginPage.style.display = "none";
            const dashboard = document.createElement("h2");
            const taskContainer = document.querySelector(".output__tasks");
            dashboard.textContent = "Dashboard";
            taskContainer.appendChild(dashboard);

            location.reload();

          }
        })


      })

  },
  replaceWithRegistrationForm() {
    console.log("testing");
    const registrationPage = document.querySelector("registration")
    const loginPage = document.querySelector("login");
    loginPage.style.display = "none";
    registrationPage.style.display = "block";
  },
  replaceWithLoginForm() {
    console.log("LoginForm");
    loginPage.style.display = "block";
    registrationPage.style.display = "none";
  }
}


export default login