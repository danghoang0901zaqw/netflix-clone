import { useEffect, useState } from "react";
import instance from "../../axios";
import requests from "../../Requests";
import "./Banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(requests.fetchNetflixOriginals);
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      } catch (error) {}
    };
    fetchData();
  }, []);
  const truncate = (string, num) => {
    return string?.length > num ? string.substring(0, num) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
