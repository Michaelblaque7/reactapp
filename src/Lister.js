
import Header from "./lister_component/Header"
import Content from "./lister_component/Content"
import AddItem from "./lister_component/AddItem"
import Footer from "./lister_component/Footer"
import{useState} from "react"


 const Lister = () => {
    const initialList = [
        {name: "greek yoghurt parfait", price: "25000", id:1},
        {name: "Iphone 16", price: "2500000", id:2},
        {name: "Macbook Pro", price: "4500000", id:3},
        {name: "Peppersoup", price: "10000", id:4},

    ];
    const[list, setList] = useState(initialList);
    //this function receives product and add to list date
    function addNewProduct(product){
        
        setList([product, ...list]);
    }

    // a function that accept id of product to delete and the ndelete
    function deleteItem(id){
        //filter the current state and filter out product that has the id that was passed
        const filteredProduct = list.filter(function(li){
            return li.id !== id;
        })

        setList(filteredProduct)
    }


  return (
    <div className="container">
        <Header lists={list}/>
        <AddItem addNewProduct={addNewProduct}/>
        <Content lists={list} deleteItem={deleteItem}/>
        <Footer/>
    </div>
  )
}

export default Lister
