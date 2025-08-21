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
      "Semester 1": ["C Notes", "Math Notes", "Physics Notes"],
      "Semester 2": ["DS Notes", "OOP Notes"],
    },
    "ME": {
      "Semester 1": ["Mechanics Notes", "Math Notes"],
      "Semester 2": ["Thermo Notes", "Workshop Notes"],
    },
    "EE": {
      "Semester 1": ["Basic Electrical Notes", "Math Notes"],
      "Semester 2": ["Circuit Theory Notes", "Machines Notes"],
    },
    "ECE": {
      "Semester 1": ["Electronics Basics", "Math Notes"],
      "Semester 2": ["Digital Electronics", "Communication Basics"],
    },
    "CE": {
      "Semester 1": ["Engineering Drawing", "Math Notes"],
      "Semester 2": ["Surveying Notes", "Construction Materials"],
    },
    "CHE": {
      "Semester 1": ["Chemistry Notes", "Math Notes"],
      "Semester 2": ["Process Engineering", "Thermo for Chem Engg"],
    },
    "IT": {
      "Semester 1": ["C Programming", "Math Notes"],
      "Semester 2": ["Web Development", "Database Notes"],
    },
    "AE": {
      "Semester 1": ["Aerodynamics Basics", "Math Notes"],
      "Semester 2": ["Aircraft Structures", "Propulsion Notes"],
    },
    "MIN": {
      "Semester 1": ["Mining Basics", "Math Notes"],
      "Semester 2": ["Mine Surveying", "Geology Notes"],
    },
    "PT": {
      "Semester 1": ["Production Basics", "Math Notes"],
      "Semester 2": ["Manufacturing Tech", "Tool Design Notes"],
    }
  };

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

  window.showNotes = function (branch, semester) {
    document.getElementById("semesterSection").classList.add("hidden");
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    (notesData[branch][semester] || ["No Notes Available"]).forEach(note => {
      const li = document.createElement("li");
      li.textContent = note;
      notesList.appendChild(li);
    });
    document.getElementById("semesterTitle").textContent = branch + " - " + semester + " Notes";
    document.getElementById("notesSection").classList.remove("hidden");
  }

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
;



