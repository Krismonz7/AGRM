
/*Importaciones del router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//General
import { Inicio } from "./sites/Inicio"
import { Inicio_sesion } from "./sites/Inicio_sesion"
import { Registro } from "./sites/Registro"
import { Recuperar_c } from "./sites/Recuperar_c"
import { Recuperar_e } from "./sites/Recuperar_e"
//import { Notificaciones } from "./sites/Notificaciones"




//Recepcionista
//import { Mesas } from "./sites/Recepcionista/Mesas"
//import { Ultima_hora } from "./sites/Recepcionista/Ultima_hora"
//import { Reserva } from "./sites/Recepcionista/Reserva"
//import { Reserva_u } from "./sites/Recepcionista/Reserva_u"


//ADMIN
//Area de los cruds
//--CRUD Admin
//import { Curd } from "./sites/Admin/Curd"
//import { Admin_m } from "./sites/Admin/admin_m/Admin_m"
//import { Perfil_a } from "./sites/Admin/admin/Perfil_a"
//import { Editar_a } from "./sites/Admin/admin/Editar_a"
//import { Actualizado_a } from "./sites/Admin/admin/Actualizado_a"
//import { Credenciales_a } from "./sites/Admin/admin/Credenciales_a"
import { Eliminado } from "./sites/Admin/admin/Eliminado"

//--CRUD Mesas
import { Actualizado_m } from "./sites/Admin/mesa/Actualizado_m";
import { Admin_menu_m } from "./sites/Admin/mesa/Admin_menu_m";
import { Editar_m } from "./sites/Admin/mesa/Editar_m";
import { Eliminado_m } from "./sites/Admin/mesa/Eliminado_m";
import { Perfil_m } from "./sites/Admin/mesa/Perfil_m";




function App() {
  return (
    <Router>
      <Routes>
        {/* General */}
        <Route path="/inicio_sesion" element={<Inicio_sesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/about" element={<Eliminado />} />
        <Route path="/recuperar_c" element={<Recuperar_c />} />
        <Route path="/recuperar_c/recuperar_e" element={<Recuperar_e />} />

        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<Eliminado />} />

        {/* Crud de mesas */}
        <Route path="/admin/mesas/actualizado" element={<Actualizado_m/>}/>
        <Route path="/admin/mesas/admin_m" element={<Admin_menu_m/>}/>
        <Route path="/admin/mesas/amin_menu_m" element={<Admin_menu_m/>}/>
        <Route path="/admin/mesas/editar_m" element={<Editar_m/>}/>
        <Route path="/admin/mesas/eliminado_m" element={<Eliminado_m/>}/>
        <Route path="/admin/mesas/perfil_m" element={<Perfil_m/>}/>
        <Route path="/admin/mesas/perfil_m" element={<Perfil_m/>}/>


      </Routes>
    </Router>
  );
}

export default App