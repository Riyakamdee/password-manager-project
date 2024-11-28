
function loadPasswords() {
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    const table = document.getElementById("passwordTable").querySelector("tbody");
  
    passwords.forEach((entry, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${entry.platform}</td>
        <td>${entry.username}</td>
        <td>${entry.password}</td>
        <td>
          <button class="btn btn-small" onclick="copyPassword('${entry.password}')">Copy</button>
          <button class="btn btn-small" onclick="deletePassword(${index})">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  }
  
  function copyPassword(password) {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  }
  
  function deletePassword(index) {
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    location.reload(); // Reload the page to reflect changes
  }
  
  window.onload = loadPasswords;
  
  