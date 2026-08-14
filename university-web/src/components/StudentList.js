import React,{useState,useEffect} from "react";
function StudentList(){
    const [students,setStudents]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        console.log("Component mounted! Fetching data....");
       const timer=setTimeout(()=>{
        const data=[
            {id:1,name:"Cristiano Ronaldo",major:"forward"},
            {id:2,name:"Bruno Fernandes",major:"Midfield"}
        ];
        setStudents(data);
        setLoading(false);
       },2000);
       return ()=> clearTimeout(timer);
    },[]);
    return(
        <div>
            <h2 style={{textAlign:"center"}}>Students List</h2>
            {loading ? (<p>Loading...</p>):
            (<ul style={{ 
            listStylePosition: "inside",
            textAlign:"center", // Moves bullets right next to the text
            padding: 0                   // Removes default browser indenting
        }}>
                {students.map(s=>(<li key={s.id}>
                    {s.name} ({s.major})
                </li>))}
            </ul>)}
        </div>
    );
}
export default StudentList;