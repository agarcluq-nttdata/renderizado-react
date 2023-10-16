import React, { useState } from 'react';

const Animals = ({ animals }) => {
  console.log('Rendered animals');

  return animals.map((a) => <li>{a.name}</li>);
};

const Practica4 = () => {
  const [animals, setAnimals] = useState([]);
  const [searcher, setSearcher] = useState('');

  const handleChange = (evt) => {
    setSearcher(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`https://api.api-ninjas.com/v1/animals?name=${searcher}`, {
      headers: {
        'X-Api-Key': 'xOgcBLTk9ZvG5bGTzeP6nw==0rPJoVOZEFUD0zmp',
      },
    })
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  };

  return (
    <div>
      <h1>Lista de animales</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searcher} onChange={handleChange} />
        <button>Buscar</button>
      </form>
      <ul>
        <Animals animals={animals} />
      </ul>
    </div>
  );
};

export default Practica4;
