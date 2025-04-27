
import { useState, useEffect } from 'react';
import ScoreBoard from './components/ScoreBoard';
import PokemonImage from './components/PokemonImage';
import GuessForm from './components/GuessForm';
import type { PokemonData, PokemonSpecies } from './data/pokemon'; 

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [guessed, setGuessed] = useState(0);
  const [attempts, setAttempts] = useState(0);

  async function loadPokemon() {
    setLoading(true);
    const id = Math.floor(Math.random() * 151) + 1;
  
    // Fetch de datos normales
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: PokemonData = await res.json();
  
    // Fetch de species para nombres en varios idiomas
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const speciesData: PokemonSpecies = await speciesRes.json();
  
  
    const esEntry = speciesData.names.find(entry => entry.language.name === 'es');
    const spanishName = esEntry ? esEntry.name : data.name;
  
    setPokemonName(spanishName);
    setImageUrl(
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default ||
      ''
    );
    setRevealed(false);
    setFeedback('');
    setGuess('');
    setAttempts(0);
    setLoading(false);
  }
  useEffect(() => {
    loadPokemon();
  }, []);
  

  function handleGuess() {
    if (guess.trim().toLowerCase() === pokemonName.toLowerCase()) {
      setGuessed(g => g + 1); 
      setFeedback(`¡Correcto! Es ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}.`);
      setRevealed(true);
    } else {
      setAttempts(a => a + 1);
      if (attempts + 1 >= 10) {  
        setFeedback(`Se acabaron los intentos… era ${pokemonName}.`);
        setRevealed(true);
        setTimeout(() => {
          loadPokemon();
        }, 2000);
      } else {
        setFeedback(`Incorrecto, intenta nuevamente. Te quedan ${10 - (attempts + 1)} intentos.`);
      }
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
          ¿Quién es este Pokémon?
        </h1>
  
        <ScoreBoard guessed={guessed} attempts={attempts} />
  
        <div className="flex justify-center mb-6">
          <PokemonImage
            imageUrl={imageUrl}
            revealed={revealed}
            loading={loading}
            alt="Silueta de Pokémon"
          />
        </div>
  
        <GuessForm
          guess={guess}
          onGuessChange={setGuess}
          onSubmit={handleGuess}
          onNew={loadPokemon}
        />
  
        {feedback && (
          <p
            className={`mt-6 font-semibold text-lg ${
              feedback.startsWith('¡Correcto')
                ? 'text-green-600'
                : feedback.startsWith('Se acabaron')
                ? 'text-red-600'
                : 'text-yellow-600'
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );}

export default App;
