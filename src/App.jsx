//Usuario
//import { Inicio } from "./sites/Inicio"
//import { Mesas } from "./sites/Mesas"
//import { Mesa } from "./sites/Mesa"
//import { Pago } from "./sites/Pago"

//import { Ajustes } from "./sites/Ajustes"
//import { Penalizaciones } from "./sites/Penalizaciones.jsx"
//import { Mesa_pagina } from "./sites/Mesa_pagina"
//import { Perfil } from "./sites/Perfil"
//import { Menu } from "./sites/menu"
//import { Ultima_hora } from "./sites/Ultima_hora"

//Recepcionista
//import { Inicio_rc } from "./sites/Recepcionista/inicio_rc"
import "../src/Styles/general.css"
import { Mesas_rc } from "./sites/Recepcionista/mesas_rc"


function App() {

  return (
  <div className="app">
    <Mesas_rc/>
  </div>

  )
}
export default App