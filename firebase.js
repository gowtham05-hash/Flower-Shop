  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAn_cX0WhgtXF8EUUFgesM_GXi9-R3YSNU",
    authDomain: "sigup-form-cae80.firebaseapp.com",
    projectId: "sigup-form-cae80",
    storageBucket: "sigup-form-cae80.firebasestorage.app",
    messagingSenderId: "685219626091",
    appId: "1:685219626091:web:1bdf322398880c705c052e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Show message function
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.innerHTML = message;
  messageDiv.style.display = "block";  // Show the message container
  messageDiv.classList.add("show");  // Apply the class to trigger animation

  setTimeout(() => {
    messageDiv.style.opacity = 0;  // Fade out after 5 seconds
  }, 5000);

  setTimeout(() => {
    messageDiv.style.display = "none";  // Hide the message container after fade-out
    messageDiv.classList.remove("show");  // Remove the fade-in class
  }, 6000);
}

  const signUp = document.getElementById("submitSignUp");
  signUp.addEventListener("click",(event)=>{
    event.preventDefault();
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth(app);
    const db = getFirestore(app);

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
          fullName: name,
          email: email,
        };
        showMessage("Account created successful!","signUpMessage");
        const docRef=doc(db,"users",user.uid);
        setDoc(docRef,userData)
        .then(()=>{
          window.location.href = "sigin.html";
        })
        .catch((error)=>{
          console.error("Error writing document: ", error);
        })
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode === "auth/email-already-in-use"){
          showMessage("Email already in use!","signUpMessage");
        }else if(errorCode === "auth/invalid-email"){
          showMessage("Invalid email!","signUpMessage");}
          else{
            showMessage("Error creating account!","signUpMessage");
          }
    })
  })




