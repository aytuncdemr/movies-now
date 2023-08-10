import React from "react";
import MovieCard from "../generalcomponents/MovieCard";
export default function TopRatedMovies(props) {
    const movie = {
        title: "Oppenheimer",
        img_path:
            "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        rating: 4,
        release_date: "21/08/2023",
    };

    return (
        <section className="top-rated-movies-section py-24">
            <div className="top-rated-movies-container">
                <div className="top-rated-movies-top-text text-center text-3xl lg:text-4xl font-bold text-gray-600 mb-12 md:mb-24">
                    <h2>Top Rated Movies</h2>
                </div>
                <div className="top-rated-movies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 ">
                    {props.top_rated_movies.map((elem) => {
                        return (
                            <MovieCard
                                img_path={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                                vote_count={elem.vote_count}
                                title={elem.title}
                                release_date={elem.release_date}
                                rating={(elem.vote_average / 2).toFixed(0)}
                                id={elem.id}
                            ></MovieCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
