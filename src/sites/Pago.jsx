import "../Styles/general.css"
import mesa from "../assets/mesa.png"
import ItemPay from "../components/ItemPay"



export const Pago = () => {
  return (
    <div className="pago">        

        <h1 className="title">Mesa Reservada</h1>
        <div className="mesa">
            <img src={mesa} alt="" />
            <ul className="datos">
              <li>Mesa 3</li>
              <li>07 de marzo</li>
              <li>2 pm - 4 pm</li>
            </ul>
        </div>
        <div className="metodos">
          Monto de pago: <input type="text" />
          <br />
          Metodo de pago: 
          <div className="opciones_pago">
            <ItemPay/>
            <ItemPay/>
            <ItemPay/>
            <ItemPay/>
            <ItemPay/>
          </div>
        </div>
        <div className="areaPago">
            <button className="boton_pago">
              Realizar pago
            </button>
        </div>
    </div>
  )
}