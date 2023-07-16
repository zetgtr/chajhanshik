import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCkym-476oziAUaVSVfpNvgZAtNcFoBQAA",
    authDomain: "chayhanchik-c5599.firebaseapp.com",
    databaseURL: "https://chayhanchik-c5599.firebaseio.com",
    projectId: "chayhanchik-c5599",
    storageBucket: "chayhanchik-c5599.appspot.com",
    messagingSenderId: "642723499273",
    appId: "1:642723499273:android:e9120b745a233b5d6257d8",
};
//
// const a = firebase
const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase