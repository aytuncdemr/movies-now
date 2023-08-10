import React from "react";

export default function ActorPageTop(props) {
    return (
        <section className="actor-page-top-section py-32 px-4">
            <div className="actor-page-top-container  ">
                <div className="actor-page-top-top-text text-center flex flex-col items-center justify-center lg:flex-row gap-4 ">
                   <div className="flex flex-col items-center ">
                    <p className="text-2xl font-bold text-gray-700 md:text-3xl lg:text-4xl mb-4 lg:mb-8">
                        {" "}
                        {props.actor_data.name}{" "}
                    </p>

                    <img
                        src={`https://image.tmdb.org/t/p/w500${props.actor_data.profile_path}`}
                        width={150}
                        height={150}
                        className="rounded-lg md:w-[200px] lg:w-[250px] mb-4 lg:mb-8"
                    ></img>

                    <p className="text-lg font-bold text-gray-400 md:text-xl lg:text-2xl">
                        Birthday: {props.actor_data.birthday}{" "}
                        {props.actor_data.place_of_birth}
                    </p>
                    </div>
                    <div>

                    <div className="actor-page-bottom-top-text text-center mb-4">
                        <h2 className="text-3xl font-bold md:text-4xl text-gray-600">
                            About
                        </h2>
                    </div>

                    <div className="actor-page-bottom-info text-center max-w-[800px] mx-auto">
                        <p className="text-lg md:text-xl lg:text-2xl  text-gray-500">
                            {" "}
                            {props.actor_data.biography}{" "}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
