//Universal Selector//
const $=(selector)=>document.querySelector(selector)

//Show or Hide Elements//
const showElement = (selector) => $(selector).classList.remove("hidden")
const hideElement = (selector) => $(selector).classList.add("hidden")

//Random ID generator//
const randomId = () => self.crypto.randomUUID()

//Local Storage Handlers//
const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, array) => localStorage.setItem(key, JSON.stringify(array))

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
//Show New Operation added//
$("#add-btn").addEventListener("click", () => {
    hideElement("#operations-container")
    hideElement("#new-operations-container")
    showElement("#new-operation-table")
    showElement("#balance-container")
    showElement("#filters-container")
})
//Add New operation to the table//
const newOperations = (operations) => {
    for (const operation of operations) {
        const {id, description, amount, type, category, date} = operation
        $("#table").innerHTML += `
        <td>${description}</td>
        <td>${amount}</td>
        <td>${type}</td>
        <td>${category}</td>
        <td>${date}</td>
        `
    }
}
//Save New operation info//
const saveNewOperation = () => {
    return {
        id: randomId(),
        description: $("#description").value,
        amount: $("#amount").value,
        type: $("#type").value,
        category: $("#category").value,
        date: $("#date").value
    }
}
const newOperation = () => {
    const currentOperation = getData("operations")
    const newOperation = saveNewOperation()
    currentOperation.push(newOperation)
}
$("#add-btn").addEventListener("click", (e) => {
    e.preventDefault()
    newOperation()
})
