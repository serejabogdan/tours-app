import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCoeAwSaLT5RSPSIOcLBgi7hhnqI5egYW4",
  authDomain: "tour-app-350b9.firebaseapp.com",
  databaseURL: "https://tour-app-350b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tour-app-350b9",
  storageBucket: "tour-app-350b9.appspot.com",
  messagingSenderId: "681782393076",
  appId: "1:681782393076:web:2d8556c0d0ee399fb506a1",
});
const auth = app.auth();
const storage = app.storage();
const database = app.database();
export { auth, storage, database };
export default app;
