import React from "react";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"
const Question = (props) => {
    const [showInfo, setShowInfo] = React.useState(false);
    const toggle = () => {
        setShowInfo(pre => !pre);
    }
    return (
        <div>
            <div className="single-question">
                <h2 >{props.ques.title}</h2>
                <button onClick={toggle}>{showInfo?<AiOutlineMinusCircle/>:<AiOutlinePlusCircle/>}</button>
                <div>
                    {showInfo && props.ques.info}
                </div>
            </div>





        </div>
    )
}
export default Question;
