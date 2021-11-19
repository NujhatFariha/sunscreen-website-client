
import { getAuth,  signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";


initializeFirebaseApp()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()

    

    // Google sign in 
    const signInUsingGoogle = (history, redirect_uri) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(err => {
            setError(err)
        }) 
        .finally(() => setIsLoading(false))
    }

    

    // user registration 
    const register = (name, email, password, history, redirect_uri) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            updateName(name)
        })
        .then(result => {
            history.push(redirect_uri)
            window.location.reload()
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => setIsLoading(false))
    }

    // for collect user name 
    const updateName = (name) => {
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(() => {
            const newUser = {...user, displayName:name}
            setUser(newUser)
        })
        .catch(err => {
            setError(err)
        })
    }

    const login = (email, password, history, redirect_uri) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => setUser(result.user))
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(err => {
            setError(err)
        })
    }

    // user logOut 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => '')
        .catch(err => err)
        .finally(() => setIsLoading(false))
    }

    // Auth Change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [auth])

    useEffect(() =>{
        fetch(`https://obscure-reaches-95115.herokuapp.com/getuser/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    return{
        signInUsingGoogle,
        register,
        login,
        user,
        setError,
        setUser,
        error,
        logOut,
        admin,
        isLoading
    }
}

export default useFirebase




