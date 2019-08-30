import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAomFl5XIJCAnOlsbk55WVS2Dz_nKcgZwQ",
    authDomain: "crown-db-4530b.firebaseapp.com",
    databaseURL: "https://crown-db-4530b.firebaseio.com",
    projectId: "crown-db-4530b",
    storageBucket: "",
    messagingSenderId: "874784992846",
    appId: "1:874784992846:web:b7854bba1844d751"
}


export const createUserDocument = async (authUser, additionalData) => {
    if (!authUser) return;
    const userRef = firestore.doc(`users/${authUser.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = authUser;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating user:',error.message)
        }
    }
    return userRef
}
  
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase