import React,{useState} from "react";
function SearchBar(){
    const [query,setQuery]=useState("");
    const handleChange=(event)=>{
        setQuery(event.target.value);
    };
    return(
        <div 
        style={{
                display: "flex",
                flexDirection: "column", // Stacks the elements vertically
                justifyContent: "center",
                alignItems: "center" // Optional: Adds a nice little spacing between the items
            }}>
            <p>Search for a course:</p>
            <input type="text" value={query} onChange={handleChange}/><br></br>
            <p>You are typing: {query}</p>
        </div>
    );
}
export default SearchBar;