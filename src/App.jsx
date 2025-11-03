import { useWeather } from './hooks/useWeather.js';
import { useSearch } from './hooks/useSearch.js';
import { Hours } from './components/Hours.jsx';

function App() {
  const { search, setSearch } = useSearch('null');
  const { weather, getWeather, error } = useWeather({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  if (!weather)
    return (
      <div className='container mx-auto p-4 flex items-center justify-center min-h-[200px]'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='border-2 border-black rounded-2xl p-2'
            value={search}
            onChange={handleChange}
          />
          <button type='sumbit'>Buscar</button>
        </form>
        <div className='relative w-16 h-16'>
          <div className='absolute top-0 left-0 w-16 h-16 border-4 border-blue-200 rounded-full'></div>
          <div className='absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
        </div>
        <span className='ml-4 text-lg text-gray-600'>Cargando...</span>
      </div>
    );
  if (error)
    return (
      <div className='container mx-auto p-4 flex items-center justify-center min-h-[200px]'>
        <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded'>
          <p className='font-bold'>Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Weather App</h1>
      {weather && weather.location && (
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl'>
            {weather.location.name}, {weather.location.country}
          </h2>
          <h3>{weather.location.localtime.split(' ')[1]}</h3>
          {weather.current && (
            <p className='text-lg'>Temperatura: {weather.current.temp_c}°C</p>
          )}
          <img src={weather.current.condition.icon} alt='Icono Climatico' />
          <p>{weather.current.condition.text}</p>
        </div>
      )}
      <Hours hour={weather.forecast.forecastday[0].hour} />
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
    </div>
  );
}

export default App;
