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

    API.getUserStations()
      .then(savedStations => {
        console.log(savedStations)
        let container = document.querySelector("#container")

        savedStations.forEach(savedUserStations => {
          let userStation = form.createNewStation(savedUserStations)
          // container.appendChild(userStation)
        })

      })
  }
}

export default stationList