async function login() {
  const enteredUsername = document.getElementById("username").value.trim();
  const enteredPassword = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Clear previous message
  message.textContent = "";
  message.style.color = "";

  // Empty field validations
  if (!enteredUsername && !enteredPassword) {
    message.textContent = "Please enter username and password.";
    message.style.color = "orange";
    return;
  }

  if (!enteredUsername) {
    message.textContent = "Please enter your username.";
    message.style.color = "orange";
    return;
  }

  if (!enteredPassword) {
    message.textContent = "Please enter your password.";
    message.style.color = "orange";
    return;
  }

  // Email format validation (basic)
  if (!enteredUsername.includes("@")) {
    message.textContent = "Username must be a valid email address.";
    message.style.color = "orange";
    return;
  }

  // Weak password validation
  if (enteredPassword.length < 6) {
    message.textContent = "Password is too weak. It must be at least 6 characters long.";
    message.style.color = "orange";
    return;
  }

  try {
    const response = await fetch("users.txt");
    const text = await response.text();

    const users = text.split('\n').map(line => line.trim()).filter(line => line);
    let valid = false;

    for (let user of users) {
      const [username, password] = user.split(':');
      if (username === enteredUsername && password === enteredPassword) {
        valid = true;
        break;
      }
    }

    if (valid) {
      message.style.color = "green";
      message.textContent = "Login Successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }

  } catch (err) {
    message.textContent = "Error reading user data.";
    message.style.color = "red";
  }
}
