import firebase from 'firebase/app'; //firebase sdk
import 'firebase/firestore'; //firebase sdk
import 'firebase/auth'; //firebase sdk

import {useAuthState} from 'react-firebase-hooks/auth'; //firebase hooks
import 'firebase/firestore'; //firebase hooks
import 'firebase/auth'; //firebase hooks

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

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
