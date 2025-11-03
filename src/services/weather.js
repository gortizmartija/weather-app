import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const DEFAULT_CITY = 'Bilbao';
const FORECAST_DAYS = 3;

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no soportada por el navegador'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(`${position.coords.latitude},${position.coords.longitude}`);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const searchWeather = async ({ search }) => {
  let location = search;

  if (!location) {
    try {
      location = await getCurrentPosition();
    } catch (error) {
      console.log(
        'No se pudo obtener la ubicación, usando ciudad por defecto:',
        DEFAULT_CITY,
        error
      );
      location = DEFAULT_CITY;
    }
  }

  try {
    const url = `${apiUrl}?key=${apiKey}&q=${location}&days=${FORECAST_DAYS}&lang=es`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(
      'Error al buscar el clima:',
      error.response?.data || error.message
    );
    if (!search) {
      // Si falló con geolocalización o ciudad por defecto, intentar con New York
      if (location !== DEFAULT_CITY) {
        return searchWeather(DEFAULT_CITY);
      }
    }
    throw error;
  }
};
