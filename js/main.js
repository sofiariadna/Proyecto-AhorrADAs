//Universal Selector//
const $=(selector)=>document.querySelector(selector)
//Show Categories Card//
$("#categories-btn").addEventListener("click", () => {
    $("#balance-container").style.display = "none"
    $("#filters-container").style.display = "none"
    $("#operations-container").style.display = "none"
    $("#reports-card").style.display = "none"
    $("#categories-card").style.display = "block"
})
//Hide Categories Card//
$("#balance-btn").addEventListener("click", () => {
    $("#balance-container").style.display = "block"
    $("#filters-container").style.display = "block"
    $("#operations-container").style.display = "block"
    $("#categories-card").style.display = "none"
    $("#reports-card").style.display = "none"
})
//Show Reports Card//
$("#reports-btn").addEventListener("click", () => {
    $("#balance-container").style.display = "none"
    $("#filters-container").style.display = "none"
    $("#operations-container").style.display = "none"
    $("#reports-card").style.display = "block"
})

