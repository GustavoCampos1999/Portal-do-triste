document.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    function navigateTo(page) {
        const link = document.querySelector(`.nav-link[data-page="${page}"], .nav-link-auth[data-page="${page}"]`);
        if (link) link.click();
    }

    const usernameModal = document.getElementById('username-modal');
    const usernameInput = document.getElementById('username-input');
    const saveUsernameBtn = document.getElementById('save-username-btn');
    const usernameError = document.getElementById('username-error');

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                return auth.signInWithPopup(provider)
                    .then((result) => {
                        const user = result.user;
                        if (result.additionalUserInfo.isNewUser) {
                            usernameModal.classList.remove('hidden');
                            saveUsernameBtn.onclick = () => saveGoogleUserUsername(user);
                        } else {
                            navigateTo('inicio');
                        }
                    });
            }).catch((error) => {
                console.error("Erro no login com Google:", error);
                const errorMessage = "Não foi possível autenticar com o Google.";
                document.getElementById('login-error').textContent = errorMessage;
                document.getElementById('register-error').textContent = errorMessage;
            });
    }

    async function saveGoogleUserUsername(user) {
        const username = usernameInput.value.trim();
        usernameError.textContent = '';
        if (username.length < 3) return usernameError.textContent = "O usuário deve ter pelo menos 3 caracteres.";
        if (!/^[a-zA-Z0-9_]+$/.test(username)) return usernameError.textContent = "Usuário pode conter apenas letras, números e underline.";
        try {
            const usernameDoc = await db.collection('usernames').doc(username.toLowerCase()).get();
            if (usernameDoc.exists) { throw new Error("Este nome de usuário já está em uso."); }
            const batch = db.batch();
            const userDocRef = db.collection('users').doc(user.uid);
            const usernameDocRef = db.collection('usernames').doc(username.toLowerCase());
            batch.set(userDocRef, { username: username, email: user.email, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
            batch.set(usernameDocRef, { uid: user.uid });
            await batch.commit();
            usernameModal.classList.add('hidden');
            navigateTo('inicio');
        } catch (error) {
            usernameError.textContent = error.message;
        }
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
                    const querySnapshot = await db.collection('users').where('username', '==', identifier).limit(1).get();
                    if (querySnapshot.empty) throw new Error("Usuário não encontrado.");
                    email = querySnapshot.docs[0].data().email;
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
        document.getElementById('login-google-btn').addEventListener('click', signInWithGoogle);
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
        document.getElementById('register-google-btn').addEventListener('click', signInWithGoogle);
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut().then(() => navigateTo('inicio'));
        });
    }

    auth.onAuthStateChanged(user => {
        const navBestiary = document.getElementById('nav-bestiary');
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
            if (typeof loadBestiaryData === 'function') loadBestiaryData(user.uid);
            if (typeof window.handleLoggedInUser === 'function') window.handleLoggedInUser(user.uid);
        } else {
            loggedInLinks.classList.add('hidden');
            loggedOutLinks.classList.remove('hidden');
            userEmailDisplay.textContent = '';
            if(bestiaryPage) {
                const bestiaryList = document.getElementById('bestiary-list');
                const bestiaryToolbar = bestiaryPage.querySelector('.bestiary-toolbar');
                if(bestiaryToolbar) bestiaryToolbar.style.display = 'none';
                if(bestiaryList) bestiaryList.innerHTML = `<div style="text-align: center; color: #a0937d; padding: 40px 0;"><p>Você precisa estar logado para ver seu bestiário.</p></div>`;
            }
            if (typeof window.handleLoggedOutUser === 'function') window.handleLoggedOutUser();
        }
    });
});