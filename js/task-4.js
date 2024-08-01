const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
    };
    
    if (!formEl.elements.email.value || !formEl.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    } else {
        console.log(formData); 
     }

    formEl.reset();
};





formEl.addEventListener('submit', onFormSubmit); 