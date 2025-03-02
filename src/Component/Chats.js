import React,{useContext, useState , useEffect, useRef} from 'react';
import { Context } from "..";
import "../Styles/Chats.css"
import { HiMagnifyingGlass } from "react-icons/hi2";
import VueChats from './VueChat';
import Heder from './HearedChat';
import { IoSend } from "react-icons/io5";

const Chats = () =>{
    const inputRef = useRef(null);
    const [Contacts, setContacts] = useState([])
    const {store} = useContext(Context);
    const User =  JSON.parse(localStorage.getItem('User'));
    const [text,setText] = useState('')
    const [reciver,setReciver] = useState('')
    const [chat,setChat] = useState('')
    const [chatWith, setchatWith] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await store.getContact(User);
                setContacts(res);
            } catch (error) {
                console.error("Помилка:", error); 
            }
        }
        fetchData();
    }, );
    const chats =(user)=> {
        setTimeout(()=>{
            setReciver(user)
            setChat(<VueChats user2 = {user} />)
        },100)
    }
    const openChat = (user)=>{
        setchatWith(<Heder user2={user}/>)
        setChat('')
        chats(user)
    }
    const sendMessag = () =>{
        store.sendMessage(User,reciver,text);
        inputRef.current.value = "";
    }
    return(
       <div className='App'>
            <div className='contacts-conteiner'>
                <div className='input-block'>
                    <h3>Чати</h3>
                    <div className='input'>
                        <HiMagnifyingGlass />
                        <input  className='input2' placeholder='Пошук'></input>
                    </div>
                    
                </div>
                {Contacts.map((contact, index) => (
                    <div key={index}>
                        <button className='contacts' onClick={()=>openChat(contact)}>
                            <div key={index}>{contact}</div>
                        </button>
                        <hr className='hr-line'></hr>
                    </div>
                ))}
                
                
            </div>
            <div className='chats-bloks'>
                <div >
                    {chatWith ? chatWith : <Heder/>} 
                </div>
                <div className='chater'>
                    {chat}
                </div> 
                <div className='input-message'>
                    <input ref={inputRef} className='input' placeholder='Ваше повідомлення....' onChange={(e)=>setText(e.target.value)}></input>
                    <IoSend className='SendsAvatar' onClick={()=>sendMessag()}/>
                </div>
            </div>
       </div> 
    )

}
export default Chats;

