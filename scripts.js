(function(win, doc){
    'use strict';

    const $emailField = doc.querySelector('input[name="email"');

    function init(){
        $emailField.addEventListener('change', handleEmailChange, false);
    }
    
    function isEmailValid(email){
        const regEx = /[\w\+\.]+@\w+\.\w{2,}(?:\.\w{0,2})?/;
        return email.match(regEx)[0] === email;
    }

    function handleEmailChange(){
        const email = $emailField.value;
        if(!isEmailValid(email)){
            clearEmailField();
        }
    }

    function clearEmailField(){
        $emailField.value = '';
        alert("Email inválido!");
    }

    init();
})(window, document);