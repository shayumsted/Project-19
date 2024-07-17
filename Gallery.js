// U78784426
import React, { useState, useEffect } from 'react';

const Gallery = ({ tours, setTours }) => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error(error);}};

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);};

  const toggleDetails = (id) => {
    // To implement
  };

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h3>{tour.name}</h3>
          {/* Display other tour details here */}
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          <button onClick={() => toggleDetails(tour.id)}>Read More</button>
        </div>
      ))}
    </div>);};

export default Gallery;

import React, { useState } from 'react';

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>);}

export default Tour;