import { useState } from "react";

export function useLocalStorageState(initialState) {
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });
}
