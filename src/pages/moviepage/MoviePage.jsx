import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MoviePage.css";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c2f0fd8f17254489c08e1441d4f5040`
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div className="movie__container">
      <div className="movie__intro">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          className="movie__backdrop"
          alt=""
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detail__left">
          <div className="movie__poster__container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="movie__poster"
              alt=""
            />
          </div>
        </div>
        <div className="movie__detail__right">
          <div className="movie__detail__right__top">
            <div className="movie__name">{movie.original_title}</div>
            <div className="movie__tagline">{movie.tagline}</div>
            <div className="rating">
              <span className="movie__votecount">{movie.vote_count}⭐</span>
            </div>
            <div className="movie__release__date">{movie.release_date}</div>
            <div className="movie__genres">
              {movie?.genres?.map((genre) => (
                <Link to={`/genres/${genre.id}`}>
                  <span className="movie__genre" key={genre.id}>
                    {genre.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="movie__detail__right__bottom">
            <h2 className="synopsis__title">Synopsis</h2>
            <div>{movie.overview}</div>
          </div>
        </div>
      </div>
      {/* <div className="movie__links" >
                <div className="link__title" >
                    Links
                </div>
                <a className="movie__link__ext">
                    <p>
                        <span className="movie__imdb__btn movie__btn" >
                            IMDB ↗️
                        </span>
                    </p>
                </a>
            </div> */}
    </div>
  );
};

export default MoviePage;
