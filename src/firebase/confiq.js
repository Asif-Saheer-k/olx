import firebase from "firebase";
import 'firebase/auth' 
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAX5fijpKU1JZckd7QuBeUZ0Yid4Z1555M",
    authDomain: "fir-bd488.firebaseapp.com",
    projectId: "fir-bd488",
    storageBucket: "fir-bd488.appspot.com",
    messagingSenderId: "571339062074",
    appId: "1:571339062074:web:52db8c314e795412966e03",
    measurementId: "G-1D7LM7ZN0C"
  };
export default firebase.initializeApp(firebaseConfig)