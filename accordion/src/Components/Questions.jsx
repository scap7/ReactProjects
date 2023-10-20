import Question from "./Question"
import data from "../data";

const Questions=()=>{
    const newData=data.map(e=>{
        return(
            <div key={e.id}>
                <Question ques={e}/>
            </div>
        )
    })

    return (
        <section className="container">
            {newData}
        </section>
    )
}
export default Questions;