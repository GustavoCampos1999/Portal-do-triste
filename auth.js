document.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    function navigateTo(page) {
        const link = document.querySelector(`.nav-link[data-page="${page}"], .nav-link-auth[data-page="${page}"]`);
        if (link) link.click();
    }

    const loggedOutLinks = document.getElementById('logged-out-links');
    const loggedInLinks = document.getElementById('logged-in-links');
    const userEmailDisplay = document.getElementById('user-email-display');
    const logoutLink = document.getElementById('logout-link');
    const loginForm = document.getElementById('login-form-page');

    if (loginForm) {
        const loginIdentifierInput = document.getElementById('login-identifier');
        const loginPasswordInput = document.getElementById('login-password');
        const rememberUserCheckbox = document.getElementById('remember-user');
        const loginError = document.getElementById('login-error');
        const rememberedIdentifier = localStorage.getItem('rememberedUser');
        if (rememberedIdentifier) {
            loginIdentifierInput.value = rememberedIdentifier;
            if(rememberUserCheckbox) rememberUserCheckbox.checked = true;
        }
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const identifier = loginIdentifierInput.value.trim();
            const password = loginPasswordInput.value;
            loginError.textContent = '';
            
            try {
                let email = identifier;
                if (!identifier.includes('@')) {
                    const querySnapshot = await db.collection('users').where('username_lowercase', '==', identifier.toLowerCase()).limit(1).get();
                    if (querySnapshot.empty) {
                        loginError.textContent = 'Usuário ou e-mail não encontrado.'; return;
                    }
                    email = querySnapshot.docs[0].data().email;
                }
                await auth.signInWithEmailAndPassword(email, password);
                if (rememberUserCheckbox && rememberUserCheckbox.checked) {
                    localStorage.setItem('rememberedUser', identifier);
                } else {
                    localStorage.removeItem('rememberedUser');
                }
                navigateTo('inicio');
            } catch (error) {
                loginError.textContent = 'Usuário, e-mail ou senha incorretos.';
            }
        });
    }

    const registerForm = document.getElementById('register-form-page');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value;
            const passwordConfirm = document.getElementById('register-password-confirm').value;
            const registerError = document.getElementById('register-error');
            registerError.textContent = '';

            if (password !== passwordConfirm) {
                registerError.textContent = "As senhas não coincidem."; return;
            }
            if (password.length < 6) {
                registerError.textContent = "A senha deve ter no mínimo 6 caracteres."; return;
            }
            if (!/^[a-zA-Z0-9_]+$/.test(username)) {
                registerError.textContent = "Usuário pode conter apenas letras, números e underline (_)."; return;
            }
            
            try {
                const usernameSnapshot = await db.collection('users').where('username_lowercase', '==', username.toLowerCase()).get();
                if (!usernameSnapshot.empty) {
                    registerError.textContent = "Este nome de usuário já está em uso."; return;
                }
                
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                await db.collection('users').doc(userCredential.user.uid).set({
                    username: username,
                    username_lowercase: username.toLowerCase(),
                    email: email,
                    uid: userCredential.user.uid
                });
                navigateTo('inicio');
            } catch (error) {
                registerError.textContent = error.message.includes('email-already-in-use') ? "Este e-mail já está em uso." : "Ocorreu um erro ao registrar.";
            }
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut().then(() => navigateTo('inicio'));
        });
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            userDocRef.get().then(doc => {
                if(doc.exists) {
                    loggedInLinks.classList.remove('hidden');
                    loggedOutLinks.classList.add('hidden');
                    userEmailDisplay.textContent = doc.data().username || user.email.split('@')[0];
                }
            });
            if (typeof window.handleBestiaryLogin === 'function') window.handleBestiaryLogin(user.uid);
            if (typeof window.handleBosstiaryLogin === 'function') window.handleBosstiaryLogin(user.uid);
        } else {
            loggedInLinks.classList.add('hidden');
            loggedOutLinks.classList.remove('hidden');
            userEmailDisplay.textContent = '';
            if (typeof window.handleBestiaryLogout === 'function') window.handleBestiaryLogout();
            if (typeof window.handleBosstiaryLogout === 'function') window.handleBosstiaryLogout();
        }
    });
});