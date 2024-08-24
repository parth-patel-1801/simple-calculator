document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputtext'); // The display element
    const buttons = Array.from(document.querySelectorAll('.box')); // Get all button elements

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;
 
            if (value === 'C') {
               
                inputText.value = '';
            } else if (value === '=') {
                inputText.value = eval(inputText.value);
            }
            
            
            else {
               
                inputText.value += value;
            }
        });
    });
});
