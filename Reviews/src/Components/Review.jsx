import React from 'react';
import reviews from '../data';
import { ImQuotesRight } from 'react-icons/im'
import { GrNext, GrPrevious } from 'react-icons/gr'
export default function Review() {
    const [index, setIndex] = React.useState(0);
    const { name, job, text, image } = reviews[index];
    const checkNum = (i) => {
        if (i < 0) {
            return reviews.length - 1;

        }
        else if (i > reviews.length - 1) {
            return 0;
        } else {
            return i;
        }
    }
    const random = () => {
        let randomNum=Math.floor(Math.random() * (reviews.length));
        if(randomNum===index){
            setIndex(checkNum(randomNum+1));
        }else{
            setIndex(checkNum(randomNum));
        }
    }
    const prev = () => {
        setIndex(i => {
            let newI = i - 1;
            return checkNum(newI);
        })
    }

    const next = () => {

        setIndex(i => {
            let newI = i + 1;
            return checkNum(newI);
        })
    }

    return (
        <article >
            <div className="img-container">
                <img src={image} alt={name} />
                <span><ImQuotesRight /></span>
            </div>
            <h4>{name}</h4>
            <p className='job'>{job}</p>
            <p>{text}</p>
            <div>
                <button onClick={prev} ><GrPrevious /></button>
                <button onClick={next}><GrNext /></button>
            </div>
            <div>
                <button className="random" onClick={random}>surprise me</button>

            </div>



        </article>
    )
}