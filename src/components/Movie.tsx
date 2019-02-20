import React from "react";

interface Props {
  poster_path: string;
  id: number;
  original_title: string;
  vote_average: number;
}

const Movie = (props: Props) => (
  <div className="w-48 mx-auto p-5 overflow-hidden">
    <img
      className="w-48"
      src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
      style={{ borderRadius: "10px" }}
      alt="Sunset in the mountains"
    />
    <div className="px-2 py-4">
      <div className="font-bold mb-2 text-sm text-left truncate tracking-wide text-white">
        {props.original_title}
        <div className="mt-4">
          <span className="text-xl">{props.vote_average}</span>
          <span className="text-grey-darker"> /10</span>
        </div>
      </div>
    </div>
  </div>
);

export default Movie;
