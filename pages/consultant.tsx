import { NextPage } from "next";
import React, { useEffect } from "react";

const Consultant: NextPage = () => {
  const consultants = [
    {
      id: "1",
      name: "Hampus",
      about: "Plays sport XYZ blah blah blah",
      image: "/public/images/party.svg",
    },
    {
      id: "2",
      name: "Kalle",
      about: "Dont plays sport XYZ blah blah blah",
    },
    {
      id: "3",
      name: "Anders",
      about: "Lorem ipsum",
    },
    {
      id: "4",
      name: "Palle",
      about: "Lorem lorem ",
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-24">
        <h1 className="font-mono text-4xl">Möt teamet</h1>
      </div>

      <div>
        <img
          src="https://source.unsplash.com/random/350x350"
          alt=" random imgee"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                New
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                2 baths &bull; 3 rooms
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              A random Title
            </h4>

            <div className="mt-1">
              $1800
              <span className="text-gray-600 text-sm"> /wk</span>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                4/5 ratings{" "}
              </span>
              <span className="text-sm text-gray-600">
                (based on 234 ratings)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultant;
