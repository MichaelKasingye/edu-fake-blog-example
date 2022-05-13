import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>EDU FAKE BLOG</h1>
      {!data ? (
        <h2>Load...</h2>
      ) : (
        <div className="blogs d-flex justify-content-center flex-wrap">
          {[...data].map((info) => (
            <article key={info.id} className=" border border-secondary m-2" style={{width:"300px"}}>
              <Link to={`/article/${info.id}`}>
                <h5>{info.title}</h5>
                <p>{info.body}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
