import { useState } from 'react'
import './App.css'
import imagem from './image/teste.png'

function App() {
  const [usuario, setUsuario] = useState("")

function handleUsuario(evento) {
  setUsuario.log(evento.target.value)
}

  console.log(usuario)
  
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" placeholder='Digite seu usuário' onChange={handleUsuario}/>
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha' />
          </div>
          
          <button>entrar</button>

        </form>
      </main>
      <img src={imagem} alt="imagem de login" />
    </>
  )

}

export default App
