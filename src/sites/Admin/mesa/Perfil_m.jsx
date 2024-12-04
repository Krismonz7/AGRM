import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Perfil_m/Perfil_m.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'

export const Perfil_m = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>Mesa 1</p>
                </div>
                <div className="p2">
                    <p>Numero mesa: </p>
                    <p>Numero sillas: </p>
                </div>
            </div>
            <a href="#" className="boton">Editar</a>
            <a href="#" className="boton_r">Eliminar</a>
        </div>
    </div>
  )
}
