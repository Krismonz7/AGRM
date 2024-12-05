import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Perfil_g/Perfil_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'

export const Perfil_g = () => {
  return (
    <div className="container">
        <Volver/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
                    <p>Coronel Sanders</p>
                </div>
                <div className="p2">
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>CC: </p>
                    <p>Contraseña: </p>
                </div>
            </div>
            <a href="#" className="boton">Editar</a>
            <a href="#" className="boton_r">Eliminar</a>
        </div>
    </div>
  )
}
