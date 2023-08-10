import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MoviePageTop(props) {

    let stars = [];

    for (let i = 0; i < (props.vote_average / 2).toFixed(0); i++)
        stars.push(
            <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400"
            ></FontAwesomeIcon>
        );

    for (let i = 0; i < 5 - (props.vote_average / 2).toFixed(0); i++)
        stars.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);

    return (
        <section className="movie-page-top-section px-4 pt-16 lg:pt-24">
            <div className="movie-page-top-container mx-auto w-fit flex flex-col lg:gap-24 lg:flex-row">
                <div>
                <div className="movie-poster text-center mx-auto mb-2 w-fit rounded-xl overflow-hidden">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800 mb-4">
                        {props.title}
                    </h2>

                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                        width={250}
                        height={150}
                        alt={props.title}
                        className="mb-4 rounded-lg mx-auto lg:w-[300px]"
                    ></Image>
                </div>

                <div className="movie-info text-center max-w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-2">
                        Release date: {props.release_date}
                    </h2>
                    <p className="font-bold md:text-2xl text-gray-500">Genres: {props.genres.map((elem) => elem.name + ",")}</p>

                    <div className="stars mb-4 text-lg md:text-xl">
                        {stars}
                        <p className=" font-bold text-lg md:text-xl mt-1">
                            ({props.vote_count})
                        </p>
                    </div>
                </div>
                </div>
                <div className="movie-page-bottom-top-text py-24 text-center mb-6">
                <h2 className="text-3xl font-bold mb-6 lg:text-4xl md:mb-12 lg:mb-16">About</h2>
                <p className="text-xl text-gray-600 md:text-2xl leading-6 mb-24 max-w-[785px] text-center mx-auto">
                    {props.overview}
                </p>
            </div>

            </div>
        </section>
    );
}
