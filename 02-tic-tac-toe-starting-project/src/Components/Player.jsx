import { useState } from "react"
export default function Player({intialName, PlayerSymbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(intialName); 
    const [isEditing, setIsEditing] = useState(false); 

    function handleEditClick() {
        setIsEditing((isEditing)=>!isEditing); 
        
        if(isEditing){
            onChangeName(PlayerSymbol, playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }
    return (
        <li className={`flex-column ${isActive?'active':undefined}`}>
            <span className="player flex-column">
                {isEditing?<input type="text" defaultValue={playerName} required onChange={handleChange}/>:<span className='player-name'>{playerName}</span>}
                
                <span className="player-symbol">{PlayerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}