function solve() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    window.location.href = "home.html";
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }
}
