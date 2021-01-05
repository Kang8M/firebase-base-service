# firebase-base-service
Firebase base service
Currently, the package support to use Authentication and FireStore service on Firebase.
You can import `AuthService` and `FireStoreService` for your Client or Server area to use them.

## Create new **.env** file in root directory
- FIREBASE_API_KEY = 
- FIREBASE_AUTH_DOMAIN = 
- FIREBASE_DATABASE_URL = 
- FIREBASE_PROJECT_ID = 
- FIREBASE_STORAGE_BUCKET = 
- FIREBASE_MESSAGING_SENDER_ID = 
- FIREBASE_APP_ID = 

## Directory Structure
- firebase
    - services
        - AuthService.js
        - FireStoreService.js
    - connect.js

## Config service use in **firebase/connect.js** file
- Import any service use in your project below `import firebase from 'firebase/app'`
Ex: `import 'firebase/firestore'` and `import 'firebase/auth'`

- Get a Firestore instance `firebase.initializeApp(firebaseConfig)`

- Firebase FireStore `const firestore = firebase.firestore()`

- Firebase Authentication `const auth = firebase.auth()`

- Export service `export { firestore, auth }`

- If using Firebase JS SDK < 5.8.0 you can include the setting `firestore.settings({ timestampsInSnapshots: true })`