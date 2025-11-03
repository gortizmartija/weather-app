export function Map() {
  return (
    <>
      <h2>Mapa de Previsiones:</h2>
      <iframe
        className='w-1/2 aspect-video'
        src='https://weathermaps.weatherapi.com/precip/tiles/map.html'
        frameborder='0'
      ></iframe>
    </>
  );
}
