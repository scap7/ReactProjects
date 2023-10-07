import React from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours"
const url="https://course-api.com/react-tours-project"
export default function App(){
  const [data,setData]=React.useState([]);
  const [loading,setLoading]=React.useState(true);
  const removeTour=(id)=>{
    const newData=data.filter(e=>e.id!=id);
    setData(newData);
  }
  const fetchData=async()=>{
    setLoading(true);
    try {
      const response=await fetch(url);
      const res=await response.json();
      console.log(res);
      setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
    
    
  }
  React.useEffect(()=>{
    fetchData();
  },[])
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(data.length===0){
    return(
     <main>
      <h3>no Tours left</h3>
      <button className="btn"onClick={()=>{fetchData()}}>refresh</button>
    </main> 
    )
    
  }
  return(
    <main>
      <Tours data={data} removeTour={removeTour}/>
    </main>
  )
}