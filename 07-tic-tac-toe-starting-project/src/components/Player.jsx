import { useState } from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
         setIsEditing(true);
    }

    return (
        <li>
            <span className="player">
            {isEditing === false && <span className="player-name">{name}</span>}
                {isEditing === true && <input type="text" required/>}
            <span className="player-symbol">{symbol}</span>
        </span>

            <button onClick={handleEdit}>Edit</button>
        </li>
    )
}