import { displayWeather } from "./card"

const request = () =>  {

    const city = userCity.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`
    
    fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
        const icon = data.weather[0].icon
        const temp = (data.main.temp - 273.15).toFixed()
        const description = data.weather[0].description
        const main = data.weather[0].main
        const name =  data.name
        const country = data.sys.country

        displayWeather(name, icon, temp, description, country, main)

        })
    .catch(err => console.log(err))
}

export { request }
