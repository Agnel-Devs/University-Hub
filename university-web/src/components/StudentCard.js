import React from "react";
function StudentCard(props){
    return(
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto my-4 border hover:border-blue-500 transition" 
        style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginLeft: '70px',
            marginRight:"50px",
            marginTop:"30px",
            borderRadius:"15px",
            paddingLeft:"15px"
        }}>
            <h3 className="text-xl font-bold text-gray-800">{props.name}</h3>
            <p className="text-gray-600 mt-2">ID:{props.studentId}</p>
            <p className="text-gray-600">Major:{props.major}</p>
            <button onClick={()=> alert("viewing"+props.name)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >view details</button>
        </div>
    );
}
export default StudentCard;