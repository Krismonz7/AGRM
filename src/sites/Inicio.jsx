import footer from '../assets/footer_image.jpg'
import instagram from '../assets/Intagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Logo from '../assets/logo.png'
import Camarones from '../assets/comida/camaron.jpg'
import '../Styles/Desktop/principal/Inicio.css'

export const Inicio = () => {
  return (
    <div className='Container'>
        <div className="Header">
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>
            <div className="titulo">
                BBQ EL REAL 🔥
            </div>
            <div className="Nav">
                <a href="" className="item">Register</a>
                <a href="" className="item">Login</a>
                <a href="" className="item">Information</a>
            </div>
        </div>

        <div className="Body">
            <div className="Image">
                <img src={Camarones} alt="" />
            </div>

            <div className="Info">
                <h4 className="titulo">Sobre nosotros </h4>
                <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore fugiat iure! Tempora, 
                    voluptatem minus facere amet 
                    libero illo dolorem earum, expedita modi fugit labore dicta eum exercitationem laborum unde.
                </p>
                <button className="Register">
                    Registrate :D
                </button>
            </div>
        </div>

        <div className="Footer">
            <img src={footer} alt="" className="imagen" />
            <div className="info">
                <p>Direccion: calle #</p>
                <p>Correo: </p>
                <p>Constitucion: </p>
                <p>Numero: </p>
            </div>
            <div className="Social">
                <p>Sigenos en redes</p>
                <img src={twitter} alt="" className="item" />
                <img src={instagram} alt="" className="item" />
                <img src={facebook} alt="" className="item" />
            </div>
        </div>

    </div>
  )
}
