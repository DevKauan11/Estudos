document.addEventListener("DOMContentLoaded", function() {
    // Preencher o formulário com dados armazenados anteriormente, se existirem
    const storedBudget = localStorage.getItem('budget');
    const storedAuthority = localStorage.getItem('authority');
    const storedNeed = localStorage.getItem('need');
    const storedTiming = localStorage.getItem('timing');

    if (storedBudget) document.getElementById('budget').value = storedBudget;
    if (storedAuthority) document.getElementById('authority').value = storedAuthority;
    if (storedNeed) document.getElementById('need').value = storedNeed;
    if (storedTiming) document.getElementById('timing').value = storedTiming;
});

function calculateBANT() {
    const budget = parseInt(document.getElementById('budget').value);
    const authority = parseInt(document.getElementById('authority').value);
    const need = parseInt(document.getElementById('need').value);
    const timing = parseInt(document.getElementById('timing').value);

    // Armazenar dados no local storage
    localStorage.setItem('budget', budget);
    localStorage.setItem('authority', authority);
    localStorage.setItem('need', need);
    localStorage.setItem('timing', timing);

    const score = budget + authority + need + timing;

    let resultMessage = '';
    if (score >= 10) {
        resultMessage = 'Lead Qualificado: vai trabalhar CLT';
    } else if (score >= 7) {
        resultMessage = 'Lead Qualificado: Vai trabalhar CLT';
    } else if (score >= 4) {
        resultMessage = 'Vai trabalhar CLT';
    } else {
        resultMessage = 'Vai trabalhar CLT';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultMessage;
    
    // Adicionando animação ao resultado
    resultElement.style.opacity = 0;
    setTimeout(() => {
        resultElement.style.opacity = 1;
        resultElement.style.transition = "opacity 0.5s ease";
    }, 50);
}
