export async function get_actor_data(id){

    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=72a0f0f4235adf39ef686bfb08ee10f6`);
    const data = await response.json();

    return data;
}