import React, { useState } from 'react';

const Field = ({ label }) => {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
};

export const CheckBox = ({reverse,setReverse}) => {

return (
  <label>
  <input
    type="checkbox"
    checked={reverse}
    onChange={(e) => setReverse(e.target.checked)}
  />
  Reverse order
</label>
)
}

const Practica2 = () => {
  const [reverse, setReverse] = useState(false);
  return (
    <div>
      {reverse ? (
        <>
          <Field key='last' label="Last name" />
          <Field key='first' label="First name" />
          <CheckBox reverse={reverse} setReverse={setReverse} />
        </>
      ) : (
        <>
          <Field key='first' label="First name" />
          <Field key='last' label="Last name" />
          <CheckBox reverse={reverse} setReverse={setReverse} />
        </>
      )}
    </div>
  );
};

export default Practica2;
