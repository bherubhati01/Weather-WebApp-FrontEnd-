// import axios from "axios";

//Get weather Data From API
async function getWeatherData(lat, lon, city) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b9a06f18252e20650965bd2d608bd74&units=metric`;
        const response = await axios.get(apiUrl)

        document.getElementById("city").innerHTML = `${(city || response.data.name).toUpperCase()}`
        document.getElementById("temp").innerHTML = `${response.data.main.temp} &deg;C`
        document.getElementById("humidity").innerHTML = `Humidity : ${response.data.main.humidity}%`
        document.getElementById("icon-status").innerHTML = `${response.data.weather[0].main}`;
        document.getElementById("date").innerText = Date().slice(0, 16);
        
        // Remove existing image if present
        const iconContainer = document.getElementById("icon");
        if (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);
        }

        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
        document.getElementById("icon").appendChild(img);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

//Get GeoCode by Geocoding API
async function geoCoordinates(city = "jaipur") {
    try {
        const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=5b9a06f18252e20650965bd2d608bd74`;
        const response = await axios.get(geocodingUrl);
        // console.log(response.data)

        if (response.data.length == 0) {
            document.getElementsByClassName("error")[0].style.display = "inline"
        } else {
            document.getElementsByClassName("error")[0].style.display = "none"
        }
        document.getElementById("date").innerText = Date().slice(0, 16);

        // console.log(data.data[0])
        let lat = response.data[0].lat;
        let lon = response.data[0].lon;
        getWeatherData(lat, lon, city);
    } catch (error) {
        console.error('Error fetching coordinates data:', error);
    }
}


//Get Search Box Input
const form = document.getElementById("search")
const city = document.getElementById("city");
const date = document.getElementById("date");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("search-Input").value;
    geoCoordinates(inputValue);
    // city.innerText = inputValue;
    date.innerText = Date().slice(0, 16);
    document.getElementById("search-Input").value = "";
})


//Get Current Position 
document.getElementById("location").addEventListener("click", () => {
    document.getElementsByClassName("error")[0].style.display = "none"
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherData(latitude, longitude)
        });
    }
})


//Tpggle button for switch between Celsius (°C) and Fahrenheit (°F)
let isCelsius = false;
document.getElementById("unit").addEventListener('click', () => {
    const rotate = document.getElementById("rotate");
    let temp = document.getElementById("temp").innerHTML;
    let numericTemp = parseFloat(temp);
    if (isCelsius == true) {
        document.getElementById("temp").innerHTML = `${((numericTemp - 32) * 5 / 9).toFixed(2)} &deg;C`;
        isCelsius = false;
    } else {
        document.getElementById("temp").innerHTML = `${((numericTemp * 9 / 5) + 32).toFixed(2)} &deg;F`;
        isCelsius = true;
    }
    rotate.classList.toggle("rotate");
})

//default for one time get weather Info
geoCoordinates("jaipur");
