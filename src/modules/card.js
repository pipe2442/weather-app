import { dataForm } from "./form"

const displayWeather = (city, icon, temp, description, country, main) => {
    const dom = document.querySelector('#content')

    const div = document.createElement('div')
    div.setAttribute("id", "weatherCard");
    const src = `https://openweathermap.org/img/w/${icon}.png`

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let time = new Date();
    let minutes = time.getMinutes();
    let hour = time.getHours();
    

    today = mm + '/' + dd + '/' + yyyy;
    time = hour + ':' + minutes
 
    div.innerHTML = `
    <h2> ${city} </h2>
    <h2> ${country} </h2>
    <h3> ${today} </h3>
    <h3> ${time} </h3>
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