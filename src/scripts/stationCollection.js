const baseURL = "https://cors-anywhere.herokuapp.com/http://api.dirble.com/v2/"
const token = "?token=2c8f425be396236ff29b733060"


const API = {
  getAllCategories() {
    return fetch(`${baseURL}categories${token}`)
      .then(response => response.json())
  },
  getStationsByCategoryId(id) {
    return fetch(`${baseURL}category/${id}/stations${token}`)
      .then(response => response.json())
  },

  getUserStations(userId) {
    return fetch(`http://localhost:8088/userSavedStations?userId=${userId}`)
      .then(response => response.json())
  },
  postNewStation(newStation) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
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
    })
  }
}
export default API