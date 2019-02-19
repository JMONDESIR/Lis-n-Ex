import API from "./stationCollection"
import stationList from "./stationList";

const form = {

  formBuilder(userId) {

    // PANEL
    const panelHead = document.querySelector("#panelHead")
    const panelHeading = document.createElement("h2")
    panelHeading.textContent = "ADD STATION"
    panelHead.appendChild(panelHeading)

    const panel = document.querySelector("#panel")
    const panelScreen = document.createElement("div")
    panelScreen.setAttribute("class", "user__gallery")

    const inputField = document.createElement("fieldset")

    const name = document.createElement("input")
    name.setAttribute("placeholder", "Station Name:")
    name.setAttribute("id", "name__input")

    const country = document.createElement("input")
    country.setAttribute("placeholder", "Country:")
    country.setAttribute("id", "country__input")

    const image = document.createElement("input")
    image.setAttribute("placeholder", "Image URL:")
    image.setAttribute("id", "Image__input")

    const website = document.createElement("input")
    website.setAttribute("placeholder", "Station Website:")
    website.setAttribute("id", "website__input")

    const twitter = document.createElement("input")
    twitter.setAttribute("placeholder", "Twitter:")
    twitter.setAttribute("id", "twitter__input")

    const facebook = document.createElement("input")
    facebook.setAttribute("placeholder", "Facebook:")
    facebook.setAttribute("id", "facebook__input")

    const description = document.createElement("textarea")
    description.setAttribute("placeholder", "Enter description")
    description.setAttribute("id", "description__input")

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
    inputField.appendChild(country)
    inputField.appendChild(image)
    inputField.appendChild(website)
    inputField.appendChild(facebook)
    inputField.appendChild(twitter)
    inputField.appendChild(stream)
    inputField.appendChild(edit_genreTab)
    inputField.appendChild(description)
    inputField.appendChild(createStationButton)
  },

  createNewStation(userId) {
    let nameInput = document.querySelector("#name__input").value
    let countryInput = document.querySelector("#country__input").value
    let imageInput = document.querySelector("#Image__input").value
    let websiteInput = document.querySelector("#website__input").value
    let facebookInput = document.querySelector("#facebook__input").value
    let twitterInput = document.querySelector("#twitter__input").value
    let edit_genreTab = document.querySelector("#genre__input").value
    let streamInput = document.querySelector("#stream__input").value
    let descriptionInput = document.querySelector("#description__input").value

    let newStation = {
      id: 60585,
      name: nameInput,
      country: countryInput,
      image: {
        url: imageInput,
        thumb: {
          url: imageInput
        }
      },
      slug: nameInput,
      website: websiteInput,
      twitter: twitterInput,
      facebook: facebookInput,
      total_listeners: 0,
      categories: [
        {
          id: null,
          title: edit_genreTab,
          description: descriptionInput,
          slug: edit_genreTab,
          ancestry: null
        }
      ],
      streams: [
        {
          stream: streamInput,
          bitrate: 128,
          content_type: "audio/mpeg",
          status: 1,
          listeners: 0
        }
      ],
      created_at: "2019-01-18T03:34:52+01:00",
      updated_at: "2019-01-18T03:34:52+01:00"
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