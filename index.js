
const myKeyAccess = "dFICnddE6ZFgwGzvuXlFywQRN9JF2z4p8ALs-QBxwoQ"
const body = document.querySelector("#body")
const imageAuthor = document.querySelector(".image-author")


const getRandomImage = () => {
    fetch(`https://api.unsplash.com/photos/random/?query=nature&orientation=landscape&client_id=${myKeyAccess}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        console.log(data.urls.regular)
        body.style.backgroundImage=`url(${data.urls.regular})`
        imageAuthor.innerHTML = `By: ${data.user.name}`

    })
}
getRandomImage()


