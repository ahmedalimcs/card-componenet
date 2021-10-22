import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mydata from "./Head";

function App() {
  // const [name, SetName] = useState("");
  const [category,setCategory] = useState('')
  const [model,modelno] = useState('')

  // const Category=()=>{
  //   mydata.filter(ind,e)
    
  // }
  //    setCategory()
  //    console.log(category)


  // const Add = () => {
  //   if (SetName == "") {
  //   } else {
  //     SetName("java");
  //     console.log(name);
  //   }
  // };
const categoryHandler =(name) =>{
  setCategory(name)
}

 const Foo =(modelno)=>{
  setModelno(modelno)
 }
  return (
    <>
    <div className="container mt-5 p-5">
      <div className="row">
        {mydata.filter((elem,index)=>elem.category == modelno).map((newelem,ind)=>{
          return <div className="col-lg-4 mb-5">
           <div className="card">
             <div className="card-body">
               <h2>{newelem.modelno}</h2>
               <p>{newelem.name}</p>
               <h5>{newelem.category}</h5>
             </div>
           </div>
         </div>
        })}
      </div>
    </div>
     
     <div className="container mb-5 ">
      <button className="btn btn-warning btn-lg " onClick={()=>categoryHandler('1558')}> Category1</button>
      <button className="btn btn-warning btn-lg " onClick={()=>categoryHandler('1558')} >Category2</button>
      <button className="btn btn-warning btn-lg " onClick={()=>categoryHandler('1559')} >Category3</button>
      <button className="btn btn-warning btn-lg " onClick={()=>categoryHandler('1660')} >Category4</button>
      <button></button>
     </div>
    </>
  );
}

export default App;
