const nameValue = document.querySelector("#name");
const latValue = document.querySelector("#latitude");
const lngValue = document.querySelector("#longtitude");
const humidityValue = document.querySelector("#humidity");
const tempValue = document.querySelector("#temperature");
const descValue = document.querySelector("#desc");
const pressureValue = document.querySelector("#pressure");

const inputField = document.querySelector("#input_Field");
const form = document.querySelector("#form");

let WeatherArray = [];

// function 1
const GetWeather = (Location) => {
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=ac8a3d2652a42e1e8ad35ef49ab3d862';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      WeatherArray.push(data)
      console.log(data);
      console.log(WeatherArray);

    })
    .catch((error) => {
      console.log(error);
    });
};

// function 2
const handleSubmit = (e) => {
  e.preventDefault();

  GetWeather(inputField.value);

  console.log(inputField.value ,'I am submitted')

  inputField.value = ""

}

form.addEventListener('submit', handleSubmit);
console.log(WeatherArray)