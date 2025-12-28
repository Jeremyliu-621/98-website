// Projects window component
// Imports from main.js
import { getImageUrl, content } from "../main.js";

// Helper function to create project HTML (for list view)
export function createProjectHTML(project, index) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div class="project-card">
      <div class="project-card-content">
        <h3 class="project-card-title">${project.title}</h3>`;

  // Add image right after title if it exists
  if (imgUrl) {
    html += `<img src="${imgUrl}" class="project-list-image" alt="${project.title}">`;
  }

  html += `<p class="project-card-description">${project.description}</p>`;

  if (project.front || project.back) {
    html += `
      <p class="project-card-stack">
        ${project.front ? `<strong>Front:</strong> ${project.front}<br>` : ""}
        ${project.back ? `<strong>Back: </strong> ${project.back}` : ""}
      </p>`;
  }

  // Add website, GitHub, and Specifics buttons - all buttons same size (120px)
  const buttonWidth = "120px";

  html += `
      <div class="project-card-buttons">
        ${
          project.website
            ? `
          <a href="${
            project.website
          }" target="_blank" rel="noopener noreferrer" class="social-btn" style="width: ${buttonWidth};"><img src="${
                getImageUrl("website-icon") || ""
              }" alt="Website"> Website</a>
        `
            : ""
        }
        ${
          project.github
            ? `
          <a href="${
            project.github
          }" target="_blank" rel="noopener noreferrer" class="social-btn" style="width: ${buttonWidth};"><img src="${
                getImageUrl("github-icon") || ""
              }" alt="GitHub"> GitHub</a>
        `
            : ""
        }
          <a href="#" class="project-specifics-btn social-btn" data-project-index="${index}" style="width: ${buttonWidth};"><img src="${
    getImageUrl("specifics-icon") || ""
  }" alt="Specifics"> Specifics</a>
      </div>`;

  html += `</div></div>`;
  return html;
}

// Function to create HTML for a single project view (for tabs)
export function createSingleProjectHTML(project) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div class="project-single">
      <h1 class="project-single-title">${project.title}</h1>`;

  // Image
  if (imgUrl) {
    html += `
      <img src="${imgUrl}" class="project-single-image" alt="${project.title}">`;
  }

  // Stack (Front/Back)
  if (project.front || project.back) {
    html += `
      <div class="project-section">
        <h3 class="project-section-title">Stack</h3>
        <br>
        <p class="project-section-stack">
          ${
            project.front ? `<strong>Front: </strong> ${project.front}<br>` : ""
          }
          ${project.back ? `<strong>Back: </strong> ${project.back}` : ""}
        </p>
      </div>`;
  }

  // Description
  html += `
      <div class="project-section">
        <h3 class="project-section-title">Description</h3>
        <p class="project-section-content">${project.description}</p>
      </div>`;

  // Additional Information
  if (project.additionalInfo) {
    html += `
      <div class="project-section">
        <h3 class="project-section-title">Additional Information</h3>
        <div class="project-section-content" style="font-size: 1.2em">${project.additionalInfo}</div>
      </div>`;
  }

  // Website, GitHub, and All buttons - all same size (140px)
  const buttonWidth = "140px";

  html += `
      <div class="project-single-buttons">
        ${
          project.website
            ? `
          <a href="${
            project.website
          }" target="_blank" rel="noopener noreferrer" class="social-btn" style="font-size: 20px; width: ${buttonWidth};"><img src="${
                getImageUrl("website-icon") || ""
              }" alt="Website"> Website</a>
        `
            : ""
        }
        ${
          project.github
            ? `
          <a href="${
            project.github
          }" target="_blank" rel="noopener noreferrer" class="social-btn" style="font-size: 20px; width: ${buttonWidth};"><img src="${
                getImageUrl("github-icon") || ""
              }" alt="GitHub"> GitHub</a>
        `
            : ""
        }
        <a href="#" class="project-all-btn social-btn" style="font-size: 20px; width: ${buttonWidth};"><img src="${
    getImageUrl("all-icon") || ""
  }" alt="All"> All</a>
      </div>`;

  html += `</div>`;
  return html;
}

// Function to generate projects window HTML
export function generateProjectsWindowHTML(projectsHTML) {
  return `
      <!-- Projects Window - Right -->
      <win98-window title="My Projects.exe" resizable class="window-projects">
        <div class="window-body">
          <!-- Tabs -->
          <div class="projects-tabs">
            <button class="project-tab active" data-tab="all">
              All
            </button>
            ${content.projects
              .map(
                (project, index) => `
              <button class="project-tab" data-tab="${index}" style="min-width: 80px;">
                ${
                  project.title.length > 12
                    ? project.title.substring(0, 12) + "..."
                    : project.title
                }
              </button>
            `
              )
              .join("")}
          </div>
          
          <!-- Tab Content -->
          <div class="projects-tab-content">
            <!-- All Projects Tab (default) -->
            <div class="tab-pane active" data-tab-content="all">
              <h1 style="margin-top: 0; margin-bottom: 5px;">My Projects</h1>
              ${projectsHTML}
            </div>
            
            <!-- Individual Project Tabs -->
            ${content.projects
              .map(
                (project, index) => `
              <div class="tab-pane" data-tab-content="${index}" style="display: none;">
                ${createSingleProjectHTML(project)}
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </win98-window>
    `;
}

// Function to initialize project tabs (event listeners and tab switching)
export function initProjectTabs() {
  setTimeout(() => {
    const projectTabs = document.querySelectorAll(".project-tab");
    const tabPanes = document.querySelectorAll(".tab-pane");
    const tabsContainer = document.querySelector(".projects-tabs");

    // Enable horizontal scrolling via mouse wheel even without visible scrollbar
    if (tabsContainer) {
      tabsContainer.addEventListener(
        "wheel",
        (e) => {
          if (Math.abs(e.deltaY) > 0) {
            e.preventDefault();
            tabsContainer.scrollLeft += e.deltaY;
          }
        },
        { passive: false }
      );
    }

    // Initialize active tab styling - CSS handles the pressed appearance
    projectTabs.forEach((tab) => {
      // Remove any inline border styles to let CSS handle it
      if (!tab.classList.contains("active")) {
        tab.style.border = "none";
        tab.style.borderRight = "1px solid #808080";
      }
    });

    // Function to switch tabs
    const switchTab = (tabId) => {
      // Remove active class from all tabs and panes
      projectTabs.forEach((t) => {
        t.classList.remove("active");
        t.style.background = "#c0c0c0";
        t.style.border = "none";
        t.style.borderRight = "1px solid #808080";
      });
      tabPanes.forEach((p) => {
        p.classList.remove("active");
        p.style.display = "none";
      });

      // Find and activate the target tab
      const targetTab = document.querySelector(
        `.project-tab[data-tab="${tabId}"]`
      );
      if (targetTab) {
        targetTab.classList.add("active");
        targetTab.style.background = "#c0c0c0";
        targetTab.style.border = "none";
      }

      const activePane = document.querySelector(
        `.tab-pane[data-tab-content="${tabId}"]`
      );
      if (activePane) {
        activePane.classList.add("active");
        activePane.style.display = "block";
      }

      // Reapply theme colors to buttons after tab switch
      setTimeout(() => {
        const savedPalette = localStorage.getItem("colorPalette");
        if (savedPalette && savedPalette !== "default") {
          const savedPaletteColors = localStorage.getItem("paletteColors");
          if (savedPaletteColors) {
            try {
              const colors = JSON.parse(savedPaletteColors);
              document
                .querySelectorAll(
                  "button, .social-btn, a[href*='github'], a[href*='http']"
                )
                .forEach((btn) => {
                  btn.style.backgroundColor = colors[0] || "#c0c0c0";
                  btn.style.color = colors[3] || "#ffffff";
                });
            } catch (e) {
              console.warn("Failed to reapply theme:", e);
            }
          }
        } else {
          document
            .querySelectorAll(
              "button, .social-btn, a[href*='github'], a[href*='http']"
            )
            .forEach((btn) => {
              btn.style.backgroundColor = "#c0c0c0";
              btn.style.color = "#000000";
            });
        }
      }, 10);
    };

    projectTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabId = tab.getAttribute("data-tab");
        switchTab(tabId);
      });
    });

    // Handle "Specifics" button clicks in All tab
    document.querySelectorAll(".project-specifics-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectIndex = btn.getAttribute("data-project-index");
        switchTab(projectIndex);
      });
    });

    // Handle "All" button clicks in individual project tabs
    document.querySelectorAll(".project-all-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("all");
      });
    });
  }, 100);
}
