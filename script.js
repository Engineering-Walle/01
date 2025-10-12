 // === Hide Preloader After Page Loads ===
    window.addEventListener("load", function() {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("hidden");
    });


// --- Sidebar Hamburger Toggle ---
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
});

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!formMessage) return; // Safety check

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
    } else if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      formMessage.style.color = 'green';
      contactForm.reset(); // Clear the form
    }
  });
}

// --- Email Validation Function ---
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email.toLowerCase());
}

// --- Back to Top Button ---
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  // Show button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // Smooth scroll to top
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="PqFanbRcUsOq5CQLImFkx";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();



