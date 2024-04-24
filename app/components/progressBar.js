import React from "react";

export default function ProgressBar() {
  return (
    <div className="flex flex-col justify-around items-center gap-3">
      <h2>HTML</h2>
      <progress
        className="progress progress-success w-56"
        value={90}
        max="100"
      ></progress>
      <h2>CSS</h2>
      <progress
        className="progress progress-success w-56"
        value="95"
        max="100"
      >95</progress>
      <h2>JS</h2>
      <progress
        className="progress progress-success w-56"
        value="60"
        max="100"
      ></progress>
      <h2>Tailwind</h2>
      <progress
        className="progress progress-success w-56"
        value="95"
        max="100"
      ></progress>
      <h2>Next.js</h2>
      <progress
        className="progress progress-success w-56"
        value="65"
        max="100"
      ></progress>
    </div>
  );
}
