import React from "react";

export default function Progress() {
  return (
    <div className="flex flex-row m-4 justify-around gap-3">
      <div className="flex flex-col items-center gap-3">
        <div
          className="radial-progress bg-primary text-primary-content border-4 border-primary"
          style={{ "--value": 87 }}
          role="progressbar"
        >
          87%
        </div>
        <h2>English</h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div
          className="radial-progress bg-primary text-primary-content border-4 border-primary"
          style={{ "--value": 100 }}
          role="progressbar"
        >
          100%
        </div>
        <h2>Russian</h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div
          className="radial-progress bg-primary text-primary-content border-4 border-primary"
          style={{ "--value": 40 }}
          role="progressbar"
        >
          40%
        </div>
        <h2>Romanian</h2>
      </div>

      
    </div>
  );
}
