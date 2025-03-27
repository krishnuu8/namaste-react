import React from "react";
const ShimmerCard = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer shimmer-image"></div>
        <div className="shimmer shimmer-title"></div>
        <div className="shimmer shimmer-text"></div>

      </div>
    );
  };
  
  const ShimmerList = ({ count = 8}) => {
    return (
      <div className="shimmer-container">
        {Array.from({ length: count }).map(( _,index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  };
  
  export default ShimmerList;
  //array.from will generate array at runtime using the value of count
  //initially it will contain undefined elements so when we will apply map function to array we pass two arguemnts => _,index and then i