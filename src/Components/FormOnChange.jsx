import { useState } from "react"

function FormOnChange(){

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const commentHandler = (event) => {
        setComment(event.target.value);
    }

    const paymentHandler = (event) => {
        setPayment(event.target.value)
    }

    const shippingHandler = (event) => {
        setShipping(event.target.value)
    }

    return (
        <div className="form">
            <div className="input-group">
                <input type="text" value={name} onChange={nameHandler}/>
                <p>Name : {name}</p>
            </div>

            <div className="input-group">
                <input type="number" value={age} onChange={ageHandler} />
                <p>Age : {age}</p>
            </div>

            <div className="input-group">
                <textarea value={comment} onChange={commentHandler}></textarea>
                <p>Comment : {comment}</p>
            </div>

            <div className="input-group">
                <select value={payment} onChange={paymentHandler}>
                    <option value="">Select the option</option>
                    <option value="visa">visa</option>
                    <option value="mastercard">mastercard</option>
                </select>
                <p>Payment : {payment}</p>
            </div>

            <div className="input-group">
                <label>
                    <input type="radio" value="Pick Up" onChange={shippingHandler} checked={shipping === "Pick Up"} />
                    Pick Up
                </label>
                <label>
                    <input type="radio" value="Delivery" onChange={shippingHandler} checked={shipping === "Delivery"} />
                    Delivery
                </label>

                <p>Shipping : {shipping}</p>
            </div>
        </div>
    )
}
export default FormOnChange