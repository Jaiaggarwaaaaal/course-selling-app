import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//window.location make the page refresh again and agian so we have to declare it with 
import {useNavigate} from 'react-router-dom';

function Appbar(){
const navigate = useNavigate()

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