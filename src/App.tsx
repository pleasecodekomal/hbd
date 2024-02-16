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
      // Alert message
      alert('You have been warned.');
      navigate('/yes');
    }
  };

  return (
    <>
      <div className="max-w-screen-xl h-screen overflow-auto mx-[auto] my-[0] p-8 text-center">
        <Background />
        <div className="flex flex-col gap-24 mt-44 justify-center">
          <h1 className="text-2xl md:text-6xl z-50 white-shadow">
            Wanna be my Valentine?
          </h1>
          <div className="flex justify-center gap-16 z-50">
            <h1 className="kreep">
              <button
                onClick={handleYesClick}
                className="button bg-green-600 text-slate-100 border-2 border-solid border-green-800 xl:p-16 p-5 text-center no-underline inline-block text-xs md:text-2xl mx-0.5 my-1 duration-[400ms] cursor-pointer rounded-[20%] hover:hover:bg-[#1e8b3f] hover:animate-none link buzz-out-on-hover"
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
