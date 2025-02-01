async function getWeatherData(lat, lon) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b9a06f18252e20650965bd2d608bd74&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("city").innerHTML = `${data.name}`
        console.log(data)
        document.getElementById("temp").innerHTML = `${data.main.temp} &deg;C`
        document.getElementById("humidity").innerHTML = `Humidity : ${data.main.humidity}%`
        document.getElementById("icon-status").innerHTML = `${data.weather[0].main}`;
        date.innerText = Date().slice(0, 16);

        const iconContainer = document.getElementById("icon");

        // Remove existing image if present
        if (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);
        }

        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("icon").appendChild(img);

    } catch (e) {
        console.log(e)
    }

}

async function geoCoordinates(city = "jaipur") {
    try {
        const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=5b9a06f18252e20650965bd2d608bd74`;
        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.length == 0) {
            document.getElementsByClassName("error")[0].style.display = "inline"
            console.log(data.length)
        } else {
            document.getElementsByClassName("error")[0].style.display = "none"
        }
        date.innerText = Date().slice(0, 16);

        // console.log(data)
        lat = data[0].lat;
        lon = data[0].lon
        getWeatherData(lat, lon);
    } catch (e) {
        console.log(e)
    }
}



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

let unit = false;
document.getElementById("unit").addEventListener('click', ()=>{
    const rotate = document.getElementById("rotate");
    let temp = document.getElementById("temp").innerHTML;
    let numericTemp = parseFloat(temp);
    if(unit == true){
        document.getElementById("temp").innerHTML = `${((numericTemp - 32) * 5/9).toFixed(2)} &deg;C`;
        unit  = false;
    }else{
        document.getElementById("temp").innerHTML = `${((numericTemp * 9/5) + 32).toFixed(2)} &deg;F`;
        unit = true;
    }
    rotate.classList.toggle("rotate");
})


geoCoordinates("jaipur");



