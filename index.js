//Function to catch the API Weather url
const weatherForm = document.getElementById("weather-form");
const weatherInfo = document.getElementById("weather-info");

weatherForm.addEventListener("submit", async (event) => { //define the call 
    event.preventDefault();

    const city = event.target[0].value;
    const weatherData = await searchWeather(city);
    searchWeather(city);

    event.target[0].value = '';

    if(searchWeather){
        showWeather(weatherData);
    }
})


async function searchWeather(city) { 
  const appKey = 'OPEN_WEATHER_API_KEY'; 
  let lang ='pt_br';
  const units = 'metric';
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`);
  
  if(weatherResponse.ok){
    const weatherData = await weatherResponse.json();
    return weatherData;
  } else {
     console.error("Erro ao chamar a API de Clima");
     return null;
    }
}

function showWeather(weather) {
      console.log(weather); //check the call in the debug
      let temperature = weather.main.temp;
      const description = weather.weather[0].descripion;
      const city = weather.name;
      const iconCode = weather.weather[0].icon;
      const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      const weatherHtml = `
          <div class="itens">
          <div>
          <h2>${city}</center></h2>
          <p>Temperatura: ${Math.trunc(temperature)}º</p>
          <p>${description}</p>
          </div>
        <img src = "${iconURL}" alt= "${description}" />
        </div>
        `;
       weatherInfo.innerHtml = weatherHtml;
   }

