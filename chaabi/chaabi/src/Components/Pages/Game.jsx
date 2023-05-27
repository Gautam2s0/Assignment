import React, { useEffect, useRef, useState } from "react";
import randomWords from "random-words";
import styles from "../Styles/game.css";

const NUMB_OF_WORDS = Math.floor(Math.random() * 250);
const SECONDS = 60*5;

export const Game = () => {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);
  const [currInput, setCurrInput] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(-1);
  const [currChar, setCurrChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const textInput = useRef(null);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus();
    }
  }, [status]);

  const generateWords = () => {
    return new Array(NUMB_OF_WORDS < 100 ? 200 : NUMB_OF_WORDS)
      .fill(null)
      .map(() => randomWords());
  };

  const start = () => {
    if (status === "finished") {
      setWords(generateWords());
      setCurrWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrCharIndex(-1);
      setCurrChar("");
    }

    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setCountDown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval);
            setStatus("finished");
            setCurrInput("");
            return SECONDS;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }
  };

  const handleKeyDown = ({ keyCode, key }) => {
    // space bar
    if (keyCode === 32) {
      checkMatch();
      setCurrInput("");
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(-1);
      // backspace
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1);
      setCurrChar("");
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
    }
  };

  const checkMatch = () => {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === currInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const getCharClass = (wordIdx, charIdx, char) => {
    if (
      wordIdx === currWordIndex &&
      charIdx === currCharIndex &&
      currChar &&
      status !== "finished"
    ) {
      if (char === currChar) {
        return "success";
      } else {
        return "danger";
      }
    } else if (
      wordIdx === currWordIndex &&
      currCharIndex >= words[currWordIndex].length
    ) {
      return "danger";
    } else {
      return "";
    }
  };

  return (
    <div id="ll">
      <div className="section">
        <div id="timer">
          <h2>
            {status === "started"
              ? "Time left "
              : status === "waiting"
              ? "Time"
              : "Time taken"}
            :{" "}
            {countDown % SECONDS !== 0 ? (
              <span> {countDown} sec</span>
            ) : (
              <span> {countDown / 60} min</span>
            )}
          </h2>
        </div>
      </div>
      <div id={status === "started" ? "wordArea" : "wordAreaNot"}>
        {status === "started" && (
          <div className="section" >
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                      )) }
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
      <div id="textArea">
        <input
          ref={textInput}
          disabled={status !== "started"}
          type="text"
          id="input"
          onKeyDown={handleKeyDown}
          value={currInput}
          onChange={(e) => setCurrInput(e.target.value)}
        />
      </div>
      <div className="section" id="btnsatr">
        <button id="StartButton" onClick={start}>
          Start
        </button>
      </div>

      {status === "finished" && (
        <div className="section">
          <div id="columns">
            <div className="textCentered">
              <h2 className="h2">Words per minute:</h2>
              <p className="textInfo">{correct}</p>
            </div>
            <div className="textCentered">
              <h2 className="h2">Accuracy : </h2>
              {correct !== 0 ? (
                <p className="textInfo">
                  {Math.round((correct / (correct + incorrect)) * 100)}%
                </p>
              ) : (
                <p className="textInfo">0%</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
