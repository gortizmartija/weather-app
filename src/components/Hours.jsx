function HoursList({ hourslist }) {
  return (
    <ul className='flex gap-10 overflow-auto'>
      {hourslist.map((hour) => (
        <li key={hour.time_epoch}>
          <h3>{hour.time.split(' ')[1]}</h3>
          <h3>{hour.temp_c}°C</h3>
          <img src={hour.condition.icon} alt='Icono Climatico' />
          <p>{hour.condition.text}</p>
        </li>
      ))}
    </ul>
  );
}

function NoHours() {
  return <p>No hay resultados...</p>;
}

export function Hours({ hour }) {
  const hasHours = hour?.length > 0;

  return hasHours ? <HoursList hourslist={hour} /> : <NoHours />;
}
