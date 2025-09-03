
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


document.addEventListener("DOMContentLoaded", function () {

  /* ---------------- BRANCH -> SEMESTER -> NOTES ---------------- */
  const semesterListArray = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];

  const semesterData = {
    "CSE": [...semesterListArray],
    "ME": [...semesterListArray],
    "EE": [...semesterListArray],
    "ECE": [...semesterListArray],
    "CE": [...semesterListArray],
    "CHE": [...semesterListArray],
    "IT": [...semesterListArray],
    "AE": [...semesterListArray],
    "MIN": [...semesterListArray],
    "PT": [...semesterListArray]
  };

  const notesData = {
    "CSE": {
      "Semester 1": [
        { name: "C Notes", url: "notes/cse/sem1/c.pdf" },
        { name: "Math Notes", url: "notes/cse/sem1/math.pdf" },
        { name: "Physics Notes", url: "notes/cse/sem1/physics.pdf" }
      ],
      "Semester 2": [
        { name: "Python Notes ✅", url: "https://drive.google.com/drive/folders/1KWVW-3OHnlRnA_DOyrkMUrjewXePZLRz" },
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "ME": {
      "Semester 1": [
        { name: "Mechanics Notes", url: "notes/me/sem1/mechanics.pdf" },
        { name: "Math Notes", url: "notes/me/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "EE": {
      "Semester 1": [
        { name: "Basic Electrical Notes", url: "notes/ee/sem1/basic-electrical.pdf" },
        { name: "Math Notes", url: "notes/ee/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "ECE": {
      "Semester 1": [
        { name: "Electronics Basics", url: "notes/ece/sem1/electronics.pdf" },
        { name: "Math Notes", url: "notes/ece/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "CE": {
      "Semester 1": [
        { name: "Engineering Drawing", url: "notes/ce/sem1/drawing.pdf" },
        { name: "Math Notes", url: "notes/ce/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "CHE": {
      "Semester 1": [
        { name: "Chemistry Notes", url: "notes/che/sem1/chemistry.pdf" },
        { name: "Math Notes", url: "notes/che/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "IT": {
      "Semester 1": [
        { name: "C Programming", url: "notes/it/sem1/c.pdf" },
        { name: "Math Notes", url: "notes/it/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "AE": {
      "Semester 1": [
        { name: "Aerodynamics Basics", url: "notes/ae/sem1/aero.pdf" },
        { name: "Math Notes", url: "notes/ae/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "MIN": {
      "Semester 1": [
        { name: "Mining Basics", url: "notes/min/sem1/mining.pdf" },
        { name: "Math Notes", url: "notes/min/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    },
    "PT": {
      "Semester 1": [
        { name: "Production Basics", url: "notes/pt/sem1/production.pdf" },
        { name: "Math Notes", url: "notes/pt/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "FEEE Notes ✅", url: "https://drive.google.com/drive/folders/1NTwCXOe5Pw6yywrpdvPKGVKU3d59nP2o" },
        { name: "ENV Notes ✅", url: "https://drive.google.com/drive/folders/1NW5unmGX_lOIF8DzvqMpL5piKas60n4j" },
        { name: "Statistics Notes ✅", url: "https://drive.google.com/drive/folders/1NYyi2VjFC8yN6-G8cuVxB_RGsm0YN5fl" },
        { name: "Project Management Notes ✅", url: "https://drive.google.com/drive/folders/1NIrwyfOYfrvQjWw7KbL23RB5t0Q_1Syo" }
      ]
    }
  }; // ✅ CLOSE notesData here

  // show semesters
  window.showSemesters = function (branch) {
    document.getElementById("branchList").classList.add("hidden");
    const semesterList = document.getElementById("semesterList");
    semesterList.innerHTML = "";

    semesterData[branch].forEach(sem => {
      const li = document.createElement("li");
      li.textContent = sem;
      li.onclick = () => showNotes(branch, sem);
      semesterList.appendChild(li);
    });

    document.getElementById("branchTitle").textContent = branch + " - Select Semester";
    document.getElementById("semesterSection").classList.remove("hidden");
  };

  // show notes
  window.showNotes = function (branch, semester) {
    document.getElementById("semesterSection").classList.add("hidden");
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    (notesData[branch][semester] || [{ name: "No Notes Available", url: "#" }]).forEach(note => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = note.name;
      a.href = note.url;
      a.target = "_blank"; // open in new tab
      li.appendChild(a);
      notesList.appendChild(li);
    });

    document.getElementById("semesterTitle").textContent = branch + " - " + semester + " Notes";
    document.getElementById("notesSection").classList.remove("hidden");
  };

  // back button
  window.goBack = function (level) {
    if (level === "branch") {
      document.getElementById("semesterSection").classList.add("hidden");
      document.getElementById("branchList").classList.remove("hidden");
    } else if (level === "semester") {
      document.getElementById("notesSection").classList.add("hidden");
      document.getElementById("semesterSection").classList.remove("hidden");
    }
  };

});

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