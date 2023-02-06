import React, { useEffect, useState } from "react";
import instance from "../../axios";
import "./Row.scss";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(fetchUrl);
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img 
              key={movie.poster_path}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
