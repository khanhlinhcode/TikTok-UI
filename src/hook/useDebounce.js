import { useState, useEffect } from "react";

// chuoi rong dua vao value nen thang debaoud cung laf chuoi rong lun cuoi ham retuen cha ra chuoi rong
// 
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, [delay]);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
