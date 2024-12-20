import {createContext,useEffect,  useState} from "react"; //useState | useEffect|createContext()



const ListContext = createContext();

//a provider


const ListProvider = ({children}) => {
    //set up the state
    // create a function that will check inside localStorage if there is any marketListin the local storage, if it is not there, it will return empty array

    function fetchListFromLocalStorage(){
        const initialList = localStorage.getItem('marketList');
        const realList = initialList ? JSON.parse(initialList) : [];
        return realList;
    }

    const[list, setList] = useState(fetchListFromLocalStorage());
    
    //set up all functions that the component need

    //useEffect will help us to update localstorage whenever a new list is created or deleted 
    useEffect(function(){
        localStorage.setItem("marketList", JSON.stringify(list));
    }, [list])

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
        <ListContext.Provider value={{list, addNewProduct, deleteItem}}>
            {children}
        </ListContext.Provider>
    )
}

export {ListContext, ListProvider}