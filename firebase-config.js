// Firebase Configuration for MealMoment App
// Use this configuration in all your HTML files

const firebaseConfig = {
    apiKey: "AIzaSyBlBzb_M6uJwnMHXwv3dz4N5M08Tdk51gg",
    authDomain: "mealmoment786.firebaseapp.com",
    projectId: "mealmoment786",
    storageBucket: "mealmoment786.firebasestorage.app",
    messagingSenderId: "707371774233",
    appId: "1:707371774233:web:a94c816e40f8d0a9055588"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services for use in other files
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

// Make them available globally (optional)
window.firebase = firebase;
window.db = db;
window.auth = auth;
window.storage = storage;

console.log('Firebase initialized successfully for MealMoment');
