
const washBtnEl = document.getElementById("wash_btn-el")
const mowBtnEl = document.getElementById("mow_btn-el")
const weedsBtnEl = document.getElementById("weeds_btn-el")
const taskListEl = document.querySelector(".task__list")
const totalPriceEl = document.querySelector(".total__price")

let washAdded = false
let mowAdded = false
let weedsAdded = false
let totalPrice = 0;

function addTask(serviceName, servicePrice, removeBtnId) {
    taskListEl.innerHTML +=
            `<li class="task">
        <div class="service__name">${serviceName}<span id=${removeBtnId} class="remove__list grey">remove</span></div>
        <div class="service__price"><span class="grey">$</span>${servicePrice}</div>
    </li>`
    
    let removeListingBtns = document.getElementsByClassName('remove__list')

    for (let i = 0; i < removeListingBtns.length; i++) {
        let button = removeListingBtns[i]
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target
            console.log(buttonClicked)
            if (buttonClicked === document.getElementById("washRemoveBtn")) {
                washAdded = false
            } 
            else if (buttonClicked === document.getElementById("mowRemoveBtn")) {
                mowAdded = false
            }
            else if (buttonClicked === document.getElementById("weedsRemoveBtn")) {
                weedsAdded = false
            }
            buttonClicked.parentElement.parentElement.remove()
            updatePrice()
        })
    }

    updatePrice()
}

function updatePrice() {
    totalPrice = 0

    let taskListContainer = document.getElementsByClassName('.task__list')[0]
    let tasks = document.getElementsByClassName('task')
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i]
        let priceEl = task.getElementsByClassName('service__price')[0]
        let price = parseFloat(priceEl.textContent.replace('$', ''))

        totalPrice += price
    }
    totalPriceEl.innerHTML = `$${totalPrice}`
}

washBtnEl.addEventListener("click", function () {
    if (washAdded === false) {
        addTask("Wash Car", 10, "washRemoveBtn")
        washAdded = true
    }
})

mowBtnEl.addEventListener("click", function () {
    if (mowAdded === false) {
        addTask("Mow Lawn", 20, "mowRemoveBtn")
        mowAdded = true
    }
})

weedsBtnEl.addEventListener("click", function () {
    if (weedsAdded === false) {
        addTask("Pull Weeds", 30, "weedsRemoveBtn")
        weedsAdded = true
    }
})