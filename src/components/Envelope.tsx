import { useState } from 'react';
// Import your CSS here

interface EnvelopeProps {
  id: number;
  children: React.ReactNode; // Explicitly type the children prop
}

const Envelope: React.FC<EnvelopeProps> = ({ children }) => {
  const [isFolded, setIsFolded] = useState(true);

  const toggleFold = () => setIsFolded(!isFolded);

  return (
    <div className={`envelope ${isFolded ? 'fold' : ''}`} onClick={toggleFold}>
      <div className="top"></div>
      <div className="left"></div>
      <div className="back">
        <div className="paper text-2xl text-center font-serif">{children}</div>
      </div>
      <div className="right"></div>
      <div className="bottom"></div>
    </div>
  );
};

export default Envelope;
