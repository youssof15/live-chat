import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// this way worked instead of the one in course

const firebaseConfig = {
  apiKey: "AIzaSyB_Z1E-j1LHyngRRBV4y3VmzRKzEDdcvg8",
  authDomain: "live-chat-e2b9d.firebaseapp.com",
  projectId: "live-chat-e2b9d",
  storageBucket: "live-chat-e2b9d.appspot.com",
  messagingSenderId: "786655517818",
  appId: "1:786655517818:web:8907615ca878c445456fc3",
  measurementId: "G-M6J96TW2RH"
};
  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore services
  const projectfirestore = firebase.firestore()

  // invoke func to return a timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  // init authentication
  const projectAuth = firebase.auth()
  
  export { projectfirestore , timestamp , projectAuth } 
