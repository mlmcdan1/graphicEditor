// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfinh3ziR-wRZxUNBfMZdYexdLx0oE-GM",
    authDomain: "graphiceditor-2ab4b.firebaseapp.com",
    projectId: "graphiceditor-2ab4b",
    storageBucket: "graphiceditor-2ab4b.appspot.com",
    messagingSenderId: "699193147800",
    appId: "1:699193147800:web:b0775b7410ff43f3d9ebed",
    measurementId: "G-DNZME7NRTB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
