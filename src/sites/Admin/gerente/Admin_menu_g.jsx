import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import gerente from '../../../assets/Iconos_perfil/gerente.png'
import '../../../Styles/Desktop/administrador/estilos_gerente/Admin_menu_g/Admin_menu_g.css'

export const Admin_menu_g = () => {
  return (
    <div className="container">
        <Volver/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>

            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>

            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            <a href ='#' className="target">
                <img src={gerente} alt="" />
                <h3>Coronel Sanders</h3>
            </a>
            
            
        </div>
    </div>
  )
}
