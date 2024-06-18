// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDCXiQimmZGLoxRKTyYnLqB5BUfoz7oLaI',
    authDomain: 'sensasi-delight.firebaseapp.com',
    projectId: 'sensasi-delight',
    storageBucket: 'sensasi-delight.appspot.com',
    messagingSenderId: '1013227742447',
    appId: '1:1013227742447:web:3cb8809843d845d285e71a',
    measurementId: 'G-XCHKG5XBWL',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const instance = {
    app,
    analytics,
}

export function useFirebase() {
    return instance
}
