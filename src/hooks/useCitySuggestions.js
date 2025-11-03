import { useState, useCallback } from 'react';
import debounce from 'just-debounce-it';
import axios from 'axios';

export function useCitySuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (!query) return setSuggestions([]);

      const res = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${query}`
      );
      setSuggestions(res.data);
    }, 300),
    []
  );

  return { suggestions, fetchSuggestions, setSuggestions };
}
