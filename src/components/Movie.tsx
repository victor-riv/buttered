import React from "react";

interface Props {
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  populatiry: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Movie = (props: Props) => (
  <div className="max-w-sm w-48 m-1 border-black rounded overflow-hidden shadow-lg">
    <img
      className="w-48"
      src={`https://image.tmdb.org/t/p/w300${props.backdrop_path}`}
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold mb-2 text-xs text-left truncate">
        {props.original_title}
      </div>
    </div>
  </div>
);

export default Movie;
