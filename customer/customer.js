document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  document.getElementById("output").innerText =
    `Customer Added: ${name} (${email})`;

  // clear form
  this.reset();
});
