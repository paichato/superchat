import React from 'react';



import auth from '../../App';


import firebase from '../../App';

import {  Welcome } from './LoginElements';



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
            <a href="/">Demo</a>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            
        </Welcome>
            
        </>
    )
}  

export default Login
