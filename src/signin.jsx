import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
function SignIN(){

  return ( <div>



   



{/* <div style = {{width :"100vw" ,
  height: "100vh",
  backgroundColor: "#eeeeee"
   }}> */}
<p style ={{
  display :"flex",
  justifyContent :'center',
   marginLeft :94,
   marginTop : 150
}}>  <b>Welcome Back Buddy! Signin Below</b></p>
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
 <TextField id="outlined-basic" 
    fullWidth = {true}
    label="Username" 
    variant="outlined" />
 <br />
 <br />
 <TextField id="outlined-basic"
 fullWidth = {true}
  label="Password"
   variant="outlined" />
 <br />
 <br />

 {/* <center> */}
 <Button style={{ display :"flex",
  justifyContent :'center',}} size= {"large"} variant ="contained" >CLICKME</Button>
 
 {/* </center> */}
</Card>

</div>
{/* </div> */}
 

 
     </div>



  );
  
 
 }
 
 export default SignIN;