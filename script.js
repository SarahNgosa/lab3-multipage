document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// contact form handler
let formId = "none";
formId = document.getElementsByClassName("form").length;
if(formId !== 0){
    document.getElementById("contactForm").addEventListener("submit", (e) => {
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
}
let namesId = 0;
namesId = document.getElementsByClassName("user-names").length;
if(namesId !== 0){
    document.getElementById("loadUsersBtn").addEventListener("click",
        async () => {
            try {
                const res = await
                    fetch('https://jsonplaceholder.typicode.com/users');
                const users = await res.json();
                const userList = document.getElementById("userList");
                userList.innerHTML = "";
                users.forEach(user => {
                    const li = document.createElement("li");
                    if (user.name === "Leanne Graham") {
                        li.textContent = "Sarah Ngosa"
                    }
                    else if (user.name === "Ervin Howell") {
                        li.textContent = "Festus Mwape"
                    }
                    else {
                        li.textContent = user.name;
                    }
    
                    userList.appendChild(li);
                });
            } catch (err) {
                console.error("Failed to load users:", err);
            }
        });
}

document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
    });
});