/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import team from "/public/images/team.svg";
import party from "/public/images/party.svg";

const description =
  "Vi är ett konsultbolag och konsultmäklare i Stockholm. Våra anställda konsulter är JavaScript-specialister och vi hjälper att tillsätta alla roller inom tech. Behöver du en .NET utvecklare eller en agil coach? Det är bara att höra av dig.";

const consultant = "Våra konsulter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FreeCode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen">
        <video
          src="/images/code.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-fill"
        />
      </div>

      <main className="flex md:flex-row flex-col sm:py-16 my-10 px-20 mb-20">
        <div className="flex justify-center items-center flex-col xl:px-0 px-6">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-6xl font-bold text-purple-freecode">
              Konsulter
              <div className="sm:block">
                {" "}
                <span className="flex justify-center sm:text-center">
                  I
                </span>{" "}
              </div>
            </h1>
          </div>

          <h2 className="flex justify-end text-5xl text-black">Världsklass.</h2>
          <div>
            <p className="max-w-[470px]  mt-5 flex justify-center">
              {description}
            </p>
          </div>
          <div className="rounded-md shadow mt-10">
            <Link href="/consultant">
              <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                Våra konsulter
              </a>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
          <Image src={team} alt="team picture" className="relative z-10" />
        </div>
      </main>

      <main className="flex md:flex-row flex-col sm:py-16 py-6 px-20 mb-40">
        <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
          <Image src={party} alt="team picture" className="relative z-10" />
        </div>

        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
          <div className="flex flex-row justify-between mx-20 items-center w-full">
            <h1 className="flex-1 text-4xl font-bold tracking-tight text-purple-freecode sm:text-5xl md:text-6xl">
              Sugen <br className="sm:block" />{" "}
              <span className="text-gradient">på</span>{" "}
            </h1>
          </div>

          <h1 className="font-semibold ss:text-[68px] mx-20 text-[52px] text-black w-full">
            Event?
          </h1>
          <div>
            <p className="max-w-[470px] mt-5 flex justify-center">
              Vi har ofta events med techtalks med det senaste inom frontend,
              gamingkvällar &#38; trevligt häng i våra lokaler centralt i city.
              Kom förbi och säg hej?
            </p>
          </div>
          <div className="rounded-md shadow mt-10">
            <Link href="/event">
              <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                Events
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
