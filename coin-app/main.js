import "./scss/style.scss"  //? stylesheet of the project
import { apiRequest } from "./src/apiRequest";

//? Selector
const form = document.querySelector("header form")

//? submit event for the form
form.addEventListener("submit", (e)=> {
    e.preventDefault()  //? prevent all the submits
    getCoinData() //? API request
    e.target.reset()    //? delete the form
})

const getCoinData = () => {
    const input = document.querySelector("header form input").value
    if(!input.trim()){
        alert("Input cannot be blank.")
    } else {
        apiRequest(input)
    }
}


