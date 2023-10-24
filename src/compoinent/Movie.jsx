import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
        className="w-full h-auto block"
      ></img>
      <div className="absolute top-0 left-0 font-bold w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-90">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
