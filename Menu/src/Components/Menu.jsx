import Item from "./Item";
import PropTypes from "prop-types"
const Menu=(props)=>{
   
    return(
        <article>
            {props.data.map(
                e=> <Item key={e.id} {...e}/>
            )}
           
        </article>
    )
}
export default Menu;
Menu.propTypes={
    data:PropTypes.array.isRequired
}
