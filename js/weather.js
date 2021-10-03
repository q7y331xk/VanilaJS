const WEATHERAPI_KEY = "0fe71ea402453601d39f797465e169dc";

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon); //
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.getElementById("weather");
        weatherContainer.querySelector("span:first-child").innerText = `${data.weather[0].main} / ${data.main.temp}`;
        weatherContainer.querySelector("span:last-child").innerText = data.name;
        });
}
function error() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(success,error);