const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const actionBtn = document.getElementById("action-btn");
const toggleBtn = document.getElementById("toggle-btn");
const toggleText = document.getElementById("toggle-text");
const formTitle = document.getElementById("form-title");
const errorMsg = document.getElementById("error-msg");

let isLogin = true;

actionBtn.addEventListener("click", () => {
  const email = emailField.value;
  const password = passwordField.value;

  if (!email || !password) {
    errorMsg.textContent = "Please fill all fields.";
    return;
  }

  errorMsg.textContent = "";

  if (isLogin) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => window.location.href = "dashboard.html")
      .catch(err => errorMsg.textContent = err.message);
  } else {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => window.location.href = "dashboard.html")
      .catch(err => errorMsg.textContent = err.message);
  }
});

function toggleForm() {
  isLogin = !isLogin;
  if (isLogin) {
    formTitle.textContent = "Login";
    actionBtn.textContent = "Login";
    toggleText.textContent = "Don't have an account?";
    toggleBtn.textContent = "Register";
  } else {
    formTitle.textContent = "Register";
    actionBtn.textContent = "Register";
    toggleText.textContent = "Already have an account?";
    toggleBtn.textContent = "Login";
  }
}
