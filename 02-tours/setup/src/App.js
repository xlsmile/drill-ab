import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    return async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
