function adjustCalculatorHeight() {
    const page = document.getElementById('page-calculadora');
    if (!page || page.classList.contains('hidden')) return;

    const modeIndividualBtn = page.querySelector('#mode-individual-btn');
    const individualAnalyzer = page.querySelector('#individual-analyzer');
    const huntAnalyzer = page.querySelector('#hunt-analyzer');
    const analyzerContainer = page.querySelector('.analyzer-container');

    const activeContent = modeIndividualBtn.classList.contains('active') 
        ? individualAnalyzer 
        : huntAnalyzer;
    
    if (analyzerContainer && activeContent) {
        analyzerContainer.style.height = activeContent.offsetHeight + 'px';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-calculadora');
    if (!page) return;

    const modeIndividualBtn = page.querySelector('#mode-individual-btn');
    const modeHuntBtn = page.querySelector('#mode-hunt-btn');
    const individualAnalyzer = page.querySelector('#individual-analyzer');
    const huntAnalyzer = page.querySelector('#hunt-analyzer');
    const resultDiv = page.querySelector('#result');

    modeIndividualBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modeIndividualBtn.classList.contains('active')) return;
        modeHuntBtn.classList.remove('active');
        modeIndividualBtn.classList.add('active');
        huntAnalyzer.classList.add('hidden');
        individualAnalyzer.classList.remove('hidden');
        resultDiv.innerHTML = '';
        setTimeout(adjustCalculatorHeight, 50); 
    });

    modeHuntBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modeHuntBtn.classList.contains('active')) return;
        modeIndividualBtn.classList.remove('active');
        modeHuntBtn.classList.add('active');
        individualAnalyzer.classList.add('hidden');
        huntAnalyzer.classList.remove('hidden');
        resultDiv.innerHTML = ''; 
        setTimeout(adjustCalculatorHeight, 50);
    });
    
    const observer = new MutationObserver(adjustCalculatorHeight);
    observer.observe(individualAnalyzer, { childList: true, subtree: true, attributes: true });
});