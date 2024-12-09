import salida from '../../assets/Iconos_perfil/salida.png'
import lapiz from '../../assets/Iconos_perfil/lapiz.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import '../../Styles/Desktop/administrador/Inicio_a/Inicio_a.css'

export const Inicio_a = () => {

  return (
    <div className="inicio_a">
        <div className="header_inicio">
            <div className="target">
            <h5>Jhon Travolta</h5>
            <img src={admin} alt="" />
            </div>
        </div>

        <div className="body">
        <div className="target">
            <img src={lapiz} alt="" />
            <h3>Editar perfiles</h3>
        </div>
        <div className="target">
            <img src={salida} alt="" />
            <h3>Cerrar seison</h3>
        </div>
        </div>
    </div>
  )
}
