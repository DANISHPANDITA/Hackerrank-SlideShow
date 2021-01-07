import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App() {
  const slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    },
  ];
  const [index, setindex] = useState(0);
  const prevSlide = () => {
    setindex((index - 1) % slides.length);
  };

  const nextSlide = () => {
    setindex((index + 1) % slides.length);
  };

  const resetSlides = () => setindex(0);
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App"></div>
      <Slides
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        resetSlides={resetSlides}
        slides={slides}
        index={index}
      />
    </div>
  );
}

export default App;
