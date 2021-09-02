import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../public/profile.png";

export default function Profile() {
  return (
    <>
      <main className="profile-page bg-circuit">
        <section className="relative block" style={{ height: "300px" }}>
          <div className="absolute top-0 w-full h-full px-24 bg-center bg-cover"></div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "90px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blue-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-24">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {/* image */}

                      <Image
                        src={profilePic}
                        alt="Michael"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-12 -ml-26 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    Michael Hinshaw
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Portland, Oregon
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Developer_Audio/Visual_Artist
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of The Internet
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        I started developing through Max/MSP almost ten years
                        ago. I became increasingly interested in programming and
                        code and now, I am obsessed with Javascript. I use
                        programming in my art and have become increasingly
                        reliant on it as a daily meditation. I want to build
                        tools that increase availability and inclusivity. My
                        immediate goals are to build applications for music
                        education for self-driven, non-traditional learners as
                        myself. With tools like genish.js, Juce, and React it is
                        now possible to build complex tools for composition and
                        sound design in browser environments. I will keep a
                        record of my journey here and keep building this out as
                        I continue to learn and refine my development practice.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
