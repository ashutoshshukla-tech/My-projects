const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const message = document.getElementById("message");


// Put your API key here
const API_KEY = "YOUR_API_KEY";


// Search weather
searchBtn.addEventListener("click", getWeather);


// Also search when Enter is pressed
cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        getWeather();
    }

});


async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    message.textContent = "Loading...";

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();


        // Display weather information
        cityName.textContent = data.name;

        temperature.textContent =
            Math.round(data.main.temp);

        description.textContent =
            data.weather[0].description;

        humidity.textContent =
            data.main.humidity + "%";

        windSpeed.textContent =
            data.wind.speed + " m/s";

        message.textContent = "";

    }

    catch (error) {

        message.textContent =
            "City not found. Please try again.";

    }

}