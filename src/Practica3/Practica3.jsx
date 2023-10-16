import React, { useState } from 'react';
import { animals } from './animals';

const Animal = ({ animal }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{animal.name}</b>
      </p>
      {expanded && (
        <>
          <p>
            <i>{animal.scientificName}</i>
          </p>
          <p>
            <i>{animal.diet}</i>
          </p>
        </>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? 'Ocultar' : 'Mostrar'} detalles
      </button>
    </>
  );
};

const Practica3 = () => {
  const [reverse, setReverse] = useState(false);

  const displayedAnimals = [...animals];
  if (reverse) {
    displayedAnimals.reverse();
  }

  return (
    <>
      <h1>Lista de animales</h1>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{' '}
        Revertir
      </label>
      <ul>
        {displayedAnimals.map((animal, i) => (
          <li key={i}>
            <Animal animal={animal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Practica3;
