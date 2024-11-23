import { addNumbers } from "./addNumbers.js";

const input = document.getElementById("number-input")
const result = document.getElementById("result")
const calculateBtn = document.getElementById("calculate")

const calculate = () => {
    result.innerText = ``
    let res;
    try {
        const resData = addNumbers(input.value)
        res = `Result is ${resData}`
    } catch (error) {
        console.log(error);
        res = error
    } finally {
        input.value = ''
        result.innerText = res
    }
}

const initCalculator = () => {
    calculateBtn.addEventListener("click", calculate)
}

document.addEventListener("DOMContentLoaded", initCalculator)
