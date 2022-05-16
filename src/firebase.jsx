import { firebase } from 'firebase/app'

const app = firebase.initializeApp({
  apiKey: import.meta.env.REACT_APP_FIREBASE_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
})

export default app
