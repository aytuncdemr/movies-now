import { data } from "./getMovieData";
import { cloneDeep } from "lodash";
import _ from "lodash";

export function get_popular_movies(){

    const popular_movies = _.cloneDeep(data);


    popular_movies.results.sort((elem1,elem2) => elem2.popularity - elem1.popularity);

    
    return popular_movies.results;
}