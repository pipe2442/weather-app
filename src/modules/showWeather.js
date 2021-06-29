const showWeather = () =>  {
    // we assign user input to a variable

    const city = userCity.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`
    const dom = document.querySelector('#content')

    fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
            //We create html elements
            const name = document.createElement('h2')
            const p = document.createElement('p')
            const div = document.createElement('div')
            const image = document.createElement('img')

            // We request the city icon to the api
            const icon = data.weather[0].icon
            // We assign the icon to the created image
            image.src = `https://openweathermap.org/img/w/${icon}.png`

            name.innerText = city
            p.innerHTML = data.main.temp - 273.15
            div.innerHTML = image

            dom.appendChild(name)
            dom.appendChild(p)
            dom.appendChild(image)
        })
    .catch(err => console.log(err))

}

export { showWeather }
