import { data } from "./getMovieData";
import { cloneDeep } from "lodash";
import _ from "lodash";


export function get_week_movies(){

    const week_movies = _.cloneDeep(data);

    week_movies.results.sort((elem1,elem2) => {

        const elem1_release = Number(elem1.release_date.split("-").map((elem) => Number(elem)).reduce((acc,cur) => acc + cur));
        const elem2_release = Number(elem2.release_date.split("-").map((elem) => Number(elem)).reduce((acc,cur) => acc + cur));

        return elem2.popularity - elem1.popularity && elem2_release - elem1_release;
     });
    
    return week_movies.results.slice(0,7);
}