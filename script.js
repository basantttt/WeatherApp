/**
 * Weather App

 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
 
  const fullURL=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  let weatherPromise=fetch(fullURL);
  return weatherPromise.then((response)=>{
     
    return response.json();
  })
};


/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city).then((response)=>{
      console.log(response);
    showWeatherData(response,);
  }).catch((error)=>{
      console.log(error);
  });

}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  let cityName=document.getElementById("city-name");
  cityName.innerText=weatherData.name;
  let cityWeather=document.getElementById("weather-type");
cityWeather.innerText=weatherData.weather[0].description;
let Temp=document.getElementById("temp");
Temp.innerText=weatherData.main.temp;
let minTemp=document.getElementById("min-temp");
minTemp.innerText=weatherData.main.temp_min;
let maxTemp=document.getElementById("max-temp");
maxTemp.innerText=weatherData.main.temp_max;

};

