const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});


const submitKnap = document.querySelector('#indsend');
const forgetKnap = document.querySelector('#glem');

submitKnap.addEventListener('click', () => {
    localStorage.setItem('email', emailInput.value);
    nameDisplayCheck();
    localStorage.setItem('password', passwordInput.value)
});

forgetKnap.addEventListener('click', () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    nameDisplayCheck()
});



/*
window.alert("Oplysninger forkert");
*/