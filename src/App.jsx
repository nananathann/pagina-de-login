import { useState } from 'react'
import './App.css'
import { imagem1 } from '../image/teste.png'

function App() {
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
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
      <img src= { imagem1 } alt="imagem de login" />
    </>
  )
}

export default App
