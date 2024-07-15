import image from "../assets/mesa.jpg"
import "../Styles/general.css"
export const Mesa = () => {
  return (
    <div className="mesa">


        <div className="image">
            <img src={image} alt="" loading="lazy"/>
        </div>
        
        <div className="menu">
            <div className="titulo">
                <p>Mesa 1</p>
            </div>
            <select className="plazas">
                <option >7:00 - 9:00</option>
                <option >3:00 - 5:00</option>
                <option >5:00 - 7:00</option>
                <option >7:00 - 9:00</option>
                <option >9:00 - 11:00</option>
            </select>

            <button className="pagar">
                Ir a Pagar
            </button>


        </div>
    </div>
  )
}
