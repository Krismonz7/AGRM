import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Actualizado_g/Actualizado_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'

export const Actualizado_g = () => {
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
                    <p>¡Gerente actualizado
                    con exito! 😃</p>
                </div>
            </div>
            <a href="#" className="boton">Enviar credenciales</a>
        </div>
    </div>
  )
}