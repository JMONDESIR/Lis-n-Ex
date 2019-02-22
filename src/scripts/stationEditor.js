import API from "./stationCollection";
import stationList from "./stationList";

const stationEditor = {
  editForm(stationId, station, userId) {
    console.log("Station ID", stationId)
    const container = document.querySelector("#container")
    const editBox = document.createElement("fieldset")

    const edit_name = document.createElement("input")
    edit_name.value = station.name

    const edit_country = document.createElement("input")
    edit_country.value = station.country

    const edit_image = document.createElement("input")
    edit_image.value = station.image.thumb.url

    const edit_website = document.createElement("input")
    edit_website.value = station.website

    const edit_twitter = document.createElement("input")
    edit_twitter.value = station.twitter

    const edit_facebook = document.createElement("input")
    edit_facebook.value = station.facebook

    const edit_stream = document.createElement("input")
    edit_stream.value = station.streams[0].stream

    const edit_description = document.createElement("textarea")
    edit_description.value = station.categories.description
    edit_description.setAttribute("id", "description__input")

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

    const cancelButton = document.createElement("button")
    cancelButton.setAttribute("class", "button")
    cancelButton.textContent = "CANCEL"

    container.appendChild(editBox)
    editBox.appendChild(edit_name)
    editBox.appendChild(edit_country)
    editBox.appendChild(edit_image)
    editBox.appendChild(edit_website)
    editBox.appendChild(edit_twitter)
    editBox.appendChild(edit_facebook)
    editBox.appendChild(edit_stream)
    editBox.appendChild(edit_genreTab)
    editBox.appendChild(edit_description)
    editBox.appendChild(updateButton)
    editBox.appendChild(cancelButton)

    updateButton.addEventListener("click", () => {
      let editedStation = {
        name: edit_name.value || station.name,
        country: edit_country.value,
        image: {
          url: edit_image.value,
          thumb: {
            url: edit_image.value,
          }
        },
        slug: edit_name.value,
        website: edit_website.value,
        twitter: edit_twitter.value,
        facebook: edit_facebook.value,
        total_listeners: 0,
        categories: [
          {
            id: null,
            title: edit_name.value,
            description: edit_description.value,
            slug: edit_genreTab.value,
            ancestry: null
          }
        ],
        streams: [
          {
            stream: edit_stream.value,
            bitrate: 128,
            content_type: "audio/mpeg",
            status: 1,
            listeners: 0
          }
        ],
        user_id: userId,
        created_at: new Date(),
        updated_at: new Date()
      }

      let userChannelWindow = document.querySelector("#container")

      while (userChannelWindow.firstChild) {
        userChannelWindow.removeChild(userChannelWindow.firstChild);
      }
      API.editStation(stationId, editedStation)
        .then(response => {
          console.log("response", response)
          stationList.showPlaylist(userId)
        })
    })

    cancelButton.addEventListener("click", () => {
      container.removeChild(editBox)
    })
  }
}

export default stationEditor