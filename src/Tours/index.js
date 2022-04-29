import React from "react";
import Loading from "../Spinner";
import Tour from "./Tour";
import { UseFetch } from "./UseFetch";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const { loading, tours, setTours, getTours } = UseFetch(url);
  console.log(tours);

  const removeTour = (id) => {
    setTours((tours) => {
      return tours.filter((tour) => tour.id !== id);
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button onClick={() => getTours()} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </main>
  );
};

export default Tours;
