import './style.css';
import '../../styles/forms.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InputSenha from '../../components/InputSenha';
import { obterCidade } from '../../services/viaCep';
import { toast } from 'react-toastify';

function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');

  async function buscarCidade(cepBuscado) {
    const cidadeBuscada = await obterCidade(cepBuscado);
    if (!cidadeBuscada) {
      toast.error('CEP não encontrado.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    setCidade(cidadeBuscada);
  }

  useEffect(() => {
    if (cep.length < 8 && cidade.length > 0) {
      setCidade('');
    }
    if(cep.length === 8) {
      buscarCidade(cep);
    }
  }, [cep]);

  return (
    <div className='container-form'>
      <form className='form form-sign-up'>
        <div className='text-center'>
          <h1>Cadastre-se</h1>
          <Link to='./sign-in'>Entrar</Link>
        </div>
        <div className='body-sign-up'>
          <div>
            <div className='flex-column'>
              <label htmlFor='name'>Nome</label>
              <input id='name' type='text' placeholder='Digite seu nome' />
            </div>
            <div className='flex-column'>
              <label htmlFor='cep'>CEP</label>
              <input
                id='cep'
                type='text'
                placeholder='Digite seu CEP'
                maxLength={8}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <InputSenha
              label='Senha'
              placeholder='Digite sua senha'
              value={password}
              setValue={setPassword}
            />
          </div >
          <div>
            <div className='flex-column'>
              <label htmlFor='email'>E-mail</label>
              <input id='email' type='text' placeholder='Digite seu e-mail' />
            </div>
            <div className='flex-column'>
              <label htmlFor='cidade'>Cidade</label>
              <input
                id='cidade'
                type='text'
                placeholder='Digite sua cidade'
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <InputSenha
              label='Confirme sua senha'
              placeholder='Digite sua senha novamente'
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </div >
        </div>
        <button className='btn-dark-blue'>Cadastre-se</button>
        <span className='light-label'>@2021 Todos os Direitos Reservados</span>
      </form>
    </div>
  )
}

export default SignUp;