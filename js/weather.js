const API_KEY = "359393fed3b5b21bf2b3937bb064d4b0";


function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main}, ${data.main.temp}ºC`;
            city.innerText= data.name;
    });
    
}
function onGeoError() {
    alert("Can't find your location.");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);