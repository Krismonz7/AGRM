import image from "../assets/mastercard.png" //Logo mastercard
const ItemPay = () => {
  return (
  <div className="item">
    <input type="checkbox" className="check" />

    <img src={image} alt="" className="logo"/>
  </div>
  
  )
}
export default ItemPay