import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './style.css';


function InputSenha({ label, placeholder, value, setValue }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='flex-column input-password'>
      <label htmlFor='password'>{label}</label>
      <input
        id='password'
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className='eye-password'
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  )
}

export default InputSenha;