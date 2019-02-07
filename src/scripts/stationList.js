import API from "./stationCollection"
import card from "./card"

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
  }
}

export default stationList