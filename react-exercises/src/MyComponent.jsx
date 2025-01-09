import {useState} from "react";

export default function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(22);

    const updateName = () => {
        setName("SpongeBob");
    }

    const incrementAge = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    )
}