export const renderCoins = (coin) => {
    const { price, name, iconUrl, change, symbol, rank } = coin
    const coinsUl = document.querySelector("main .coins")

    const newCoinLi = document.createElement("li")
    newCoinLi.innerHTML = `
    <div class="remove-icon">
        <i class="fas fa-window-close"></i>
    </div>
    <h2 class="coin-name">
        <span>${name}</span>
        <span>${symbol}</span>
    </h2>
    `
    coinsUl.append(newCoinLi)
}