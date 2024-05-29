import Image from "next/image";
import NavBar from "./components/navbar";
import Avatar from "./components/avatar";
import Progress from "./components/progress";
import Hero from "./components/hero";
import ProgressBar from "./components/progressBar";
import Accomplishments from "./components/accomplishments";
import InfoCard from "./components/infoCards";
import MyPicture from "./img/me.jpg";
import Edu from "./img/education.jpg";
import Exp from "./img/exp.jpg";
import Skills from "./img/skills.jpg";
import { infoCardsData } from "./data";
import Stars from "./img/stars.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Image src={Stars} alt="Background" className='absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 filter brightness-75 blur-sm'/>
      <div className="z-10 w-screen flex flex-row gap-5 p-4">
        <div className="flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col justify-between items-center bg-neutral-950 bg-opacity-55 shadow-2xl">
            <Avatar />
            <h1 className=" mb-2 font-bold font">Iulia Neuc (Julia)</h1>
            <p>Front-end Developer</p>
            <p>Back-end Developer</p>
            <p className="mb-2">Ux/UI Designer</p>
          </div>
          <div className="bg-neutral-950 bg-opacity-55 flex flex-col h-full">
            <Progress />
            <div className="divider"></div>
            <ProgressBar />
            <div className="divider"></div>
          </div>
        </div>

        <div className="bg-neutral-950 bg-opacity-30 w-full p-4 flex flex-col">
          <Hero />
          <Accomplishments />
          <div>
            <h1 className="mb-5 mt-5">Some Title Text</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* <InfoCard
                title="Education"
                description="Southern Institute of Technology"
                imageUrl={Edu}
                buttonText="Know more"
              />
              <InfoCard
                title="Experience"
                description="Graduated Student"
                imageUrl={Exp}
                buttonText="Know More"
              />
              <InfoCard
                title="My Skills"
                description="Learn all my professional skills"
                imageUrl={Skills}
                buttonText="Know More"
              />
              <InfoCard
                title="Custom Title"
                description="Custom Description"
                imageUrl={MyPicture}
                buttonText="Custom Button Text"
              />
              <InfoCard
                title="Custom Title"
                description="Custom Description"
                imageUrl={MyPicture}
                buttonText="Custom Button Text"
              />
              <InfoCard
                title="Custom Title"
                description="Custom Description"
                imageUrl={MyPicture}
                buttonText="Custom Button Text"
              /> */}
              {infoCardsData.map((card) => (
              <InfoCard
              key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
