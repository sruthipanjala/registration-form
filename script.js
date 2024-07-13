document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('successMessage').innerText = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    let isValid = true;

    if (username === '') {
        isValid = false;
        document.getElementById('usernameError').innerText = 'Username is required';
        document.getElementById('usernameError').style.display = 'block';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
    }

    if (password === '') {
        isValid = false;
        document.getElementById('passwordError').innerText = 'Password is required';
        document.getElementById('passwordError').style.display = 'block';
    }
    if (isValid) {
        simulateApiCall().then(() => {
            document.getElementById('successMessage').innerText = 'Registration successful!';
        });
    }
});


