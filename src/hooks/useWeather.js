import { useState, useCallback, useRef } from 'react';
import { searchWeather } from '@/services/weather.js';

export function useWeather({ search }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const [errorWeather, setError] = useState(null);
  const previousRef = useRef(search);

  const getWeather = useCallback(async ({ search }) => {
    if (previousRef.current === search) return;
    try {
      setLoading(true);
      setError(null);
      previousRef.current = search;
      const newWeather = await searchWeather({ search });
      setWeather(newWeather);
    } catch (err) {
      console.error('Error in component:', err);
      setError(err.message);
    } finally {
      // tanto en el try como en el catch
      setLoading(false);
    }
  }, []);
  return { weather, getWeather, errorWeather, loading };
}
