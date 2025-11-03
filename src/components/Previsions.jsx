function PrevisionsList({ previsionslist }) {
  const dayLabels = ['Hoy', 'Mañana', 'Pasado'];

  return (
    <>
      <h2>Previsiones:</h2>
      <ul className='flex gap-10'>
        {previsionslist.map((prev, index) => (
          <li key={prev.day.date}>
            <h3>{prev.day.maxtemp_c}º</h3>
            <h3>{prev.day.mintemp_c}°</h3>
            <img src={prev.day.condition.icon} alt='Icono Climatico' />
            <p>{dayLabels[index] || prev.date}</p>
            <p>{prev.date.split('-')[1] + '/' + prev.date.split('-')[2]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function NoPrevisions() {
  return <p>No hay resultados...</p>;
}

export function Previsions({ previsions }) {
  const hasPrevisions = previsions?.length > 0;
  console.log(previsions);
  return hasPrevisions ? (
    <PrevisionsList previsionslist={previsions} />
  ) : (
    <NoPrevisions />
  );
}
