import "./scss/style.scss"  //? stylesheet of the project

//!  https://api.coinranking.com/v2/coins

//? Selector
const form = document.querySelector("header form")

//? submit event for the form
form.addEventListener("submit", (e)=> {
    console.log(e.target);
    e.preventDefault()  //? prevent all the submits
    getCoinData() //? API request
    e.target.reset()    //? delete the form
})

const getCoinData = async () => {
    const input = document.querySelector("header form input").value
    const API_KEY = "coinranking734f14b6d044ed7b30d43d513756abfe54db3b39dc88ddc2"
    const options = { headers: { 'x-access-token': 'API_KEY' } };

    const url = `https://api.coinranking.com/v2/coins?search=${input}`

    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data.data);
}


