document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple static validation for demo (replace with real auth in production)
  if (
    (role === "admin" &&
      username === "Venkatramana" &&
      password === "Billsoft123") ||
    (role === "user" && username === "User" && password === "Billing123")
  ) {
    // ✅ Generate token and 5-hour expiry timestamp
    const token = generateToken();
    const expiresAt = Date.now() + 5 * 60 * 60 * 1000; // 5 hours in ms

    // Save token, role, and expiry
    localStorage.setItem("role", role);
    localStorage.setItem("token", token);
    localStorage.setItem("expiresAt", expiresAt.toString());

    message.style.color = "green";
    message.textContent = `Login successful as ${role.toUpperCase()}`;

    // Redirect using location.replace to prevent back navigation to login
    setTimeout(() => {
      window.location.replace("dash.html");
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials. Please try again.";
  }
});

// Generate a simple alphanumeric token
function generateToken(length = 32) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
