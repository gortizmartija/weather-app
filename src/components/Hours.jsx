import Clock from '@/assets/clock.svg';

function HoursList({ hourslist }) {
  return (
    <div className=' border-2 border-darkmode-50 rounded-lg p-4'>
      <h2 className='mb-4 text-p3-normal flex gap-1 items-center'>
        <img src={Clock} alt='Icon' />
        Previsión por horas
      </h2>
      <ul className='flex gap-10 overflow-auto py-2'>
        {hourslist.map((hour) => (
          <li
            key={hour.time_epoch}
            className='text-center flex flex-col gap-1.5'
          >
            <h3>{Math.round(hour.temp_c)}°</h3>
            <img
              src={hour.condition.icon}
              alt='Icono Climatico'
              className='h-10 aspect-auto'
            />
            <h3 className='text-neutral-400'>{hour.time.split(' ')[1]}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NoHours() {
  return <></>;
}

export function Hours({ hour }) {
  const hasHours = hour?.length > 0;

  return hasHours ? <HoursList hourslist={hour} /> : <NoHours />;
}
