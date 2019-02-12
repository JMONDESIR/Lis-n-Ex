import API from "./stationCollection"
import stationList from "./stationList";

const form = {
  formBuilder(userId) {

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
    createStationButton.addEventListener("click", () => form.createNewStation(userId))

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

  createNewStation(userId) {
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
      updated_at: "2019-01-21T04:04:40+01:00",
      created_by: userId
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
  editForm() {
    const editContainer = document.querySelector("#edit")

    const editField = document.createElement("fieldset")

    const name = document.createElement("input")
    name.setAttribute("placeholder", "Name:")
    name.setAttribute("id", "edit_name_input")

    const country = document.createElement("input")
    country.setAttribute("placeholder", "Country:")
    country.setAttribute("id", "edit_country_input")

    const image = document.createElement("input")
    image.setAttribute("placeholder", "Image URL:")
    image.setAttribute("id", "edit_image_input")

    const website = document.createElement("input")
    website.setAttribute("placeholder", "Website:")
    website.setAttribute("id", "edit_website_input")

    const twitter = document.createElement("input")
    twitter.setAttribute("placeholder", "Twitter URL:")
    twitter.setAttribute("id", "edit_twitter_input")

    const facebook = document.createElement("input")
    facebook.setAttribute("placeholder", "Facebook URL:")
    facebook.setAttribute("id", "edit_facebook_input")

    const genre = document.createElement("input")
    genre.setAttribute("placeholder", "Genre:")
    genre.setAttribute("id", "edit_genre_input")

    const description = document.createElement("input")
    description.setAttribute("placeholder", "Description:")
    description.setAttribute("id", "edit_description_input")

    const stream = document.createElement("input")
    stream.setAttribute("placeholder", "Stream URL:")
    stream.setAttribute("id", "edit_stream_input")

    const type = document.createElement("input")
    type.setAttribute("placeholder", "Content Type:")
    type.setAttribute("id", "edit_type_input")

    const saveButton = document.createElement("button")
    saveButton.setAttribute("class", "editButton")
    saveButton.textContent = "SAVE STATION"

    saveButton.addEventListener("click", () => {

      let name = document.querySelector("#edit_name_input").value
      let country = document.querySelector("#edit_country_input").value
      let imageURL = document.querySelector("#edit_image_input").value
      let website = document.querySelector("#edit_website_input").value
      let twitter = document.querySelector("#edit_twitter_input").value
      let facebook = document.querySelector("#edit_facebook_input").value
      let genre = document.querySelector("#edit_genre_input").value
      let description = document.querySelector("#edit_description_input").value
      let stream = document.querySelector("#edit_stream_input").value
      let type = document.querySelector("#edit_type_input").value

      const dataUpdate = {
        name,
        country,
        image: {
          url: imageURL,
          thumb: {
            url: imageURL
          }
        },
        slug: name,
        website,
        twitter,
        facebook,
        total_listeners: 0,
        categories: [
          {
            id,
            title,
            description,
            slug,
            ancestry: null
          }
        ],
        stream: [
          {
            stream,
            bitrate,
            content_type,
            status,
            listeners: 0
          }
        ],
        created_at: "2019-01-21T04:04:40+01:00",
        updated_at: "2019-01-21T04:04:40+01:00"
      }
    })

  }
}

export default form