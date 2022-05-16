import { useEffect, useState } from "react";

export function useFetchGet(url) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);
  return [data];
}
// useFetchPost
// etc... CRUD
