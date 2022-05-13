import React, { useEffect, useState } from "react";

export default function Index() {
  // let change = 2;
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Just mounted");
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(count);
  return <div>I have rendered timer{count} times!</div>;
}
