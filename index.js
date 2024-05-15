const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".Thank-you")

const submitButton = document.querySelector(".submit-button")
const rateButton = document.querySelector(".rating-button")
const rating = document.querySelector(".rating")
const rates = document.querySelectorAll(".rating-buttons")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
})

rateButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
        thanksContainer.classList.remove("hidden")
        mainContainer.classList.add("hidden")
    })
})