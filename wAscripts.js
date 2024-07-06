// Generated Api_Key
const apiKey = '5e1ec859b5968d0d3a4ad149108e7114';
// Api_Url
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
// Weather Report: Location
const locationElement = document.getElementById('location');
// Weather Report: Temperature
const temperatureElement = document.getElementById('temperature');
// Weather Report: Explain Which Weather
const descriptionElement = document.getElementById('description');

// Function for Search button  
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

// Function to fetch Location Weather
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
