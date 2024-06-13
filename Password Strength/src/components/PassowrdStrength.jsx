import { useEffect, useState } from 'react';

function PasswordStrength() {
  const [name, setName] = useState("");
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [state, setState] = useState('Weak');

  useEffect(() => {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    let hasSymbol = false;

    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= '0' && char <= '9') {
        hasNumber = true;
      } else {
        hasSymbol = true;
      }
    }

    setLowercase(hasLowercase);
    setUppercase(hasUppercase);
    setNumber(hasNumber);
    setSymbol(hasSymbol);

    if (name.length >= 16 && hasLowercase && hasUppercase && hasNumber && hasSymbol) {
      setState('Strong');
    } else if (name.length >= 10 && (hasLowercase || hasUppercase) && hasNumber) {
      setState('Medium');
    } else {
      setState('Weak');
    }
  }, [name]);

  return (
    <div className='flex justify-center gap-4 items-center flex-col mt-20'>
      <h1 className='text-3xl'>Password Strength</h1>
      <input
        type="text"
        placeholder='Enter the password'
        className='border px-4 py-2 mt-4 w-80'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className='flex gap-4 text-gray-400'>
        <span className={`${lowercase ? 'text-green-500' : ''}`}>Lowercase</span>
        <span className={`${uppercase ? 'text-green-500' : ''}`}>Uppercase</span>
        <span className={`${number ? 'text-green-500' : ''}`}>Number</span>
        <span className={`${symbol ? 'text-green-500' : ''}`}>Symbol</span>
      </div>
      <div className='w-96 border h-4 rounded-2xl'>
        <div
          className={`border h-4 rounded-2xl
            ${state === 'Weak' && name.length > 0 ? 'bg-red-600 w-20' : ''}
            ${state === 'Medium' ? 'bg-orange-600 w-40' : ''}
            ${state === 'Strong' ? 'bg-green-500 w-60' : ''}
          `}
        ></div>
      </div>
      <p>Password has {name.length} chars</p>
      <p>Your password is {state}</p>
    </div>
  );
}

export default PasswordStrength;
