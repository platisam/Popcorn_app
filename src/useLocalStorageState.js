import { useState, useEffect } from "react";

export function useLocalStorageState(initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value]
  );
}
