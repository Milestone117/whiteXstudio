// Smooth Scroll on Navigation Click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor behavior
        
        // Get the target section id
        const targetId = this.getAttribute('href').substring(1);  // Remove the "#" symbol
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset by header height (optional)
            behavior: 'smooth'
        });
    });
});

// JavaScript for Active Navigation Link
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Observer options: Trigger when section is 50% visible in the viewport
    const options = {
        rootMargin: '0px',
        threshold: 0.5  // 50% of the section should be visible
    };

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Get the ID of the section in view
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            
            if (entry.isIntersecting) {
                // Add 'active' class to the link
                navLink.classList.add('active');
            } else {
                // Remove 'active' class from the link
                navLink.classList.remove('active');
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => observer.observe(section));
});


// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const close = document.querySelector('.icon-close');
// const registerForm = document.getElementById('registerForm');
// const loginForm = document.getElementById('loginForm');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let image = document.querySelector('.images');
// let items = document.querySelectorAll('.images .item');
// let contents = document.querySelectorAll('.content .item');

// let rotate = 0;
// let active = 0;
// let countItem = items.length;
// let rotateAdd = 360 / countItem;

// function nextSlider(){
//     active = active + 1 > countItem - 1 ? 0 : active + 1;
//     rotate = rotate + rotateAdd; 
//     show();
// }
// function prevSlider(){
//     active = active - 1 < 0 ? countItem - 1 : active - 1;
//     rotate = rotate - rotateAdd; 
//     show();     
     
// }
// function show(){
//     image.style.setProperty("--rotate", rotate + 'deg');
//     image.style.setProperty("--rotate", rotate + 'deg');
//     contents.forEach((content, key) => {
//         if(key == active){
//             content.classList.add('active');
//         }else{
//             content.classList.remove('active');
//         }
//     })
// }
// next.onclick = nextSlider;
// prev.onclick = prevSlider;

// const autoNext = setInterval(nextSlider, 3000);


// registerLink.addEventListener('click', () => {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener('click', () => {
//     wrapper.classList.add('active-popup');
// });

// close.addEventListener('click', () => {
//     wrapper.classList.remove('active-popup');
// });

// Function to show custom alerts
// function showCustomAlert(message, isSuccess = true) {
//     const alertBox = document.getElementById("customAlert");
//     const alertMessage = document.getElementById("alertMessage");
//     const alertClose = document.getElementById("alertClose");

//     alertMessage.textContent = message;

//     // Clear any previous alert classes
//     alertBox.classList.remove("alert-success", "alert-error");

//     // Apply the appropriate class based on success or error
//     if (isSuccess) {
//         alertBox.classList.add("alert-success");
//         alertClose.style.display = "none"; // Hide "OK" button for success alerts
//     } else {
//         alertBox.classList.add("alert-error");
//         alertClose.style.display = "inline"; // Show "OK" button for error alerts
//     }

//     // Show the alert box
//     alertBox.style.display = "block";

//     // For success messages, hide the alert after 2 seconds
//     if (isSuccess) {
//         setTimeout(() => {
//             alertBox.style.display = "none"; // Hide alert
//         }, 2000); // Hide after 2 seconds
//     }
// }

// Register Form Submission
// registerForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const username = document.getElementById('registerUsername').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;

//     if (!username || !email || !password) {
//         showCustomAlert('Please fill in all fields', false);
//         return;
//     }

//     const response = await fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, password })
//     });

//     const data = await response.json();

//     if (response.ok) {
//         showCustomAlert(data.message || 'Registration successful!', true);
//         setTimeout(() => { window.location.href = 'home.html'; }, 3000);  // Redirect after 3 seconds
//     } else {
//         showCustomAlert(data.message || 'An error occurred during registration.', false);
//     }
// });

// Login Form Submission
// loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     if (!email || !password) {
//         showCustomAlert('Please fill in all fields', false);
//         return;
//     }

//     const response = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await response.json();

//     if (response.ok) {
//         showCustomAlert(data.message || 'Login successful!', true);
//         setTimeout(() => { window.location.href = 'home.html'; }, 3000);  // Redirect after 3 seconds
//     } else {
//         showCustomAlert(data.message || 'Invalid email or password', false);
//     }
// });
