import "./scss/style.scss"  //? stylesheet of the project

//!  https://api.coinranking.com/v2/coins

//? Selector
const form = document.querySelector("header form")

//? submit event for the form
form.addEventListener("submit", (e)=> {
    console.log(e.target);
    e.preventDefault()  //? prevent all the submits
    e.target.reset()    //? deleting the form
})

