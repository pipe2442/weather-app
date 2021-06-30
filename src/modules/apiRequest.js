import displayWeather from './card';

const request = () => {
  const userInput = document.getElementById('userCity');
  const city = userInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`;

  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      const { icon } = data.weather[0];
      const temp = (data.main.temp - 273.15).toFixed();
      const { description } = data.weather[0];
      const { main } = data.weather[0];
      const { name } = data;
      const { country } = data.sys;

      displayWeather(name, icon, temp, description, country, main);
    });
};

export default request;
