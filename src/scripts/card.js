import stationList from "./stationList"

const card = {

  cardBuilder(eachStation) {
    // DASHBOARD AND GALLERY
    const dashboard = document.querySelector("#dashboard")
    const displayArea = document.createElement("div")

    displayArea.setAttribute("class", "title__gallery")

    // STATION DISPLAY CARDS
    const displayCard = document.createElement("span")
    const cardTitle = document.createElement("h4")
    displayCard.setAttribute("class", "displayCard")
    cardTitle.setAttribute("class", "cardTitle")
    cardTitle.textContent = eachStation.title
    // displayCard.style.backgroundImage = eachStation.img

    // STATION ADD BUTTON
    const displayCardAddButton = document.createElement("button")
    displayCardAddButton.setAttribute("class", "displayCardAddButton")
    displayCardAddButton.textContent = "VIEW STATIONS"

    // APPENDING ITEMS TO DOM
    dashboard.appendChild(displayArea)
    displayArea.appendChild(cardTitle)
    displayArea.appendChild(displayCardAddButton)
    displayArea.appendChild(displayCard)

    return displayCard
  }
}

export default card