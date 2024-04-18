import { useState } from "react"

function Hook(){

    const [name, setName] = useState("Mg Mg");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(true);

    const updateName = () => {
        setName("Aung Aung");
    } 

    const increaseAge = () => {
        setAge(age + 1)
    }
    
    const toggleIsStudent = () => {
        setIsStudent(!isStudent)
    }
    return (
        <div>
            <h3>Name : {name}</h3>
            <button onClick={updateName} className="btn">Update Name</button>
            <h3>Age : {age}</h3>
            <button onClick={increaseAge} className="btn">Increase Age</button>
            <h3>Is Student : {isStudent ? "Yes" : "No"}</h3>
            <button onClick={toggleIsStudent} className="btn">Toggle Is Student</button>
        </div>
    )
}
export default Hook