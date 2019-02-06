import API from "./stationCollection"
import card from "./card"

const stationList = {
  showCards() {

    API.getAllStations()
      .then(allStations => {
        let stationFragment = document.createDocumentFragment()

        allStations.forEach(eachStation => {
          let stationCard = card.cardBuilder(eachStation)
          stationFragment.appendChild(stationCard)
        })

        const outputArticle = document.querySelector("#dashboard")

        outputArticle.appendChild(stationFragment)
      })
  }
}

export default stationList