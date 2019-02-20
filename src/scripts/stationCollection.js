const baseURL = "https://cors-anywhere.herokuapp.com/http://api.dirble.com/v2/"
// Joey.M.Dev
// const token = "?token=2c8f425be396236ff29b733060"
// Ipsisiphus
const token = "?token=7c6a30d791a9023ba5ace5696b"


const API = {
  getUsers(users) {
    return fetch("http://localhost:8088/users")
      .then(response => response.json())
  },
  getUserStations(userId) {
    return fetch(`http://localhost:8088/userSavedStations?user_id=${userId}`)
      .then(response => response.json())
  },
  postNewUser(newUser) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }
    ).then(response => response.json())
  },
  getAllCategories() {
    return fetch(`${baseURL}categories${token}`)
      .then(response => response.json())
  },
  getStationsByCategoryId(id) {
    return fetch(`${baseURL}category/${id}/stations${token}`)
      .then(response => response.json())
  },
  postNewStation(newStation) {
    return fetch("http://localhost:8088/userSavedStations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStation)
    }
    ).then(response => response.json())
  },
  removeStation(stationId) {
    return fetch(`http://localhost:8088/userSavedStations/${stationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
  },
  getStation(stationId) {
    return fetch(`http://localhost:8088/userSavedStations/${stationId}`)
      .then(response => response.json)
  },
  editStation(stationId, editedStation) {
    return fetch(`http://localhost:8088/userSavedStations/${stationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedStation)
    }).then(response => response.json())
  }
}
export default API