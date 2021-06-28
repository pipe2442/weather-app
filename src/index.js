const city = 'barranquilla'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`, {mode: 'cors'})
.then(function(response) {
return response.json();
}).then(function(response) {
    console.log(response.main.temp - 273.15);
}); 
