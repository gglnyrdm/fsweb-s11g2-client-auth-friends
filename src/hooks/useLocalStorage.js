import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    
    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      console.log("local boş", defaultValue);
      return defaultValue;
    } else {
      console.log("local dolu", localVal);
      return localVal;
    }
  });
 
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
