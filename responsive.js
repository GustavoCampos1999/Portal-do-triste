function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `calc(${vh}px)`);
}

window.addEventListener('resize', setScreenHeight);
window.addEventListener('load', setScreenHeight);

setScreenHeight();