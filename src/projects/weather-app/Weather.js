import { useState, useEffect } from 'react';
import './Weather.css';

export default function Weather () {
  const [city, setCity] = useState('');
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      if (!city) return; // skip fetching if city is empty

      setIsLoading(true);
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          if(response.status === 404) {
            throw new Error('City not found. Please enter a valid city name.');
          } else {
            throw new Error('Failed to fetch data. Please try again later.');
          }
        }

        const data = await response.json();
        setApiData(data);
        setError('');
      } catch (error) {
        setApiData(null);
        setError(error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [city, apiKey]);

  function handleSubmit (event) {
    event.preventDefault();
    const enteredCity = event.target.elements.city.value.trim();
    setCity(enteredCity);
  }

  return (
    <>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit} className='form weather-form'>
        <input type='text' name='city' defaultValue={city} required placeholder='Enter city...' />
        <button type='submit'>Submit</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && <div>{error}</div>}
          {apiData && <WeatherData apiData={apiData} />}
        </>
      )}
    </>
  );
}

function WeatherData ({ apiData }) {
  let description = apiData.weather[0].description;
  let upperCasedDescription = description.charAt(0).toUpperCase() + description.slice(1);

  function toCelcius (kelvin) {
    return (kelvin - 273.15).toFixed(1);
  }

  return (
    <div className='weather-data'>
      <div>
        {apiData.name}, {apiData.sys.country}
      </div>
      <div className='temp-section'>
        <div className='temp-img'>
          <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} alt='weather status icon' />
        </div>
        <div className='temp'>{toCelcius(apiData.main.temp)}</div>
        <div className='degree'></div>
      </div>
      <div className='description'>
        {upperCasedDescription}
      </div>
      <div className='minMax-temp'>
        <div className='min-temp'>
          {toCelcius(apiData.main.temp_min)}
          <span><img src='./images/weather-app/up-arrow.png' alt='up-arrow'></img></span>
        </div>
        |
        <div className='max-temp'>
          {toCelcius(apiData.main.temp_max)}
          <span><img src='./images/weather-app/down-arrow.png' alt='up-arrow'></img></span>
        </div>
      </div>
    </div>
  );
}