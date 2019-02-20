import React, { Fragment, useState, useEffect } from "react";
import Movie from "./Movie";

interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  populatiry: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Grid = (): JSX.Element => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    console.log("i'm fetching");
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${
      process.env.REACT_APP_API_KEY
    }
        `)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <Fragment>
      <div className="flex flex-wrap max-w-xl mx-auto ">
        {movies.map((movie: Movies) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </Fragment>
  );
};

export default Grid;
