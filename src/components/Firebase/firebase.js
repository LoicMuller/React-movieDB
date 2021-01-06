import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9XBzU7G5IaBT4WBXPZvX4ZEy4Saa3J_g",
    authDomain: "moviedatabase-ab37f.firebaseapp.com",
    databaseURL: "https://moviedatabase-ab37f.firebaseio.com",
    projectId: "moviedatabase-ab37f",
    storageBucket: "moviedatabase-ab37f.appspot.com",
    messagingSenderId: "898625802455",
    appId: "1:898625802455:web:d94673d26a28073eb9e092"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth= app.auth();
    }

    // Inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupération MDP
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

}

export default Firebase;