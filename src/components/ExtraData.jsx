import Rainy from '@/assets/rainy_snow.svg';
import Air from '@/assets/air.svg';
import Cloud from '@/assets/cloud.svg';
import Pressure from '@/assets/compress.svg';
import Humidity from '@/assets/humidity.svg';
import Eye from '@/assets/visibility.svg';
import Sun from '@/assets/wb_sunny.svg';
import Raise from '@/assets/wb_twilight.svg';

export function ExtraData({ weather }) {
  return (
    <>
      {weather && (
        <div className='grid grid-cols-2 gap-2 sm:gap-4'>
          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-2'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Rainy} alt='Icon' /> Precipitación
            </h2>
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
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Air} alt='Icon' /> Viento
            </h2>
            <p className='text-h5s-semibold'>
              <span className='text-d2s-semibold'>
                {Math.round(weather.current.wind_kph)}
              </span>{' '}
              km/h
            </p>
            <p>Del {weather.current.wind_dir}</p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Raise} alt='Icon' /> Salida y puesta del sol
            </h2>
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
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Sun} alt='Icon' /> Indice UV
            </h2>
            <p className='text-d2s-semibold'>
              {Math.round(weather.current.uv)}
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Cloud} alt='Icon' /> Nubes
            </h2>
            <p className='text-d2s-semibold'>{weather.current.cloud} %</p>
            <p className='text-p1-normal text-pretty'>
              Porcentaje de nubes del dia
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Eye} alt='Icon' /> Visibilidad
            </h2>
            <p className='text-h5s-semibold'>
              <span className='text-d2s-semibold'>
                {Math.round(weather.forecast.forecastday[0].day.avgvis_km)}
              </span>{' '}
              km
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-2xl flex flex-col gap-4'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Humidity} alt='Icon' /> Humedad
            </h2>
            <p className='text-d2s-semibold'>{weather.current.humidity} %</p>
            <p className='text-p1-normal flex gap-2 items-center'>
              <span className='bg-darkmode-50 rounded-full p-1.5 w-fit'>
                {Math.round(weather.current.dewpoint_c)}º
              </span>{' '}
              Punto de rocío
            </p>
          </div>

          <div className='bg-darkmode-700 p-4 rounded-full flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-p3-normal flex gap-1 items-center'>
              <img src={Pressure} alt='Icon' /> Presión
            </h2>
            <p className='text-d2s-semibold'>{weather.current.pressure_mb}</p>
            <p>hPa</p>
          </div>
        </div>
      )}
    </>
  );
}
