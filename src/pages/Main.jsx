import React, { useEffect, useState } from "react";
import request from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(request.requestPoppular);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();

    const intervalId = setInterval(() => {
      fetchMovies();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const trunCateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute  w-full h-[550px] bg-gradient-to-t from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-while border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%0 xl:max-w-[35%] text-gray-200">
            {trunCateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
