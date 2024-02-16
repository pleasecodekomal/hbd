import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Background from './components/Background';
import { negativeTexts, positiveTexts } from './buttonTexts';

function App() {
  const navigate = useNavigate();
  // No button
  const [padding, setPadding] = useState(65);
  const [fontSize, setFontSize] = useState(22);
  const [textIndex, setTextIndex] = useState(0);
  // Yes button
  const [yesClicks, setYesClicks] = useState(0);
  const [yesText, setYesText] = useState(0);

  const handleNoClick = () => {
    setPadding(padding - 5);
    setFontSize(fontSize - 1);
    setTextIndex((prevIndex) => (prevIndex + 1) % negativeTexts.length);
  };

  const handleYesClick = () => {
    setYesClicks((prevClick) => prevClick + 1);
    setYesText((prevText) => prevText + 1);
    if (yesClicks === positiveTexts.length - 1) {
      alert('You have been warned.');
      navigate('/yes');
    }
  };

  return (
    <>
      <div className="styling-wrapper">
        <Background />
        <div className="flex flex-col gap-24 mt-44 justify-center">
          <h1 className="text-6xl z-50 white-shadow">Wanna be my Valentine?</h1>
          <div className="flex justify-center gap-16 z-50">
            <h1 className="kreep">
              <button
                onClick={handleYesClick}
                className="button button5 link buzz-out-on-hover"
              >
                <b>{positiveTexts[yesText]}</b>
              </button>
            </h1>
            <div>
              <button
                className="button-shrink"
                style={{ padding: `${padding}px`, fontSize: `${fontSize}px` }}
                onClick={handleNoClick}
              >
                {negativeTexts[textIndex]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
