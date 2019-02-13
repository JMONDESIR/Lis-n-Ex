import API from "./stationCollection";

const stationEditor = {
  editForm(stationId, station) {
    console.log(stationId)
    console.log(station.id)
    console.log(station.name + " button clicked")
    const container = document.querySelector("#container")
    const editBox = document.createElement("div")

    const edit_name = document.createElement("input")
    edit_name.setAttribute("placeholder", station.name)
    edit_name.value = station.name

    const edit_image = document.createElement("input")
    edit_image.setAttribute("placeholder", "paste new image URL")
    edit_image.value = station.image.thumb.url
    console.log(station.image.thumb.url)

    const edit_stream = document.createElement("input")
    edit_stream.setAttribute("placeholder", "URL to stream from")
    edit_stream.value = station.streams.stream
    console.log(station.streams[0].stream)

    //=======GENRE EDIT SELECT TAB===================================
    const edit_genre = document.createElement("select")

    const rap = document.createElement("option")
    rap.setAttribute("value", "Rap")
    rap.textContent = "Rap"
    edit_genre.appendChild(rap)

    const gospel = document.createElement("option")
    gospel.setAttribute("value", "Gospel")
    gospel.textContent = "Gospel"
    edit_genre.appendChild(gospel)

    const pop = document.createElement("option")
    pop.setAttribute("value", "Pop")
    pop.textContent = "Pop"
    edit_genre.appendChild(pop)

    const trance = document.createElement("option")
    trance.setAttribute("value", "Trance")
    trance.textContent = "Trance"
    edit_genre.appendChild(trance)

    //=======================EDIT GENRE================================
    const updateButton = document.createElement("button")
    updateButton.setAttribute("class", "button")
    updateButton.textContent = "UPDATE"

    container.appendChild(editBox)
    editBox.appendChild(edit_name)
    editBox.appendChild(edit_image)
    editBox.appendChild(edit_genre)
    editBox.appendChild(edit_stream)
    editBox.appendChild(updateButton)

    updateButton.addEventListener("click", () => {

      let editedStation = {
        name: edit_name.value,
        image: edit_image.value,
        genre: edit_genre.value,
        url: edit_stream.value,
      }

      API.editStation(station.id, editedStation)
        .then(response => {
          dashboard.appendChild()
        })
    })

    let editedChannel = document.querySelector(stationId)

    // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
    while (editedChannel.firstChild) {
      editedChannel.removeChild(editedChannel.firstChild);
    }
    editedChannel.appendChild(edit_name)
    editedChannel.appendChild(edit_image)
    editedChannel.appendChild(edit_genre)
    editedChannel.appendChild(edit_stream)
    editedChannel.appendChild(updateButton)
  }
}

export default stationEditor