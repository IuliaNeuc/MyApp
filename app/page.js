import Image from "next/image";
import NavBar from "./components/navbar";
import Avatar from "./components/avatar";
import Progress from "./components/progress";
import Hero from "./components/hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="z-10 w-screen flex flex-row gap-5 bg-neutral p-4 shadow-2xl">
        <div className="flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col justify-between items-center bg-neutral-950 bg-opacity-30 shadow-2xl">
            <Avatar />
            <h1 className=" mb-2 font-bold font">Iulia Neuc (Julia)</h1>
            <p>Front-end Developer</p>
            <p>Back-end Developer</p>
            <p className="mb-2">Ux/UI Designer</p>
          </div>
          <div className="bg-neutral ">
            <Progress/>

          </div>
        </div>

        <div className="bg-neutral-950 bg-opacity-30 w-full p-4">
          <Hero/>
        </div>
      </div>
    </main>
  );
}
