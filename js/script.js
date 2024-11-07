// Navigation functions
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

//  toggle function
function toggleView(section) {
    const portfolioSection = document.getElementById('portfolio-section');
    const servicesSection = document.getElementById('services-section');
    const aboutSection = document.getElementById('about');  
    const contactSection = document.getElementById('contact');  
    const portfolioBtn = document.getElementById('portfolioBtn');
    const servicesBtn = document.getElementById('servicesBtn');
    
    if (section === 'services') {
        portfolioSection.style.display = 'none';
        servicesSection.style.display = 'block';
        aboutSection.style.display = 'none';  // Hide About Me in Services view
        contactSection.style.display = 'none';  // Hide Contact Me in Services view
        servicesBtn.classList.add('w3-black');
        portfolioBtn.classList.remove('w3-black');
    } else {
        portfolioSection.style.display = 'block';
        servicesSection.style.display = 'none';
        aboutSection.style.display = 'block';  // Show About Me in Portfolio view
        contactSection.style.display = 'block';  // Show Contact Me in Portfolio view
        portfolioBtn.classList.add('w3-black');
        servicesBtn.classList.remove('w3-black');
    }
}

//Shows error when email is not correct formal 

document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector("input[name='Name']").value;
    const email = document.querySelector("input[name='Email']").value;
    const message = document.querySelector("textarea[name='Message']").value;
    
    // Simple validation checks
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        event.preventDefault(); 
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

