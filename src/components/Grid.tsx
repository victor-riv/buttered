import React, { Fragment, useState, useEffect } from "react";

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
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a5326823e52c473ffda44ace64b7d44d
        `)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <Fragment>
      <h1 className="text-orange">Movies Go Here</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto"
        }}
      >
        {movies.map((movie: Movies) => (
          <div key={movie.id} style={{ marginTop: "10px" }}>
            <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} />
            <div style={{ textAlign: "start", overflow: "hidden" }}>
              <h6 style={{ width: "150px" }}>{movie.original_title}</h6>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Grid;
