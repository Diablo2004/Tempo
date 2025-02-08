import React, { useState, useEffect } from "react";
import "./App.css";

const gifs = ["/teddy1.gif", "/teddy2.gif", "/teddy3.gif", "/teddy4.gif"];

const noResponses = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "You might regret this!",
  "Have a heart!",
  "Change of heart?",
  "Absolutely sure?",
  "Don't be so cold!",
];

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
  const [yesButtons, setYesButtons] = useState(1);
  const [gif, setGif] = useState("");

  useEffect(() => {
    setGif(gifs[Math.floor(Math.random() * gifs.length)]);
  }, []);

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoClick = () => {
    const randomAction = Math.random();

    if (randomAction < 0.33) {
      // 🏃 No Button Runs Away
      const newX = Math.random() * 80 + "%";
      const newY = Math.random() * 80 + "%";
      setNoPosition({ top: newY, left: newX });
    } else if (randomAction < 0.66) {
      // ➕ Add More "Yes" Buttons
      setYesButtons((prev) => prev + 1);
    } else {
      // 😈 Change No Text
      setNoIndex((prev) => (prev + 1) % noResponses.length);
    }
  };

  return (
    <div className='container'>
      {!yesClicked ? (
        <>
          <h1>For aviral</h1>
          <h1>
            This is for my soni daani, I have a question for you my love💖
          </h1>
          <h1>Will you be my valentine for lifetime?</h1>

          {/* Yes Buttons */}
          <div className='yes-buttons'>
            {Array.from({ length: yesButtons }).map((_, index) => (
              <button
                key={index}
                className='yes-button'
                onClick={handleYesClick}
              >
                Yes
              </button>
            ))}
          </div>

          {/* No Button */}
          <button
            className='no-button'
            style={{
              top: noPosition.top,
              left: noPosition.left,
              position: "absolute",
            }}
            onClick={handleNoClick}
          >
            {noResponses[noIndex]}
          </button>
        </>
      ) : (
        <>
          <h1 id='yesMessage'>
            I knew you would say yes. You have no other choice . My love for you
            is from every corner of my heart ❤️
          </h1>
          <img src={gif} alt='Happy GIF' className='gif' />
        </>
      )}
    </div>
  );
}

export default App;
