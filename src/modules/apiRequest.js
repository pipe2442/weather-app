import displayWeather from './card';

const request = () => {
  function random(min, max) {
    const number = Math.random() * (max - min) + min;
    return Math.trunc(number);
  }
  const number = random(1, 8);
  const body = document.getElementById('bd');
  if (number === 1) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 2) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/2072600/pexels-photo-2072600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 3) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 4) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 5) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/5026754/pexels-photo-5026754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 6) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 7) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  } else if (number === 8) {
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  }

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
