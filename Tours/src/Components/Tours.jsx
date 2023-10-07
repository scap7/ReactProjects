import Tour from "./Tour";
import PropTypes from "prop-types"

export default function Tours({data,removeTour}){
   const displayData= data.map(e=>{
        return(
            <Tour key={e.id}
            {...e}
            removeTour={removeTour}/>
        )
    })
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {displayData}
            </div>
            
        </section>
        
    )
}
Tours.propTypes={
  data:PropTypes.array.isRequired,
  removeTour:PropTypes.func.isRequired

}