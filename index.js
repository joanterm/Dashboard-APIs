
const myKeyAccessImages = "dFICnddE6ZFgwGzvuXlFywQRN9JF2z4p8ALs-QBxwoQ"
const myKeyAccessWeather = "2807ce89a998cb8377e1eda01361ea54"
const body = document.querySelector("#body")
const cryptoName = document.querySelector(".crypto-name")
const cryptoIcon = document.querySelector(".crypto-icon")
const currentPrice = document.querySelector(".current-price")
const marketCapRank = document.querySelector(".market-cap-rank")
const timeArea = document.querySelector(".time-area")
const dateArea = document.querySelector(".date-area")
const tempArea = document.querySelector(".temp-area")
const weatherIcon = document.querySelector(".weather-icon")

//FETCHES API FOR RANDOM BACKGROUND IMAGE
const getRandomImage = () => {
    fetch(`https://api.unsplash.com/photos/random/?query=nature&orientation=landscape&client_id=${myKeyAccessImages}`)
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
setInterval(displayTimeAndDate, 1000) //UPDATES THE TIME AUTOMATICALLY
displayTimeAndDate()


const getMyWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${myKeyAccessWeather}&lat=40.6617&lon=-73.8478&units=imperial`)
    .then((responseWeather) => {
        if(!responseWeather.ok) {
            throw Error (`Error code is: ${responseWeather.status}`)
        }
        return responseWeather.json()
    })
    .then((dataWeather) => {
        console.log(dataWeather);
        tempArea.innerHTML = `${Math.round(dataWeather.main.temp)}°`
        weatherIcon.src = dataWeather.weather.icon
        const icon = dataWeather.weather[0].icon //TO DECODE IMG CODE
        weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`     
    })
    .catch((errWeather) => {
        console.log(errWeather)
    })
}
getMyWeather()

// TO ACCESS USER'S COMPUTER'S GEOLOCATION
// navigator.geolocation.getCurrentPosition(position => {
//     fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
// )}