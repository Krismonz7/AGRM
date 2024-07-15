import logo from "./logo.png"
export const Inicio = () => {
  return (
    <div className = "inicio">
        <div className="logo">

         <img src={logo} alt="1"/>
        </div>
        <div className="title">
            BBQ EL REAL
        </div>

        <form className="sesion">
          <p>Nombre:</p>
          <input type="text" placeholder="Nombre"/>

          <p>Correo:</p>
          <input type="text" placeholder="Correo"/>

          <p>Contraseña:</p>
          <input type="text" placeholder="Correo"/>
          <button type="submit">
            Ingresar
          </button>
        </form>
    </div>
  )

}