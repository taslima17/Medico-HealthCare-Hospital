import { getAuth, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GithubAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import InitializeAuthentication from '../Firebase/Firebase.init';
InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();





    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);

        // history.push(redirect_url)
    }
    const githubSignin = () => {
        return signInWithPopup(auth, githubProvider);

    }
    const Register = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        })
    }, [])
    return { setUser, user, setError, error, googleSignin, githubSignin, logOut, login, Register };

}
export default useFirebase;