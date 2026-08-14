import React from "react";
function CourseCard(props){
    return(
        <div className="CourseCard"
        style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginLeft: '100px',
            marginRight: '100px',
            borderRadius:"15px",
            paddingLeft:"15px",
        }}>
            <h3>{props.title}</h3>
            <p>Code:{props.code}</p>
            <p>Credits:{props.credits}</p>
            {
                props.credits >3?(
                    <span style={{color:'red'}}>Token Limit Reached!</span>
                ):null
            }
        </div>
    );
}
export default CourseCard;