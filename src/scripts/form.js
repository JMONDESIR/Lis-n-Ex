import API from "./stationCollection"
import stationList from "./stationList";

const form = {
  formBuilder(userId) {

    const panel = document.querySelector("#panel")
    const panelScreen = document.createElement("div")
    panelScreen.setAttribute("class", "user__gallery")

    const inputField = document.createElement("fieldset")

    const name = document.createElement("input")
    name.setAttribute("placeholder", "Station Name:")
    name.setAttribute("id", "name__input")

    const image = document.createElement("input")
    image.setAttribute("placeholder", "Image URL:")
    image.setAttribute("id", "Image__input")

    //========================GENRE TAB===============================//
    const edit_genreTab = document.createElement("select")

    API.getAllCategories()
      .then(res => {
        return res.forEach(category => {
          const genre = document.createElement("option")
          genre.setAttribute("value", category.title)
          genre.textContent = category.title
          edit_genreTab.appendChild(genre)
        })
      })

    edit_genreTab.setAttribute("id", "genre__input")

    const stream = document.createElement("input")
    stream.setAttribute("placeholder", "Stream URL:")
    stream.setAttribute("id", "stream__input")

    const createStationButton = document.createElement("button")
    createStationButton.setAttribute("class", "button")
    createStationButton.textContent = "CREATE STATION"
    createStationButton.addEventListener("click", () => form.createNewStation(userId))

    panel.appendChild(panelScreen)
    panelScreen.appendChild(inputField)

    inputField.appendChild(name)
    inputField.appendChild(image)
    inputField.appendChild(edit_genreTab)
    inputField.appendChild(stream)
    inputField.appendChild(createStationButton)
  },

  createNewStation(userId) {
    let nameInput = document.querySelector("#name__input").value
    let imageInput = document.querySelector("#Image__input").value
    let edit_genreTab = document.querySelector("#genre__input").value
    let streamInput = document.querySelector("#stream__input").value

    let newStation = {
      name: nameInput,
      image: imageInput,
      genre: edit_genreTab,
      url: streamInput,
    }

    return API.postNewStation(newStation)
      .then(res => {
        document.querySelector("#container").innerHTML = " "
        const containerHeading = document.createElement("h2")
        containerHeading.textContent = "MY STATIONS"
        container.appendChild(containerHeading)

        stationList.showPlaylist()
      })
  },
}

export default form