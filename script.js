function getWeatherData() {
    navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        document.getElementById("lat").innerHTML = lat;
        document.getElementById("long").innerHTML = long;
        console.log(lat, long);
        let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=e24a6fa620972d77f3c1c9e6357bc91f"
        fetch(url).then(res => res.json()).then(data => {
            showWeatherData(data);
            console.log(data);
        })
        })
    }

function showWeatherData(data) {
            document.getElementById("location").innerHTML = `${data.name}`
            document.getElementById("latit").innerHTML = `${data.coord.lat}`
            document.getElementById("longit").innerHTML = `${data.coord.lon}`
            document.getElementById("time").innerHTML = `${data.timezone}`
            document.getElementById("windSpeed").innerHTML = `${data.wind.speed}`
            document.getElementById("pressure").innerHTML = `${data.main.pressure}`
            document.getElementById("humidity").innerHTML = `${data.main.humidity}`
            document.getElementById("windDirec").innerHTML = `${data.wind.deg}`
            document.getElementById("temp").innerHTML = `${data.main.temp}`
            document.getElementById("feel").innerHTML = `${data.main.feels_like}`
        }

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.6139, lng: 77.2090 },
    zoom: 8,
  });
}
window.initMap = initMap;

// document.getElementById("btn").onclick

getWeatherData();
