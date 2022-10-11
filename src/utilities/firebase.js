import { initializeApp } from "firebase/app";
import { getDatabase, onValue,ref } from 'firebase/database';
import   {useState,useEffect,} from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCZDEBr02rCWgQ6Z9W7cKIyobG3pE9VIOc",
    authDomain: "nysl-45a01.firebaseapp.com",
    databaseURL: "https://nysl-45a01-default-rtdb.firebaseio.com",
    projectId: "nysl-45a01",
    storageBucket: "nysl-45a01.appspot.com",
    messagingSenderId: "606232767097",
    appId: "1:606232767097:web:58d8d6d9540d3392e002a8",
    measurementId: "G-Q2TRWPX0NN"
  };

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);



export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, '/game');
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };

  
