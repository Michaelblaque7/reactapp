    
import{useState} from "react"

const Withdraw = ({bal, abc}) => {
    const[amount, setAmount] = useState(0);
    function updateAmount(e){
        setAmount(e.target.value);
    }

    function handleWithraw(){
        if(amount === "" || amount === 0){
            alert("Enter a valid amount")
        }else{
            abc(amount)
        }
    }

    return (
      <div className="row">
        <div className="col">
            <input type="number" className="form-control" placeholder="amount" value={amount} onChange={updateAmount}/>
            <h2>Withdrawal section</h2>
            <button className="btn btn-danger" onClick={handleWithraw}>Withdraw</button>

            <p>Your Withdrawal limit is: <strong>{bal}</strong></p>
        </div>
      </div>
    )
  }
  
  export default Withdraw;