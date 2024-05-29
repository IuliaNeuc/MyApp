"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-neutral-950 bg-opacity-55 text-neutral-content">
      <div className="flex-none">
        <Link href="/">
          <h1 className="btn btn-ghost text-xl">Julia Juli</h1>
        </Link>
      </div>
      <div className="drawer drawer-end flex-none z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
         
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay  "
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-neutral-950 bg-opacity-90 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/screens/aboutMe">
                <h1>About Me</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/education">
                <h1>Education</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/experience">
                <h1>Experience</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/skills">
                <h1>Skills</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/passion">
                <h1>Passion</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/myArt">
                <h1>My Art</h1>
              </Link>
            </li>
            <li>
              <Link href="/screens/dreams">
                <h1>My Dreams</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
