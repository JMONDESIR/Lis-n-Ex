import stationList from "./stationList"
import API from "./stationCollection";
import stationEditor from "./stationEditor"
import Card from "../components/Card"

const card = {

  cardBuilder(eachStation, isCategory) {
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

    const imageForCategories = document.createElement("img")
    if (isCategory) {
      imageForCategories.setAttribute("src", find url for this basic image)
    }

    // STATION VIEW BUTTON
    const stationViewButton = document.createElement("button")
    stationViewButton.setAttribute("class", "button")
    stationViewButton.setAttribute("id", eachStation.title)
    stationViewButton.innerText = "VIEW STATIONS"

    const config = {
      editable: false,
      removable: false
    }

    stationViewButton.addEventListener("click", (e) => {
      const dashboardHeading = document.getElementById("dashboardHeading")
      dashboardHeading.textContent = e.target.id.toUpperCase()
      dashboard.textContent = ""

      API.getStationsByCategoryId(eachStation.id)
        .then(allStations => {
          allStations.forEach(station => {
            const newCard = Card(station, config)
            dashboard.appendChild(newCard)
          })
        })
    })


    // APPENDING ITEMS TO DOM
    dashboard.appendChild(dashboardScreen)
    dashboardScreen.appendChild(displayTitle)
    dashboardScreen.appendChild(displayGraphic)
    dashboardScreen.appendChild(displayDescription)
    dashboardScreen.appendChild(stationViewButton)



    return displayCard
  },
  userStationBuilder(station, userId) {
    const url = station && station.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
    const container = document.querySelector("#container")
    const containerScreen = document.createElement("div")
    containerScreen.setAttribute("class", "title__gallery")

    // USER DISPLAY CARDS
    const displayCard = document.createElement("div")
    const displayTitle = document.createElement("h3")
    const displayGraphic = document.createElement("div")
    const thumbnail = document.createElement("img")
    thumbnail.setAttribute("src", station.image.thumb.url)
    thumbnail.setAttribute("class", "thumb")

    displayGraphic.setAttribute("class", "displayGraphic")
    displayGraphic.appendChild(thumbnail)
    displayCard.setAttribute("class", "displayCard")
    displayTitle.setAttribute("class", "displayTitle")
    displayTitle.textContent = station.name

    // AUDIO MODULE
    const audio = new Audio()
    audio.src = station.streams[0].stream
    audio.autoplay = false
    let playing = false

    // USER STATION BUTTONS
    const playButton = document.createElement("button")
    playButton.setAttribute("class", "button")
    playButton.textContent = "PLAY"
    playButton.addEventListener("click", () => {
      if (playing) {
        audio.pause()
        playButton.textContent = "PLAY"
      } else {
        audio.play()
        playButton.textContent = "PAUSE"
      }
      // FLIP THE BOOL
      playing = !playing
    })

    const removeButton = document.createElement("button")
    removeButton.setAttribute("class", "button")
    removeButton.textContent = "DELETE STATION"
    removeButton.addEventListener("click", () => API.removeStation(station.id)
      .then(res => {
        document.querySelector("#container").innerHTML = " "

        stationList.showPlaylist(userId)
      })
    )

    const editButton = document.createElement("button")
    editButton.setAttribute("class", "button")
    editButton.textContent = "EDIT"
    editButton.addEventListener("click", () => stationEditor.editForm(station.id, station, userId))


    container.appendChild(containerScreen)
    containerScreen.appendChild(displayTitle)
    containerScreen.appendChild(displayGraphic)
    containerScreen.appendChild(playButton)
    containerScreen.appendChild(removeButton)
    containerScreen.appendChild(editButton)

    return displayCard
  }
}



export default card