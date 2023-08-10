import get_movie_id_data from "@/lib/getMovieIdData";
import React from "react";
import MoviePageBottom from "@/components/appcomponents/MoviePageBottom";
import MoviePageTop from "@/components/appcomponents/MoviePageTop";
import get_movie_id_cast_data from "@/lib/getMovieIdCastData";

export default async function MoviePage(props) {

    const movie_data = await get_movie_id_data(props.params.id);
    const cast_data = await get_movie_id_cast_data(props.params.id);

    return (
        <main className="min-h-screen">
            <MoviePageTop {...movie_data}></MoviePageTop>
            <MoviePageBottom movie_data={movie_data} cast_data={cast_data}></MoviePageBottom>
        </main>
    );
}
