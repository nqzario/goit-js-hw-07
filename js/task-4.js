const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
    };
    
    if (!formEl.elements.email.value || !formEl.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    } else {
        console.log(`email: ${formEl.elements.email.value.trim()} password: ${formEl.elements.password.value.trim()}`);
    }

    formEl.reset();
};





formEl.addEventListener('submit', onFormSubmit); 