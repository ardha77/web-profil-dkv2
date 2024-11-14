const passwordField1 = document.querySelector('.pswgroup input');
const toggleImage1 = document.querySelector('.pswgroup img');

const passwordField2 = document.querySelector('.pswgroup2 input');
const toggleImage2 = document.querySelector('.pswgroup2 img');

const toggleVisibility = (passwordField, toggleImage) => {
    toggleImage.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleImage.src = 'view1.png';
        } else {
            passwordField.type = 'password';
            toggleImage.src = 'hide1.png';
        }
    });
};

