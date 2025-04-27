// src/components/ScoreBoard.tsx

interface Props {
    guessed: number;
    attempts: number;
  }
  
  export default function ScoreBoard({ guessed, attempts }: Props) {
    return (
      <div className="flex space-x-6 text-lg mb-4">
        <span>Adivinados: {guessed}</span>   {/* Cambiado */}
        <span>Intentos: {attempts}</span>
      </div>
    );
  }
  