import { useWeather, useSearch, useCitySuggestions } from './hooks/';
import { Hours, Previsions, Map, ExtraData } from './components/';
import { useEffect, useRef } from 'react';

function App() {
  const { search, setSearch, error } = useSearch();
  const { weather, getWeather, errorWeather, loading } = useWeather({ search });
  const { suggestions, fetchSuggestions, setSuggestions } =
    useCitySuggestions();
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Si quieres que busque por geolocalización/por defecto, llama sin args:
    getWeather({});
    // Si prefieres buscar una ciudad por defecto: getWeather('Bilbao');

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]); // cierra el menú
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [getWeather, setSuggestions]);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    fetchSuggestions(newSearch);
  };

  return (
    <div className='container mx-auto p-4'>
      <form>
        <input
          type='text'
          className='border-2 border-black rounded-2xl p-2'
          value={search}
          onChange={handleChange}
          onClick={() => {
            fetchSuggestions(search);
          }}
          placeholder='Buscar localización...'
        />
        {suggestions.length > 0 && (
          <ul
            ref={dropdownRef}
            className='absolute bg-white border w-96 rounded mt-1 shadow'
          >
            {suggestions.map((city) => (
              <li
                key={city.id}
                className='p-2 cursor-pointer hover:bg-gray-200'
                onClick={() => {
                  setSearch(city.name);
                  getWeather({ search });
                  setSuggestions([]);
                }}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {errorWeather && !error && (
        <p className='text-red-500 font-semibold mt-2'>
          Localización no encontrada
        </p>
      )}

      {loading ? (
        <div className='container mx-auto p-4 flex items-center justify-center min-h-[200px]'>
          <div className='relative w-16 h-16'>
            <div className='absolute top-0 left-0 w-16 h-16 border-4 border-blue-200 rounded-full'></div>
            <div className='absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
          </div>
          <span className='ml-4 text-lg text-gray-600'>Cargando...</span>
        </div>
      ) : (
        <>
          <h1 className='text-2xl font-bold mb-4'>Weather App</h1>
          {weather && weather.location && (
            <div className='bg-white p-4 rounded-lg shadow'>
              <h2 className='text-xl'>
                {weather?.location.name}, {weather?.location.country}
              </h2>
              <h3>{weather?.location.localtime.split(' ')[1]}</h3>
              {weather?.current && (
                <>
                  <p className='text-lg font-bold'>
                    Temperatura: {weather?.current.temp_c}°
                  </p>
                  <p className='text-lg'>
                    Sensación térmica: {weather?.current.feelslike_c}°
                  </p>
                  <p className='text-lg'>
                    Maxima {weather?.forecast.forecastday[0].day.maxtemp_c}° ·
                    Mínima {weather?.forecast.forecastday[0].day.mintemp_c}°
                  </p>
                </>
              )}
              <img src={weather.current.condition.icon} alt='Icono Climatico' />
              <p>{weather.current.condition.text}</p>
            </div>
          )}
          <Hours hour={weather?.forecast.forecastday[0].hour} />
          <Previsions previsions={weather?.forecast.forecastday} />
          <Map />
          <ExtraData weather={weather} />
          <p className='mt-4 text-sm'>
            Gael Ortiz - Powered by{' '}
            <a
              href='https://www.weatherapi.com/'
              title='Free Weather API'
              className='text-blue-500 hover:text-blue-700'
            >
              WeatherAPI.com
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
