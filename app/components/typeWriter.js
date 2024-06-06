


import React, { useState, useEffect } from "react";

const poemLines = [
  "In the quiet of the night, a young girl lies,<br>With dreams that dance in her closed eyes.<br>A world unfolds where she's the queen,<br>In realms unseen, in lands serene.",
  "She soars above on gossamer wings,<br>Among the stars that softly sing.<br>Her laughter rings, pure and clear,<br>In a universe without fear or tear.",
  "With every dream, she weaves her tale,<br>Sailing seas with a silver sail.<br>Chasing the comet's fiery trail,<br>Her spirit free, her heart hale.",
  "In dreams, she finds her secret power,<br>Blooming bright, a midnight flower.<br>No walls or bounds, no clock's chime,<br>In her world, there's no concept of time.",
  "She wakes with the dawn's first light, <br>Holding on to the visions of night.<br>With hope in her heart, and eyes that gleam,<br>For she knows life is the dream of a dream.",
];

export default function Typewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const updateIndex = () => setSubIndex((prev) => prev + (reverse ? -1 : 1));

    try {
      if (subIndex === poemLines[lineIndex].length + 1 && !reverse) {
        setTimeout(() => setReverse(true), 100);
        return;
      }

      if (subIndex === 0 && reverse) {
        setReverse(false);
        setLineIndex((prevIndex) => (prevIndex + 1) % poemLines.length);
        return;
      }

      const timer = setInterval(updateIndex, 100);
      return () => clearInterval(timer);
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [subIndex, lineIndex, reverse]);

  return (
    <div className="typewriter-container mt-10" style={{ height: "150px" }}>
      <p
        aria-live="polite"
        className="poem-line text-white text-3xl font-serif"
        dangerouslySetInnerHTML={{
          __html: poemLines[lineIndex].substring(0, subIndex),
        }}
      ></p>
    </div>
  );
}

