const API = {
  getAllStations() {
    return fetch("http://localhost:8088/stations")
      .then(response => response.json())
    // .then(allStations => console.log(allStations))
  }
}
export default API