import { useState } from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
         setIsEditing((editing) => !editing);
    }

    return (
        <li>
            <span className="player">
            {isEditing === false && <span className="player-name">{name}</span>}
                {isEditing === true && <input type="text" required velue={name}/>}
            <span className="player-symbol">{symbol}</span>
        </span>

            <button onClick={handleEdit}>{isEditing? 'Save': 'Edit'}</button>
        </li>
    )
}