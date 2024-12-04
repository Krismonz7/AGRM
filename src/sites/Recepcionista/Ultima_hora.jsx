import "../../Styles/Desktop/recepcionista/Ultima_hora/Ultima_hora.css"
import { Tarjeta_ultima } from "../../components/Targeta_ultima.jsx"
import Navbar from "../../components/Navbar.jsx"

export const Ultima_hora = () => {
  return (
    

    <div className="Mesas">
      <Navbar/>

      <p className="titulo">¡Liber a ultima Hora! 🔥</p>
    
        <div className="Seccion_mesas">
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima minutos='7' horas='12 p.m - 2 p.m'/>

    </div>
    </div>
  )
}
