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
  addStation() {
    return fetch()
  }
}
export default API