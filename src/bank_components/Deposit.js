
import{useState} from "react"


const Deposit = ({bal, xyz}) => {
    const[amount, setAmount] = useState("") // this state will track whatever is typed in the input

    function handleChange(e){
        setAmount(e.target.value)
    }

  return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <input type="number" className="form-control" placeholder="desposit amount" value={amount} onChange={handleChange}/>
            <button className="btn btn-success" onClick={function(){
                xyz(Number(amount))
            }}>Deposit</button>
            <p>Your current balance is: <strong>{bal}</strong></p>
        </div>
    </div>
  )
}

export default Deposit