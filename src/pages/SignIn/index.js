import './style.css';
import '../../styles/forms.css'
import { Link } from 'react-router-dom'
import InputSenha from '../../components/InputSenha';
import { useState } from 'react';

function SignIn() {
  const [password, setPassword] = useState('')
  return (
    <div className='container-form'>
      <form className='form form-sign-in'>
        <div className='text-center'>
          <h1>Entrar</h1>
          <Link to='./sign-up'>Cadastre-se</Link>
        </div>
        <div>
          <div className='flex-column'>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='text' placeholder='Digite seu e-mail' />
          </div>
          <InputSenha
            label='Senha'
            placeholder='Digite sua senha'
            value={password}
            setValue={setPassword}
          />
          <button className='btn-dark-blue'>Entrar</button>
          <div className='flex-row items-center'>
            <input type='checkbox' value='Lembrar-me' name='remember' />
            <span htmlFor='remember'>Lembrar-me</span>
          </div>
        </div >
        <Link to='./recovery-password' >Esqueci a senha</Link>
        <span className='light-label'>@2021 Todos os Direitos Reservados</span>
      </form>
    </div>
  )
}

export default SignIn;