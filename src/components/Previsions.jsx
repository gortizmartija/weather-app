import Calendar from '@/assets/calendar.svg';

function PrevisionsList({ previsionslist }) {
  const dayLabels = ['Hoy', 'Mañana', 'Pasado'];

  return (
    <div className='p-2'>
      <h2 className='mb-4 text-p3-normal flex gap-1 items-center'>
        <img src={Calendar} alt='Icon' />
        Previsión futura
      </h2>
      <ul className='flex gap-10 py-2'>
        {previsionslist.map((prev, index) => (
          <li
            key={prev.date_epoch}
            className='flex flex-col gap-1.5 text-center'
          >
            <h3>{prev.day.maxtemp_c}º</h3>
            <h3 className='text-neutral-400'>{prev.day.mintemp_c}°</h3>
            <img
              src={prev.day.condition.icon}
              alt='Icono Climatico'
              className='h-16 aspect-auto'
            />
            <p>{dayLabels[index] || prev.date}</p>
            <p className='text-neutral-400'>
              {prev.date.split('-')[2] + '/' + prev.date.split('-')[1]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NoPrevisions() {
  return <p>No hay resultados...</p>;
}

export function Previsions({ previsions }) {
  const hasPrevisions = previsions?.length > 0;
  return hasPrevisions ? (
    <PrevisionsList previsionslist={previsions} />
  ) : (
    <NoPrevisions />
  );
}
