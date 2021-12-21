const inputElement = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEL = document.querySelector("#ul-el")

let myLinks = []

inputBtn.addEventListener("click", () => {
    myLinks.push(inputElement.value)
    inputElement.value = ""
    renderLead()
})

inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        myLinks.push(inputElement.value)
        inputElement.value = ""
        renderLead()
    }
})

const renderLead = () => {
    let listItems = ""
    for (let link of myLinks) {
        listItems += `<a href="${link}" target"_blank><li>${link}</li></a>`
    }
    ulEL.innerHTML = listItems
}

