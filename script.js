document.getElementById("themeToggle").addEventListener("click", () =>
    {
    document.body.classList.toggle("dark-theme");
    });

    // contact form handler
document.getElementById("contactForm").addEventListener("submit", (e)=> 
    {
e.preventDefault();
const name = document.getElementById("nameInput").value.trim();
console.log(name)
const message = document.getElementById("messageInput").value.trim();
console.log(message)
if (name === "" || message === "") {
alert("Please fill out all fields.");
} else {
document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
// Optional: reset form
e.target.reset();
}
});