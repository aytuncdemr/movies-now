"use client";

import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function WeekMovies(props) {
    const router = useRouter();

    return (
        <section className="weekly-movies-section py-24 px-4">
            <div className="weekly-movies-container">
                <div className="weekly-movies-top-text text-center text-3xl lg:text-4xl font-bold text-gray-600 mb-12 md:mb-24">
                    <h2>Movies Of The Week</h2>
                </div>

                <div className="movies-carousel lg:hidden max-w-[28rem] mx-auto">
                    <Carousel autoPlay infiniteLoop>
                        {props.week_movies.map((elem, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        router.push(`movies/${elem.id}`);
                                    }}
                                    key={index}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                                        alt={elem.title}
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="hidden lg:flex movies-manual  gap-4">
                    {props.week_movies.map((elem, index) => {
                        return (
                            <div className="rounded-lg overflow-hidden hover:cursor-pointer"
                                onClick={() => {
                                    router.push(`movies/${elem.id}`);
                                }}
                                key={index}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                                    alt={elem.title}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
