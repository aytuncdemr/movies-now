export let data = null;

export async function get_movie_data() {

    if (!data) {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=72a0f0f4235adf39ef686bfb08ee10f6&pages=1",
            { next: { revalidate: 60 } }
        );

        data = await response.json();
            
    }

}
