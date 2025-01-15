import {useState} from "react";

export default function MyComponent() {
    const [name, setName] = useState('')
    const [qty, setQty] = useState()

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleQtyChange(e) {
        setQty(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleChangeName}/>
            <p>Name: {name}</p>
            <input value={qty} onChange={handleQtyChange} type="number"/>
            <p>Quantity: {qty}</p>
        </div>
    )
}