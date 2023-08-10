"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const [is_nav_open, set_nav_open] = useState(false);

    function toggle_nav() {
        set_nav_open((prev_state) => {
            if (!prev_state) {
                document.body.style.overflow = "hidden";
                window.scrollTo(0, 0);
            } else document.body.style.overflow = "initial";

            return !prev_state;
        });
    }

    return (
        <header className="py-4 px-2">
            <div className="header-container flex items-center justify-between text-2xl">
               
            <Link href="/" className="logo-container z-50">
                    <Image
                        src="/images/movie-logo.png"
                        alt="Movies Now Logo"
                        width={45}
                        height={45}
                        className="md:w-[65px]"
                    ></Image>
                </Link>

               <div className="navbar-container">
                    
                   {is_nav_open && <nav className="mobile-nav font-bold opacity-80 backdrop-blur-lg text-center bg-white z-10 md:hidden absolute left-0 top-0 w-full h-screen flex items-center justify-center">

                        <ul className="flex flex-col gap-4 text-3xl">
                        <li>
                                <a
                                    href="https://github.com/aytuncdemr/movies-now"
                                    target="_blank"
                                    onClick={toggle_nav}
                                >
                                    Source Code
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/aytuncdemr/movies-now/blob/main/README.md"
                                    target="_blank"
                                    onClick={toggle_nav}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact-footer" onClick={toggle_nav}>Contact</a>
                            </li>

                        </ul>

                    </nav>}
                    <button className="nav-toggle z-50 relative md:hidden" onClick={toggle_nav}>
                        <FontAwesomeIcon
                        width={25}
                            icon={is_nav_open ? faClose : faBars}
                        ></FontAwesomeIcon>
                    </button>

                    <nav className="desktop-nav hidden md:block"> <ul className="flex gap-4 text-xl xl:text-2xl">
                        <li>
                                <a
                                    href="https://github.com/aytuncdemr/movies-now"
                                    target="_blank"
                                    onClick={toggle_nav}
                                >
                                    Source Code
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/aytuncdemr/movies-now/blob/main/README.md"
                                    target="_blank"
                                    onClick={toggle_nav}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact-footer" onClick={toggle_nav}>Contact</a>
                            </li>

                        </ul></nav>

              
                </div>

               
            </div>
        </header>
    );
}
