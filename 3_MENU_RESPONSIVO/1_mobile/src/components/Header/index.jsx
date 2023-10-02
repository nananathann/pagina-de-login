import "./index.css"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

function Header() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu () {
    if(abrirFechar) {
      setAbrirFechar(false)
      return
    }

setAbrirFechar(true)

  }

  return (
    <header>
        <div className="Menu-mobile">
            <div className="botao-menu">
            <button onClick={handleAbrirFecharMenu}>{abrirFechar==true ? <X size={32} /> : <List size={32} />}</button>
            </div>

            <div className={`menu ${abrirFechar==true ? "" : "close"}`}>
                <nav>
                    <a href="">configuracoes</a>
                    <a href="">Loguin</a>
                    <a href="">Sobre</a>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header