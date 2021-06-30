const displayWeather = (city, icon, temp, description, country, main) => {
  const dom = document.querySelector('#content');

  const div = document.createElement('div');
  div.setAttribute('id', 'weatherCard');
  const src = `https://openweathermap.org/img/w/${icon}.png`;

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  let time = new Date();
  const minutes = time.getMinutes();
  const hour = time.getHours();

  today = `${mm}/${dd}/${yyyy}`;
  time = `${hour}:${minutes}`;

  div.innerHTML = `
    <div class="text-white text-center card-weather card-box">
        <h2> ${city} </h2>
        <h2> ${country} </h2>
        <h3> ${today} </h3>
        <h3> ${time} </h3>
        <h3> ${temp}°C </h3>
        <p> ${main} </p>
        <p> ${description} </p>
        <img src="${src}" alt="icon"">
    </div>
    `;
  if (dom.hasChildNodes()) { dom.removeChild(document.getElementById('weatherCard')); }
  dom.appendChild(div);
};

export default displayWeather;