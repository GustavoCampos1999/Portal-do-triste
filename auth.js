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
        const rememberMeCheckbox = document.getElementById('remember-me');
        const loginError = document.getElementById('login-error');
        const rememberedIdentifier = localStorage.getItem('rememberedUser');
        if (rememberedIdentifier) {
            loginIdentifierInput.value = rememberedIdentifier;
            rememberUserCheckbox.checked = true;
        }
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const identifier = loginIdentifierInput.value.trim();
            const password = loginPasswordInput.value;
            loginError.textContent = '';
            try {
                const persistence = rememberMeCheckbox.checked 
                    ? firebase.auth.Auth.Persistence.LOCAL 
                    : firebase.auth.Auth.Persistence.SESSION;
                await auth.setPersistence(persistence);
                let email = identifier;
                
                if (!identifier.includes('@')) {
                    const usernameDoc = await db.collection('usernames').doc(identifier.toLowerCase()).get();
                    if (!usernameDoc.exists) {
                        throw new Error("Usuário não encontrado.");
                    }
                    const uid = usernameDoc.data().uid;
                    const userDoc = await db.collection('users').doc(uid).get();
                    if (!userDoc.exists) {
                        throw new Error("Erro ao encontrar dados do usuário.");
                    }
                    email = userDoc.data().email;
                }

                await auth.signInWithEmailAndPassword(email, password);
                if (rememberUserCheckbox.checked) {
                    localStorage.setItem('rememberedUser', identifier);
                } else {
                    localStorage.removeItem('rememberedUser');
                }
                navigateTo('inicio');
            } catch (error) {
                console.error("Erro no login:", error);
                loginError.textContent = "E-mail/usuário ou senha incorretos.";
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
            const confirmPassword = document.getElementById('register-password-confirm').value;
            const registerError = document.getElementById('register-error');
            registerError.textContent = '';
            if (password !== confirmPassword) return registerError.textContent = "As senhas não coincidem.";
            if (username.length < 3) return registerError.textContent = "O usuário deve ter pelo menos 3 caracteres.";
            if (!/^[a-zA-Z0-9_]+$/.test(username)) return registerError.textContent = "Usuário pode conter apenas letras, números e underline.";
            try {
                const usernameDoc = await db.collection('usernames').doc(username.toLowerCase()).get();
                if (usernameDoc.exists) throw new Error("Este nome de usuário já está em uso.");
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;
                const batch = db.batch();
                const userDocRef = db.collection('users').doc(user.uid);
                const usernameDocRef = db.collection('usernames').doc(username.toLowerCase());
                batch.set(userDocRef, { username: username, email: user.email, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
                batch.set(usernameDocRef, { uid: user.uid });
                await batch.commit();
                navigateTo('inicio');
            } catch (error) {
                console.error("Erro no registro:", error);
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
        const bestiaryPage = document.getElementById('page-bestiary');
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            userDocRef.get().then(doc => {
                if(doc.exists) {
                    loggedInLinks.classList.remove('hidden');
                    loggedOutLinks.classList.add('hidden');
                    userEmailDisplay.textContent = doc.data().username || user.email.split('@')[0];
                }
            });
            if (typeof window.handleLoggedInUser === 'function') window.handleLoggedInUser(user.uid); 
            if (typeof loadBestiaryData === 'function') loadBestiaryData(user.uid); 
        } else {
            loggedInLinks.classList.add('hidden');
            loggedOutLinks.classList.remove('hidden');
            userEmailDisplay.textContent = '';
            if (typeof window.handleLoggedOutUser === 'function') window.handleLoggedOutUser(); 
            if (bestiaryPage && typeof setPageState === 'function') {
                setPageState(false);
            }
        }
    });
});