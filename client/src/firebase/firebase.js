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

  
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

// some utils functions
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

export const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    documentsToAdd.forEach(doc => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, doc)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshopToMap = (collectionsSnapshot) => {
    const convertedCollections = collectionsSnapshot.docs.map(doc => {
        const {title, items} = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return convertedCollections.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc;
    }, {})
}