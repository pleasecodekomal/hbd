import { ReactNode } from 'react';

type Props = {
  id: number;
  top: number;
  left: number;
  index: number;
  rotate: number;
  src: string;
  children: ReactNode;
};

const Polaroid = ({ top, left, index, rotate, src, children }: Props) => {
  const styles = {
    top: `${top}%`,
    left: `${left}%`,
    zIndex: index,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div className="polaroid absolute item max-w-64 min-w-40" style={styles}>
      <img src={src} alt="Custom" />
      <div className="md:text-2xl text-sm text-center leading-[2em]">
        {children}
      </div>
    </div>
  );
};
export default Polaroid;
