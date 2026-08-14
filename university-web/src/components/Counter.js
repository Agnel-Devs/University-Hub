import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign : 'center',marginBottom:"50px"}}>
            <h3>Class Attendance Counter</h3>
            <h1>{count}</h1>

            <button onClick={increment}>Add Student</button>
            <button onClick={decrement}>Remove Student</button>
        </div>
    );
}

export default Counter;