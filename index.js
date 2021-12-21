const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const removeBtn = document.querySelector("#remove-btn")

const listTitle = document.querySelector("#list-title")
const ulEL = document.querySelector("#ul-el")

let linkList = []

const renderItems = (itemList) => {
    listTitle.textContent = "My List"
    let list = ""
    for (let item of itemList) {
        console.log(item)
        list += `<a href="${item}" target"_blank"><li>${item}</li></a>`
    }
    ulEL.innerHTML = list
}

const getItem = (urlValue) => {
    linkList.unshift(urlValue)
    localStorage.setItem("myList", JSON.stringify(linkList))
}

// Getting Links from input
inputBtn.addEventListener("click", () => {
    urlValue = inputEl.value
    getItem(urlValue)
    inputEl.value = ""
    renderItems(linkList)
})
inputEl.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        urlValue = inputEl.value
        getItem(urlValue)
        inputEl.value = ""
        renderItems(linkList)
    }
})

// Getting current tab link
tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        urlValue = tabs[0].url
        getItem(urlValue)
        renderItems(linkList)
    })
})

// Deleteing All links
removeBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    linkList = []
    renderItems(linkList)
})



let fromLocalStorage = JSON.parse(localStorage.getItem("myList"))

if(fromLocalStorage) {
    linkList = fromLocalStorage
}


