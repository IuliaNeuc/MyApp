import React from "react";

export default function SchoolVideo() {
  return (
    <div className="card w-full bg-neutral-950 bg-opacity-55 shadow-xl">
      <figure className="px-10 pt-10 w-full h-96">
        <iframe
          src="//ok.ru/videoembed/2073745885821"
          allowFullScreen
          className="max-w-sm rounded-lg shadow-2xl w-full h-full"
        ></iframe>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">My High School Graduation Day</h2>
        <p>
          Back at home, we fondly refer to this day as the "Last Bell,"
          signifying the moment when the 12th-grade students hear the school
          bell ring for the final time. It's a tradition deeply ingrained in our
          school's culture, where the graduating seniors prepare a special dance
          performance for the entire school community to enjoy. Decked in
          vibrant red ribbons symbolizing the journey to graduation, the
          students' enthusiasm and spirit light up the entire auditorium. It's a
          bittersweet moment, filled with nostalgia for the years gone by and
          excitement for the adventures that lie ahead. This celebration marks
          the culmination of their academic journey, a testament to their hard
          work and dedication throughout the years.
        </p>
      </div>
    </div>
  );
}
