
const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const preloader = document.getElementById("preloader");

let progress = 0;

const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }
    progressBar.style.width = progress + "%";
    percentage.textContent = Math.floor(progress) + "%";
}, 200);

window.addEventListener("load", function () {
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 700);
});

// ==== Sidebar Hamburger Toggle ====
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Check if elements exist before adding listeners to prevent errors on different pages
if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  overlay.addEventListener("click", closeMenu);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

function closeMenu() {
  if (menuBtn) menuBtn.classList.remove("active");
  if (sidebar) sidebar.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// ==== Contact Form Validation ====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!formMessage) return;

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = '⚠️ Please fill out all fields.';
      formMessage.style.color = 'red';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formMessage.textContent = '⚠️ Please enter a valid email address.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = '✅ Message sent successfully!';
      formMessage.style.color = 'green';
      contactForm.reset();
    }
  });
}

// ==== Back to Top Button ====
const backToTop = document.getElementById("backToTop") || document.getElementById("goTopBtn");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
      setTimeout(() => { backToTop.style.opacity = "1"; }, 10);
    } else {
      backToTop.style.opacity = "0";
      setTimeout(() => { if(backToTop.style.opacity === "0") backToTop.style.display = "none"; }, 300);
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==== Chatbase Bot (Cleaned) ====
(function() {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) { window.chatbase.q = [] }
      window.chatbase.q.push(arguments)
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") { return target.q }
        return (...args) => target(prop, ...args)
      }
    })
  }
  const onLoad = function() {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "PqFanbRcUsOq5CQLImFkx";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script)
  };
  if (document.readyState === "complete") { onLoad() } 
  else { window.addEventListener("load", onLoad) }
})();
