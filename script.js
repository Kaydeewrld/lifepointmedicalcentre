import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Ce5u1slo74AkTTyM1jpm0OdT-kz-Soo",
    authDomain: "staff-portal-abc7f.firebaseapp.com",
    projectId: "staff-portal-abc7f",
    storageBucket: "staff-portal-abc7f.appspot.com",
    messagingSenderId: "669845563390",
    appId: "1:669845563390:web:5466496f45a278f6fe42af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Authenticate with Firebase
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User signed in:', user);

                // Show success alert
                alert('Login successful! Redirecting to the dashboard...');

                // Redirect to another page or dashboard
                window.location.href = 'dashboard.html'; // Change this to your desired page
            })
            .catch((error) => {
                console.error('Error signing in:', error.message);

                // Show error alert
                alert('Login failed: ' + error.message);
            });
    });
});

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈'; // Change icon to indicate password is visible
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️'; // Change icon to indicate password is hidden
    }
}
