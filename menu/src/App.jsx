import React from "react"
import menu from "./data"
import Menu from "./Components/Menu"
// using set data structure to get unique elements //dynamic method 
const uniqueCategory=new Set(menu.map(e=>e.category));
const uniqueCategoryArray= ["all",...uniqueCategory];



// console.log(uniqueCategoryArray);
function App() {
  const [data,setData]=React.useState(menu);
  const filterHandle=(myCategory)=>{
    if(myCategory==="all"){
      setData(menu);
      return;
    }
    setData(menu.filter(e=>e.category===myCategory));
  }
 const showButton= uniqueCategoryArray.map(e=>{
    return(
      <button className="btn"onClick={()=>filterHandle(e)} key={e}>{e}</button>
    )
  }) 
  
  return (
    <main>

      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div>
      
        {showButton}
        
      </div>
      <Menu data={data}/>



    </main>
  )
}

export default App

// first approach--hardcoding the buttons
{/* <button className="btn" onClick={()=>filterHandle("all")}>All</button>
<button className="btn"onClick={()=>filterHandle("breakfast")}>Breakfast</button>
<button className="btn"onClick={()=>filterHandle("lunch")}>Lunch</button>
<button className="btn"onClick={()=>filterHandle("shakes")}>Shakes</button> */}