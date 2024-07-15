import "../Styles/general.css"
import  {Table_target} from "../components/table_target.jsx"

export const Mesas = () => {
  return (

    <div className="mesas">

        <p className="titulo">Mesas Disponible</p>
        <select name="" className="select">
          <option value="">dia 1</option>
          <option value="">dia 2</option>
          <option value="">dia 3</option>
          <option value="">dia 4</option>
          <option value="">dia 5</option>

        </select>
    
    <div className="mesas">
          <Table_target />
          <Table_target />
          <Table_target />
          <Table_target />
          <Table_target />
          <Table_target />
          <Table_target />
          <Table_target />

    </div>
    </div>
  )
}
