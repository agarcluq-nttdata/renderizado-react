import React, { useState } from 'react';

const Form = () => {
  const [text, setText] = useState('');

  return (
    <textarea
      style={{ display: 'block' }}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

const Practica1 = () => {
  const [showHint, setShowHint] = useState(false);

  if (showHint)
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form />
        <button onClick={() => setShowHint(false)}>Hide hint</button>
      </div>
    );

  return (
    <div>
      {showHint && <Hint />}
      <Form />
      <button onClick={() => setShowHint(true)}>Hide hint</button>
    </div>
  );
};

export default Practica1;
