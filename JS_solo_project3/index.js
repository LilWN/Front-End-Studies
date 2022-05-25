
let washBtnEl = document.getElementById("wash_btn-el")
let mowBtnEl = document.getElementById("mow_btn-el")
let weedsBtnEl = document.getElementById("weeds_btn-el")
let taskWrapperEl = document.querySelector(".task__wrapper")

console.log(taskWrapperEl)

let services =
    [
        { service: "Wash Car", price: 10 },
        { service: "Mow Lawn", price: 20 },
        { service: "Pull Weeds", price: 30 }
    ]

washBtnEl.addEventListener("click", function () { addTask("Wash Car", 10) })

mowBtnEl.addEventListener("click", function () { addTask("Mow Lawn", 20) })

weedsBtnEl.addEventListener("click", function () { addTask("Pull Weeds", 30) })

function addTask(serviceName, servicePrice) {
    taskWrapperEl.innerHTML +=
    `<li class="task">
        <div class="service__name">${serviceName}</div>
        <div class="service__price"><span class="grey">$</span>${servicePrice}</div>
    </li>`
    /* console.log("addtask") */
}
