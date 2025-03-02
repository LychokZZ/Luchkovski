import React from "react";

const Heder =({user2}) =>{

    return (
        <div className='Hederes'>
            <h3 className="Chatwith">Чат з {user2 ? user2 : "..."}</h3>
        </div>
    )
}
export default Heder;