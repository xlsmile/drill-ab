import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <h2 className="title">Our tours</h2>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
