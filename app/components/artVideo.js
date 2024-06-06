import React from "react";

export default function ArtVideo({ video, title, desc }) {
  return (
    <div className="card card-side bg-neutral-950 bg-opacity-50 shadow-xl w-full">
      <figure className="w-1/3">
        <video
          width={400}
          height={300}
          src={video}
          controls
          className="rounded-lg shadow-2xl w-full h-full object-cover"
        ></video>
      </figure>
      <div className="card-body w-2/3 flex flex-col justify-center">
        <h2 className=" text-3xl font-serif text-center">{title}</h2>
        <p className=" text-xl font-serif whitespace-pre-line text-center mt-8" dangerouslySetInnerHTML={{ __html: desc }}></p>
      </div>
    </div>
  );
}
