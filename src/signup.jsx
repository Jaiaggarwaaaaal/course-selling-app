import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from "react";


function Signup(){


  const [email ,setemail] = useState("")
  const [password , setPassword] = useState("")
  // window.location("/")
  return ( <div>





 
{/* <div style = {{width :"100vw" ,
  height: "100vh",
  backgroundColor: "#eeeeee"
   }}> */}
<p style ={{
  display :"flex",
  justifyContent :'center',
   marginLeft :95,
   marginTop : 150
}}>  <b>Welcome to the course! Signup Below</b></p>
<div style={{display :"flex",
  justifyContent :'center'}}>
 <Card variant={"outlined"} 
 style ={{
 border : "1px solid black",
//  marginTop: 40 , 
 width: 400 ,
 marginLeft :95,
 padding :20,
 
 }}>
 <TextField  
 onChange={(e) =>{
  setemail(e.target.value);
 }}
 
 
 id={"username"} 
 type="username"
    fullWidth = {true}
    label="Username" 
    variant="outlined" />
 <br />
 <br />
 <TextField 
 onChange={(e) =>{
  setPassword(e.target.value);
 }} 
 
 
 id= {"password"}
 fullWidth = {true}
  label="Password"
  type="password"
   variant="outlined" />
 <br />
 <br />

 {/* <center> */}
 <Button  onClick ={()=>{
  // let username = document.getElementById( "username").value;
  // let password = document.getElementById( "password").value;
//instead get ekement id we use const(email , constemail) = useState("")
  
function callback2(data){
  localStorage.setItem("token" ,data.token);
  
 
}


function callback(response){
  response.json().then(callback2)
}


  fetch("http://localhost:3000/admin/signup" ,  {
   
  method: "POST" ,
  
  headers: {
      "Content-Type": "application/json",
    
    },
 
body: JSON.stringify({
username : email , 
password : password
})

  })

  .then(response => callback(response))
  .catch(error =>{
   console.error('Error' , error);
  })
  
  
  }}
  
 
 
 
 style={{ display :"flex",


  justifyContent :'center',}}
 
  size= {"large"} variant ="contained" >CLICKME</Button>
 
 {/* </center> */}
</Card>

</div>

{/* </div> */}
 

 
     </div>



  );
  
 
 }
 
 export default Signup;