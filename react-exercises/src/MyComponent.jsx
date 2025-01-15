import {useState} from "react";

export default function MyComponent() {
    const [name, setName] = useState('');
    const [qty, setQty] = useState();
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleQtyChange(e) {
        setQty(e.target.value)
    }

    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChangeName}/>
            <p>Name: {name}</p>
            <input value={qty} onChange={handleQtyChange} type="number"/>
            <p>Quantity: {qty}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Please give a review:"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>Pick Up
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}/></label><br/>

            <label>Delivery
                <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                       onChange={handleShippingChange}/></label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}