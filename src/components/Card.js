export default function card(station, config) {
  const {
    editable,
    removable
  } = config

  const card_wrapper = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = station.name
  const image_container = document.createElement("div")
  const description = document.createElement("p")

  const button_edit = document.createElement("button")
  button_edit.textContent = "EDIT"
  const button_remove = document.createElement("button")
  button_remove.textContent = "REMOVE"
  const thumbnail = document.createElement("img")
  const control = document.createElement("div")
  control.setAttribute("class", "play")

  thumbnail.setAttribute("src", station.image.thumb.url)
  thumbnail.setAttribute("class", "thumb")

  card_wrapper.appendChild(title)
  card_wrapper.appendChild(image_container)
  image_container.appendChild(thumbnail)
  image_container.appendChild(control)

  if (editable) {
    card_wrapper.appendChild(button_edit)
  }

  if (removable) {
    card_wrapper.appendChild(button_edit)
  }

  const audio = new Audio()
  audio.autoplay = false
  audio.src = station.streams[0].stream
  let playing = false
  const playButton = document.createElement("button")
  playButton.setAttribute("class", "button")
  playButton.textContent = "PLAY"

  playButton.addEventListener('click', function () {
    //TEST IF PLAYING IS TRUTHY OR FALSY
    if (playing) {
      audio.pause()
      playButton.textContent = "PLAY"
      playButton.setAttribute("class", "button")
    } else {
      audio.play()
      playButton.textContent = "PAUSE"
      playButton.setAttribute("class", "redButton")
    }
    // NO MATTER WHAT, FLIP THE BOOL
    playing = !playing
  })

  card_wrapper.appendChild(playButton)

  return card_wrapper
}