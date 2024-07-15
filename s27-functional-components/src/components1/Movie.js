import React from "react";

function Movie(props) {
  return (
    <div className="App">
      <div className="divClass">
        <img className="imgClass" src={props.pic}></img>
      </div>
      <div className="divClass">
        <h1 className="classTwo">Name: {props.name}</h1>
        <audio className="classTwo" src={props.music1} controls></audio>
        <audio className="classTwo" src={props.music2} controls></audio>
        <audio className="classTwo" src={props.music3} controls></audio>
      </div>
      <div className="divClass">
        <iframe className="videoClass" src={props.mp4}></iframe>
      </div>
    </div>
  );
}

export default Movie;
