import Image from "next/image";
import NavBar from "./components/navbar";
import Avatar from "./components/avatar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center"></div>
      <div className=" w-11/12 h-screen bg-neutral shadow-xl rounded-xl flex flex-row">
        <div className="flex flex-col justify-between">
          <Avatar/>
        </div>
      </div>
      
    </main>
  );
}
