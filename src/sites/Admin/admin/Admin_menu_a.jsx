import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import admin from '../../../assets/Iconos_perfil/admin.png'
import '../../../Styles/Desktop/administrador/estilos_admin/Admin_m/Admin_m.css'

export const Admin_menu_a = () => {
  return (
    <div className="container">
        <Volver/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>

            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            <a href ='#' className="target">
                <img src={admin} alt="" />
                <h3>Jhon Travolta</h3>
            </a>
            
        </div>
    </div>
  )
}
