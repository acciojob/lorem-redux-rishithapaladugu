import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { loading, title, body, posts, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    // ✅ Cypress expects this exact tag
    return <h4>Loading...</h4>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <ul>
        {posts && posts.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

export default App;
