import React, { useEffect, useState } from "react";
import "../App.css";
import useSound from "use-sound";
import cool from "../impact/cool.wav";
import currect from "../impact/currect.wav";
import worng from "../impact/worng.wav";

export default function Trivia({
  data,
  setStop,
  qusetionNumbar,
  setQusetionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(cool);
  const [currectAnswer] = useSound(currect);
  const [worngAnswer] = useSound(worng);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[qusetionNumbar - 1]);
  }, [data, qusetionNumbar]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.currect ? "answer currect" : " answer worng")
    );
    delay(5000, () => {
      if (a.currect) {
        currectAnswer();
        delay(1000, () => {
          setQusetionNumber((perv) => perv + 1);
          setSelectAnswer(null);
        });
      } else {
        worngAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <>
      <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answer.map((a) => (
            <div
              className={selectAnswer === a ? className : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
