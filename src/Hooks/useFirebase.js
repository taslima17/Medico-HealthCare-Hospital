import { getAuth, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
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



    const history = useHistory();
    // const location = useLocation();
    // console.log('from', location.state?.from);
    // const redirect_url = location.state?.from || '/home';

    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(user)
                history.push('/');
            }).catch(e => setError(e.message))

        // history.push(redirect_url)
    }
    const githubSignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user)
            }).catch(e => setError(e.message))
        // history.push(redirect_url)
    }
    const Register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                setError('');

            }).catch(e => {
                setError(e.message)
                // e.target.reset();
            }
            );

    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                setError('');
                console.log(user)
            }
            ).catch(e => {
                setError(e.message)
                // e.target.reset();
            }
            );
        // history.push(redirect_url)

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
    return { user, error, googleSignin, githubSignin, logOut, login, Register };

}
export default useFirebase;