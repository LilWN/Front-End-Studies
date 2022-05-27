
function calcRemainder(num1, num2) {
    let remainder = (num1%num2)
    console.log(remainder)
}

function isOdd(num) {
    return num%2 !== 0
}

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED') ? true : false
}

function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}

function calcTime(seconds) {
    let timerSeconds = seconds % 60
    let timerMinutes = Math.floor(seconds / 60)

    return timerMinutes.toString().length < 2 ? `0${timerMinutes}:${timerSeconds}` :`${timerMinutes}:${timerSeconds}`
}

function getMax(array) {
    let largestNum = array[0]
    for (let i = 1; i < array.length; i++) {
        if (largestNum < array[i]) {
            largestNum = array[i]
        }
    }
    return largestNum
}

function reverseString(str) {
    let returnStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        returnStr += str[i]
    }
    return returnStr
}

function convertToZeros(array) {
    /* let retArr = []
    for (let i = 0; i < array.length; i++) {
        retArr[i] = 0
    }
    return retArr */
    return array.map(elem => 0) // can also use fill property
}

function removeApples(array) {
    /* let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 'Apple') {
            newArr.push(array[i])
        }
    }
    return newArr */
    return array.filter(elem => elem !== 'Apple')
}

function filterOutFalsyArr(arr) {
    /* let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr */
    return arr.filter(elem => !!elem === true)
}

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Willy", "", []]))