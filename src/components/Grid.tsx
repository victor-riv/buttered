import React, { Fragment, useState, useEffect } from "react";
import Movie from "./Movie";

interface Movies {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
}

const Grid = (): JSX.Element => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${
      process.env.REACT_APP_API_KEY
    }
        `)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <Fragment>
      <div className="movies">
        <div className="grid-filter">
          <p>Found 1,808 movies in total</p>
        </div>
        {movies.map((movie: Movies) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </Fragment>
  );
};

export default Grid;
