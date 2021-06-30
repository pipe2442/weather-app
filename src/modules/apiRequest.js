import displayWeather from './card';

const request = () => {
  const userInput = document.getElementById('userCity');
  const city = userInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96f35486a037092415de2038db8e1138`;

  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      const { icon } = data.weather[0];
      const { temp } = data.main;
      const { description } = data.weather[0];
      const { main } = data.weather[0];
      const { name } = data;
      const { country } = data.sys;

      displayWeather(name, icon, temp, description, country, main);

      const cel = document.getElementById('option1');
      const fa = document.getElementById('option2');
      const cel2 = document.getElementById('cel2');
      const fa2 = document.getElementById('fa2');
      const showCel = () => {
        fa2.style.visibility = 'hidden';
        cel2.style.visibility = 'visible';
      };
      const showFa = () => {
        cel2.style.visibility = 'hidden';
        fa2.style.visibility = 'visible';
      };
      cel.onclick = showCel;
      fa.onclick = showFa;
    }).catch((e) => {
      console.log(e);
    });
};

export default request;
