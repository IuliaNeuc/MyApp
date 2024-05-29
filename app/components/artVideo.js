import React from "react";

export default function ArtVideo({ video, title, desc }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <iframe
          src={video}
          allowFullScreen
          className="max-w-sm rounded-lg shadow-2xl w-full h-full"
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
