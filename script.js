let weather = {
    "apiKey" : "4a1beb41247156e9f6736bfa97f3ed07",
    "geoCodeApiKey" : "8680a2f8058ca8c0fa78dcc9d68b46c2",
    "urlPt1" : "https://dummyapiurl.com/",
    "urlPt2" : "/apiKey",

    fetchWeater: (city) => {
        fetch("https://dummyapiurl.com/")
        .then((response) => response.json())
        .then((data) => console.log(data))
        document.querySelector(".city").innerText = "Weather in your mom"
        document.body.style.backgroundImage = "url(https://source.unsplash.com/random/1600x900/?mayer)"
    }
}




