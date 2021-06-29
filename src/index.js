const city = 'barranquilla'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`
const dom = document.querySelector('#content')

fetch(url, {mode: 'cors'})
.then(response => response.json())
.then(data => {
        const p = document.createElement('p')
        p.innerHTML = data.main.temp - 273.15
        dom.appendChild(p)
    })
.catch(err => console.log(err))