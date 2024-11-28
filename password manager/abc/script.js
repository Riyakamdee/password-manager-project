// For the login page
if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission and page refresh

      // Get the entered username and password
      let username = document.getElementById('login-username').value.trim();
      let password = document.getElementById('login-password').value.trim();

      // Debugging logs
      console.log('Entered Username:', username);
      console.log('Entered Password:', password);

      // Check if both fields are filled
      if (username && password) {
          // Redirect to the main page after successful login
          window.location.href = "index.html"; // Ensure this path is correct
      } else {
          alert("Please fill in both username and password.");
      }
  });
}

// For the main page (index.html)
if (document.getElementById("generatePassword")) {
  document.getElementById("generatePassword").addEventListener("click", () => {
      // Corrected charset with no extra spaces
      const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
      let password = "";

      for (let i = 0; i < 12; i++) {
          // Use Math.random to pick characters randomly
          password += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      // Set the generated password in the input field
      document.getElementById("password").value = password;
  });
}



document.getElementById("savePassword").addEventListener("click", () => {
  const platform = document.getElementById("platform").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!platform || !username || !password) {
      showAlert("Please fill in all fields!", "error");
      return;
  }

  // Retrieve existing passwords from localStorage
  const passwords = JSON.parse(localStorage.getItem("passwords")) || [];

  // Add the new password to the list
  passwords.push({ platform, username, password });

  // Save the updated list back to localStorage
  localStorage.setItem("passwords", JSON.stringify(passwords));

  // Reset the form and show success alert
  document.getElementById("passwordForm").reset();
  showAlert("Password saved successfully!", "success");
});
