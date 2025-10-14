import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLorem } from './actions/loremActions';

function App() {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {title && <h2>{title}</h2>}
      <p>{body}</p>
    </div>
  );
}

export default App;
