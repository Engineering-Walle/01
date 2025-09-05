
const element = document.getElementById("typing");
const text = "Engineering Walle";
let i = 0;
let forward = true;

function typeEffect() {
  if (forward) {
    element.innerHTML = text.slice(0, i) + "<span></span>";
    i++;
    if (i > text.length) {
      forward = false;
      setTimeout(typeEffect, 1500); // pause at end
      return;
    }
  } else {
    element.innerHTML = text.slice(0, i) + "<span></span>";
    i--;
    if (i < 0) {
      forward = true;
      i = 0;
    }
  }
  setTimeout(typeEffect, forward ? 150 : 100); // typing & deleting speed
}

typeEffect();


(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="PqFanbRcUsOq5CQLImFkx";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();



/* ---------------- NAVBAR TOGGLE ---------------- */
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navOverlay = document.querySelector(".nav-overlay");
const body = document.body;

if (navToggle) navToggle.addEventListener("click", () => body.classList.add("nav-open"));
if (navClose) navClose.addEventListener("click", () => body.classList.remove("nav-open"));
if (navOverlay) navOverlay.addEventListener("click", () => body.classList.remove("nav-open"));

/* ---------------- IMAGE SLIDER ---------------- */
const slides = document.getElementById('slides');
if (slides) {
  const totalSlides = slides.children.length;
  let index = 0;
  let interval;

  function showSlide(i) {
    if (i < 0) i = totalSlides - 1;
    if (i >= totalSlides) i = 0;
    index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(index - 1);
      resetInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(index + 1);
      resetInterval();
    });
  }

  function autoSlide() {
    showSlide(index + 1);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 1500);
  }

  interval = setInterval(autoSlide, 1500);
}

  // Show button after scrolling
    window.onscroll = function() {
      let btn = document.getElementById("goTopBtn");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Scroll to top smoothly
    function goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
const openBtn = document.getElementById("openFeedbackBtn");
const closeBtn = document.getElementById("closeFeedbackBtn");
const popup = document.getElementById("feedbackPopup");
const form = document.getElementById("feedbackForm");
const thankYouMsg = document.getElementById("thankYouMsg");

openBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

// Form submit
form.addEventListener("submit", async function(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    form.style.display = "none";
    thankYouMsg.style.display = "block";
    setTimeout(()=> { 
      popup.style.display = "none"; 
      form.style.display = "block"; 
      thankYouMsg.style.display = "none"; 
      form.reset();
    }, 2500);
  }
});