import { useState } from 'react';
import Pelicula from './components/Pelicula';
import { PeliculaData } from './interfaces/pelicula';
import { peliculasMock } from './data/peliculas';

function App() {
  const [peliculas, setPeliculas] = useState<PeliculaData[]>(peliculasMock);

  const toggleFavorita = (id: number) => {
    const nuevasPeliculas = peliculas.map(p =>
      p.id === id ? { ...p, esFavorita: !p.esFavorita } : p
    );
    setPeliculas(nuevasPeliculas);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Lista de Películas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peliculas.map(pelicula => (
          <Pelicula
            key={pelicula.id}
            title={pelicula.title}
            year={pelicula.year}
            image={pelicula.image}
            esFavorita={pelicula.esFavorita}
            onToggleFavorita={() => toggleFavorita(pelicula.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
