import PropTypes from "prop-types"
const Item=({title,img,price,desc})=>{
    return(
        <section>
            <div className="img-container">
                <img src={img} alt={title} />
            </div>
            <div>
                <div className="title-price">
                     <h2>{title}</h2>
                    
                     <h2 className="price">${price}</h2>
                </div>
                <div className="title-price-underline"></div>
           <p>{desc}</p>
            
            
            </div>
            
        </section>
    )
}
export default Item;
Item.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }