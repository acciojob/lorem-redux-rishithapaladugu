
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <h4>Loading...</h4>;  // Use h4 for loading as test expects
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{title}</h1>  {/* h1 for title intro text */}
      <p>{body}</p>
    </div>
  );
}

export default App;
