import API from "./stationCollection";
import stationList from "./stationList";

const stationEditor = {
  editForm(stationId, station) {
    console.log(stationId)
    console.log(station.name + " button clicked")
    const container = document.querySelector("#container")
    const editBox = document.createElement("div")

    const edit_name = document.createElement("input")
    edit_name.setAttribute("placeholder", station.name)
    edit_name.value = station.name

    const edit_image = document.createElement("input")
    edit_image.setAttribute("placeholder", "paste new image URL")
    edit_image.value = station.image

    const edit_stream = document.createElement("input")
    edit_stream.setAttribute("placeholder", "URL to stream from")
    edit_stream.value = station.url

    //==================GENRE EDIT SELECT TAB==========================
    const edit_genreTab = document.createElement("select")

    API.getAllCategories()
      .then(res => {
        res.forEach(category => {
          const genre = document.createElement("option")
          genre.setAttribute("value", category.title)
          genre.textContent = category.title
          edit_genreTab.appendChild(genre)
        })
      })

    const rap = document.createElement("option")
    rap.setAttribute("value", "Rap")
    rap.textContent = "Rap"
    edit_genreTab.appendChild(rap)
    //=======================EDIT GENRE===============================
    const updateButton = document.createElement("button")
    updateButton.setAttribute("class", "button")
    updateButton.textContent = "UPDATE"

    container.appendChild(editBox)
    editBox.appendChild(edit_name)
    editBox.appendChild(edit_image)
    editBox.appendChild(edit_genreTab)
    editBox.appendChild(edit_stream)
    editBox.appendChild(updateButton)

    updateButton.addEventListener("click", () => {
      let userChannelWindow = document.querySelector("#container")

      let editedStation = {
        name: edit_name.value,
        image: edit_image.value,
        genre: edit_genreTab.value,
        url: edit_stream.value,
      }
      // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
      while (userChannelWindow.firstChild) {
        userChannelWindow.removeChild(userChannelWindow.firstChild);
      }

      API.editStation(station.id, editedStation)
        .then(response => {
          // response.forEach(station => {
          //   let cardContainer = document.createElement("div")
          //   cardContainer.appendChild(edit_name)
          //   cardContainer.appendChild(edit_image)
          //   cardContainer.appendChild(edit_genreTab)
          //   cardContainer.appendChild(edit_stream)
          //   cardContainer.appendChild(updateButton)
          //   userChannelWindow.appendChild(cardContainer)
          // })
          console.log(response)
          stationList.showPlaylist()
        })
    })

  }
}

export default stationEditor