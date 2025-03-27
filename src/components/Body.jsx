import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import ShimmerList from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
   let [data,setData]=useState([])
    let [search,showSearch]=useState(false)
    let [searchData,setSearchData]=useState("")
    // const onlineStatus=useOnlineStatus()
    // if(onlineStatus===false) <h1 className="offline">LOOKS LIKE YOUR CONNECTION IS LOST!PLEASE CONNECT TO INTERNET!!</h1>
    useEffect(()=>{
        fetchData();
    },[])

 const fetchData=async ()=>{
 const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6568198&lng=74.8643368&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 let json=await data.json()
 json=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //* optional chaining will return undefined instead of null,thus preventing runtime errors
 setData(json)
}
// *conditonal rendering
const onlineStatus=useOnlineStatus()
if(onlineStatus===false) return (<h1 className="offline">LOOKS LIKE YOUR CONNECTION IS LOST!PLEASE CONNECT TO INTERNET!!</h1>)
if(data.length===0) return <ShimmerList/>

    return (
        <>
        <div className="flex">
        <button
        className="bg-gray-100 py-2 m-4 px-2 rounded-lg"
        onClick={()=>{
            const filterData=data.filter((restraunt)=>restraunt.info.avgRating>4.5)
    
            setData(filterData)
            
        }}
        
        >Ratings 4.5+</button>
        </div>
        <h2 
        className="font-serif text-xl cursor-pointer"
        onClick={()=>{
            showSearch(!search)
        }}
        >Wanna Search <span className="food">Food?</span></h2>
                {search===true ? 
        (<>
        <div className="m-4 p-4 ">
      <input 
      className="autofocus border-solid py-2 border-black w-5/12"
        onChange={(e)=>{
            setSearchData(e.target.value)
        }}
        value={searchData}
        autoFocus/>
      <button className="bg-green-300 py-2 m-4 w-20 rounded-lg"
       onClick={()=>{
        const filterData=data.filter((res)=>{
              return  res.info.name.toLowerCase().includes(searchData.toLowerCase())
        })
        setData(filterData) 
        data=[];
       }}
      >Search</button>
    </div>
    </>) : (null)}
        <div className="body">
        <div className="flex flex-wrap overflow-visible">
         {
            data.map((restraunt)=>{
             return(<Link  key={restraunt.info.id} to={"/menu/"+restraunt.info.id}><RestrauntCard resData={restraunt}/></Link>  )
            })

         }
        </div>
        </div>
        </>
    )
}
export default Body;

//put key on parent jsx