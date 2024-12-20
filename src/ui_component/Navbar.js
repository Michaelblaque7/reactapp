const Navbar = ({amt, cartCount}) => {
   //alternative way to display props is demonstrated above by passing their object directly
    //internal styling

    //

    const styleH1 = {
        color: 'green',
        backgroundColor: 'ghostwhite',
        paddingTop: "20px",
        minHeight: "10vh"
    }

    return(
        <div className="row">
           <div className="col">
                <h1 className="text-center" style={styleH1}>Navbar</h1>
                <p>Total amount is {cartCount}</p>
            </div> 
        </div>
    )
}

export default Navbar;