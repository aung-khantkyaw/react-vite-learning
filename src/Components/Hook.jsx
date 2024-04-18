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

    const [car, setCar] = useState({
        year : 2020,
        make : "Toyota"
    })

    const makeHandler = (event) => {
        setCar(car => ({...car, make:event.target.value}));
    }

    const yearHandler = (event) => {
        setCar(car => ({...car, year: event.target.value}));
    }

    const [fruits, setFruit] = useState(["apple", "mango", "banana"]);
    

    const addFruit = () => {
        const newFruit = document.querySelector("#newFruit").value;
        document.querySelector("#newFruit").value = "";
        setFruit(fruits => ([...fruits, newFruit]))        
    }

    const remove = (index) => {
        setFruit(fruits.filter((_,i) => i !== index))
    }
    return (
        <div>
            <div>
                <h3>Name : {name}</h3>
                <button onClick={updateName} className="btn">Update Name</button>
                <h3>Age : {age}</h3>
                <button onClick={increaseAge} className="btn">Increase Age</button>
                <h3>Is Student : {isStudent ? "Yes" : "No"}</h3>
                <button onClick={toggleIsStudent} className="btn">Toggle Is Student</button>
            </div>
            <hr />
            <div>
                <h2>Object State</h2>
                <p>Car is made by {car.make}, at {car.year}</p>

                <input type="text" value={car.make} onChange={makeHandler}/>
                <input type="text" value={car.year} onChange={yearHandler}/>
            </div> 
            <hr />
            <div>
                <h2>Array State</h2>
                <ul>
                {fruits.map((fruit,index) => <li key={index} onClick={() =>  remove(index)}>{fruit}</li>)}
                </ul>
                <input type="text" id="newFruit" />
                <button onClick={addFruit}>Add</button>
            </div>
        </div>
    )
}
export default Hook