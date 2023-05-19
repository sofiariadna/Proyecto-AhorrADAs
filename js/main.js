//Universal Selector//
const $=(selector)=>document.querySelector(selector)
//Show or Hide Elements//
const showElement = (selector) => $(selector).classList.remove("hidden")
const hideElement = (selector) => $(selector).classList.add("hidden")
//Show Categories Card//
$("#categories-btn").addEventListener("click", () => {
    hideElement("#balance-container")
    hideElement("#filters-container")
    hideElement("#operations-container")
    hideElement("#reports-card")
    showElement("#categories-card")
})
//Hide Categories Card//
$("#balance-btn").addEventListener("click", () => {
    showElement("#balance-container")
    showElement("#filters-container")
    showElement("#operations-container")
    hideElement("#categories-card")
    hideElement("#reports-card")
    hideElement("#new-operation-table")
})
//Show Reports Card//
$("#reports-btn").addEventListener("click", () => {
    hideElement("#balance-container")
    hideElement("#filters-container")
    hideElement("#operations-container")
    showElement("#reports-card")
})
//Show New Operation Card//
$("#new-operation-btn").addEventListener("click", () => {
    hideElement("#balance-container")
    hideElement("#filters-container")
    hideElement("#operations-container")
    hideElement("#categories-card")
    hideElement("#reports-card")
    showElement("#new-operations-container")
})
//Cancel New Operation//
$("#cancel-btn").addEventListener("click", () => {
    showElement("#balance-container")
    showElement("#filters-container")
    showElement("#operations-container")
    hideElement("#categories-card")
    hideElement("#reports-card")
    hideElement("#new-operations-container")
})
//Add New Operation//
$("#add-btn").addEventListener("click", () => {
    hideElement("#operations-container")
    hideElement("#new-operations-container")
    showElement("#new-operation-table")
    showElement("#balance-container")
    showElement("#filters-container")
})