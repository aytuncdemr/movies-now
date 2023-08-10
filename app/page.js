import PopularMovies from "@/components/appcomponents/PopularMovies";
import TopRatedMovies from "@/components/appcomponents/TopRatedMovies";
import WeekMovies from "@/components/appcomponents/WeekMovies";
import { get_movie_data } from "@/lib/getMovieData";
import { get_popular_movies } from "@/lib/getPopularMovies";
import { get_top_rated_movies } from "@/lib/getTopRatedMovies";
import { get_week_movies } from "@/lib/getWeekMovies";
export default async function Home(props) {

    await get_movie_data();

    const popular_movies = get_popular_movies();
    const week_movies = get_week_movies();
    const top_rated_movies = get_top_rated_movies();

    return (
        <main className="min-h-screen">
            <WeekMovies week_movies={week_movies}></WeekMovies>
            <PopularMovies popular_movies={popular_movies}></PopularMovies>
            <TopRatedMovies top_rated_movies={top_rated_movies}></TopRatedMovies>
        </main>
    );
}

