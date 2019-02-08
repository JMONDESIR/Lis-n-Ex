import API from "./stationCollection"
import card from "./card"
import form from "./form"

const stationList = {
  showCards() {


    API.getAllCategories()
      .then(allStations => {
        console.log(allStations)
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
      .then(savedStations => {
        console.log(savedStations)

        savedStations.forEach(savedUserStations => {
          card.userStationBuilder()
        })
      })
  }
}

export default stationList