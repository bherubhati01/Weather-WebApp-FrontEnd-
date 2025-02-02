
# Weather WebApp (Frontend)

## Overview
This project is a Weather WebApp built using HTML, CSS, JavaScript, and the OpenWeatherMap API. It allows users to check the current weather in any city by inputting the city's name, or by using their live location. The app also allows users to toggle between Celsius and Fahrenheit for temperature display.

## Features
- Displays current weather based on user-inputted city name or live location.
- Fetches weather data from the OpenWeatherMap API.
- Provides key weather information such as temperature, humidity, and weather conditions.
- Allows the user to toggle between Celsius (°C) and Fahrenheit (°F).
- Shows weather icons corresponding to the current weather condition.
- Displays the current date and time in a formatted manner.
- Responsive design for both desktop and mobile devices.

## Technologies Used
- **HTML**: Used for the structure of the web page.
- **CSS**: Used for styling and responsiveness of the page.
- **JavaScript**: Handles the dynamic behavior of the app, including API requests, form submission, geolocation, and unit toggling.
- **OpenWeatherMap API**: Used to fetch weather data based on the user's input or live location.
- **Axios**: Used to make HTTP requests to the weather and geocoding APIs.

## Setup Instructions

1. Open the `index.html` file in a browser to run the app.
   
    Alternatively, if you're using a local server, run it to view the app in your browser.

2. Make sure you have an internet connection as the app fetches data from the OpenWeatherMap API.

## How It Works

### 1. **Weather Data Fetching**
The app fetches the current weather data for the specified city or the user's live location by calling the OpenWeatherMap API.

- The API request uses latitude and longitude to fetch the weather data.
- Weather information such as temperature, humidity, and weather conditions is displayed.

### 2. **Error Handling**
If a user enters a non-existent city name or there is an issue with fetching the weather data, an error message "City not found" will be displayed on the screen.

### 3. **Geolocation**
Users can click the "Live Location" button to fetch the weather data for their current location. This functionality uses the browser's built-in geolocation API to retrieve the user's latitude and longitude.

### 4. **Temperature Unit Toggle**
The user can toggle between Celsius (°C) and Fahrenheit (°F) by clicking the unit button. The app will convert the displayed temperature accordingly.

### 5. **Date and Time**
The current date is displayed in the format "Day, Date Month Year" and updates each time the weather data is fetched.

## Files in This Project
- **index.html**: Contains the structure of the Weather WebApp.
- **style.css**: Contains all the styles for the app, including responsiveness for mobile devices.
- **app.js**: Contains the logic for fetching weather data, geolocation, error handling, and temperature unit conversion.

## How to Run the Project Locally

1. Open the `index.html` file in any modern web browser.
2. The app should work immediately, and you can input a city or click the "Live Location" button to fetch the weather.


## Evaluation Criteria
- **HTML Skills**: Proper use of semantic tags and structure.
- **CSS Skills**: Aesthetic and responsive design.
- **JavaScript Skills**: Handling API requests, implementing features like geolocation and unit toggle, and error handling.
- **Problem Solving**: Handling edge cases like invalid city input and API errors.

## Conclusion
This Weather WebApp demonstrates fundamental frontend skills, such as working with APIs, handling errors, implementing interactive elements, and building a responsive UI. The app provides users with an easy and visually appealing way to check the weather in any location.
