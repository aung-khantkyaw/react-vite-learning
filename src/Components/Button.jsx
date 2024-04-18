function Button(){

    let count = 0;

    const countHandle = () => {
        count++;
        console.log(`Click ${count} time/s`);
    }

    const greeting = (name) => {
        console.log(`Hello ${name}`)
    }

    const stop = (e) =>{
        e.target.textContent = "STOP NOW!"
    }

    return (
        <div className="container">
            <button onClick={() => greeting("Aung")} className="btn btn-primary">Greeting</button>
            <button onDoubleClick={(e) => stop(e)} className="btn btn-danger">Stop</button>
            <button className="btn btn-warning">Click Me!</button>
            <button onClick={countHandle} className="btn">Count</button>
        </div>
    )
}

export default Button