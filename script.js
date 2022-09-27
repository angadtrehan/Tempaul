const weather = {
    apiKey:"24e00f92c6f1cb0b2b67184fcc96646e",

    fetchWeather: (city) => {
        city = city.replace(/\s/g, "%20")
        const url = `http://api.weatherstack.com/current?access_key=${weather.apiKey}&query=${city}`
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((data) => weather.displayWeather(data))
        .then((data) => console.log(data))
        .catch(() => window.alert("Something went wrong, try searching for another location!"))
    },

    displayWeather: (data) => {
        const name = data.location.name;
        const temperature = data.current.temperature;
        const weather_descriptions = data.current.weather_descriptions[0];
        const humidity = data.current.humidity;
        const wind_speed = data.current.wind_speed;
        const feelsLike = data.current.feelslike;

        console.log(name,temperature, feelsLike, weather_descriptions, humidity, wind_speed)

        document.querySelector(".city").innerText = "Weather for " + name;
        document.querySelector(".temp").innerText = temperature + "°C";
        document.querySelector(".real_feel").innerText = "Feels like " + feelsLike + "°C";
        document.querySelector(".description").innerText = weather_descriptions;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: " + wind_speed + " km/h";

        document.querySelector(".weather").classList.remove("loading");
        searchName = name.replace(/\s/g, "%20")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x1600/?"+ searchName + "')"

    },

    search: () => {
        weather.fetchWeather(document.querySelector(".search-box").value);
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
})

document.querySelector(".search-box").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        weather.search();
    };

    if (event.key == "Escape") {
        document.querySelector(".search-box").value = "";
    }
})

// The following is done on load




