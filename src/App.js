import GlobalStyles from './styles/global';
import {useState} from 'react';
import logo from './Assets/Hive.png';
import light from './Assets/Light On.png';
import intro from './Assets/undraw_celebration_0jvk 1.png';


import firebase from 'firebase/app'; //firebase sdk
import 'firebase/firestore'; //firebase sdk
import 'firebase/auth'; //firebase sdk

import {useAuthState} from 'react-firebase-hooks/auth'; //firebase hooks
import 'firebase/firestore'; //firebase hooks
import 'firebase/auth'; //firebase hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Chating, Chatmessages1 } from './Pages/Chatroom/ChatroomElements';
import { Welcome } from './Pages/Login/LoginElements';


//Get files from registing Web app after creating project and 
//activating database and google auth
firebase.initializeApp({
  apiKey: "AIzaSyBBCKRwFDD15ShuvFpzM1uFjuzwNfuBGR8",
    authDomain: "superchat-3976c.firebaseapp.com",
    projectId: "superchat-3976c",
    storageBucket: "superchat-3976c.appspot.com",
    messagingSenderId: "419127465748",
    appId: "1:419127465748:web:ac49833b0d2a1f215c5401",
    measurementId: "G-5104BX17BR"
})


const auth=firebase.auth();
export const firestore=firebase.firestore();



function App() {

  const[user]=useAuthState(auth);
  

  

  return (
    <>
      <GlobalStyles/>
     
      <section>
     
        
                {user ? (
                <>
                <Chatroom/>
                <SignOut>SignOut</SignOut>
                </>) : <Login/>}
            </section>
    </>
  );
}
function ChatMessages(props) {
  const{text,uid, photoURL}=props.message;
   const messageClass=uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
  <>
  <Chatmessages1>
    

  <img src={photoURL}/>
   <p >
     
     {text}
   </p>
   </Chatmessages1>
   </>
  )
} 
function Chatroom() {
    
    
  const messageRef=firestore.collection('messages');
  const query=messageRef.orderBy('createdAt').limit(25);

  //listen to data hook
  const [messages]=useCollectionData(query, {idField: 'id'})
  console.log(messages);
  const [formValue, setFormValue]=useState('');

  const sendMessage = async(e)=>{
    e.preventDefault();
    const {uid, photoURL}=auth.currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
  }
  

  return (
    <>
   
      <Chating >
      <h1>Say Something Nice</h1>
      
          {messages && messages.map(msg=><ChatMessages id="chatmessages" key={msg.id} message={msg}/>)}
          <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
            <button type="submit">Bust🐝</button>
          </form>
      </Chating>
      
      </>
  )
}
function SignOut(){
return auth.currentUser && (
    <button style={{position: 'absolute',width:'245px', height:'50px',
     margin:'20px 100px 0px 500px', border:'none', background:'#2F80ED',
      color:'white', fontWeight:'bold', borderRadius:'5px', top:'200px'}}
       onClick={()=>auth.signOut()}>Sign Out</button>
)
}

function Login() {
const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

return (
    <>
    <Welcome>
      <header>
        <img src={logo}/>
        <p>BEETHENEVER</p>
      </header>
      <div id="main">
        <section>
          <img src={light} alt="light icon"/>
        <h1>Welcome to BEETHENEVER</h1>
        <p>Demo login to try the app, sign in to Google to use it</p>
        <a href="/">Demo login</a>
        <button onClick={signInWithGoogle}>Sign in with Google</button>

        </section>
        <div id="right">
          <img src={intro}/>
          {/* <h1>Tired of being bored?</h1> */}
          <p>Join Beeger today and watch the time past in hours of joy and fun.</p>
          <small><strong>BEETHANEVER</strong>
-bigger than ever</small>
        </div>
        
        
        </div>
    </Welcome>
        
    </>
)
}

export default App;
