import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MovieCard(props) {
    let stars = [];

    for (let i = 0; i < props.rating; i++)
        stars.push(
            <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400"
            ></FontAwesomeIcon>
        );

    for (let i = 0; i < 5 - props.rating; i++)
        stars.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);

    return (
        <Link className="w-[85%] max-w-[20rem] "  href={`/movies/${props.id}`}>
        <div className="movie-card flex flex-col h-[36rem] border-2 rounded-xl p-4 overflow-hidden border-gray-400 items-center gap-4">
            
            
            <div className="movie-card-image rounded-lg overflow-hidden">
                <Image
                    src={props.img_path}
                    width={250}
                    height={150}
                    alt={props.title}
                ></Image>
            </div>

            <div className="movie-card-info py-4 flex flex-col justify-center text-center items-center">
                <p className="text-2xl text-gray-600 font-bold mb-4">
                    {props.title}
                </p>
                <div className="stars mb-4">
                    {stars}
                    <p className=" font-bold text-md mt-1">({props.vote_count})</p>
                </div>
                <p className="font-bold text-lg mt-auto text-gray-400">Release Date: {props.release_date}</p>
            </div>
            
        </div>
        </Link>
    );
}
