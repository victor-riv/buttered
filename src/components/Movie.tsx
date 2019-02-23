import React from "react";

interface Props {
  poster_path: string;
  id: number;
  original_title: string;
  vote_average: number;
}

const Movie = (props: Props) => (
  <div className="movie">
    <img
      className="poster"
      src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
      style={{ borderRadius: "10px" }}
      alt="Sunset in the mountains"
    />
    <div className="movie-details">
      <div className="movie-title text-sm text-left">
        <span className="text-white">{props.original_title}</span>
      </div>
      <div className="movie-vote">
        <span className="text-xl text-white">⭐ {props.vote_average}</span>
        <span className="text-grey-darker"> /10</span>
      </div>
    </div>
  </div>
);

export default Movie;
