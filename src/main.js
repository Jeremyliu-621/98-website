import "./style.css";

// Import Windows 98 CSS styles
import "98.css";

// Register 98-components web components + styles
import "98-components";

// Import all images from src/images
const images = import.meta.glob('./images/*.*', { eager: true });

// Helper to get image URL by filename (partial match)
function getImageUrl(filename) {
  for (const path in images) {
    if (path.includes(filename)) {
      return images[path].default;
    }
  }
  return null;
}

// ============================================
// EDIT YOUR CONTENT HERE - Everything below is easy to customize!
// ============================================

const content = {
  aboutMe: {
    name: "Jeremy Liu",
    title: "Computer Engineer Undergrad @ UofT",
    bio: "I am dedicated to inspiring people and creating positive spaces around the world.",
    currentActivities: [
      "Building personal tools & student projects",
      "Expanding my knowledge in object-oriented programming",
      "Learning full-stack web dev",
      "Exploring robotics and AI",
    ],
  },
  skills: {
    languages: "Python, JavaScript, TypeScript, HTML, CSS, Swift",
    frameworks: "Bootstrap, Email.js, React.js, Matplotlib, Tkinter, Tailwind",
    tools: "Git, Visual Studio Code, Cursor.ai",
    improvingBy: [
      "Applying knowledge to create useful projects",
      "Learning more back-end frameworks",
      "Using AI to create smarter applications",
    ],
  },
  projects: [
    {
      title: "stop! don't go on.",
      description:
        "An Arduino setup that tracks you with OpenCV that triggers a water sprayer and prompts email.js.",
      front: "React, Vite, TypeScript",
      back: "Python + Flask, OpenCV, PySerial, Pygame",
      image: "stop_dont_go_on",
    },
    {
      title: "Binder",
      description: "Makes thrifting a swipe-based interface.",
      image: "binder_action",
    },
    {
      title: "UFC Elo Calculator",
      description: "Calculates and displays UFC elos and stats.",
      image: "ufc_elo",
    },
    {
      title: "RREF Calculator",
      description: "A helping hand to linear algebra.",
      image: "rref_calculator",
    },
    {
      title: "Portfolio Website",
      description: "A page that displays everything about me.",
      image: "portfolio-website-cover",
    },
    {
      title: "Cookie Clicker Bot",
      description: "Bot that clicks cookies and buys upgrades!",
      image: "do you even",
    },
  ],
  hobbies:
    "I create origami, train Brazilian Jiu-Jitsu, write (legal) graffiti, and longboard.",
};

// Helper function to create project HTML
function createProjectHTML(project) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div style="margin: 4px 0; padding: 5px; border: 1px solid #808080; background: #f0f0f0; display: flex; gap: 8px; align-items: flex-start;">
      <div style="flex: 1; min-width: 0;">
        <h4 style="margin-top: 0; margin-bottom: 3px; font-size: 0.85em; font-weight: bold;">${project.title}</h4>
        <p style="margin: 2px 0; font-size: 0.8em;">${project.description}</p>`;

  if (project.front || project.back) {
    html += `
      <p style="margin: 3px 0 0 0; color: #666; font-size: 0.75em;">
        ${project.front ? `<strong>Front:</strong> ${project.front}<br>` : ""}
        ${project.back ? `<strong>Back:</strong> ${project.back}` : ""}
      </p>`;
  }

  html += `</div>`;

  if (imgUrl) {
    html += `<img src="${imgUrl}" style="width: 80px; height: auto; border: 1px solid #808080; object-fit: cover;" alt="${project.title}">`;
  }

  html += `</div>`;
  return html;
}

// Function to initialize the app
function initApp() {
  const app = document.querySelector("#app");
  if (!app) {
    // If app doesn't exist yet, wait a bit and try again
    setTimeout(initApp, 50);
    return;
  }

  // Build the HTML using the content object
  const projectsHTML = content.projects.map(createProjectHTML).join("");
  const activitiesHTML = content.aboutMe.currentActivities
    .map((activity) => `<li>${activity}</li>`)
    .join("");
  const improvingHTML = content.skills.improvingBy
    .map((item) => `<li>${item}</li>`)
    .join("");

  app.innerHTML = `
    <win98-desktop>
      <!-- About Me Window - Top Left -->
      <win98-window title="About Me.exe" resizable style="top: 20px; left: 20px; width: 280px; height: 240px;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
          <h2 style="margin-top: 0; font-size: 1.3em; font-weight: bold; margin-bottom: 3px;">${content.aboutMe.name}</h2>
          <p style="font-weight: bold; margin: 3px 0; font-size: 0.9em;">${content.aboutMe.title}</p>
          <p style="margin: 5px 0; line-height: 1.3; font-size: 0.8em;">${content.aboutMe.bio}</p>
          <img src="${getImageUrl('cruisesunset') || ''}" alt="Cruise Sunset" style="width: 100%; margin: 8px 0; border: 2px solid #808080; box-sizing: border-box; display: block;">
          <hr style="margin: 5px 0;">
          <h3 style="margin-top: 5px; margin-bottom: 3px; font-size: 0.85em;">I am currently:</h3>
          <ul style="text-align: left; margin: 3px 0; padding-left: 16px; line-height: 1.2; font-size: 0.8em;">
            ${activitiesHTML}
          </ul>
        </div>
      </win98-window>

      <!-- Skills Window - Top Right -->
      <win98-window title="Skills.exe" resizable style="top: 20px; left: 320px; width: 260px; height: 240px;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
          <h3 style="margin-top: 0; margin-bottom: 3px; font-size: 0.85em;">Languages</h3>
          <p style="margin: 2px 0; font-size: 0.8em;">${content.skills.languages}</p>
          
          <hr style="margin: 5px 0;">
          
          <h3 style="margin-top: 5px; margin-bottom: 3px; font-size: 0.85em;">Frameworks</h3>
          <p style="margin: 2px 0; font-size: 0.8em;">${content.skills.frameworks}</p>
          
          <hr style="margin: 5px 0;">
          
          <h3 style="margin-top: 5px; margin-bottom: 3px; font-size: 0.85em;">Tools</h3>
          <p style="margin: 2px 0; font-size: 0.8em;">${content.skills.tools}</p>
          
          <hr style="margin: 5px 0;">
          
          <h3 style="margin-top: 5px; margin-bottom: 3px; font-size: 0.85em;">Currently improving by:</h3>
          <ul style="text-align: left; margin: 3px 0; padding-left: 16px; line-height: 1.2; font-size: 0.8em;">
            ${improvingHTML}
          </ul>
        </div>
      </win98-window>

      <!-- Projects Window - Bottom Left -->
      <win98-window title="My Projects.exe" resizable style="top: 280px; left: 20px; width: 280px; height: 240px;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
          <h3 style="margin-top: 0; margin-bottom: 5px; font-size: 0.85em;">My Projects</h3>
          ${projectsHTML}
        </div>
      </win98-window>

      <!-- Hobbies Window - Bottom Right -->
      <win98-window title="Hobbies.exe" resizable style="top: 280px; left: 320px; width: 260px; height: 240px;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
          <h3 style="margin-top: 0; margin-bottom: 5px; font-size: 0.85em;">Outside of Academics</h3>
          <p style="margin: 5px 0; line-height: 1.3; font-size: 0.8em;">${content.hobbies}</p>
        </div>
      </win98-window>

      <!-- Image Gallery Window - Initially Hidden -->
      <win98-window title="Image Gallery.exe" resizable style="display: none; top: 50px; left: 50px; width: 400px; height: 350px;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; display: flex; flex-direction: column; gap: 10px;">
          <p style="margin: 0 0 5px 0; font-size: 0.85em;">A collection of my captured moments and project screenshots.</p>
          ${Object.values(images).map(mod => `<div style="border: 1px solid #fff; box-shadow: 1px 1px 0 #000; padding: 2px; background: #c0c0c0;"><img src="${mod.default}" style="width: 100%; display: block;" loading="lazy"></div>`).join('')}
        </div>
      </win98-window>

      <!-- Taskbar at the bottom -->
      <win98-taskbar slot="taskbar"></win98-taskbar>
    </win98-desktop>

    <!-- Start Menu -->
    <div id="start-menu" class="window" style="display: none; position: fixed; bottom: 40px; left: 0; width: 200px; z-index: 10000;">
      <div class="title-bar">
        <div class="title-bar-text">Start Menu</div>
      </div>
      <div class="window-body">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-programs">📁 Programs</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-documents">📄 Documents</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-gallery">🖼️ Image Gallery</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-settings">⚙️ Settings</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-find">🔍 Find</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-help">❓ Help</li>
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-run">▶️ Run...</li>
          <hr style="margin: 4px 0;">
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-shutdown">⏻ Shut Down...</li>
        </ul>
      </div>
    </div>
  `;

  // Wait for custom elements to be defined
  setTimeout(() => {
    // Note: Removed window body update code that was interfering with dragging
    // The inline styles in the HTML should handle overflow correctly

    // Start menu functionality
    const startMenu = document.querySelector("#start-menu");
    const taskbar = document.querySelector("win98-taskbar");

    // Find the start button in the taskbar (handles shadow DOM)
    const findStartButton = () => {
      if (!taskbar) return null;

      // Try shadow root first
      if (taskbar.shadowRoot) {
        const shadowButton = taskbar.shadowRoot.querySelector(
          "button, [role='button'], .start-button"
        );
        if (shadowButton) return shadowButton;
      }

      // Try regular query
      const regularButton = taskbar.querySelector(
        "button, [role='button'], .start-button"
      );
      if (regularButton) return regularButton;

      // Try to find by text content
      const allButtons = taskbar.querySelectorAll("button");
      for (const btn of allButtons) {
        if (btn.textContent.toLowerCase().includes("start")) {
          return btn;
        }
      }

      return null;
    };

    // Toggle start menu function
    const toggleStartMenu = (e) => {
      if (e) e.stopPropagation();
      if (startMenu) {
        const isVisible = startMenu.style.display !== "none";
        startMenu.style.display = isVisible ? "none" : "block";
      }
    };

    // Try to find start button after a delay to ensure taskbar is rendered
    setTimeout(() => {
      const startButton = findStartButton();
      if (startButton) {
        startButton.addEventListener("click", toggleStartMenu);
      } else {
        // Fallback: listen for clicks on the taskbar itself
        if (taskbar) {
          taskbar.addEventListener("click", (e) => {
            // Check if click is on the left side (where start button would be)
            const rect = taskbar.getBoundingClientRect();
            if (e.clientX < rect.left + 100) {
              toggleStartMenu(e);
            }
          });
        }
      }
    }, 500);

    // Close start menu when clicking outside
    document.addEventListener("click", (e) => {
      if (startMenu && !startMenu.contains(e.target)) {
        const startButton = findStartButton();
        if (startButton && !startButton.contains(e.target)) {
          startMenu.style.display = "none";
        }
      }
    });

    // Start menu item click handlers
    const menuItems = {
      "menu-programs": () => {
        // Open Projects window
        const projectsWindow = document.querySelector(
          'win98-window[title="My Projects.exe"]'
        );
        if (projectsWindow) {
          projectsWindow.style.display = "block";
          projectsWindow.style.zIndex = "1000";
        }
      },
      "menu-documents": () => {
        // Open Skills window
        const skillsWindow = document.querySelector(
          'win98-window[title="Skills.exe"]'
        );
        if (skillsWindow) {
          skillsWindow.style.display = "block";
          skillsWindow.style.zIndex = "1000";
        }
      },
      "menu-gallery": () => {
        // Open Gallery window
        const galleryWindow = document.querySelector(
          'win98-window[title="Image Gallery.exe"]'
        );
        if (galleryWindow) {
          galleryWindow.style.display = "block";
          galleryWindow.style.zIndex = "1000";
        }
      },
      "menu-settings": () => alert("Settings - Coming soon!"),
      "menu-find": () => {
        const search = prompt("What would you like to find?");
        if (search) {
          alert(
            `Searching for: ${search}\n(Search functionality coming soon!)`
          );
        }
      },
      "menu-help": () => {
        alert(
          "Welcome to Jeremy Liu's Portfolio!\n\nUse the Start menu to navigate.\nAll windows are resizable and draggable."
        );
      },
      "menu-run": () => {
        const command = prompt(
          "Type the name of a program, folder, document, or Internet resource, and Windows will open it for you."
        );
        if (command) {
          alert(`Running: ${command}\n(Command execution coming soon!)`);
        }
      },
      "menu-shutdown": () => {
        if (confirm("Are you sure you want to shut down?")) {
          alert("Shutting down...\n\nThanks for visiting!");
        }
      },
    };

    Object.keys(menuItems).forEach((id) => {
      const item = document.querySelector(`#${id}`);
      if (item) {
        item.addEventListener("click", () => {
          startMenu.style.display = "none";
          menuItems[id]();
        });
        // Add hover effect
        item.addEventListener("mouseenter", () => {
          item.style.backgroundColor = "#000080";
          item.style.color = "#fff";
        });
        item.addEventListener("mouseleave", () => {
          item.style.backgroundColor = "transparent";
          item.style.color = "inherit";
        });
      }
    });
  }, 100);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  // DOM is already ready
  initApp();
}
