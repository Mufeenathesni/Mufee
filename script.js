// Simple alert when the contact form is submitted
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
