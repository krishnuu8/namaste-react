const RestrauntCard=(props)=>{
    const {resData}=props
    const {name,cuisines=[],avgRating,imageLink,costFortwo,delieveryTime,cloudinaryImageId}=resData?.info || {}
    console.log(typeof cuisines)
    return(
        <>
        <div className="m-4 p-4 w-[250px] h-[300px] bg-gray-100 hover:bg-gray-200 rounded-xl shadow-lg" >
            <img className="res-image" alt="card-image" src={""+cloudinaryImageId}/>
            <div className="res-details">
                    <h3 className="w-full font-bold break-words py-4 text-lg" >{name}</h3>
                    <h4 className="w-full text-sm text-gray-600 break-words" >{cuisines.join(",")}</h4>
                    <h4 className="w-full text-sm text-gray-600 break-words" >{`${avgRating} ⭐`}</h4>

                    {/* <h4 className="w-full text-sm text-gray-600 break-words">{(costFortwo/100).toString()}</h4>
                    <h4 className="w-full text-sm text-gray-600 break-words">{delieveryTime}</h4> */}
                </div>
        </div>
        
        </>
    )
}
export default RestrauntCard;