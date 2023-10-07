import PropTypes from "prop-types";
export default function List({people}){
    const arr=people.map(e=>{
         const {id,name,age,image}=e;
        return(
           <article key={id} className="person">
            <img src={image} alt="image" />
            <div >
                <h4>{name}</h4>
                <p>{age} years</p>
                
           </div>
           </article>
           
        )
    })
    return(
        <div>
            {arr}
        </div>
    )
}
//validation of proptypes
List.propTypes = {
    people: PropTypes.array.isRequired
    
  };
