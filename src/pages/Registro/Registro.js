import React from 'react';
import styles from "./Registro.module.css"

function Registro() {
  return (
    <>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome: </span>
          <input type="text" name='displayName' required placeholder='Nome ' />
        </label>
        <label>
          <span>Email: </span>
          <input type="eial" name='emaul' required placeholder='Email ' />
        </label>
        <label>
          <span>Senha: </span>
          <input type="password" name='password' required placeholder='Senha' />
        </label>
        <label>
          <span>Confirme a senha: </span>
          <input type="password" name='confirmPassword' required placeholder='Confirme a sua senha' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>


    </>
  );
}

export default Registro;
