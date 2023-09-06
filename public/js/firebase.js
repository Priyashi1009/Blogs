

const firebaseConfig = {
    apiKey: "AIzaSyC2myRnha-lVH6cYC9DzBEUMCyJiI0te0k",
    authDomain: "barbloggin.firebaseapp.com",
    projectId: "barbloggin",
    storageBucket: "barbloggin.appspot.com",
    messagingSenderId: "427533059303",
    appId: "1:427533059303:web:fffbef096e77e5c26ace42"
};



firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();