import React, { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const hendleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <>
      <div className="start">
        <input type="text" placeholder="Enter your Name" ref={inputRef} />
        <button className="startbtn" onClick={hendleClick}>
          Start
        </button>
      </div>
    </>
  );
}
