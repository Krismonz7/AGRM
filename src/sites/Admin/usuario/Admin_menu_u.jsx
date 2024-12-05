import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import usuario from '../../../assets/Iconos_perfil/usuario.png'
import '../../../Styles/Desktop/administrador/estilos_usuario/Admin_menu_u/Admin_menu_u.css'

export const Admin_menu_u = () => {
  return (
    <div className="container">
        <Volver/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>

            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>

            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target">
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            
            
        </div>
    </div>
  )
}
