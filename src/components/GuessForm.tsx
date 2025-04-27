
interface Props {
  guess: string;
  onGuessChange: (v: string) => void;
  onSubmit: () => void;
  onNew: () => void;
}

export default function GuessForm({ guess, onGuessChange, onSubmit, onNew }: Props) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
      <input
        type="text"
        value={guess}
        onChange={e => onGuessChange(e.currentTarget.value)}
        className="px-3 py-2 border rounded"
        placeholder="Tu apuesta"
      />
      <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
        ¡Adivinar!
      </button>
      <button onClick={onNew} className="px-4 py-2 bg-green-500 text-white rounded">
        Nuevo Pokémon
      </button>
    </div>
  );
}