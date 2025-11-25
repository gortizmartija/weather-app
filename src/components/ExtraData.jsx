export function ExtraData({ weather }) {
  return (
    <>
      {weather && (
        <div className='grid grid-cols-2 gap-2 sm:gap-4'>
          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-2'>
            <h2 className='text-p3-normal'>Precipitación</h2>
            <p className='text-h5s-semibold'>
              <span className='text-d2s-semibold'>
                {weather.current.precip_mm}
              </span>{' '}
              mm
            </p>
            <p className='text-p1-normal text-pretty'>
              Total de precipitaciones del dia
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal'>Viento</h2>
            <p className='text-h5s-semibold'>
              <span className='text-d2s-semibold'>
                {Math.round(weather.current.wind_kph)}
              </span>{' '}
              km/h
            </p>
            <p>Del {weather.current.wind_dir}</p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal'>Salida y puesta del sol</h2>
            <p>
              Salida:{' '}
              <span className='text-h3s-semibold'>
                {weather.forecast.forecastday[0].astro.sunrise.split(' ')[0]}
              </span>
            </p>
            <p>
              Puesta:{' '}
              <span className='text-h3s-semibold'>
                {weather.forecast.forecastday[0].astro.sunset.split(' ')[0]}
              </span>
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal'>Indice UV</h2>
            <p className='text-d2s-semibold'>
              {Math.round(weather.current.uv)}
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal'>Nubes</h2>
            <p className='text-d2s-semibold'>{weather.current.cloud} %</p>
            <p className='text-p1-normal text-pretty'>
              Porcentaje de nubes del dia
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal'>Visibilidad</h2>
            <p className='text-h5s-semibold'>
              <span className='text-d2s-semibold'>
                {Math.round(weather.forecast.forecastday[0].day.avgvis_km)}
              </span>{' '}
              km
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal'>Humedad</h2>
            <p className='text-d2s-semibold'>{weather.current.humidity} %</p>
            <p className='text-p1-normal flex gap-2 items-center'>
              <div className='bg-darkmode-50 rounded-full p-1.5 w-fit'>
                {Math.round(weather.current.dewpoint_c)}º
              </div>{' '}
              Punto de rocío
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal'>Presión</h2>
            <p className='text-d2s-semibold'>{weather.current.pressure_mb}</p>
            <p>hPa</p>
          </div>
        </div>
      )}
    </>
  );
}
