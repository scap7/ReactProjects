import React from "react"
const url="https://course-api.com/react-tabs-project";
const App=()=>{
  const [loading,setLoading]=React.useState(true);
  const [data,setData]=React.useState([]);
  
  const fetchData=()=>{
     fetch(url)
    .then(res=>res.json())
    .then(res=>{setData(res);setLoading(false)})
    .catch(e=>console.log(e));
  }
  React.useEffect(
    ()=>fetchData()
    ,[]);
    const filterHandle=(e)=>{
      const newData=data.filter(element=>element.company===e);
      setData(newData);
    }
  let newData;
  if(!loading){ newData=data.map(e=>{
    return(
      <section key={e.id}>
        <p>{e.title}</p>
      </section>
    )
  })}else{
    return <h2>loading...</h2>
  }
  let newDataArrayShow;
  if(!loading){
    const newDataSet=new Set(data.map(e=>e.company));
    const newDataArray=[...newDataSet];
    
    newDataArrayShow=newDataArray.map(e=>{
    return(<> 
    <button onClick={()=>filterHandle(e)}key={e}>{e}</button>
    </>
    )
  })
  }
  

  
  return(
    <main>
      <header>
        {newDataArrayShow}
      </header>
      <h2>{newData}</h2>
    </main>
  )
}
export default App;