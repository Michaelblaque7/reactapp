//inline: background-color backgroundColor, padding-left:


const Header = (props) => {
    
    return(
        <div className="row">
           <div className="col">
                <h1 className="text-center" style={{color: "green", backgroundColor: "wheat", minHeight: "10vh"}}>Header</h1>
                <p className="text-center">Total amount is {props.amt}</p>
                <p className="text-center">Total Number is {props.cc}</p>
            </div> 
        </div>
    )
}

export default Header;