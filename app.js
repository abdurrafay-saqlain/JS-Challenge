const fetchWeatherData = async () => {
  const city = document.getElementById('searchInput').value; // Get city from input
  if (!city) {
    alert('Please enter a city');
    return;
  }

  const apiKey = 'af38e230f179f1f357e50e0c073ea65e';
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  try {
    // Fetch geographical data
    const geoResponse = await fetch(geoUrl);
    const geoJsonResponse = await geoResponse.json();

    if (geoJsonResponse.length === 0) throw new Error('Location not found');

    const filteredData = geoJsonResponse.filter(location => location.name.toLowerCase().includes(city.toLowerCase()));

    if (filteredData.length === 0) throw new Error('Filtered location not found');

    const { lat, lon } = filteredData[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherJsonResponse = await weatherResponse.json();

    document.getElementById('city').textContent = weatherJsonResponse.name;
    document.getElementById('temperature').textContent = weatherJsonResponse.main.temp;
    document.getElementById('condition').textContent = weatherJsonResponse.weather[0].description;

    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherJsonResponse.weather[0].icon}.png`;
    document.getElementById('weatherIcon').innerHTML = `<img src="${weatherIconUrl}" alt="Weather Icon">`;

  } catch (error) {
    console.log(error);
    alert('An error occurred: ' + error.message);
  }
};

document.getElementById('searchButton').addEventListener('click', fetchWeatherData);
