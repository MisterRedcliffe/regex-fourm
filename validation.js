const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/,
    firstName: /^[a-z]{5,20}$/i,
    lastName: /^[a-z]{5,20}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    address: /^([a-z\d\.\s]+)$/i,
    city: /^[a-z]{5,20}$/i,
    state: /^[A-Z]{2}$/,
    zipcode: /^[0-9]{5}$/
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});