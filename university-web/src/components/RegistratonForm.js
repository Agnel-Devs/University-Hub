import React,{useState} from "react";
function RegistrationForm(){
    const [formData,setformData]=useState({
        firstName:"",
        lastName:"",email:"",
        role:"Student"
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setformData(prevstate => ({
            ...prevstate,
            [name]:value 
        }));
    };
    const handlesubmit=(e) => {
        e.preventDefault();
        console.log(formData);
    };
    return(
        <form onSubmit={handlesubmit} style={{display:"flex",flexDirection:"column",width:"300px"}}>
            <input
            name="firstName" placeholder="FirstName" value={formData.firstName} onChange={handleChange}/>
            <input
            name="lastName" placeholder="LastName" value={formData.lastName} onChange={handleChange}/>
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="student">Student</option>
                 <option value="Teacher">Teacher</option>
            </select>
        <button type="submit">Register</button>
        </form>
    );
}
export default RegistrationForm; 