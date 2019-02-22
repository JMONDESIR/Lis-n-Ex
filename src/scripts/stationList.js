import API from "./stationCollection"
import card from "./card"

const stationList = {
  showCards() {
    // DASHBOARD
    const dashboardHead = document.querySelector("#dashboardHead")
    const dashboardHeading = document.createElement("h2")
    dashboardHeading.textContent = "VIEW STATIONS"
    dashboardHeading.setAttribute("id", "dashboardHeading")
    dashboardHead.appendChild(dashboardHeading)

    API.getAllCategories()
      .then(allStations => {

        let stationFragment = document.createDocumentFragment()

        allStations.forEach(eachStation => {
          let stationCard = card.cardBuilder(eachStation, true)
          stationFragment.appendChild(stationCard)
        })

        const dashboard = document.querySelector("#dashboard")

        dashboard.appendChild(stationFragment)
      })
  },
  showPlaylist(userId) {

    API.getUserStations(userId)
      .then(savedStations => savedStations.forEach(station => {

        return card.userStationBuilder(station, userId)
      }))
  }
}

export default stationList