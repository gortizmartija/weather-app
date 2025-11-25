import { useWeather, useSearch, useCitySuggestions } from './hooks/';
import { Hours, Previsions, ExtraData } from './components/';
import { useEffect, useRef } from 'react';

function App() {
  const { search, setSearch, error } = useSearch();
  const { weather, getWeather, errorWeather, loading } = useWeather({ search });
  const { suggestions, fetchSuggestions, setSuggestions } =
    useCitySuggestions();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div className='container mx-auto p-4 text-p1-normal'>
      <form>
        <input
          ref={inputRef}
          type='text'
          className='w-full border-2 border-neutral-50 rounded-2xl py-2 px-3 my-4 text-p2-normal'
          value={search}
          onChange={handleChange}
          onFocus={handleFocus}
          onClick={() => {
            fetchSuggestions(search);
          }}
          placeholder='Buscar localización...'
        />
        {suggestions.length > 0 && (
          <ul
            ref={dropdownRef}
            className='absolute bg-darkmode-300 border w-fit min-w-80 rounded '
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
            <div className='absolute top-0 left-0 w-16 h-16 border-4 border-primary-500 rounded-full border-t-transparent animate-spin'></div>
          </div>
          <span className='ml-4 text-h4s-semibold text-neutral-50'>
            Cargando...
          </span>
        </div>
      ) : (
        <div className='flex flex-col gap-6'>
          {weather && weather.location && (
            <div className='p-2 mt-6 rounded-lg'>
              <h2 className='text-h3s-semibold font-bold'>
                {weather?.location.name}, {weather?.location.country}
              </h2>
              <h3 className='text-p2-normal mb-2'>
                {weather?.location.localtime.split(' ')[1]}
              </h3>
              {weather?.current && (
                <>
                  <span className='text-d2s-semibold my-10'>
                    {Math.round(weather?.current.temp_c)}°
                  </span>
                  <img
                    src={weather.current.condition.icon}
                    alt='Icono Climatico'
                    className='-mt-2 -ml-2 mb-2'
                  />
                  <p className='text-p2-normal'>
                    Sensación térmica:{' '}
                    <strong className='font-semibold'>
                      {Math.round(weather?.current.feelslike_c)}°
                    </strong>
                  </p>
                  <p className='text-p2-normal'>
                    Maxima{' '}
                    <strong className='font-semibold'>
                      {Math.round(
                        weather?.forecast.forecastday[0].day.maxtemp_c
                      )}
                      °
                    </strong>{' '}
                    · Mínima{' '}
                    <strong className='font-semibold'>
                      {Math.round(
                        weather?.forecast.forecastday[0].day.mintemp_c
                      )}
                      °
                    </strong>
                  </p>
                </>
              )}
            </div>
          )}

          <Hours hour={weather?.forecast.forecastday[0].hour} />
          <Previsions previsions={weather?.forecast.forecastday} />
          <ExtraData weather={weather} />
          <p className='mt-4 text-footer-semibold text-center'>
            Gael Ortiz - Powered by{' '}
            <a
              href='https://www.weatherapi.com/'
              title='Free Weather API'
              className='text-primary-500 hover:text-primary  -700'
            >
              WeatherAPI.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
