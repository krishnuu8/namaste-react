import React, { useEffect, useState } from 'react'
import { MENU_URL } from './config'

export const useRestaurantMenu = (resId) => {
 const[resInfo,setResInfo]= useState(null)
    const fetchData=async ()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        setResInfo(json)
    }
useEffect(()=>{
    fetchData();
},[resId])
return resInfo;
}

useRestaurantMenu
