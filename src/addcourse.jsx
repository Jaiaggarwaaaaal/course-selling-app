import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from "react";



function Addcourse(){

const[ Title , setTitle] = useState("");
const [Description , setDescription] = useState("");
// const[Price , setprice] = useState("");
return (
    <div>
<p style ={{
  display :"flex",
  justifyContent :'center',
   marginLeft :95,
   marginTop : 150
}}>  <b>Courses</b></p>

<div style={{
    display : "flex" ,
    justifyContent :"center"
}}>

<Card variant={"outlined"} 
 style ={{
 border : "1px solid black",
//  marginTop: 40 , 
 width: 400 ,
 marginLeft :95,
 padding :20,
 
 }}>

<TextField  
 onChange={(event) =>{
 setTitle(event.target.value)
 }}
  fullWidth = {true}
    label="Title" 
    variant="outlined" />
 <br />
 <br />
 <TextField 
 onChange={(event) =>{
setDescription(event.target.value)
 }} 
 
 

 fullWidth = {true}
 
  label="Description"
  variant="outlined" />
 <br />
 <br />


 {/* <TextField 
 onChange={(event) =>{
setprice(event.target.value)
 }} 
 
 

 fullWidth = {true}
 
  label="price"
  variant="outlined" />
 <br />
 <br />
 */}



 <Button  onClick ={()=>{

function callback2(data){
    localStorage.setItem("token" ,data.token);
    
   
  }
  
  
  function callback(response){
    response.json().then(callback2)
  }
  
  
    fetch("http://localhost:3000/admin/courses" ,  {
     
    method: "POST" ,
    
    headers: {
        "Content-Type": "application/json",
        "Authorization" :"Bearer " + localStorage.getItem("token")
      
      },
   
  body: JSON.stringify({
  title : Title , 
  description : Description,
//   price : Price
  })
  
    })
  
    .then(response => callback(response))
    .catch(error =>{
     console.error('Error' , error);
    })
    
    
 }}
  
  style={{ display :"flex",


  justifyContent :'center',}}
 
  size= {"large"} variant ="contained" >Add course</Button>
 
 {/* </center> */}
</Card>

</div>

{/* </div> */}
 

 
     </div>



  );
  
 
 }






export default Addcourse;