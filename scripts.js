(function(win, doc){
    'use strict';

    const $emailField = doc.querySelector('input[name="email"');
    const $phoneField = doc.querySelector('input[name="phone"]');
    const $submitBtn = doc.querySelector('input[type="submit"');

    function init(){
        $submitBtn.addEventListener('click', handleSubmit, false);
        $emailField.addEventListener('change', handleEmailChange, false);
        $phoneField.addEventListener('keypress', handlePhoneType, false);
    }
    
    function isEmailValid(email){
        const regEx = /[\w\+\.]+@\w+\.\w{2,}(?:\.\w{0,2})?/;
        return email.match(regEx)[0] === email;
    }

    function handleEmailChange(){
        const email = $emailField.value;
        isEmailValid(email) ? '' : clearEmailField();
    }

    function clearEmailField(){
        alert('Email not valid!');
        $emailField.value = '';
    }

    function handleSubmit(){
        handleEmailChange();
    }

    init();
})(window, document);