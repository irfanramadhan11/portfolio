const projectsGrid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" class="project-img">
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-tech">
        ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
      </div>

      <a href="${project.link}" class="project-link" target="_blank">
        Lihat Detail
      </a>
    </div>
  `;
  
  projectsGrid.appendChild(card);
});

/* =========================================================
   PROJECT IMAGE PREVIEW
========================================================= */
const projectPreview = document.getElementById("projectPreview");
const projectPreviewImg = document.getElementById("previewImage");
const projectPreviewClose = document.getElementById("previewClose");

if (projectPreview && projectPreviewImg && projectPreviewClose) {
  // buka preview saat klik gambar project
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-img")) {
      projectPreview.style.display = "flex";
      projectPreviewImg.src = e.target.src;
    }
  });

  // klik tombol close
  projectPreviewClose.addEventListener("click", function () {
    projectPreview.style.display = "none";
  });

  // klik area luar gambar
  projectPreview.addEventListener("click", function (e) {
    if (!e.target.closest(".preview-wrapper")) {
      projectPreview.style.display = "none";
    }
  });
}

/* =========================================================
   HERO CV PREVIEW (MOBILE FRIENDLY)
========================================================= */
const openCV = document.getElementById("openCV");
const cvPreview = document.getElementById("cvPreview");

if (openCV && cvPreview) {
  // buka CV
  openCV.addEventListener("click", function (e) {
    e.preventDefault();
    cvPreview.style.display = "flex";
  });

  // klik area gelap (luar CV) untuk close
  cvPreview.addEventListener("click", function (e) {
    if (!e.target.closest(".cv-wrapper")) {
      cvPreview.style.display = "none";
    }
  });
}



