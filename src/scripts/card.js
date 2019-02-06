
const card = {

  cardBuilder(cardObject) {
    let displayCard = document.createElement("div")
    displayCard.setAttribute("id", "displayCard")

    let cardTitle = document.createElement("p")
    cardTitle.textContent = "Title"

    let cardDescription = document.createElement("p")
    cardDescription.textContent = "This is a description"

    const displayCardAddButton = document.createElement("button")
    displayCardAddButton.setAttribute("class", "displayCardAddButton")

    displayCard.appendChild(cardTitle)
    displayCard.appendChild(cardDescription)
    displayCard.appendChild(displayCardAddButton)

    return displayCard
  }
}

export default card