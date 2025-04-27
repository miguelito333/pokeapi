// src/components/PokemonImage.tsx


interface Props {
  imageUrl: string;
  revealed: boolean;
  loading: boolean;
  alt?: string;
}

export default function PokemonImage({ imageUrl, revealed, loading, alt }: Props) {
    if (loading) {
        return (
          <div className="w-48 h-48 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
          </div>
        );
      }
  return (
    <img
      src={imageUrl}
      alt={alt || 'Pokémon'}
      className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain transition-filter duration-300 ${
        revealed ? 'filter-none' : 'filter brightness-0 contrast-100'
      }`}
    />
  );
}
