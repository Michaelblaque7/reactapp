import Balance from "./bank_components/Balance";
import Deposit from "./bank_components/Deposit";
import Withdraw from "./bank_components/Withdraw";
import Broke from "./bank_components/Broke";
import Rich from "./bank_components/Rich";
import {useState} from "react";


function App(){
    // const balance = 2500; any values that changes cannot be saved into a variable rather use hook useState to manage it
        // useState():import

      const [balance, setBalance] = useState(0);  // syntax for managing a state
        // setBalance(balance + 1000) // this is how to update a state

        function handleWithraw(amount){
            //check if they are eligible to withdraw
            if(balance >= amount){
                setBalance(balance-amount)
            }else{
                alert('Your balance is too low')
            }
                
        }

        function handleDeposit(amount){
            setBalance(balance + amount);
        }

    return (
        <div className="container">
            {/* displaying components based on conditions */}

            {
                balance > 1000 ? <Rich/> : <Broke/>
            }

            <h1>Bank App</h1>
            <Balance bal={balance}/>
            <Withdraw bal={balance} abc={handleWithraw}/>
            <Deposit bal={balance} xyz={handleDeposit}/>
        </div>
    )
}

export default App;