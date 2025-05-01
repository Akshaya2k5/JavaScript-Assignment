// Predefined login credentials
const storedUser = {
  username: "admin",
  password: "password123"
};

function handleLogin() {
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const messageEl = document.getElementById("message");

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();

  // Reset previous styles
  usernameField.style.border = "";
  passwordField.style.border = "";
  messageEl.textContent = "";
  messageEl.style.color = "";

  // Empty field check
  if (!username && !password) {
    messageEl.textContent = "Please enter username and password.";
    messageEl.style.color = "orange";
    usernameField.style.border = "2px solid red";
    passwordField.style.border = "2px solid red";
    return false;
  }

  if (!username) {
    messageEl.textContent = "Please enter your username.";
    messageEl.style.color = "orange";
    usernameField.style.border = "2px solid red";
    return false;
  }

  if (!password) {
    messageEl.textContent = "Please enter your password.";
    messageEl.style.color = "orange";
    passwordField.style.border = "2px solid red";
    return false;
  }

  // Invalid username
  if (username !== storedUser.username) {
    messageEl.textContent = "Invalid username.";
    messageEl.style.color = "red";
    usernameField.style.border = "2px solid red";
    return false;
  }

  // Invalid password
  if (password !== storedUser.password) {
    messageEl.textContent = "Invalid password.";
    messageEl.style.color = "red";
    passwordField.style.border = "2px solid red";
    return false;
  }

  // Success
  messageEl.textContent = "Login successful!";
  messageEl.style.color = "green";
  usernameField.style.border = "2px solid green";
  passwordField.style.border = "2px solid green";
  return true;
}