import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from "./Login.module.css"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()


    setError("")

    const user = {
      email,
      password
    }


    const res = await login(user)

    console.log(res)


    setEmail("")
    setPassword("")


  }

  useEffect(() => {

    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça seu login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Email: </span>
          <input
            type="email"
            name='email'
            required
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name='password'
            required
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>



    </div>
  );
}

export default Login;
