import React, { useState } from 'react'
import ShimmerList from './Shimmer'
import { useParams } from 'react-router-dom'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu =  () => {
  const dummy="dummy data";
const {resId} = useParams()
const resInfo=useRestaurantMenu(resId)
const [showIndex,setShowIndex]=useState(null)
  if(!resInfo){return <ShimmerList/>}
  const { name, cuisines=[], costForTwoMessage } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const menuCards = resInfo?.data?.cards || [];
  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories)
const itemCards = menuCards.find((card) =>
  card?.groupedCard?.cardGroupMap?.REGULAR
)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
  return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name || "Not found"}</h1>
        <p className='font-bold text-lg'>
          {cuisines.join(",")} - { costForTwoMessage}
        </p>
        {categories.map((category,index)=><RestaurantCategory 
        key={index} 
        showIndex={index === showIndex ? true : false }  
        data={category?.card?.card}
        setShowIndex={()=>setShowIndex(index)}
        />)}
    </div>
  )
}

export default RestaurantMenu
