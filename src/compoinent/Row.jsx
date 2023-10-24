import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800 relative scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie
              item={item}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
