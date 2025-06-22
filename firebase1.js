import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// ✅ Firebase config (corrected storageBucket)
const firebaseConfig = {
  apiKey: "AIzaSyAn_cX0WhgtXF8EUUFgesM_GXi9-R3YSNU",
  authDomain: "sigup-form-cae80.firebaseapp.com",
  projectId: "sigup-form-cae80",
  storageBucket: "sigup-form-cae80.appspot.com",
  messagingSenderId: "685219626091",
  appId: "1:685219626091:web:1bdf322398880c705c052e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Show messages function
function showMessage(message, divId) {
  const div = document.getElementById(divId);
  div.innerHTML = message;
  div.style.display = "block";
  div.style.opacity = "1";
  div.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    div.style.opacity = "0";
    setTimeout(() => {
      div.style.display = "none";
    }, 1000);
  }, 4000);
}

// ✅ Sign-in logic
document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.getElementById("submitSignIn");

  if (signInBtn) {
    signInBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        showMessage("Please enter both email and password.", "signInMessage");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("loggedInUserId", user.uid);
          showMessage("Login-successful!...", "signInMessage");
          setTimeout(() => {
            window.location.href = "index2.html";
          }, 1000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = {
            "auth/user-not-found": "No user found for this email.",
            "auth/wrong-password": "Incorrect password.",
            "auth/invalid-email": "Invalid email format.",
            "auth/too-many-requests": "Too many attempts. Try again later."
          };
          showMessage(errorMsg[errorCode] || error.message, "signInMessage");
        });
    });
  }
});
