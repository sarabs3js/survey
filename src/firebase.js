
import { initializeApp } from 'firebase/app';
import { getDatabase, get, onValue, ref, query } from '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDLv4aGkI_dP5Hatw94OI1R3vn5Zo1etjs",
    authDomain: "car-racing-game-4f574.firebaseapp.com",
    projectId: "car-racing-game-4f574",
    storageBucket: "car-racing-game-4f574.appspot.com",
    messagingSenderId: "513744555255",
    appId: "1:513744555255:web:63d164d5acef2553c717f2",
    measurementId: "G-TP5P24ZC9Z"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const dbRef = ref(db, "/players")

async function getData () {
    const usersSnapshot = await get(query(dbRef))
    console.log("usersSnapshot", usersSnapshot.val())
}

