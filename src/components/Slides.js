import React from "react";

function Slides(props) {
  const item = props.slides[this.props.index];
  const index = props.index;
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={props.resetSlides}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={props.prevSlide}
          disabled={index === 0}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          onClick={props.nextSlide}
          disabled={index === props.slides.length - 1}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{item.title}</h1>
        <p data-testid="text">{item.text}</p>
      </div>
    </div>
  );
}

export default Slides;
