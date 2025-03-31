import React, { useState } from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({data,showIndex,setShowIndex}) => {

const handleClick=()=>{
    setShowIndex()
}
    return (
    <div>
      {/*Header of Accordian */}
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer ' onClick={handleClick}>
            <div className='flex justify-between ' >
            <span className='font-bold text-lg'>
              {data?.title} ({data.itemCards.length})
            </span>
            <span>▼</span>
            </div>
          {showIndex &&  <ItemList items={data.itemCards}/>}
        </div>
            
      {/*Collapsable Body of Accordian */}
    </div>
  )
}

export default RestaurantCategory


