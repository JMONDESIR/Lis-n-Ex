const mediaPlayer = {

  newAudio(audio) {
    audio.src = "",
      audio.controls = false,
      audio.loop = false,
      audio.autoplay = false
  }

}

export default mediaPlayer
