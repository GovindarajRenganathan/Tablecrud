//import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Form1 from "./components/form1";
import Table1 from "./components/table1";


function App() {
  
const [updateData, setUpdatedata] = useState([])
const [tableData, setTable]=useState([]);

  //function that handle post request and patch
const create = (data) => {
  const {name, age,email,isEdit} = data
  if(!isEdit){
    const {name, age,email} =data
    axios.post('http://localhost:5000/info',{name,age,email}).then((res) =>{
      console.log(res.data)
    }).catch((err) => {console.error(err)})
    console.log('i am from if and app')
  }
  else if(isEdit){
  const {name, age,email,_id} = data
  axios.patch(`http://localhost:5000/info/update/${_id}`,{name,age,email}).then((res) =>{
    console.log(res.data)
  }).catch((err) => {console.error(err)})
 }
    }

  //fuction that retrive data from db
  const read = () =>{
    axios.get('http://localhost:5000/info').then((res) =>{
      setTable(res.data) 
    }).catch((err) => {console.error(err)})
  }
 //function that delete
  const deleteuser = (data) => {
    axios.delete(`http://localhost:5000/info/delete/${data._id}`).then((res) =>{
      read(); 
    }).catch((err) => {console.error(err)});
    
  }
  //function that update user
  const update = (data)=>{
    setUpdatedata(data)
  }

 
  useEffect(() =>{
    read()
  },[]);
  


  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
        <Form1 myData={create} populate ={updateData}/>
      </div>
      <div className="col">
        <Table1 getData = {tableData} setData = {update} deleteUser={deleteuser}/>
      </div>
   
    </div>
  </div>
  );
}

export default App;
