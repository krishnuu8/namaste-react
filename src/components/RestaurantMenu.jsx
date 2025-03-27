import React from 'react'
import ShimmerList from './Shimmer'
import { useParams } from 'react-router-dom'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'

const RestaurantMenu =  () => {
const {resId} = useParams()
const resInfo=useRestaurantMenu(resId)

  if(!resInfo){return <ShimmerList/>}
  const { name, cuisines=[], costForTwoMessage } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const menuCards = resInfo?.data?.cards || [];
  

const itemCards = menuCards.find((card) =>
  card?.groupedCard?.cardGroupMap?.REGULAR
)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

console.log("Final Extracted Item Cards:", itemCards);
  return (
    <div className='menu'>
        <h1>{name || "Something else"}</h1>
        <p>
          {cuisines.join(",")} - { costForTwoMessage}
        </p>
        <h2>menu</h2>
        <ul>
            {itemCards.map((item)=><li key={item.card.info.id} >{item.card.info.name}</li>)} 
        </ul>
    </div>
  )
}

export default RestaurantMenu
