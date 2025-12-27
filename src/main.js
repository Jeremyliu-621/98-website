import "./style.css";

// Import Windows 98 CSS styles
import "98.css";

// Register 98-components web components + styles
import "98-components";

// Import all images from src/assets
const images = import.meta.glob("./assets/*.*", { eager: true });

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
      github: "https://github.com/Jeremyliu-621/stop-dont-go-on", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "Binder",
      description:
        "Binder transforms traditional marketplace browsing into an intuitive, swipe-based interface.",
      front: "Next.js, Typescript, Tailwind, Vite",
      back: "Python, Beautifulsoup, Selenium",
      image: "binder_action",
      github: "https://github.com/Jeremyliu-621/binder", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "UFC Index website",
      description:
        "A website that shows elos for UFC Fighters. Calculated with pandas with information scraped by Beautifulsoup.",
      front: "Next.js, React, Typescript, Tailwind",
      back: "Python, Pandas, BeautifulSoup",
      image: "ufc_elo",
      github: "https://github.com/Jeremyliu-621/UFC-Elo-Calculator", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "RREF Calculator",
      description: "A helping hand to linear algebra.",
      image: "rref_calculator",
      github: "https://github.com/Jeremyliu-621/RREF-calculator", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "Portfolio Website 1",
      description: "A page that displays everything about me.",
      image: "portfolio-website-cover",
      github: "https://github.com/Jeremyliu-621/portfolio-works", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "Cookie Clicker Bot",
      description: "Bot that clicks cookies and buys upgrades!",
      image: "do you even",
      github: "https://github.com/Jeremyliu-621/cookie-clicker", // Add your GitHub URL here, or leave as null for no button
    },
  ],
  hobbies:
    "I create origami, train Brazilian Jiu-Jitsu, write (legal) graffiti, and longboard.",
  // ============================================
  // BLOG POSTS - Easy to add more posts!
  // ============================================
  // To add a new blog post, copy the structure below and paste it into the array
  // Each post can have:
  //   - title: The post title
  //   - date: Publication date (any format you want)
  //   - image: Image filename (without extension, from assets folder) or null
  //   - text: The blog post content (can use HTML for formatting)
  blogPosts: [
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    {
      title: "Welcome to My Blog",
      date: "January 2025",
      image: null, // Set to image filename (without extension) or null for no image
      text: "Just made this website using 98-components and Windows 98 elements. Aided with Cursor.ai and Gemini.\nAlso just finished first semester at UofT. It was quite rough, but I'm glad I made it through and want to make the most of my time there. Coding more nowadays to make up for my bad grades.",
    },
    // Add more posts below by copying the structure above
    // Example:
    // {
    //   title: "My Second Post",
    //   date: "February 2025",
    //   image: "bear", // This would use bear.gif from assets
    //   text: "Here's another post with an image!",
    // },
  ],
};

// Helper function to create project HTML
function createProjectHTML(project) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div style="margin: 4px 0; padding: 5px; border: 1px solid #808080; background: #f0f0f0; display: flex; gap: 8px; align-items: flex-start;">
      <div style="flex: 1; min-width: 0;">
        <h4 style="margin-top: 0; margin-bottom: 3px; font-weight: bold;">${project.title}</h4>
        <p style="margin: 2px 0;">${project.description}</p>`;

  if (project.front || project.back) {
    html += `
      <p style="margin: 3px 0 0 0; color: #666;">
        ${project.front ? `<strong>Front:</strong> ${project.front}<br>` : ""}
        ${project.back ? `<strong>Back:</strong> ${project.back}` : ""}
      </p>`;
  }

  // Add GitHub button if github URL is provided
  if (project.github) {
    html += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 6px; padding: 4px 12px; background: #c0c0c0; border: 2px outset #c0c0c0; color: #000; text-decoration: none; font-size: 0.9em; cursor: pointer; text-align: center;">
        View on GitHub
      </a>`;
  }

  html += `</div>`;

  if (imgUrl) {
    html += `<img src="${imgUrl}" style="width: 250px; min-width: 200px; height: 180px; border: 1px solid #808080; object-fit: cover; object-position: center; flex-shrink: 0;" alt="${project.title}">`;
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
    <win98-desktop style="cursor: default !important; position: relative;">
      <!-- Desktop Folder Icon -->
      <div class="desktop-folder" id="desktop-folder" style="position: absolute; top: 20px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("directory_computer") || ""
        }" alt="Folder" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 0.85em; color: #fff; text-shadow: 1px 1px 0 #000; word-break: break-word; line-height: 1.1;">Click Me!</span>
      </div>

      <!-- Desktop Blog Icon -->
      <div class="desktop-folder" id="desktop-blog" style="position: absolute; top: 110px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("user-world") || ""
        }" alt="Blog" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 0.85em; color: #fff; text-shadow: 1px 1px 0 #000; word-break: break-word; line-height: 1.1;">Blog</span>
      </div>

      <!-- About Me Window - Left -->
      <win98-window title="About Me.exe" resizable style="bottom: 14vh; left: 27vh; width: 320px; height: 70vh;">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
          <h2 style="margin-top: 0; font-size: 2.8em; font-weight: bold; margin-bottom: 3px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;">${
            content.aboutMe.name
          }</h2>
          <p style="font-weight: bold; margin: 3px 0;">${
            content.aboutMe.title
          }</p>
          <p style="margin: 5px 0; line-height: 1.3;">${content.aboutMe.bio}</p>
          <img src="${
            getImageUrl("cruisesunset") || ""
          }" alt="Cruise Sunset" style="width: 100%; height: 170px; margin: 8px 0; border: 2px solid #808080; box-sizing: border-box; display: block; object-fit: cover; object-position: center;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 8px;">
            <a href="https://www.linkedin.com/in/jmyl" target="_blank" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;"><span style="font-size: 1.2em;">🔗</span> LinkedIn</a>
            <a href="mailto:jeremyliu621@gmail.com" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;"><span style="font-size: 1.2em;">✉️</span> Email</a>
            <a href="https://github.com/Jeremyliu-621" target="_blank" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;"><span style="font-size: 1.2em;">💻</span> Github</a>
            <a href="./assets/Jeremy_Liu_final_resume.pdf" target="_blank" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;"><span style="font-size: 1.2em;">📄</span> Resume</a>
            <a href="https://instagram.com/jeremyliu.621" target="_blank" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;"><span style="font-size: 1.2em;">📷</span> Instagram</a>
            <a href="https://devpost.com/jeremyliu621" target="_blank" class="social-btn" style="display: flex; align-items: center; justify-content: center; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px; text-align: center;"><span style="font-size: 1.2em;">⚡</span> Devpost</a>
          </div>
        </div>
      </win98-window>

      <!-- Skills Window - Middle Top -->
      <win98-window title="Skills.exe" resizable style="bottom: 43vh; left: 155vh; width: 300px; height: calc(35vh);">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; min-height: 0;">
          <h3 style="margin-top: 0; margin-bottom: 5px; font-weight: bold; font-size: 1.4em;">Languages</h3>
          <p style="margin: 3px 0;">${content.skills.languages}</p>
          
          <hr style="margin: 8px 0;">
          
          <h3 style="margin-top: 8px; margin-bottom: 5px; font-weight: bold; font-size: 1.4em;">Frameworks</h3>
          <p style="margin: 3px 0;">${content.skills.frameworks}</p>
          
          <hr style="margin: 8px 0;">
          
          <h3 style="margin-top: 8px; margin-bottom: 5px; font-weight: bold; font-size: 1.4em;">Tools</h3>
          <p style="margin: 3px 0;">${content.skills.tools}</p>
          
          <hr style="margin: 8px 0;">
          
          <h3 style="margin-top: 8px; margin-bottom: 5px; font-weight: bold; font-size: 1.4em;">Currently improving by:</h3>
          <ul style="text-align: left; margin: 3px 0 0 0; padding-left: 20px; line-height: 1.4;">
            ${improvingHTML}
          </ul>
        </div>
      </win98-window>

      <!-- Hobbies Window - Middle Bottom -->
      <win98-window title="Hobbies.exe" resizable style="bottom: 15vh; left: 157vh; width: 300px; height: calc(18vh);">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; min-height: 0;">
          <h3 style="margin-top: 0; margin-bottom: 5px;">Outside of Academics</h3>
          <p style="margin: 5px 0; line-height: 1.3;">${content.hobbies}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
           <img src="${
             getImageUrl("conormcgregor") || ""
           }" alt="Conor McGregor" style="max-width: 100px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("animation") || ""
          }" alt="Pretty Animation" style="max-width: 100px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("bjj-grappling") || ""
          }" alt="BJJ Grappling" style="max-width: 100px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("Happy") || ""
          }" alt="Charles Oliviera" style="max-width: 200px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("Rodney") || ""
          }" alt="Skating" style="max-width: 100px; width: 40px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("stop") || ""
          }" alt="graffiti" style="max-width: 100px; width: 40px; height: auto; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          
          </div>
      
        </div>
      </win98-window>

      <!-- Projects Window - Right -->
      <win98-window title="My Projects.exe" resizable style="top: 20px; left: 75.5vh; width: calc(100vw - 1000px); height: calc(100vh - 100px);">
        <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; min-height: 0;">
          <h3 style="margin-top: 0; margin-bottom: 5px;">My Projects</h3>
          ${projectsHTML}
        </div>
      </win98-window>

      <!-- Image Gallery Window - Initially Hidden -->
      <win98-window title="Image Gallery.exe" resizable style="display: none; top: 50px; left: 50px; width: 400px; height: 350px;">
        <div class="window-body" style="padding: 8px 8px 2px 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; display: flex; flex-direction: column; gap: 10px;">
          <p style="margin: 0 0 5px 0;">A collection of my captured moments and project screenshots.</p>
          ${Object.values(images)
            .map(
              (mod) =>
                `<div style="border: 1px solid #fff; box-shadow: 1px 1px 0 #000; padding: 2px; background: #c0c0c0;"><img src="${mod.default}" style="width: 100%; display: block;" loading="lazy"></div>`
            )
            .join("")}
        </div>
      </win98-window>

      <!-- Interactive Window -->
      <win98-window title="Interactive.exe" resizable style="bottom: 5vh; left: 36vh; width: 200px; height: 120px;">
        <div class="window-body" style="padding: 8px; overflow: hidden; height: calc(100% - 54px); box-sizing: border-box; display: flex; align-items: center; gap: 10px;">
          <p style="margin: 0; font-size: 1.15em; flex: 1;">you can interact with windows!</p>
          <img src="${
            getImageUrl("bear") || ""
          }" alt="Bear" style="max-width: 100px; height: auto; flex-shrink: 0; border: 2px solid #808080;">
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

    // Constrain windows from being dragged above the top of the viewport
    const constrainWindowPositions = () => {
      const windows = document.querySelectorAll("win98-window");
      windows.forEach((window) => {
        const style = window.style;
        const currentTop = style.top;

        // Parse the top value (handles both px and calc() values)
        let topValue = 0;
        if (currentTop) {
          if (currentTop.includes("calc")) {
            // For calc values, we'll need to evaluate or set a minimum
            // For now, we'll just ensure it doesn't go negative
            return; // Skip calc values as they're usually fine
          } else {
            topValue = parseInt(currentTop) || 0;
          }
        }

        const minTop = 0; // Minimum top position (can't go above viewport)

        // If window is above the minimum, constrain it
        if (topValue < minTop) {
          style.top = `${minTop}px`;
        }
      });
    };

    // Monitor window positions - check frequently during drag
    let isDragging = false;
    const checkInterval = setInterval(() => {
      constrainWindowPositions();
    }, 16); // Check every ~16ms (60fps) for smooth constraint

    // Also listen for mouse events to detect dragging
    document.addEventListener("mousedown", (e) => {
      if (e.target.closest("win98-window")) {
        isDragging = true;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      constrainWindowPositions(); // Final check on release
    });

    // Monitor for dynamically added windows
    const windowObserver = new MutationObserver(() => {
      constrainWindowPositions();
    });

    const desktop = document.querySelector("win98-desktop");
    if (desktop) {
      windowObserver.observe(desktop, {
        childList: true,
        subtree: true,
      });
    }

    // ============================================
    // UNDO/REDO FEATURE FOR WINDOW RESIZING
    // ============================================
    // Track window state history for undo/redo functionality
    const windowHistory = {
      undoStack: [], // Array of window states to undo
      redoStack: [], // Array of window states to redo
      isTracking: true, // Flag to prevent tracking during undo/redo
    };

    // Function to capture current state of all windows
    function captureWindowState() {
      if (!windowHistory.isTracking) return;

      const windows = document.querySelectorAll("win98-window");
      const state = {};
      windows.forEach((window) => {
        const title = window.getAttribute("title");
        if (title) {
          // Get the actual style attribute value to capture all properties
          const styleAttr = window.getAttribute("style") || "";
          const styleObj = window.style;

          // Capture all position and size properties
          state[title] = {
            top: styleObj.top || "",
            left: styleObj.left || "",
            right: styleObj.right || "",
            bottom: styleObj.bottom || "",
            width: styleObj.width || "",
            height: styleObj.height || "",
          };

          // Ensure we capture empty strings as empty strings (not undefined)
          // This is important for proper restoration
          Object.keys(state[title]).forEach((key) => {
            if (state[title][key] === undefined) {
              state[title][key] = "";
            }
          });
        }
      });

      // Add to undo stack (limit to last 50 states to prevent memory issues)
      windowHistory.undoStack.push(state);
      if (windowHistory.undoStack.length > 50) {
        windowHistory.undoStack.shift();
      }

      // Clear redo stack when new action is performed
      windowHistory.redoStack = [];
    }

    // Function to restore window state
    function restoreWindowState(state) {
      windowHistory.isTracking = false; // Prevent tracking during restore

      Object.keys(state).forEach((title) => {
        const window = document.querySelector(`win98-window[title="${title}"]`);
        if (window && state[title]) {
          const savedState = state[title];

          // Always restore all properties that were saved
          // This ensures complete restoration of position and size
          const properties = [
            "top",
            "left",
            "right",
            "bottom",
            "width",
            "height",
          ];
          properties.forEach((prop) => {
            if (savedState.hasOwnProperty(prop)) {
              window.style[prop] = savedState[prop] || "";
            }
          });
        }
      });

      // Re-enable tracking after a short delay
      setTimeout(() => {
        windowHistory.isTracking = true;
      }, 100);
    }

    // Function to undo last window resize/move
    function undoWindowChange() {
      if (windowHistory.undoStack.length < 2) return; // Need at least 2 states (current + previous)

      const currentState = windowHistory.undoStack.pop();
      const previousState =
        windowHistory.undoStack[windowHistory.undoStack.length - 1];

      // Add current state to redo stack
      windowHistory.redoStack.push(currentState);

      // Restore previous state
      if (previousState) {
        restoreWindowState(previousState);
      }
    }

    // Function to redo window change
    function redoWindowChange() {
      if (windowHistory.redoStack.length === 0) return;

      const stateToRestore = windowHistory.redoStack.pop();
      restoreWindowState(stateToRestore);

      // Add back to undo stack
      windowHistory.undoStack.push(stateToRestore);
    }

    // Monitor window resize/move events
    let resizeTimeout = null;
    const windows = document.querySelectorAll("win98-window");
    windows.forEach((window) => {
      // Use MutationObserver to detect style changes (resize/move)
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "style"
          ) {
            // Debounce: capture state 300ms after last change
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              captureWindowState();
            }, 300);
          }
        });
      });

      observer.observe(window, {
        attributes: true,
        attributeFilter: ["style"],
      });
    });

    // Also monitor dynamically added windows
    const resizeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeName === "WIN98-WINDOW" ||
            node.querySelector?.("win98-window")
          ) {
            // New window added, set up observer for it
            const newWindows =
              node.nodeName === "WIN98-WINDOW"
                ? [node]
                : node.querySelectorAll("win98-window");

            newWindows.forEach((window) => {
              const observer = new MutationObserver(() => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                  captureWindowState();
                }, 300);
              });

              observer.observe(window, {
                attributes: true,
                attributeFilter: ["style"],
              });
            });
          }
        });
      });
    });

    if (desktop) {
      resizeObserver.observe(desktop, {
        childList: true,
        subtree: true,
      });
    }

    // Keyboard shortcuts for undo/redo
    document.addEventListener("keydown", (e) => {
      // Check for Ctrl+Z (Windows/Linux) or Cmd+Z (Mac) for undo
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undoWindowChange();
      }
      // Check for Ctrl+Shift+Z or Ctrl+Y (Windows/Linux) or Cmd+Shift+Z (Mac) for redo
      else if (
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "z") ||
        ((e.ctrlKey || e.metaKey) && e.key === "y")
      ) {
        e.preventDefault();
        redoWindowChange();
      }
    });

    // Capture initial state
    setTimeout(() => {
      captureWindowState();
    }, 500);

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

    // Desktop folder icon click handling
    const desktopFolder = document.querySelector("#desktop-folder");
    if (desktopFolder) {
      let clickTimer = null;
      let isSelected = false;

      // Single click - select/deselect
      desktopFolder.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Double click detected - open folder window
          desktopFolder.classList.add("selected");
          openFolderWindow();
        } else {
          clickTimer = setTimeout(() => {
            // Single click - toggle selection
            if (isSelected) {
              desktopFolder.classList.remove("selected");
              isSelected = false;
            } else {
              // Deselect other folders first
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              desktopFolder.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

      // Function to open folder window
      function openFolderWindow() {
        // Get all asset images (defined once for use in both window creation and handlers)
        const assetImages = [
          "bear.gif",
          "binder_action.jpg",
          "cruisesunset.JPG",
          "do you even lift like a boss GIF.gif",
          "directory_computer.png",
          "portfolio-website-cover.png",
          "rref_calculator.PNG",
          "slot-machine.PNG",
          "stop_dont_go_on_grey.jpg",
          "ufc_elo.png",
        ];

        // Check if window already exists
        let folderWindow = document.querySelector(
          'win98-window[title="Folder.exe"]'
        );

        if (!folderWindow) {
          // Source code files
          const sourceFiles = [
            {
              name: "main.js",
              description: "Main application logic and content",
            },
            { name: "style.css", description: "Custom styles and overrides" },
            { name: "index.html", description: "Main HTML file" },
            { name: "package.json", description: "Project dependencies" },
            { name: "counter.js", description: "Counter component" },
          ];

          // Build images HTML with data attributes for navigation
          const imagesHTML = assetImages
            .map((img, index) => {
              const imgUrl = getImageUrl(img.split(".")[0]);
              return `
              <div class="folder-image-item" style="display: inline-block; margin: 8px; text-align: center; vertical-align: top; width: 100px; cursor: pointer;">
                <img src="${
                  imgUrl || ""
                }" alt="${img}" data-image-index="${index}" data-image-name="${img}" data-image-url="${
                imgUrl || ""
              }" style="width: 64px; height: 64px; object-fit: contain; border: 1px solid #808080; background: #fff; padding: 2px; display: block; margin: 0 auto 4px auto;">
                <span style="font-size: 0.85em; color: #000; display: block; word-break: break-word;">${img}</span>
              </div>
            `;
            })
            .join("");

          // Build source files HTML
          const filesHTML = sourceFiles
            .map(
              (file) => `
            <div style="padding: 4px 8px; border-bottom: 1px solid #c0c0c0; display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: bold; min-width: 120px;">${file.name}</span>
              <span style="color: #666; font-size: 0.9em;">${file.description}</span>
            </div>
          `
            )
            .join("");

          // Create window HTML
          const windowHTML = `
            <win98-window title="Folder.exe" resizable style="top: 100px; left: 100px; width: 600px; height: 500px; z-index: 1000;">
              <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
                <h3 style="margin-top: 0; margin-bottom: 8px; font-weight: bold;">Images</h3>
                <div style="margin-bottom: 20px; padding: 8px; background: #f0f0f0; border: 1px solid #c0c0c0;">
                  ${imagesHTML}
                </div>
                <h3 style="margin-top: 0; margin-bottom: 8px; font-weight: bold;">Source Code Files</h3>
                <div style="padding: 8px; background: #f0f0f0; border: 1px solid #c0c0c0;">
                  ${filesHTML}
                </div>
              </div>
            </win98-window>
          `;

          // Insert window into desktop
          const desktop = document.querySelector("win98-desktop");
          if (desktop) {
            desktop.insertAdjacentHTML("beforeend", windowHTML);
            folderWindow = document.querySelector(
              'win98-window[title="Folder.exe"]'
            );
          }
        }

        // Add double-click handlers to images (whether new or existing window)
        if (folderWindow) {
          // Remove old handlers if any
          const imageItems = folderWindow.querySelectorAll(
            ".folder-image-item img"
          );
          imageItems.forEach((img) => {
            // Clone to remove all event listeners
            const newImg = img.cloneNode(true);
            img.parentNode.replaceChild(newImg, img);

            // Add new double-click handler
            let clickTimer = null;
            newImg.addEventListener("click", (e) => {
              e.stopPropagation();
              if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
                // Double click - open image viewer
                const imageIndex = parseInt(
                  newImg.getAttribute("data-image-index")
                );
                const imageName = newImg.getAttribute("data-image-name");
                const imageUrl = newImg.getAttribute("data-image-url");
                // Get asset images list (same as in openFolderWindow)
                const assetImagesList = [
                  "bear.gif",
                  "binder_action.jpg",
                  "cruisesunset.JPG",
                  "do you even lift like a boss GIF.gif",
                  "directory_computer.png",
                  "portfolio-website-cover.png",
                  "rref_calculator.PNG",
                  "slot-machine.PNG",
                  "stop_dont_go_on_grey.jpg",
                  "ufc_elo.png",
                ];
                openImageViewer(
                  assetImagesList,
                  imageIndex,
                  imageName,
                  imageUrl
                );
              } else {
                clickTimer = setTimeout(() => {
                  clickTimer = null;
                }, 300);
              }
            });
          });
        }

        // Show and bring to front
        if (folderWindow) {
          folderWindow.style.display = "block";
          folderWindow.style.zIndex = "1000";
          // Bring to front by increasing z-index
          const allWindows = document.querySelectorAll("win98-window");
          let maxZ = 0;
          allWindows.forEach((w) => {
            const z = parseInt(w.style.zIndex) || 0;
            if (z > maxZ) maxZ = z;
          });
          folderWindow.style.zIndex = (maxZ + 1).toString();
        }
      }

      // Function to open image viewer window
      function openImageViewer(
        imageList,
        currentIndex,
        currentName,
        currentUrl
      ) {
        // Check if viewer already exists
        let viewerWindow = document.querySelector(
          'win98-window[title="Image Viewer.exe"]'
        );

        if (!viewerWindow) {
          // Create viewer window HTML
          const viewerHTML = `
            <win98-window title="Image Viewer.exe" resizable style="top: 150px; left: 200px; width: 700px; height: 600px; z-index: 2000;">
              <div class="window-body" style="padding: 8px; height: calc(100% - 54px); box-sizing: border-box; display: flex; flex-direction: column;">
                <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #c0c0c0; border: 2px inset #c0c0c0; margin-bottom: 8px; position: relative; overflow: hidden;">
                  <img id="viewer-main-image" src="${currentUrl}" alt="${currentName}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0;">
                  <button id="viewer-prev-btn" style="padding: 4px 12px; font-size: 0.9em;">◀ Previous</button>
                  <span id="viewer-image-name" style="font-weight: bold; flex: 1; text-align: center; margin: 0 8px;">${currentName}</span>
                  <span id="viewer-image-counter" style="color: #666; margin: 0 8px;">${
                    currentIndex + 1
                  } / ${imageList.length}</span>
                  <button id="viewer-next-btn" style="padding: 4px 12px; font-size: 0.9em;">Next ▶</button>
                </div>
              </div>
            </win98-window>
          `;

          // Insert viewer window
          const desktop = document.querySelector("win98-desktop");
          if (desktop) {
            desktop.insertAdjacentHTML("beforeend", viewerHTML);
            viewerWindow = document.querySelector(
              'win98-window[title="Image Viewer.exe"]'
            );
          }
        }

        // Update viewer content
        if (viewerWindow) {
          const mainImage = viewerWindow.querySelector("#viewer-main-image");
          const imageName = viewerWindow.querySelector("#viewer-image-name");
          const imageCounter = viewerWindow.querySelector(
            "#viewer-image-counter"
          );
          const prevBtn = viewerWindow.querySelector("#viewer-prev-btn");
          const nextBtn = viewerWindow.querySelector("#viewer-next-btn");

          // Store current index in the window element
          let viewerCurrentIndex = currentIndex;

          // Update current image
          function updateImage(index) {
            const imgName = imageList[index];
            const imgUrl = getImageUrl(imgName.split(".")[0]);
            if (mainImage) mainImage.src = imgUrl || "";
            if (imageName) imageName.textContent = imgName;
            if (imageCounter)
              imageCounter.textContent = `${index + 1} / ${imageList.length}`;

            // Update button states
            if (prevBtn) prevBtn.disabled = index === 0;
            if (nextBtn) nextBtn.disabled = index === imageList.length - 1;

            viewerCurrentIndex = index;
          }

          // Set initial image
          updateImage(currentIndex);

          // Navigation handlers
          if (prevBtn) {
            prevBtn.onclick = () => {
              if (viewerCurrentIndex > 0) {
                updateImage(viewerCurrentIndex - 1);
              }
            };
          }

          if (nextBtn) {
            nextBtn.onclick = () => {
              if (viewerCurrentIndex < imageList.length - 1) {
                updateImage(viewerCurrentIndex + 1);
              }
            };
          }

          // Keyboard navigation
          const handleKeyPress = (e) => {
            if (viewerWindow && viewerWindow.style.display !== "none") {
              if (e.key === "ArrowLeft" && viewerCurrentIndex > 0) {
                updateImage(viewerCurrentIndex - 1);
              } else if (
                e.key === "ArrowRight" &&
                viewerCurrentIndex < imageList.length - 1
              ) {
                updateImage(viewerCurrentIndex + 1);
              }
            }
          };
          document.addEventListener("keydown", handleKeyPress);

          // Show and bring to front
          viewerWindow.style.display = "block";
          const allWindows = document.querySelectorAll("win98-window");
          let maxZ = 0;
          allWindows.forEach((w) => {
            const z = parseInt(w.style.zIndex) || 0;
            if (z > maxZ) maxZ = z;
          });
          viewerWindow.style.zIndex = (maxZ + 1).toString();
        }
      }

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!desktopFolder.contains(e.target)) {
          desktopFolder.classList.remove("selected");
          isSelected = false;
        }
      });
    }

    // Desktop blog icon click handling
    const desktopBlog = document.querySelector("#desktop-blog");
    if (desktopBlog) {
      let clickTimer = null;
      let isSelected = false;

      // Single click - select/deselect
      desktopBlog.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Double click detected - open blog window
          desktopBlog.classList.add("selected");
          openBlogWindow();
        } else {
          clickTimer = setTimeout(() => {
            // Single click - toggle selection
            if (isSelected) {
              desktopBlog.classList.remove("selected");
              isSelected = false;
            } else {
              // Deselect other icons first
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              desktopBlog.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

      // Function to open blog window
      function openBlogWindow() {
        // Check if window already exists
        let blogWindow = document.querySelector(
          'win98-window[title="Blog.exe"]'
        );

        if (!blogWindow) {
          // Build blog posts HTML
          // ============================================
          // BLOG POSTS STRUCTURE - Easy to understand!
          // ============================================
          // Each post is rendered with:
          //   - Title and date at the top
          //   - Optional image (if image property is set)
          //   - Text content below
          // To add more posts, just add objects to content.blogPosts array above
          const postsHTML = content.blogPosts
            .map((post) => {
              const imgUrl = post.image ? getImageUrl(post.image) : null;
              return `
                <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #c0c0c0;">
                  <h3 style="margin-top: 0; margin-bottom: 4px; font-weight: bold; font-size: 1.75em;">${
                    post.title
                  }</h3>
                  <p style="margin: 0 0 12px 0; color: #666; font-size: 1.5em;">${
                    post.date
                  }</p>
                  ${
                    imgUrl
                      ? `<img src="${imgUrl}" alt="${post.title}" style="max-width: 100%; height: auto; margin: 12px 0; border: 1px solid #808080; display: block;">`
                      : ""
                  }
                  <!-- Blog post text size --> 
                  <div style="margin-top: 12px; line-height: 1.5; font-size: 1.3em;">
                    ${post.text}
                  </div>
                </div>
              `;
            })
            .join("");

          // Create blog window HTML (horizontal/larger window)
          const windowHTML = `
            <win98-window title="Blog.exe" resizable style="top: 50px; left: 50px; width: 900px; height: 650px; z-index: 1000;">
              <div class="window-body" style="padding: 12px 12px 2px 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
                <h2 style="margin-top: 0; margin-bottom: 20px; font-weight: bold; font-size: 1.5em;">My Blog</h2>
                <div style="max-width: 100%;">
                  ${postsHTML}
                </div>
              </div>
            </win98-window>
          `;

          // Insert window into desktop
          const desktop = document.querySelector("win98-desktop");
          if (desktop) {
            desktop.insertAdjacentHTML("beforeend", windowHTML);
            blogWindow = document.querySelector(
              'win98-window[title="Blog.exe"]'
            );
          }
        }

        // Show and bring to front
        if (blogWindow) {
          blogWindow.style.display = "block";
          blogWindow.style.zIndex = "1000";
          // Bring to front by increasing z-index
          const allWindows = document.querySelectorAll("win98-window");
          let maxZ = 0;
          allWindows.forEach((w) => {
            const z = parseInt(w.style.zIndex) || 0;
            if (z > maxZ) maxZ = z;
          });
          blogWindow.style.zIndex = (maxZ + 1).toString();
        }
      }

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!desktopBlog.contains(e.target)) {
          desktopBlog.classList.remove("selected");
          isSelected = false;
        }
      });
    }

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

// Set Windows 98 cursor globally after everything loads
function setGlobalCursor() {
  // Try to get the cursor from an actual window border element
  let detectedCursor = null;

  // Wait for windows to be rendered
  const testWindow = document.querySelector("win98-window");
  if (testWindow && testWindow.shadowRoot) {
    const titleBar = testWindow.shadowRoot.querySelector(".title-bar");
    if (titleBar) {
      const computedStyle = window.getComputedStyle(titleBar);
      detectedCursor = computedStyle.cursor;
    }
  } else if (testWindow) {
    // Try to find title-bar in the window
    const titleBar = testWindow.querySelector(".title-bar");
    if (titleBar) {
      const computedStyle = window.getComputedStyle(titleBar);
      detectedCursor = computedStyle.cursor;
    }
  }

  // If we found a cursor, use it; otherwise try to get it from any element with the cursor
  if (
    !detectedCursor ||
    detectedCursor === "auto" ||
    detectedCursor === "default"
  ) {
    // Try getting cursor from window border by checking resize handles or title bar
    const allElements = document.querySelectorAll("*");
    for (const el of allElements) {
      const style = window.getComputedStyle(el);
      const cursor = style.cursor;
      if (
        cursor &&
        cursor !== "auto" &&
        cursor !== "default" &&
        cursor.includes("url")
      ) {
        detectedCursor = cursor;
        break;
      }
    }
  }

  // Use detected cursor or fallback to default
  const cursorToUse = detectedCursor || "default";

  console.log("Detected cursor:", cursorToUse); // Debug log

  // Create a style element to inject global cursor CSS
  let styleEl = document.getElementById("global-cursor-style");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "global-cursor-style";
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = `
    * { cursor: ${cursorToUse} !important; }
    a, button, .social-btn, [role="button"], a:hover, button:hover, .social-btn:hover { cursor: pointer !important; }
    html, body, #app, win98-desktop { cursor: ${cursorToUse} !important; }
  `;

  // Also set via inline styles as backup
  document.documentElement.style.setProperty(
    "cursor",
    cursorToUse,
    "important"
  );
  if (document.body) {
    document.body.style.setProperty("cursor", cursorToUse, "important");
  }

  const app = document.querySelector("#app");
  if (app) {
    app.style.setProperty("cursor", cursorToUse, "important");
  }

  const desktop = document.querySelector("win98-desktop");
  if (desktop) {
    desktop.style.setProperty("cursor", cursorToUse, "important");
  }
}

// Run after a short delay to ensure 98.css has loaded
setTimeout(setGlobalCursor, 100);
setTimeout(setGlobalCursor, 500);
// Also run when window loads
window.addEventListener("load", setGlobalCursor);
