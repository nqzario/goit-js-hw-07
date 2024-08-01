document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', () => {
        const userName = nameInput.value.trim();
      
        if (userName) {
            nameOutput.textContent = userName;
        } else {
            nameOutput.textContent = 'Anonymous';
        }
    })
});