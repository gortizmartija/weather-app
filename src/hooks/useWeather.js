import { useState, useCallback, useRef } from 'react';
import { searchWeather } from '@/services/weather.js';

export function useWeather({ search }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const previousRef = useRef(search);

  const getWeather = useCallback(async ({ search }) => {
    if (previousRef.current === search) return;
    try {
      setError(null);
      previousRef.current = search;
      const newWeather = await searchWeather({ search });
      setWeather(newWeather);
    } catch (err) {
      console.error('Error in component:', err);
      setError(err.message);
    }
  }, []);
  console.log({ weather, getWeather, error });
  return { weather, getWeather, error };
}
