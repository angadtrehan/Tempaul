const weather = {
    apiKey:"24e00f92c6f1cb0b2b67184fcc96646e",

    fetchWeater: (city) => {
        const url = `http://api.weatherstack.com/current?access_key=${weather.apiKey}&query=${city}`
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((data) => weather.displayWeather(data))
    },

    displayWeather: (data) => {
        console.log(data.location.name);
    }
}




