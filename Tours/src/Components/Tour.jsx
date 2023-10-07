import React from "react";
import PropTypes from "prop-types"
export default function Tour({id,image,name,info,price,removeTour}){
    const [readMore,setReadMore]=React.useState(true);
    return (
        <article className="single-tour">
            <img src={image}  />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div> 
                <p>{readMore?info:info.substring(0,200)}
                <button className="btn" onClick={()=>{setReadMore(prev=>!prev)}}>{readMore?"read less":"read more..."}</button>
                </p>   
                <button className="delete-btn"onClick={()=>{removeTour(id)}}>not interested</button>
            </footer>
            
        </article>
    )
}
Tour.propTypes={
    id:PropTypes.string,
    name:PropTypes.string,
    info:PropTypes.string,
    image:PropTypes.string,
    price:PropTypes.string,
    removeTour:PropTypes.func
}