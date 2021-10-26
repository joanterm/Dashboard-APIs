
const myKeyAccess = "dFICnddE6ZFgwGzvuXlFywQRN9JF2z4p8ALs-QBxwoQ"
const body = document.querySelector("#body")
const imageAuthor = document.querySelector(".image-author")
const cryptoName = document.querySelector(".crypto-name")
const cryptoIcon = document.querySelector(".crypto-icon")

FETCHES API FOR RANDOM BACKGROUND IMAGE
const getRandomImage = () => {
    fetch(`https://api.unsplash.com/photos/random/?query=nature&orientation=landscape&client_id=${myKeyAccess}`)
    .then((response) => {
        if(!response.ok) {
            throw Error(`Error code is: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data);
        console.log(data.urls.regular)
        body.style.backgroundImage=`url(${data.urls.regular})`
        imageAuthor.innerHTML = `By: ${data.user.name}`

    })
    .catch((err) => {
        console.log(err)
        body.style.backgroundImage= `url("https://images.unsplash.com/photo-1475598322381-f1b499717dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzA3Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzUyNTc2NjA&ixlib=rb-1.2.1&q=80&w=1080")`
    })
}
getRandomImage()

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
        cryptoName.innerHTML = dataCoin.name
        cryptoIcon.src = dataCoin.image.small
    })
    .catch((errCoin) => {
        console.log(errCoin)
        cryptoName.innerHTML="Data unavailable"
    })
}
getCryptoCoin()


