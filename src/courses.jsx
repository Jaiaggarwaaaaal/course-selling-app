import { useEffect, useState } from "react";

function Courses(){
    const[Courses , setcourses] = useState("");
    useEffect(()=>{
function callback(data){
    console.log(data);
}

        function callback1(res){
            res.json().then(callback);
        }
        fetch("http://localhost:3000/admin/courses",{
        method : "GET",
    headers: {
       
        "Authorization" :"Bearer " + localStorage.getItem("token")
    }
}).then(callback1);
    },);

    return <div>

    </div>
}

export default Courses;