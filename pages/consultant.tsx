import React from "react";
import { NextPage } from "next";
import Image from "next/image";

const Consultant: NextPage = () => {
  const consultants = [
    {
      id: 1,
      name: "Hampus",
      title: "Frontend dev",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut cum quaerat maxime dolores alias qui aliquam voluptatibus fugit quas?",
      image:
        "https://doodleipsum.com/700/avatar?bg=D98D63&i=8ea4626088daa443e5a3d13e1658f832",
    },
    {
      id: 2,
      name: "Kalle",
      title: "Fullstack dev",
      about: "Dont plays sport XYZ blah blah blah",
      image:
        "https://doodleipsum.com/700/avatar?bg=6392D9&i=df724d7c95f42ff94943275dcdcbacfc",
    },
    {
      id: 3,
      name: "Anders",
      title: "Frontend dev",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut cum quaerat maxime dolores alias qui aliquam voluptatibus fugit quas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut cum quaerat maxime dolores alias qui aliquam voluptatibus fugit quas?",
      image:
        "https://doodleipsum.com/700/avatar?bg=6392D9&i=ddca8586297823667d3bc8df76612061",
    },
    {
      id: 4,
      name: "Palle",
      title: "DevOps engineer",
      about: "Lorem lorem ",
      image:
        "https://doodleipsum.com/700/avatar?bg=6392D9&i=0bdc1ecca366772a1c4b55232ef1e6c5",
    },
    {
      id: 5,
      name: "Malle",
      title: "Cloud Architect",
      about: "Lorem sorem",
      image:
        "https://doodleipsum.com/700/avatar?bg=6392D9&i=c2a46927c51b9a0707dcd491590fe419",
    },
    {
      id: 6,
      name: "Tjalle",
      title: "Frontend dev",
      about:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
      image:
        "https://doodleipsum.com/700/avatar?bg=6392D9&i=c2a46927c51b9a0707dcd491590fe419",
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-24">
        <h1 className="font-mono text-4xl">Möt teamet</h1>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap">
          {consultants.map((item, index: number) => (
            <div
              className="w-full md:w-6/12 flex justify-center lg:w-3/12 lg:mb-0 mb-12 px-4"
              key={item?.id}>
              <div className="px-6 py-20">
                <div className="group">
                  <Image
                    alt="John Doe"
                    src={item.image}
                    width={300}
                    height={300}
                    className="rounded-3xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                  />
                  <div className="top-0 left-0 w-full h-0 flex flex-col justify-center items-center transition-all transform translate-y-8 opacity-0 duration-500 group-hover:opacity-90 group-hover:translate-y-0">
                    <p className=" top-0 left-0 font-mono font-medium tracking-tighter rounded-lg bg-slate-200 w-auto max-w-[300px] py-2 px-6 text-center">
                      {item?.about}
                    </p>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <h1 className="text-gray-900 sm:text-center text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    {item?.name}
                  </h1>
                  <div className="text-gray-700 text-base font-light leading-relaxed mt-0 mb-2">
                    {item?.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Consultant;
