const API_KEY ="f776561e47a8ae347f7e8a35208f8482";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const weather= document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data)
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator. geolocation.getCurrentPosition(onGeoOk, onGeoError)