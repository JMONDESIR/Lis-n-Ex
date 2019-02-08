import stationList from "./stationList"
import API from "./stationCollection";

const card = {

  cardBuilder(eachStation) {
    // DASHBOARD AND GALLERY
    const dashboard = document.querySelector("#dashboard")
    const dashboardScreen = document.createElement("div")
    dashboardScreen.setAttribute("class", "title__gallery")

    // STATION DISPLAY CARDS
    const displayCard = document.createElement("div")
    const displayTitle = document.createElement("h3")
    const displayGraphic = document.createElement("div")
    const displayDescription = document.createElement("p")
    displayDescription.textContent = eachStation.description
    displayDescription.setAttribute("class", "displayDescription")
    displayGraphic.setAttribute("class", "displayGraphic")
    displayCard.setAttribute("class", "displayCard")
    displayTitle.setAttribute("class", "displayTitle")
    displayTitle.textContent = eachStation.title

    // STATION VIEW BUTTON
    const stationViewButton = document.createElement("button")
    stationViewButton.setAttribute("class", "stationViewButton")
    stationViewButton.textContent = "VIEW STATIONS"
    stationViewButton.addEventListener("click", () => {
      console.log("The " + eachStation.title + " station")
      console.log(eachStation.id)
      dashboard.textContent = ""
      displayTitle.textContent = "Test"

      API.getStationsByCategoryId(eachStation.id)
        .then(allStations => {
          console.log(allStations)
          let stationFragment = document.createDocumentFragment()

          allStations.forEach(eachStation => {
            let stationCard = card.cardBuilder(eachStation)
            stationFragment.appendChild(stationCard)
          })

          dashboard.appendChild(stationFragment)
        })
    })


    // APPENDING ITEMS TO DOM
    dashboard.appendChild(dashboardScreen)
    dashboardScreen.appendChild(displayTitle)
    dashboardScreen.appendChild(displayGraphic)
    dashboardScreen.appendChild(displayDescription)
    dashboardScreen.appendChild(stationViewButton)



    return displayCard
  }
}

export default card