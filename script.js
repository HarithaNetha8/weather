async function getWeather(event) {
    event.preventDefault();
  
    const locationInput = document.getElementById('location-input');
    const weatherData = document.getElementById('weather-data');
  
    const city = locationInput.value.trim();
    if (!city) {
      weatherData.textContent = 'Please enter a valid city name.';
      return;
    }
  
    const apiKey = 'b6995778142cd4215a641433cb1442e3'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    weatherData.textContent = 'Fetching weather details...';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
      weatherData.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    } catch (error) {
      weatherData.textContent = `Error: ${error.message}`;
    }
  }
  
  document
    .getElementById('location-form')
    .addEventListener('submit', getWeather);
  