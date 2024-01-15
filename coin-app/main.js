import "./scss/style.scss"  //? stylesheet of the project

//!  https://api.coinranking.com/v2/coins

//? Selector
const form = document.querySelector("header form")

//? submit event for the form
form.addEventListener("submit", (e)=> {
    console.log(e.target);
    e.preventDefault()  //? prevent all the submits
    e.target.reset()    //? deleting the form
    getCoinData()
})

const getCoinData = async () => {
    const API_KEY = "coinranking734f14b6d044ed7b30d43d513756abfe54db3b39dc88ddc2"
    const options = { headers: { 'x-access-token': 'API_KEY' } };

    url = "https://api.coinranking.com/v2/coins?search=bitcoin"

    const res = await fetch()
}

