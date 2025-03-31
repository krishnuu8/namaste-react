import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/cartSlice';
const ItemList = ({items}) => {
const dispatch=useDispatch();
// const cartItems=useSelector((store)=>store.cart?.items)
const handleAddItem = (item)=>{
dispatch(addItem(item))
}

  return (
    <div>
     { items.map((item)=>(
<div 
className='p-2 m-2 border-gray-200 border-b-2 text-left '    
key={item.card.info.id}>
<div className='py-2'>
<span>{item?.card?.info?.name}</span>
<p>
    ₹
    {item?.card?.info?.defaultPrice/100}
 </p>
</div>
<p className='text-xs'>{item?.card?.info?.description}</p>
<div className=' '>
  <button
  className=' ml-[600px]  mt-10  transform -translate-y-1/2 px-4 py-2 rounded-lg bg-black text-white shadow-lg'
  onClick={()=>handleAddItem(item)}
  >Add +</button>
</div>
</div>

     ))}
    </div>
  )
}

export default ItemList
