const displayWeather = (city, icon, temp, description, country, main) => {
  const dom = document.querySelector('#content');

  const div = document.createElement('div');
  div.setAttribute('id', 'weatherCard');
  const src = `https://openweathermap.org/img/w/${icon}.png`;

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  let time = new Date();
  const minutes = time.getMinutes();
  const hour = time.getHours();

  today = `${mm}/${dd}/${yyyy}`;
  time = `${hour}:${minutes}`;

  const tempcel = temp - 273.15;
  const tempfa1 = tempcel * 9;
  const tempfa = tempfa1 / 5 + 32;

  div.innerHTML = `
  
    <div class="btn-group btn-group-toggle d-flex justify-content-center toggleMargin" data-toggle="buttons">
      <label class="btn btn-success">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Celcious
      </label>
      <label class="btn btn-success">
        <input type="radio" name="options" id="option2" autocomplete="off"> Faranheit
      </label>
    </div>

    <div class="text-white text-center card-weather card-box">
        <h2> ${city} </h2>
        <h2> ${country} </h2>
        <h3> ${today} </h3>
        <h3> ${time} </h3>
        <h1 id="cel2" class="position"> ${Math.trunc(tempcel)}°C </h1>
        <h1 id="fa2" class="fa position"> ${Math.trunc(tempfa)}°F </h1>
        <p> ${main} </p>
        <p> ${description} </p>
        <img src="${src}" alt="icon"">
    </div>
    `;

  if (dom.hasChildNodes()) { dom.removeChild(document.getElementById('weatherCard')); }
  dom.appendChild(div);
};

export default displayWeather;