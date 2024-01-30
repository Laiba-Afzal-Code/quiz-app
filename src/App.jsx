import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [qusetionNumbar, setQusetionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes inwhat type of product?",
      answer: [
        {
          text: "Phone",
          currect: false,
        },
        {
          text: "Watches",
          currect: true,
        },
        {
          text: "Food",
          currect: false,
        },
        {
          text: "Cars",
          currect: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does the following declaration mean? int *ptr()",
      answer: [
        {
          text: "ptr is array of pointers to 10 integers",
          currect: false,
        },
        {
          text: "ptr is a pointer to an array of 10 integers",
          currect: true,
        },
        {
          text: "ptr is an array of 10 integers",
          currect: false,
        },
        {
          text: "ptr is an pointer to array",
          currect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Where did sushi originate?",
      answer: [
        {
          text: "Indonesia",
          currect: false,
        },
        {
          text: "Amrica",
          currect: false,
        },
        {
          text: "China",
          currect: true,
        },
        {
          text: "Africa",
          currect: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital of Canada?",
      answer: [
        {
          text: "Ottawa",
          currect: true,
        },
        {
          text: "Toronto",
          currect: false,
        },
        {
          text: "Edmonton",
          currect: false,
        },
        {
          text: "Winnipeg",
          currect: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the capital of Canada?",
      answer: [
        {
          text: "5",
          currect: true,
        },
        {
          text: "6",
          currect: false,
        },
        {
          text: "7",
          currect: false,
        },
        {
          text: "8",
          currect: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the capital of Ireland?",
      answer: [
        {
          text: "Dublin",
          currect: true,
        },
        {
          text: "Waterford",
          currect: false,
        },
        {
          text: "Limerick",
          currect: false,
        },
        {
          text: "Bandon",
          currect: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is acrophobia a fear of?",
      answer: [
        {
          text: "Heights",
          currect: true,
        },
        {
          text: "Lowest",
          currect: false,
        },
        {
          text: "Nothing",
          currect: false,
        },
        {
          text: "Mediam",
          currect: false,
        },
      ],
    },
    {
      id: 8,
      question: "In what country was Elon Musk born?",
      answer: [
        {
          text: "South Africa",
          currect: true,
        },
        {
          text: "South Asia",
          currect: false,
        },
        {
          text: "Amarica",
          currect: false,
        },
        {
          text: "Chaina",
          currect: false,
        },
      ],
    },
    {
      id: 9,
      question: "How many hearts does an octopus have?",
      answer: [
        {
          text: "3",
          currect: true,
        },
        {
          text: "4",
          currect: false,
        },
        {
          text: "6",
          currect: false,
        },
        {
          text: "8",
          currect: false,
        },
      ],
    },
    {
      id: 10,
      question: "What phone company produced the 3310?",
      answer: [
        {
          text: "Oppo",
          currect: false,
        },
        {
          text: "Nokia",
          currect: true,
        },
        {
          text: "Samsung",
          currect: false,
        },
        {
          text: "Redmi",
          currect: false,
        },
      ],
    },
    {
      id: 11,
      question: "What country has the most islands?",
      answer: [
        {
          text: "Africa - 250,000",
          currect: false,
        },
        {
          text: "Sweden - 270,000",
          currect: true,
        },
        {
          text: "China - 290,000",
          currect: false,
        },
        {
          text: "USA - 20,000",
          currect: false,
        },
      ],
    },
  ];
  const moneyPrymaid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 400" },
        { id: 5, amount: "$ 500" },
        { id: 6, amount: "$ 1000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 6000" },
        { id: 9, amount: "$ 8000" },
        { id: 10, amount: "$ 13000" },
        { id: 11, amount: "$ 16000" },
        { id: 12, amount: "$ 32000" },
        { id: 13, amount: "$ 68000" },
        { id: 14, amount: "$ 80000" },
        { id: 15, amount: "$ 100000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    qusetionNumbar > 1 &&
      setEarned(moneyPrymaid.find((m) => m.id === qusetionNumbar - 1).amount);
  }, [moneyPrymaid, qusetionNumbar]);

  return (
    <>
      <div className="App">
        {username ? (
          <>
            <div className="main">
              {stop ? (
                <h1 className="stopQuestion">You earned: {earned} </h1>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        qusetionNumbar={qusetionNumbar}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStop={setStop}
                      qusetionNumbar={qusetionNumbar}
                      setQusetionNumber={setQusetionNumber}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPrymaid.map((m) => (
                  <li
                    key={m.id}
                    className={
                      qusetionNumbar === m.id ? "listItem active" : "listItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Start setUsername={setUsername} />
        )}
      </div>
    </>
  );
}

export default App;
