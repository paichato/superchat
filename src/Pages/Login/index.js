import React from 'react';


import firebase from 'firebase/app'; //firebase sdk
import 'firebase/firestore'; //firebase sdk
import 'firebase/auth'; //firebase sdk

import {useAuthState} from 'react-firebase-hooks/auth'; //firebase hooks
import 'firebase/firestore'; //firebase hooks
import 'firebase/auth'; //firebase hooks
import {  Welcome } from './LoginElements';

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
  const firestore=firebase.firestore();

  function SignOut(){
    return auth.currentUser && (
        <button onClick={()=>auth.signOut()}>Sign Out</button>
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
            <h1>Welcome to Beeger</h1>
            <p>Demo login to try the app, sign in to Google to use it</p>
            <a>Demo</a>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            
        </Welcome>
            
        </>
    )
}  

export default Login
