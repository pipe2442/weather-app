import { dataForm } from "./form"

const displayWeather = (city, icon, temp, description, country, main) => {
    const dom = document.querySelector('#content')

    const div = document.createElement('div')
    div.setAttribute("id", "weatherCard");
    const src = `https://openweathermap.org/img/w/${icon}.png`
 
    div.innerHTML = `
    <h2> ${city} </h2>
    <h2> ${country} </h2>
    <h3> ${temp} </h3>
    <p> ${main} </p>
    <p> ${description} </p>
    <img src="${src}" alt="icon"">
    `
    if (dom.hasChildNodes()) {
        dom.removeChild(document.getElementById('weatherCard'))   
    }
    dom.appendChild(div)   
}

export { displayWeather }