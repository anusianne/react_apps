import {useState} from "react";

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear())
        setCarModel('');
        setCarMake('')
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, id) => id !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    return (

        <div>
            <h2>List of car objects: </h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make:"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model:"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}