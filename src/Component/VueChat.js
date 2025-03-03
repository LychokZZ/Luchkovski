import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from "..";
import "../Styles/Chats.css";

const VueChats = ({ user2 }) => {
    const { store } = useContext(Context);
    const user1 = JSON.parse(localStorage.getItem('User'));
    const [Chat, setChat] = useState([]);
    const blockRef = useRef(null);
    const containerRef = useRef(null);

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

    useEffect(() => {
        scrollToBottom();
    }, [Chat]); // Прокручуємо вниз після оновлення чату

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    const Formatted = new Intl.DateTimeFormat("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kyiv"
    });

    return (
        <div ref={containerRef} className="chat-container">
            {Chat.map((messag, key) => {
                const formattedDate = Formatted.format(new Date(messag.data));
                return (
                    <div key={key}>
                        {messag.user1 && messag.user1.length > 0 ? (
                            <div className='senderUS'>
                                <span className='data'>{formattedDate}</span>
                                {messag.user1}
                            </div>
                        ) : null}
                        {messag.user2 && messag.user2.length > 0 ? (
                            <div className='getterUS'>
                                {messag.user2}
                                <span className='data'>{formattedDate}</span>
                            </div>
                        ) : null}
                    </div>
                );
            })}
            <div ref={blockRef}></div>
        </div>
    );
};

export default VueChats;
