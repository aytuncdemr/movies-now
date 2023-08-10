import { data } from "./getMovieData";
import { cloneDeep } from "lodash";
import _ from "lodash";

export function get_top_rated_movies(){

    const top_rated_movies = _.cloneDeep(data);


    top_rated_movies.results.sort((elem1,elem2) => elem2.vote_count * elem2.vote_average - elem1.vote_count * elem1.vote_average);

    
    return top_rated_movies.results;
}