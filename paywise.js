let user_input = document.querySelector('#user_input');
let user_output = document.querySelector('#user_output');

user_input.addEventListener('input', function() {
    let value_to_change = user_input.value;
    user_output.value = (value_to_change / 30).toFixed(2);
})