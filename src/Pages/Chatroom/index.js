import React from 'react';

import {useCollection, useCollectionData} from 'react-firebase-hooks/firestore'


import firebase from '../../App'; 
import firestore from '../../App'; 
import { ChatMessage } from './ChatroomElements';
import auth from '../../App';




function Chatroom() {
    
    
    const messageRef=firestore.collection('messages');
   
    
    const query=messageRef.orderBy('createdAt').limit(25);

    //listen to data hook
    const [messages]=useCollectionData(query, {idField: 'id'})
    
    

    return (
        <div>
            {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
            
        </div>
    )
}
function ChatMessages(props) {
    const{text,uid}=props.message;
    const messageClass=uid === auth.currentUser.uid ? 'sent' : 'received';
    return <p>{text}</p>
}

export default Chatroom
