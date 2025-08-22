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
        {name: "FEEE Notes ✅", url: "notes/cse/sem2/ds.pdf" },
        { name:"ENV. Notes ✅", url: "notes/cse/sem2/oop.pdf" }
      ]
    },
    "ME": {
      "Semester 1": [
        { name: "Mechanics Notes", url: "notes/me/sem1/mechanics.pdf" },
        { name: "Math Notes", url: "notes/me/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Thermo Notes", url: "notes/me/sem2/thermo.pdf" },
        { name: "Workshop Notes", url: "notes/me/sem2/workshop.pdf" }
      ]
    },
    "EE": {
      "Semester 1": [
        { name: "Basic Electrical Notes", url: "notes/ee/sem1/basic-electrical.pdf" },
        { name: "Math Notes", url: "notes/ee/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Circuit Theory Notes", url: "notes/ee/sem2/circuit.pdf" },
        { name: "Machines Notes", url: "notes/ee/sem2/machines.pdf" }
      ]
    },
    "ECE": {
      "Semester 1": [
        { name: "Electronics Basics", url: "notes/ece/sem1/electronics.pdf" },
        { name: "Math Notes", url: "notes/ece/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Digital Electronics", url: "notes/ece/sem2/digital.pdf" },
        { name: "Communication Basics", url: "notes/ece/sem2/comm.pdf" }
      ]
    },
    "CE": {
      "Semester 1": [
        { name: "Engineering Drawing", url: "notes/ce/sem1/drawing.pdf" },
        { name: "Math Notes", url: "notes/ce/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Surveying Notes", url: "notes/ce/sem2/survey.pdf" },
        { name: "Construction Materials", url: "notes/ce/sem2/materials.pdf" }
      ]
    },
    "CHE": {
      "Semester 1": [
        { name: "Chemistry Notes", url: "notes/che/sem1/chemistry.pdf" },
        { name: "Math Notes", url: "notes/che/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Process Engineering", url: "notes/che/sem2/process.pdf" },
        { name: "Thermo for Chem Engg", url: "notes/che/sem2/thermo.pdf" }
      ]
    },
    "IT": {
      "Semester 1": [
        { name: "C Programming", url: "notes/it/sem1/c.pdf" },
        { name: "Math Notes", url: "notes/it/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Web Development", url: "notes/it/sem2/webdev.pdf" },
        { name: "Database Notes", url: "notes/it/sem2/db.pdf" }
      ]
    },
    "AE": {
      "Semester 1": [
        { name: "Aerodynamics Basics", url: "notes/ae/sem1/aero.pdf" },
        { name: "Math Notes", url: "notes/ae/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Aircraft Structures", url: "notes/ae/sem2/structures.pdf" },
        { name: "Propulsion Notes", url: "notes/ae/sem2/propulsion.pdf" }
      ]
    },
    "MIN": {
      "Semester 1": [
        { name: "Mining Basics", url: "notes/min/sem1/mining.pdf" },
        { name: "Math Notes", url: "notes/min/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Mine Surveying", url: "notes/min/sem2/survey.pdf" },
        { name: "Geology Notes", url: "notes/min/sem2/geology.pdf" }
      ]
    },
    "PT": {
      "Semester 1": [
        { name: "Production Basics", url: "notes/pt/sem1/production.pdf" },
        { name: "Math Notes", url: "notes/pt/sem1/math.pdf" }
      ],
      "Semester 2": [
        { name: "Manufacturing Tech", url: "notes/pt/sem2/manufacturing.pdf" },
        { name: "Tool Design Notes", url: "notes/pt/sem2/tool.pdf" }
      ]
    }
  };

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
  }

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
  }

  // back button
  window.goBack = function (level) {
    if (level === "branch") {
      document.getElementById("semesterSection").classList.add("hidden");
      document.getElementById("branchList").classList.remove("hidden");
    } else if (level === "semester") {
      document.getElementById("notesSection").classList.add("hidden");
      document.getElementById("semesterSection").classList.remove("hidden");
    }
  }

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