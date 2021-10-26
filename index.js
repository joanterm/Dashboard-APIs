
const myKeyAccess = "dFICnddE6ZFgwGzvuXlFywQRN9JF2z4p8ALs-QBxwoQ"
const body = document.querySelector("#body")
const imageAuthor = document.querySelector(".image-author")
const cryptoName = document.querySelector(".crypto-name")
const cryptoIcon = document.querySelector(".crypto-icon")
const currentPrice = document.querySelector(".current-price")
const marketCapRank = document.querySelector(".market-cap-rank")
const timeArea = document.querySelector(".time-area")
const dateArea = document.querySelector(".date-area")

//FETCHES API FOR RANDOM BACKGROUND IMAGE
// const getRandomImage = () => {
//     fetch(`https://api.unsplash.com/photos/random/?query=nature&orientation=landscape&client_id=${myKeyAccess}`)
//     .then((response) => {
//         if(!response.ok) {
//             throw Error(`Error code is: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.urls.regular)
//         body.style.backgroundImage=`url(${data.urls.regular})`
//         imageAuthor.innerHTML = `By: ${data.user.name}`

//     })
//     .catch((err) => {
//         console.log(err)
//         body.style.backgroundImage= `url("https://images.unsplash.com/photo-1475598322381-f1b499717dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzA3Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzUyNTc2NjA&ixlib=rb-1.2.1&q=80&w=1080")`
//     })
// }
// getRandomImage()

// FETCHES API FOR CRYPTOCURRENCY COIN
const getCryptoCoin = () => {
    fetch("https://api.coingecko.com/api/v3/coins/strong")
    .then((responseCoin) => {
        if (!responseCoin.ok) {
            throw Error(`Error code is: ${responseCoin.status}`)
        }
        return responseCoin.json()
    })
    .then((dataCoin) => {
        console.log(dataCoin)
        cryptoIcon.src = dataCoin.image.small
        cryptoName.innerHTML = dataCoin.name
        currentPrice.innerHTML = `$${dataCoin.market_data.current_price.usd}`
        marketCapRank.innerHTML = `Rank #${dataCoin.market_cap_rank}`
    })
    .catch((errCoin) => {
        console.log(errCoin)
        cryptoName.innerHTML="Data unavailable"
    })
}
getCryptoCoin()

// DISPLAYS CURRENT LOCAL TIME AND DATE
const displayTimeAndDate = () => {
    timeArea.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
    dateArea.innerHTML = new Date().toLocaleDateString()
}
displayTimeAndDate()


