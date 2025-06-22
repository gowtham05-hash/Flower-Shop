// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxOcj0cwaYTlCq2NBBrkS9UeJbwQCjcoI",
  authDomain: "login-form-b75de.firebaseapp.com",
  projectId: "login-form-b75de",
  storageBucket: "login-form-b75de.appspot.com",
  messagingSenderId: "29695019796",
  appId: "1:29695019796:web:b655338a4ba8e064809001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// SIGN UP FUNCTION
window.validateSignup = async function () {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return false;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName: name,
      email: user.email,
      uid: user.uid
    });

    alert("Sign up successful!");
    window.location.href = "signin.html"; // Redirect to sign-in page
    return false;
  } catch (error) {
    console.error("Signup Error:", error.message);
    alert("Error: " + error.message);
    return false;
  }
};

// SIGN IN FUNCTION
window.validateLogin = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields.");
    return false;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "home.html"; // Redirect to home page
    return false;
  } catch (error) {
    console.error("Login Error:", error.message);
    alert("Error: " + error.message);
    return false;
  }
};
