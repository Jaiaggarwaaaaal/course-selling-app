import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//window.location make the page refresh again and agian so we have to declare it with 
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Appbar(){
const navigate = useNavigate();
const[Email ,setuseremail] = useState(null);
useEffect(() =>{

function callback2(data){
if(data.username){
    setuseremail(data.username)
}
}
function callback3(res) {
    console.log("Response Status:", res.status);
    res.json().then(callback2)
}

fetch("http://localhost:3000/admin/me" ,{
    method : "GET",
    headers: {
       
        "Authorization" :"Bearer " + localStorage.getItem("token")
      
      },
}).then(callback3)
.catch(error => console.error("Fetch Error:", error));

} ,[] ) 

if(Email)

{
    return <div style ={{
    display:"flex",
    justifyContent : "space-between"
}}>
<div>
<Typography variant='h4'style={{marginLeft : 10,
marginTop: 5,
}}>
Coursera
</Typography>
</div>
{/* //flexbox we have to declare for  child and if then we want to use it in the grandchild we have to defibe it again */}

<div>
   {/* {Email} */}
{/* <div style={{marginRight: 10}}> */}

{/* </div> */}
{/* <div> */}
<Button onClick={() =>{
    navigate ("/"),
    // window.location("/"),
localStorage.setItem("token" , null );

}} variant='contained' style={{
marginRight : 2,
marginTop : 6,
}}>Log out</Button>


{/* </div> */}
</div>
</div>
}
    return <div style ={{
        display:"flex",
        justifyContent : "space-between"
    }}>
<div>
<Typography variant='h4'style={{marginLeft : 10,
marginTop: 5,
}}>
 Coursera
</Typography>
</div>
{/* //flexbox we have to declare for  child and if then we want to use it in the grandchild we have to defibe it again */}

<div>
    {/* <div style={{marginRight: 10}}> */}
<Button onClick={() =>{
    navigate( "/signup")
}}
variant='contained'style={{marginRight: 9 , marginTop :6}} >Sign Up </Button>
{/* </div> */}
{/* <div> */}
<Button onClick={() =>{
     navigate( "/signin")
}} variant='contained' style={{
    marginRight : 2,
    marginTop : 6,
}}>Sign In</Button>
{/* </div> */}
</div>
    </div>
}

export default Appbar;