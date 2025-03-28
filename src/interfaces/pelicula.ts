export interface PeliculaData {
    id: number;
    title: string;
    year: number;
    image: string;
    esFavorita: boolean;
  }
  
  export interface PeliculaProps {
    title: string;
    year: number;
    image: string;
    esFavorita: boolean;
    onToggleFavorita: () => void;
  }
  