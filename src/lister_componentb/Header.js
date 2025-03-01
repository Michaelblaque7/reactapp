import { useContext } from "react"
import { ListContext } from "../context/ListContext"


const Header = () => {
  // useContext
      const{list} = useContext(ListContext);

  return (
    <div className="row py-5">
        <div className="col-md-8 offset-md-2">
            <h1 className="text-center">Lister</h1>
            <h3 className="text-center">Number of Items in Shopping List: <strong>{list.length}</strong></h3>
        </div>
    </div>
  )
}

export default Header