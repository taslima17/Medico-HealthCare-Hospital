import firebaseConfig from "./Firebase.config";
import { initializeApp } from 'firebase/app'

const InitializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default InitializeAuthentication;