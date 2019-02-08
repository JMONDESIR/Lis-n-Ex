import API from "./stationCollection"
import stationList from "./stationList";
import card from "./card";

const form = {
  formBuilder() {
    const panel = document.querySelector("#panel")
    const panelScreen = document.createElement("div")
    panelScreen.setAttribute("class", "user__gallery")

    const inputField = document.createElement("fieldset")

    const name = document.createElement("input")
    name.setAttribute("placeholder", "Name:")
    name.setAttribute("id", "name__input")

    const country = document.createElement("input")
    country.setAttribute("placeholder", "Country:")
    country.setAttribute("id", "country__input")

    const image = document.createElement("input")
    image.setAttribute("placeholder", "Image URL:")
    image.setAttribute("id", "Image__input")

    const website = document.createElement("input")
    website.setAttribute("placeholder", "Website:")
    website.setAttribute("id", "website__input")

    const twitter = document.createElement("input")
    twitter.setAttribute("placeholder", "Twitter URL:")
    twitter.setAttribute("id", "twitter__input")

    const facebook = document.createElement("input")
    facebook.setAttribute("placeholder", "Facebook URL:")
    facebook.setAttribute("id", "facebook__input")

    const genre = document.createElement("input")
    genre.setAttribute("placeholder", "Genre:")
    genre.setAttribute("id", "genre__input")

    const description = document.createElement("input")
    description.setAttribute("placeholder", "Description:")
    description.setAttribute("id", "description__input")

    const stream = document.createElement("input")
    stream.setAttribute("placeholder", "Stream URL:")
    stream.setAttribute("id", "stream__input")

    const type = document.createElement("input")
    type.setAttribute("placeholder", "Content Type:")
    type.setAttribute("id", "content__input")

    const createStationButton = document.createElement("button")
    createStationButton.setAttribute("class", "createStationButton")
    createStationButton.textContent = "CREATE STATION"
    createStationButton.addEventListener("click", this.createNewStation)

    panel.appendChild(panelScreen)
    panelScreen.appendChild(inputField)

    inputField.appendChild(name)
    inputField.appendChild(country)
    inputField.appendChild(image)
    inputField.appendChild(website)
    inputField.appendChild(twitter)
    inputField.appendChild(facebook)
    inputField.appendChild(genre)
    inputField.appendChild(description)
    inputField.appendChild(stream)
    inputField.appendChild(type)
    inputField.appendChild(createStationButton)
  },

  createNewStation() {
    let nameInput = document.querySelector("#name__input").value
    let countryInput = document.querySelector("#country__input").value
    let imageInput = document.querySelector("#Image__input").value
    let websiteInput = document.querySelector("#website__input").value
    let twitterInput = document.querySelector("#twitter__input").value
    let facebookInput = document.querySelector("#facebook__input").value
    let genreInput = document.querySelector("#genre__input").value
    let descriptionInput = document.querySelector("#description__input").value
    let streamInput = document.querySelector("#stream__input").value
    let typeInput = document.querySelector("#content__input").value

    let newStation = {
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
          id: "",
          title: genreInput,
          description: descriptionInput,
          slug: genreInput,
          ancestry: null
        }
      ],
      streams: [
        {
          stream: streamInput,
          bitrate: "",
          content_type: typeInput,
          status: 1,
          listeners: 0
        }
      ],
      created_at: "2019-01-21T04:04:40+01:00",
      updated_at: "2019-01-21T04:04:40+01:00"
    }

    return API.postNewStation(newStation)
      .then(res => {
        document.querySelector("#container").innerHTML = " "
        card.userStationBuilder()
        let savedStationFragment = document.createDocumentFragment()

        res.forEach(allSavedStations => {
          let showCard = form.formBuilder(allSavedStations)
          savedStationFragment.appendChild(showCard)
        })

      })
  }
}
export default form