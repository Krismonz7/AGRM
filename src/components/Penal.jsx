export const Penal = ({imagen,fecha,cuota}) => {
  return (
    <div className='Target'>
        <img src={imagen} alt="" className="logo" /> 
        <div className="info">
            Fecha: {fecha}
            <br />
            Cuota a pagar: {cuota}
        </div>
    </div>
  )
}
