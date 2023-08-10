import { useState } from 'react'
import img from './'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <img src={img} alt="" />
        <form action="">
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" placeholder='Digite seu usuário' />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha' />
          </div>
          
          <button>entrar</button>

        </form>
      </main>
    </>
  )
}

export default App
