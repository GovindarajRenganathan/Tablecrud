import React, {useState,useEffect } from 'react';


export default function Form1({myData,populate}) {
  
const initialstate = {_id:"",name:'',age:'',email:'',isEdit:false}
const [formdata, setData]     = useState(initialstate);
useEffect(() => {
if (populate._id != null ){
  console.log(populate)
  
  setData({...populate,isEdit:true})
}
},[populate])

 
 
const getdata = (e) => {
 let val = e.target.value;
 let nm = e.target.name;
return setData({...formdata,[nm]:val})
 }

 const handleSubmit = (e) =>{
  
  if(!formdata.isEdit){
    myData(formdata)
  }
  else if(formdata.isEdit){
    myData(formdata)
  }
  
 }

  return (
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="" className="form-label">Name</label>
      <input type="text" className="form-control" name='name'value={formdata.name}  onChange={getdata}/>
      
    </div>
    <div className="mb-3">
    <label htmlFor="" className="form-label">age</label>
      <input type="number" className="form-control"  name='age'value={formdata.age} onChange={getdata}/>
      
    </div>
    <div className="mb-3">
    <label htmlFor="" className="form-label">Email</label>
      <input type="email" className="form-control" name='email'value={formdata.email}onChange={getdata}/>
      
    </div>
    
    <button type="submit" className="btn btn-primary" >{formdata.isEdit ? 'update':'create'}</button>
  </form>
   
  )
}
