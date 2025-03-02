import React,{useContext, useState , useEffect} from 'react';
import { Context } from "..";
import "../Styles/Chats.css"

const VueChats = ({ user2 }) =>{
    const {store} = useContext(Context);
    const user1 = JSON.parse(localStorage.getItem('User'));
    const [Chat ,setChat] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await store.getChat(user1, user2);
                setChat(res);
            } catch (error) {
                console.error("Помилка:", error); 
            }
        }
        fetchData();
    });
    const Formatted = new Intl.DateTimeFormat("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kyiv"
    });

    return(
       <div>
            <div>
                {Chat.map((messag, key)=>{
                    const formattedDate = Formatted.format(new Date(messag.data));
                    return (
                        <div>
                        
                        <div key={key}>
                            {messag.user1 && messag.user1.length > 0 ? <div className='senderUS' key={key}><span className='data'>{formattedDate}</span >{messag.user1}</div> : ""}
                            {messag.user2 && messag.user2.length > 0 ? <div className='getterUS' key={key}>{messag.user2}<span className='data'>{formattedDate}</span></div> : ""}
                        </div>
                        <div>
               
                        </div>
                        </div>
                    )
                })}
            </div>
       </div> 
    )

}
export default VueChats;

