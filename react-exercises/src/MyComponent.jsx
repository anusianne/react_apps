import {useState} from "react";

export default function MyComponent() {
    // const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});
    //
    // function handleYearChange(event) {
    //     setCar({...car, year: event.target.value})
    // }
    //
    // function handleMakeChange(event) {
    //     setCar({...car, make: event.target.value})
    // }
    //
    // function handleModelChange(event) {
    //     setCar({...car, model: event.target.value})
    // }

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((f, i) =>
            i !== index))
    }

    return (
        // <div>
        //     <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        //     <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        //     <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        //     <input type="text" value={car.model} onChange={handleModelChange}/>
        // </div>
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input text="text" id="foodInput" placeholder="Enter food name:"/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}