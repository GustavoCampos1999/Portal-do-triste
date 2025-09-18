function smoothScrollTo(element, duration) {
    if (!element) return;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    smoothScrollToY(targetPosition, duration);
}

function smoothScrollToY(yPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = yPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}