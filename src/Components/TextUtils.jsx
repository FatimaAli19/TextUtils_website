import React, { useState } from "react";

export default function TextUtils(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleonChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "black" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="col-sm-12 col-lg-8 form-control"
            value={text}
            onChange={handleonChange}
            rows={7}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1e3021",
              color: props.mode === "black" ? "white" : "black",
            }}
          />
        </div>
        <button className="btn btn-success my-3 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success my-3 mx-5" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success my-3" onClick={handleclearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container "
        style={{ color: props.mode === "black" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.05 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter some text to preview here"}</p>
      </div>
    </>
  );
}
