export function ExtraData({ weather }) {
  return (
    <>
      {weather && (
        <div>
          <h2>Precipitaciones:</h2>
          <p>{weather.current.precip_mm} mm</p>
          <h2>Viento:</h2>
          <p>{weather.current.wind_kph} km/h</p>
          <h2>Salida y puesta de sol:</h2>
          <p>{weather.forecast.forecastday[0].astro.sunrise.split(' ')[0]}</p>
          <p>{weather.forecast.forecastday[0].astro.sunset.split(' ')[0]}</p>
          <h2>Indice UV:</h2>
          <p>{Math.round(weather.current.uv)}</p>
          <h2>Nubes:</h2>
          <p>{weather.current.cloud} %</p>
          <h2>Visibilidad:</h2>
          <p>{weather.forecast.forecastday[0].day.avgvis_km} km</p>
          <h2>Humedad:</h2>
          <p>{weather.current.humidity} %</p>
          <h2>Presión:</h2>
          <p>{weather.current.pressure_mb} hPa</p>
        </div>
      )}
    </>
  );
}
