import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Eliminado/Eliminado.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'

export const Eliminado_m = () => {
  
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>! Mesa eliminada ¡ 😲</p>
                </div>
            </div>

        </div>

    </div>
  )
}