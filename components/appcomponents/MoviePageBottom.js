"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MoviePageBottom(props) {

    return (
        <section className="movie-page-bottom-section py-16 px-4">
            
            <section className="movie-info text-center">
               

                <div className="cast-members">
                    <div className="cast-members-top-text text-center mb-12 md:mb-16 lg:mb-24">
                        <h2 className="text-3xl font-bold lg:text-4xl">Cast</h2>
                    </div>

                    <div className="cast-members-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">

                        {props.cast_data.slice(0,10).map((elem) => {


                            return (
                            <Link href={`/actors/${elem.id}`} className="w-[80%] max-w-[250px] ">
                                <div className="cast-member-card flex flex-col gap-2 border-2 border-gray-400 py-4 px-2 rounded-lg items-center">

                                    <p className="font-bold text-2xl mb-2">{elem.name}</p>

                                    <img
                                      
                                    src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`}
                                    width={150}
                                    height={150}
                                    className="rounded-lg"

                                    ></img>

                                </div>
                                </Link>

                            );
                        })}

                    </div>

                </div>
            </section>
        </section>
    );
}
