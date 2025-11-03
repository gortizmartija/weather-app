import { useEffect, useState, useRef } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
