import { Typewriter } from 'react-simple-typewriter';
import './HeroText.css';

export default function HeroText() {
  return (
    <h1 className="hero-text">
      Hi, I'm{' '}
      <span className="highlighted-text">
        <Typewriter
          words={['Chitransh Nigam', 'FullStack Web Developer', 'Mobile App Developer']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
}
