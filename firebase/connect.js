import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Firebase config
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

// Get a Firestore instance
firebase.initializeApp(firebaseConfig)

// Firebase FireStore
const firestore = firebase.firestore()

// Firebase authentication
const auth = firebase.auth()

export { firestore, auth }

// if using Firebase JS SDK < 5.8.0
firestore.settings({
    timestampsInSnapshots: true
})