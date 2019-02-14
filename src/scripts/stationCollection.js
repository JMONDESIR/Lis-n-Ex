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
  getUsers(users) {
    return fetch("http://localhost:8088/users")
      .then(response => response.json())
  },
  getUserStations(userId) {
    return fetch(`http://localhost:8088/userCreatedStations?userId=${userId}`)
      .then(response => response.json())
  },
  postNewStation(newStation) {
    return fetch("http://localhost:8088/userCreatedStations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStation)
    }
    ).then(response => response.json())
  },
  removeStation(stationId) {
    return fetch(`http://localhost:8088/userCreatedStations/${stationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
  },
  getStation(stationId) {
    return fetch(`http://localhost:8088/userCreatedStations/${stationId}`)
      .then(response => response.json)
  },
  editStation(stationId, updatedStationInfo) {
    return fetch(`http://localhost:8088/userCreatedStations/${stationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedStationInfo)
    }).then(response => response.json())
  }
}
export default API