import { useState } from 'react'
import './App.css'
import imagem from './image/teste.png'

function App() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

function handleUsuario(evento) {
  setUsuario(evento.target.value)
}

function handleSenha(evento) {
  setSenha(evento.target.value)
}

function handleSubmit () {
  alert(`
  Usuario: ${usuario}
  Senha: ${senha}
   `)
}
  
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" placeholder='Digite seu usuário' onChange={handleUsuario}/>
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha' onChange={handleSenha} />
          </div>
          
          <button>entrar</button>

        </form>
      </main>
      <img src={imagem} alt="imagem de login" />
    </>
  )

}

export default App
