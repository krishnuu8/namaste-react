import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();
    //subscribing to the store so that Cart can access the items
    const cartItems=useSelector((store)=>store.cart.items)
    const handleEmptyCart=()=>{
        dispatch(emptyCart())
    }
return(
    <div className="text-center m-4 p-4">
       <h1 className="text-2xl font-bold"> Cart </h1>
       <div className="w-6/12 m-auto">
       <button className="p-2 m-2 text-center bg-gray-200 rounded-lg"
       onClick={handleEmptyCart}
       >Clear Cart</button>
       <ItemList items={cartItems}/>
       </div>
    </div>
)
}
export default Cart; 