import React from "react";
import MovieCard from "../generalcomponents/MovieCard";

export default function PopularMovies(props) {
    
    return (    
        <section className="popular-movies-section py-12">
            <div className="popular-movies-container">
                <div className="popular-movies-top-text text-center text-3xl lg:text-4xl font-bold text-gray-600 mb-12 md:mb-24">
                    <h2>Popular Movies</h2>
                </div>

                <div className="popular-movies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 ">
                    {props.popular_movies.map((elem) => {
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
