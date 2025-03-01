

const Header = ({lists}) => {
  return (
    <div className="row py-5">
        <div className="col-md-8 offset-md-2">
            <h1 className="text-center">Lister</h1>
            <h3 className="text-center">Number of Items in Shopping List: <strong>{lists.length}</strong></h3>
        </div>
    </div>
  )
}

export default Header