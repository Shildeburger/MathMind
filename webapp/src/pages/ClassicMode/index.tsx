import { useParams } from 'react-router-dom';

export const ClassicMode = () => {
  const { MathMind } = useParams() as { MathMind: string };
  return (
    <div>
      <h1>{MathMind}</h1>
      <div>
        <h2>Select difficulty</h2>
        <p>Light</p>
        <p>Medium</p>
        <p>Hard</p>
      </div>
      <div>
        <div>
          <p>*Some example*</p>
        </div>
        <div>
          <p>Answer</p>
          <p>Check</p>
          <p>Next</p>
        </div>
        <div>
          <p>*Animated timer*</p>
        </div>
        <div>
          <p>Correct: * | Incorrect: * | Score: *</p>
        </div>
      </div>
    </div>
  );
};
