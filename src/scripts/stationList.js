import API from "./stationCollection"
import card from "./card"

const stationList = {
  showCards() {


    API.getAllCategories()
      .then(allStations => {

        let stationFragment = document.createDocumentFragment()

        allStations.forEach(eachStation => {
          let stationCard = card.cardBuilder(eachStation)
          stationFragment.appendChild(stationCard)
        })

        const dashboard = document.querySelector("#dashboard")

        dashboard.appendChild(stationFragment)
      })
  },
  showPlaylist() {
    let userId = 1;
    API.getUserStations(userId)
      .then(savedStations => savedStations.forEach(station => {
        return card.userStationBuilder(station)
      }))
  }
}

export default stationList