import React from 'react';


interface Props {
  nombre: string;
  edad: number;
}

const Saludo: React.FC<Props> = ({ nombre, edad }) => {
  return (
    <div className="p-4 bg-green-100 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">Hola, {nombre} 👋</h2>
      <p className="text-gray-700">Tienes {edad} años</p>
    </div>
  );
};

export default Saludo;
