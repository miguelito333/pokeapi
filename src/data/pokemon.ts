// src/data/pokemon.ts

// Interface para los datos normales del Pokémon (sprites, nombre en inglés)
export interface PokemonData {
    name: string;
    sprites: {
      front_default: string | null;
      other: {
        'official-artwork': {
          front_default: string | null;
        };
      };
    };
  }
  
  // Interface para los nombres en varios idiomas (usado para obtener el nombre en español)
  export interface NameEntry {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }
  
  // Interface completa de species (lista de nombres traducidos)
  export interface PokemonSpecies {
    names: NameEntry[];
  }
  