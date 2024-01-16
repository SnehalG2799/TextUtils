import React, { useState } from "react";
import "../App.css";

export default function TextForm() {
  const [text, setText] = useState("");

  function toUpper() {
    setText(text.toUpperCase());
  }

  function toLower() {
    setText(text.toLowerCase());
  }

  function toToggle() {
    setText(
      text
        .toUpperCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toLowerCase() + word.slice(1);
        })
        .join(" ")
    );
  }

  function toCapitalize() {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ")
    );
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  }
  function setValueToTextArea(event) {
    setText(event.target.value);
  }

  function clearText() {
    setText("");
  }

  return (
    <>
      <div className="container">
        <textarea
          value={text}
          onChange={setValueToTextArea}
          className="form-control mb-3"
          id="TextForm"
          rows="8"
          placeholder="Type or Paste your text here to change text case"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={toUpper}
      >
        UPPER CASE
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={toLower}
      >
        lower case
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={toToggle}
      >
        tOGGLE cASE
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={toCapitalize}
      >
        Capitalize Case
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={copyToClipboard}
      >
        Copy to Clipboard
      </button>

      <button
        type="button"
        className="btn btn-outline-primary mx-2 noBorderRadius"
        onClick={clearText}
      >
        Clear
      </button>

      <div 
        className="container my-3  border border-primary "
      >
        <h3 style={{ color: "green" }}>Your Text Summary : </h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minuts to read </p>
      </div>
    </>
  );
}
