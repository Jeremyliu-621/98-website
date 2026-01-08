import "./style.css";

// Import Windows 98 CSS styles
import "98.css";

// Register 98-components web components + styles
import "98-components";

// Import components
import {
  createProjectHTML,
  createSingleProjectHTML,
  generateProjectsWindowHTML,
  initProjectTabs,
} from "./components/projects.js";

// Import all images from src/assets
const images = import.meta.glob("./assets/*.*", { eager: true });

// Asset images list (used in folder window and image viewer)
const ASSET_IMAGES = [
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

// Helper to get image URL by filename (partial match, case-insensitive)
export function getImageUrl(filename) {
  const lowerFilename = filename.toLowerCase();
  for (const path in images) {
    if (path.toLowerCase().includes(lowerFilename)) {
      return images[path].default;
    }
  }
  return null;
}

// ============================================
// EDIT YOUR CONTENT HERE - Everything below is easy to customize!
// ============================================

export const content = {
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
    languages: "Python, JavaScript, C, MATLAB, TypeScript, HTML, CSS, Swift",
    frameworks:
      "React, Next.js, Node.js, Express.js, Bootstrap, Tailwind CSS, Matplotlib, Tkinter, Email.js",
    libraries: "OpenCV, Pandas, NumPy, Selenium, BeautifulSoup, jQuery",
    tools:
      "AWS, Git, PostgreSQL, Arduino, Visual Studio Code, Google Cloud Platform, Cursor.ai",

    improvingBy: [
      "Applying knowledge to create useful projects",
      "Learning more back-end frameworks",
      "Using AI to create smarter applications",
    ],
  },
  projects: [
    {
      title: "UFC Index website",
      description: "A website that shows scraped stats for UFC Fighters.",
      front: "Next.js, React, Typescript, Tailwind",
      back: "Python, Pandas, BeautifulSoup",
      image: "ufc-search",
      github: "https://github.com/Jeremyliu-621/UFC-Elo-Calculator",
      website: "https://ufc-elo-calculator.vercel.app/",
      additionalInfo:
        "A website that calculates and ranks statistics for UFC Fighters." +
        " Organized Pandas dataframes with information scraped from the UFC website by Beautifulsoup." +
        " Used React, Javascript, and TailwindCSS to build an aesthetic UI that interacts with user's cursors.",
    },
    {
      title: "Binder",
      description: "A swipe-based interface for thrifting.",
      front: "Next.js, Typescript, Tailwind, Vite",
      back: "Python, Beautifulsoup, Selenium",
      image: "binder_action",
      github: "https://github.com/Jeremyliu-621/binder",
      additionalInfo:
        "Created a swipe-based website that browses second-hand marketplaces in a more intuitive and engaging way." +
        " Used Beautiful Soup to scrape for data collection in real-time and leveraged the Gemini AI API for price evaluation." +
        " Built responsive UI components using React, TypeScript and TailwindCSS.",
    },
    {
      title: "My First Portfolio Website",
      description: "A page that displays everything about me.",
      image: "portfolio-works-gif",
      website: "https://jeremy-liu.vercel.app/",
      github: "https://github.com/Jeremyliu-621/portfolio-works",
      additionalInfo:
        "Built purely using HTML and CSS, using Bootstrap components for some styling." +
        " My first ever website, and I'm proud of it." +
        " No AI used.",
    },
    {
      title: "stop! don't go on.",
      description: "Water Sprayer that stops bad habits.",
      front: "React, Vite, TypeScript",
      back: "Python + Flask, OpenCV, PySerial, Pygame",
      image: "stop_dont_go_on_grey",
      website: "https://stop-dont-go-on.vercel.app/",
      github: "https://github.com/Jeremyliu-621/stop-dont-go-on",
      additionalInfo:
        "Used Arduino to spray water and email.js to email friends and family to incentivize users away from continuing bad habits." +
        " Integrated OpenCV with a python backend to the arduino so users could be tracked with precision." +
        " Created a dynamic UI that allowed user input and real-time computer feedback using React, Vite, and Typescript.",
    },
    {
      title: "j-space", // this project
      description: "A space that focuses on my creativity and ideas.",
      front: "HTML, CSS, JavaScript, Vite",
      image: "j-gif-space",
      website: "https://j-space.vercel.app/",
      github: "https://github.com/Jeremyliu-621/j-space",
      additionalInfo:
        "Used HTML, CSS, JavaScript, and Vite to build an interactive space that gets my creativity into the computer." +
        " Experimented with the lengths that different AIs can go to to help with coding projects." +
        " Used the open-source98-components library and cursor.ai to try and replicate that nostalgic feel to old websites.",
    },
    {
      title: "Cookie Clicker Bot",
      description: "Bot that clicks cookies and buys upgrades!",
      image: "cookie-clicker-bot",
      github: "https://github.com/Jeremyliu-621/cookie-clicker",
      additionalInfo:
        "Used Python and Selenium to build a bot that opens a browser, clicks cookies and buys upgrades." +
        " Small project to practice using open-source libraries.",
    },
  ],
  hobbies:
    "I create origami, train Brazilian Jiu-Jitsu, write (legal) graffiti, and longboard.",
  // ============================================
  // THANKS & CREDITS - Easy to add more!
  // ============================================
  // To add someone or something to thank, copy the structure below and paste it into the array
  // Each item can have:
  //   - name: The name of the person, tool, or thing
  //   - description: What you want to thank them for (can use HTML for formatting)
  //   - link: Optional URL (leave as null for no link)
  thanks: [
    {
      name: "98-components",
      description:
        "For providing the amazing Windows 98 UI components that make this website possible.",
      link: "https://github.com/jdan/98.css",
    },
    {
      name: "Cursor.ai",
      description:
        "For helping me build and iterate on this website with AI assistance.",
      link: "https://www.cursor.com/",
    },
    {
      name: "win98icons",
      description: "For providing real art for my project.",
      link: "https://win98icons.alexmeub.com/",
    },
    {
      name: "lunospace",
      description: "For giving me inspiration for featuresfor this project.",
      link: "https://lostlove.neocities.org/",
    },
    {
      name: "Ethan Yang",
      description: "For the Binder and Stop! Don't Go On! gifs.",
      link: "https://github.com/e-yang6",
    },
    {
      name: "colorhunt.co",
      description: "For giving me cool colour palettes for this project.",
      link: "https://colorhunt.co/",
    },
    {
      name: "buttered_official",
      description: "For giving me the idea for a windows 98 website.",
      link: "https://www.instagram.com/buttered_official/",
    },
    {
      name: "Kibuns",
      description: "For their cookie clicker gif online!.",
      link: "https://github.com/Kibuns/Cookie_Clicker_Bot",
    },
  ],
};

// Color palettes - defined at top level so it can be accessed everywhere
const colorPalettes = {
  default: {
    name: "Default",
    colors: ["#000000", "#808080", "#c0c0c0", "#e0e0e0"], // Darkest to lightest
  },
  dark: {
    name: "Dark",
    colors: ["#1a1a1a", "#2d2d2d", "#404040", "#525252"], // Darkest to lightest
  },
  retroGreen: {
    name: "Retro Green",
    colors: ["#5C6F2B", "#DE802B", "#D8C9A7", "#EEEEEE"], // Darkest to lightest
  },
  Lilac: {
    name: "Lilac",
    colors: ["#898AC4", "#A2AADB", "#C0C9EE", "#FFF2E0"], // Darkest to lightest
  },
  Snow: {
    name: "Snow",
    colors: ["#89A8B2", "#B3C8CF", "#E5E1DA", "#F1F0E8"], // Darkest to lightest
  },
  Chocolate: {
    name: "Dark Chocolate",
    colors: ["#896C6C", "#E5BEB5", "#EEE6CA", "#e0e0e0"], // Darkest to lightest
  },
  Cream: {
    name: "Cream",
    colors: ["#C9B59C", "#D9CFC7", "#EFE9E3", "#F9F8F6"], // Darkest to lightest
  },
  calmGreen: {
    name: "Calm Green",
    colors: ["#778873", "#A1BC98", "#D2DCB6", "#F1F3E0"], // Darkest to lightest
  },
};

// Theme-specific background filters (subtle manipulation)
const THEME_FILTERS = {
  retroGreen: "hue-rotate(15deg) saturate(1.1) brightness(0.95)",
  Lilac: "hue-rotate(20deg) saturate(1.15) brightness(1.02)",
  Snow: "hue-rotate(180deg) saturate(0.9) brightness(1.05)",
  Chocolate: "hue-rotate(25deg) saturate(1.2) brightness(0.92)",
  Cream: "hue-rotate(30deg) saturate(1.1) brightness(1.03)",
  calmGreen: "hue-rotate(4deg) saturate(1.15) brightness(0.98)",
};

// Theme-specific background overlays (subtle color tints)
const THEME_OVERLAYS = {
  retroGreen: "rgba(92, 111, 43, 0.08)",
  Lilac: "rgba(137, 138, 196, 0.06)",
  Snow: "rgba(137, 168, 178, 0.05)",
  Chocolate: "rgba(137, 108, 108, 0.07)",
  Cream: "rgba(201, 181, 156, 0.06)",
  calmGreen: "rgba(119, 136, 115, 0.07)",
};

// Helper function to apply color palette (can be used from anywhere)
export function applyColorPalette(paletteKey) {
  if (colorPalettes[paletteKey]) {
    const desktop = document.querySelector("win98-desktop");

    // Handle background image based on theme
    if (paletteKey === "dark") {
      // Use dark background for dark theme
      const darkBackgroundUrl = getImageUrl("dark-Backgroundpixels");
      if (darkBackgroundUrl && desktop) {
        desktop.style.backgroundImage = `url(${darkBackgroundUrl})`;
        desktop.style.backgroundRepeat = "repeat";
        desktop.style.backgroundPosition = "0 0";
        desktop.style.backgroundSize = "auto";
        desktop.style.filter = "none";
        desktop.style.setProperty("--bg-image", "none");
        desktop.style.setProperty("--bg-filter", "none");
        desktop.style.setProperty("--bg-overlay", "transparent");
      }
    } else if (paletteKey === "default") {
      // Default theme - no special effects
      const backgroundImageUrl = getImageUrl("backgroundpixels");
      if (backgroundImageUrl && desktop) {
        desktop.style.backgroundImage = `url(${backgroundImageUrl})`;
        desktop.style.backgroundRepeat = "repeat";
        desktop.style.backgroundPosition = "0 0";
        desktop.style.backgroundSize = "auto";
        desktop.style.filter = "none";
        desktop.style.setProperty("--bg-image", "none");
        desktop.style.setProperty("--bg-filter", "none");
        desktop.style.setProperty("--bg-overlay", "transparent");
      }
    } else {
      // Apply subtle theme-specific background effects
      const backgroundImageUrl = getImageUrl("backgroundpixels");
      if (backgroundImageUrl && desktop) {
        // Store background properties in CSS variables for pseudo-element (isolated from window content)
        desktop.style.setProperty("--bg-image", `url(${backgroundImageUrl})`);
        desktop.style.setProperty("--bg-repeat", "repeat");
        desktop.style.setProperty("--bg-position", "0 0");
        desktop.style.setProperty("--bg-size", "auto");
        desktop.style.setProperty(
          "--bg-filter",
          THEME_FILTERS[paletteKey] || "none"
        );
        desktop.style.setProperty(
          "--bg-overlay",
          THEME_OVERLAYS[paletteKey] || "transparent"
        );

        // Remove direct background from desktop to use pseudo-element instead
        desktop.style.backgroundImage = "none";
        desktop.style.filter = "none";
      }
    }

    // For default palette, always use Windows 98 default colors
    if (paletteKey === "default") {
      // Reset to Windows 98 defaults
      localStorage.removeItem("colorPalette");
      localStorage.removeItem("paletteColors");

      // Apply Windows 98 default colors
      document.querySelectorAll("win98-window .window-body").forEach((body) => {
        body.style.backgroundColor = "#e0e0e0";
        body.style.border = "2px solid #808080";
      });

      // Apply default border to image viewer inner container
      document
        .querySelectorAll(
          'win98-window[title="Image Viewer.exe"] .viewer-image-inner'
        )
        .forEach((inner) => {
          inner.style.borderColor = "#808080";
        });

      // Apply default background to thank you items
      document
        .querySelectorAll('win98-window[title="Thank you!.exe"] .thanks-item')
        .forEach((item) => {
          item.style.backgroundColor = "#e0e0e0";
          item.style.borderColor = "#808080";
        });

      document
        .querySelectorAll("button, .social-btn, a[href*='github']")
        .forEach((btn) => {
          btn.style.backgroundColor = "#c0c0c0";
          btn.style.color = "#000000";
        });
    } else {
      const colors = colorPalettes[paletteKey].colors;
      // Store in localStorage for persistence
      localStorage.setItem("colorPalette", paletteKey);
      localStorage.setItem("paletteColors", JSON.stringify(colors));

      // Apply CSS variables
      document.documentElement.style.setProperty(
        "--palette-color-1",
        colors[0]
      );
      document.documentElement.style.setProperty(
        "--palette-color-2",
        colors[1]
      );
      document.documentElement.style.setProperty(
        "--palette-color-3",
        colors[2]
      );
      document.documentElement.style.setProperty(
        "--palette-color-4",
        colors[3]
      );

      // Apply to window bodies (background) - use lightest color (index 3)
      // Add colored divider border between gray frame and colored content
      document.querySelectorAll("win98-window .window-body").forEach((body) => {
        body.style.backgroundColor = colors[3] || "#e0e0e0";
        body.style.border = `2px solid ${colors[1] || "#808080"}`;
      });

      // Apply theme border to image viewer inner container
      document
        .querySelectorAll(
          'win98-window[title="Image Viewer.exe"] .viewer-image-inner'
        )
        .forEach((inner) => {
          inner.style.borderColor = colors[1] || "#808080";
        });

      // Apply theme background to thank you items
      document
        .querySelectorAll('win98-window[title="Thank you!.exe"] .thanks-item')
        .forEach((item) => {
          item.style.backgroundColor = colors[3] || "#e0e0e0";
          item.style.borderColor = colors[1] || "#808080";
        });

      // Apply to buttons and interactive elements - use darker colors (index 0 or 1) with lighter text
      document
        .querySelectorAll(
          "button, .social-btn, a[href*='github'], a[href*='http']"
        )
        .forEach((btn) => {
          btn.style.backgroundColor = colors[0] || "#c0c0c0";
          btn.style.color = colors[3] || "#ffffff";
        });
    }
  }
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
  const projectsHTML = content.projects
    .map((project, index) => createProjectHTML(project, index))
    .join("");
  const activitiesHTML = content.aboutMe.currentActivities
    .map((activity) => `<li>${activity}</li>`)
    .join("");
  const improvingHTML = content.skills.improvingBy
    .map((item) => `<li>${item}</li>`)
    .join("");

  app.innerHTML = `
    <win98-desktop>
      <!-- Desktop Folder Icon -->
      <div class="desktop-folder" id="desktop-folder">
        <img src="${getImageUrl("directory_computer") || ""}" alt="Folder">
        <span>Double Click Me!</span>
      </div>

      <!-- Desktop Blog Icon -->
      <div class="desktop-folder" id="desktop-blog">
        <img src="${getImageUrl("user-world") || ""}" alt="Blog">
        <span>Blog</span>
      </div>

      <!-- Desktop Chatbox Icon -->
      <div class="desktop-folder" id="desktop-chatbox">
        <img src="${getImageUrl("user-chatbox") || ""}" alt="Chatbox">
        <span>Chatbox</span>
      </div>

      <!-- Desktop Theme Editor Icon -->
      <div class="desktop-folder" id="desktop-theme">
        <img src="${getImageUrl("paint_old") || ""}" alt="Theme Editor">
        <span>Theme Editor</span>
      </div>

      <!-- Desktop Thanks Icon -->
      <div class="desktop-folder" id="desktop-thanks">
        <img src="${getImageUrl("picture-painting") || ""}" alt="Blog">
        <span>Thank you!</span>
      </div>

      <!-- About Me Window - Left -->
      <win98-window title="About Me.exe" resizable show-minimize class="window-about-me">
        <div class="window-body">
          <h2 id="about-me-name" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">J</em>eremy <em style="font-size: 1.2em;">L</em>iu</h2>
          <p class="bold-title">${content.aboutMe.title}</p>
          <p>${content.aboutMe.bio}</p>
          <div style="display: flex; justify-content: center; margin-bottom: 8px;">
          <img src="${
            getImageUrl("cruisesunset") || ""
          }" alt="Cruise Sunset" style="width: 60%; height: 100px; margin: 8px 2px; border: 2px solid #808080; box-sizing: border-box; display: block; object-fit: cover; object-position: center;">
          <img src="${
            getImageUrl("pixelbjj") || ""
          }" alt="bjj pixel art" style="width: 60%; height: 100px; margin: 8px 2px; border: 2px solid #808080; box-sizing: border-box; display: block; object-fit: cover; object-position: center;">
          </div>
          <div class="social-buttons-grid">
            <a href="https://www.linkedin.com/in/jmyl" target="_blank" class="social-btn"><img src="${
              getImageUrl("linkedin-icon") || ""
            }" alt="LinkedIn"> LinkedIn</a>
            <a href="mailto:jeremyliu621@gmail.com" class="social-btn"><img src="${
              getImageUrl("email-icon") || ""
            }" alt="Email"> Email</a>
            <a href="https://github.com/Jeremyliu-621" target="_blank" class="social-btn"><img src="${
              getImageUrl("github-icon") || ""
            }" alt="GitHub"> Github</a>
            <a href="https://github.com/Jeremyliu-621/Jeremy-Liu-Resume" target="_blank" class="social-btn"><img src="${
              getImageUrl("resume-icon") || ""
            }" alt="Resume"> Resume</a>
            <a href="https://instagram.com/jeremyliu.621" target="_blank" class="social-btn"><img src="${
              getImageUrl("instagram-icon") || ""
            }" alt="Instagram"> Instagram</a>
            <a href="https://devpost.com/jeremyliu621" target="_blank" class="social-btn"><img src="${
              getImageUrl("devpost-icon") || ""
            }" alt="Devpost"> Devpost</a>
          </div>
        </div>
      </win98-window>

      <!-- Skills Window - Middle Top -->
      <win98-window title="Skills.exe" resizable show-minimize class="window-skills">
        <div class="window-body">
          <h3 id="skills-languages" class="animate-title-fast" style="color: var(--palette-color-1, #000000); visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Languages</em></h3>
          <p style="margin: 3px 0;">${content.skills.languages}</p>
          
          <hr style="margin: 8px 0;">
          
          <h3 id="skills-frameworks" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Frameworks</em></h3>
          <p style="margin: 3px 0;">${content.skills.frameworks}</p>
          
          <hr style="margin: 8px 0;">

          <h3 id="skills-libraries" class="animate-title-fast" style="color: var(--palette-color-1, #000000); visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Libraries</em></h3>
          <p style="margin: 3px 0;">${content.skills.libraries}</p>
          
          <hr style="margin: 8px 0;">

          <h3 id="skills-tools" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Tools</em></h3>
          <p style="margin: 3px 0;">${content.skills.tools}</p>
          
          <hr style="margin: 8px 0;">
          
          <h3 style="color: var(--palette-color-1, #000000);">Currently improving by:</h3>
          <ul style="text-align: left; margin: 3px 0 0 0; padding-left: 20px; line-height: 1.4;">
            ${improvingHTML}
          </ul>
        </div>
      </win98-window>

      <!-- Hobbies Window - Middle Bottom -->
      <win98-window title="Hobbies.exe" resizable show-minimize class="window-hobbies">
        <div class="window-body">
          <h3 id="hobbies-title" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><span style="font-size: 1.2em;">OUTSIDE</span> of Academics</h3>
          <p>${content.hobbies}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
           <img src="${
             getImageUrl("conormcgregor") || ""
           }" alt="Conor McGregor" style="max-width: 50px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("animation") || ""
          }" alt="Pretty Animation" style="max-width: 50px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("bjj-grappling") || ""
          }" alt="BJJ Grappling" style="max-width: 50px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("Happy") || ""
          }" alt="Charles Oliviera" style="max-width: 200px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("Rodney") || ""
          }" alt="Skating" style="max-width: 100px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          <img src="${
            getImageUrl("stop") || ""
          }" alt="graffiti" style="max-width: 100px; width: auto; height: auto; object-fit: contain; display: block; margin: 8px 0 0 0; border: 2px solid #808080;">
          
          </div>
      
        </div>
      </win98-window>

      ${generateProjectsWindowHTML(projectsHTML)}

      <!-- Interactive Window -->
      <win98-window title="Interactive.exe" resizable show-minimize class="window-interactive">
        <div class="window-body" style="overflow: hidden; display: flex; align-items: center; gap: 10px;">
          <p id="interactive-text" class="animate-title-fast" style="margin: 0; font-size: 1.15em; flex: 1; visibility: hidden;">you can interact with windows!</p>
          <img src="${
            getImageUrl("ascii-gif") || ""
          }" alt="Bear" style="max-width: 100px; height: auto; flex-shrink: 0; border: 2px solid #808080;">
        </div>
      </win98-window>

      <!-- Taskbar at the bottom -->
      <win98-taskbar slot="taskbar"></win98-taskbar>
    </win98-desktop>

    <!-- Start Menu -->
    <div id="start-menu" class="window">
      <div class="title-bar">
        <div class="title-bar-text">Start Menu</div>
      </div>
      <div class="window-body">
        <ul>
          <li id="menu-about-me">👤 About Me</li>
          <li id="menu-skills">💼 Skills</li>
          <li id="menu-hobbies">🎨 Hobbies</li>
          <li id="menu-projects">📁 My Projects</li>
          <li id="menu-interactive">✨ Interactive</li>
          <hr>
          <li id="menu-folder">📂 Folder</li>
          <li id="menu-blog">📝 Blog</li>
          <li id="menu-chatbox">💬 Chatbox</li>
          <li id="menu-thanks">🙏 Thank you!</li>
          <hr>
          <li id="menu-theme-editor">🎨 Theme Editor</li>
          <hr>
          <li id="menu-shutdown">⏻ Shut Down...</li>
        </ul>
      </div>
    </div>
  `;

  // Helper function to bring window to front (needed by window opening functions)
  function bringWindowToFront(window) {
    // Update taskbar button to show active state when window is brought to front
    if (window && !window.hasAttribute("data-minimized")) {
      updateTaskbarButton(window, false);
    }
    if (window) {
      window.style.display = "block";
      window.style.visibility = "visible";
      window.classList.add("window-pop-open");
      const allWindows = document.querySelectorAll("win98-window");
      let maxZ = 0;
      allWindows.forEach((w) => {
        const z = parseInt(w.style.zIndex) || 0;
        if (z > maxZ) maxZ = z;
      });
      window.style.zIndex = (maxZ + 1).toString();
    }
  }

  // Helper function to setup desktop icon click handlers
  function setupDesktopIcon(iconId, onDoubleClick) {
    const icon = document.querySelector(iconId);
    if (!icon) {
      console.warn(`Desktop icon not found: ${iconId}`);
      return;
    }

    let clickTimer = null;
    let isSelected = false;

    icon.addEventListener("click", (e) => {
      e.stopPropagation();

      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        icon.classList.add("selected");
        onDoubleClick();
      } else {
        clickTimer = setTimeout(() => {
          if (isSelected) {
            icon.classList.remove("selected");
            isSelected = false;
          } else {
            document.querySelectorAll(".desktop-folder").forEach((f) => {
              f.classList.remove("selected");
            });
            icon.classList.add("selected");
            isSelected = true;
          }
          clickTimer = null;
        }, 250);
      }
    });

    // Deselect when clicking elsewhere
    document.addEventListener("click", (e) => {
      if (!icon.contains(e.target)) {
        icon.classList.remove("selected");
        isSelected = false;
      }
    });
  }

  // Desktop icons will be set up after all functions are defined (see end of initApp)

  // Wait for custom elements to be defined
  setTimeout(() => {
    // Always pick a random theme on every page load (excluding "default" and "dark")
    const paletteKeys = Object.keys(colorPalettes).filter(
      (key) => key !== "default" && key !== "dark"
    );
    const randomKey =
      paletteKeys[Math.floor(Math.random() * paletteKeys.length)];
    // Apply the random theme
    applyColorPalette(randomKey);

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

    // Monitor window positions - only check during drag for efficiency
    let isDragging = false;
    let checkInterval = null;

    document.addEventListener("mousedown", (e) => {
      if (e.target.closest("win98-window")) {
        isDragging = true;
        // Start checking only when dragging
        if (!checkInterval) {
          checkInterval = setInterval(() => {
            if (isDragging) {
              constrainWindowPositions();
            } else {
              clearInterval(checkInterval);
              checkInterval = null;
            }
          }, 16); // Check every ~16ms (60fps) for smooth constraint
        }
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      constrainWindowPositions(); // Final check on release
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
    });

    // Expand resize handle area for resizable windows
    // This increases the interactive area around window edges/corners for easier resizing
    const RESIZE_ZONE_SIZE = 12; // Size in pixels for the expanded resize area

    const expandResizeHandles = () => {
      const resizableWindows = document.querySelectorAll(
        "win98-window[resizable]"
      );
      resizableWindows.forEach((window) => {
        // Skip if already processed
        if (window.dataset.resizeExpanded === "true") return;
        window.dataset.resizeExpanded = "true";

        // Try to set CSS custom properties that the component might support
        // These will only work if the component uses these CSS variables
        window.style.setProperty(
          "--resize-handle-size",
          `${RESIZE_ZONE_SIZE}px`
        );
        window.style.setProperty("--resize-grip-size", `${RESIZE_ZONE_SIZE}px`);
        window.style.setProperty("--resize-zone-size", `${RESIZE_ZONE_SIZE}px`);
        window.style.setProperty(
          "--resize-border-width",
          `${RESIZE_ZONE_SIZE}px`
        );
      });
    };

    // Expand resize handles on initial load
    setTimeout(expandResizeHandles, 100);

    // Monitor for dynamically added windows and expand their resize handles
    const resizeHandleObserver = new MutationObserver(() => {
      setTimeout(expandResizeHandles, 50);
    });

    resizeHandleObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // ============================================
    // MOBILE TOUCH SUPPORT FOR WINDOW DRAGGING AND RESIZING
    // ============================================
    // Global state to track active window interaction
    const touchState = {
      activeWindow: null,
      activeTouch: null,
    };

    const cancelAllWindowInteractions = () => {
      const windows = document.querySelectorAll("win98-window[resizable]");
      windows.forEach((window) => {
        if (window.touchData) {
          window.touchData.isDragging = false;
          window.touchData.isResizing = false;
          window.touchData.resizeEdge = null;
        }
      });
      touchState.activeWindow = null;
      touchState.activeTouch = null;
    };

    const setupTouchSupport = () => {
      const windows = document.querySelectorAll("win98-window[resizable]");
      windows.forEach((window) => {
        if (window.dataset.touchSetup === "true") return;
        window.dataset.touchSetup = "true";

        // Store touch state on window element
        window.touchData = {
          touchStartX: 0,
          touchStartY: 0,
          touchOffsetX: 0, // Offset from touch point to window's left edge
          touchOffsetY: 0, // Offset from touch point to window's top edge
          initialLeft: 0,
          initialTop: 0,
          initialWidth: 0,
          initialHeight: 0,
          isDragging: false,
          isResizing: false,
          resizeEdge: null,
        };

        const getWindowStylePosition = () => {
          const style = window.style;
          const rect = window.getBoundingClientRect();
          // Get actual computed position from style, fallback to getBoundingClientRect
          let left = 0;
          let top = 0;

          if (style.left) {
            const leftValue = style.left;
            if (leftValue.includes("px")) {
              left = parseFloat(leftValue);
            } else if (leftValue.includes("vh") || leftValue.includes("vw")) {
              // For vh/vw units, use getBoundingClientRect
              left = rect.left;
            } else {
              left = parseFloat(leftValue) || rect.left;
            }
          } else {
            left = rect.left;
          }

          if (style.top) {
            const topValue = style.top;
            if (topValue.includes("px")) {
              top = parseFloat(topValue);
            } else if (topValue.includes("vh") || topValue.includes("vw")) {
              // For vh/vw units, use getBoundingClientRect
              top = rect.top;
            } else {
              top = parseFloat(topValue) || rect.top;
            }
          } else {
            top = rect.top;
          }

          return { left, top, width: rect.width, height: rect.height };
        };

        const getTouch = (e) => {
          if (touchState.activeTouch === null && e.touches.length > 0) {
            touchState.activeTouch = e.touches[0].identifier;
            return e.touches[0];
          }
          for (let touch of e.touches) {
            if (touch.identifier === touchState.activeTouch) {
              return touch;
            }
          }
          return e.touches[0];
        };

        const getResizeEdge = (touchX, touchY, rect) => {
          const edgeSize = 20; // Touch area size for edges
          const cornerSize = 30; // Touch area size for corners

          const left = touchX - rect.left;
          const right = rect.right - touchX;
          const top = touchY - rect.top;
          const bottom = rect.bottom - touchY;

          // Check corners first (they take priority)
          if (left < cornerSize && top < cornerSize) return "nw";
          if (right < cornerSize && top < cornerSize) return "ne";
          if (left < cornerSize && bottom < cornerSize) return "sw";
          if (right < cornerSize && bottom < cornerSize) return "se";

          // Check edges
          if (left < edgeSize) return "w";
          if (right < edgeSize) return "e";
          if (top < edgeSize) return "n";
          if (bottom < edgeSize) return "s";

          return null;
        };

        const handleTouchStart = (e) => {
          // If another window is active, cancel its interaction first
          if (touchState.activeWindow && touchState.activeWindow !== window) {
            cancelAllWindowInteractions();
          }

          const touch = getTouch(e);
          if (!touch) return;

          // Set this window as active
          touchState.activeWindow = window;

          const data = window.touchData;
          data.touchStartX = touch.clientX;
          data.touchStartY = touch.clientY;

          // Get window's current position
          const windowRect = window.getBoundingClientRect();
          const stylePos = getWindowStylePosition();

          // Calculate offset from touch point to window's top-left corner
          data.touchOffsetX = touch.clientX - windowRect.left;
          data.touchOffsetY = touch.clientY - windowRect.top;

          // Check if we clicked on the title bar area (top portion of window)
          const touchY = touch.clientY;
          const windowTop = windowRect.top;
          const titleBarHeight = 30; // Approximate title bar height

          if (touchY - windowTop < titleBarHeight && !data.isResizing) {
            // Starting drag - use getBoundingClientRect for accurate position
            data.isDragging = true;
            data.initialLeft = windowRect.left;
            data.initialTop = windowRect.top;
            e.preventDefault();
          } else {
            // Check if we're on a resize edge
            data.resizeEdge = getResizeEdge(
              touch.clientX,
              touch.clientY,
              windowRect
            );
            if (data.resizeEdge) {
              data.isResizing = true;
              data.initialLeft = stylePos.left;
              data.initialTop = stylePos.top;
              data.initialWidth = stylePos.width;
              data.initialHeight = stylePos.height;
              e.preventDefault();
            }
          }
        };

        const handleTouchMove = (e) => {
          // Only process if this window is the active one
          if (touchState.activeWindow !== window) return;

          const touch = getTouch(e);
          if (!touch) return;

          const data = window.touchData;
          if (!data.isDragging && !data.isResizing) return;

          e.preventDefault();

          if (data.isDragging) {
            // Move window - position based on touch position minus the offset
            // This ensures the window follows the finger accurately
            const newLeft = touch.clientX - data.touchOffsetX;
            const newTop = Math.max(0, touch.clientY - data.touchOffsetY); // Prevent going above viewport
            window.style.left = `${newLeft}px`;
            window.style.top = `${newTop}px`;
          } else if (data.isResizing && data.resizeEdge) {
            // For resizing, use delta calculation
            const deltaX = touch.clientX - data.touchStartX;
            const deltaY = touch.clientY - data.touchStartY;
            // Resize window
            const style = window.style;
            let newWidth = data.initialWidth;
            let newHeight = data.initialHeight;
            let newLeft = data.initialLeft;
            let newTop = data.initialTop;

            if (data.resizeEdge.includes("e")) {
              newWidth = Math.max(200, data.initialWidth + deltaX);
            }
            if (data.resizeEdge.includes("w")) {
              newWidth = Math.max(200, data.initialWidth - deltaX);
              newLeft = data.initialLeft + deltaX;
            }
            if (data.resizeEdge.includes("s")) {
              newHeight = Math.max(200, data.initialHeight + deltaY);
            }
            if (data.resizeEdge.includes("n")) {
              newHeight = Math.max(200, data.initialHeight - deltaY);
              newTop = Math.max(0, data.initialTop + deltaY);
            }

            style.width = `${newWidth}px`;
            style.height = `${newHeight}px`;
            if (data.resizeEdge.includes("w")) style.left = `${newLeft}px`;
            if (data.resizeEdge.includes("n")) style.top = `${newTop}px`;
          }
        };

        const handleTouchEnd = (e) => {
          // Only process if this window is the active one
          if (touchState.activeWindow !== window) return;

          const data = window.touchData;
          if (data.isDragging || data.isResizing) {
            data.isDragging = false;
            data.isResizing = false;
            data.resizeEdge = null;
            touchState.activeWindow = null;
            touchState.activeTouch = null;
            constrainWindowPositions();
          }
        };

        // Add touch event listeners
        window.addEventListener("touchstart", handleTouchStart, {
          passive: false,
        });
        window.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("touchcancel", handleTouchEnd);
      });
    };

    // Setup touch support on initial load
    setTimeout(setupTouchSupport, 200);

    // Monitor for dynamically added windows and setup touch support
    const touchSupportObserver = new MutationObserver(() => {
      setTimeout(setupTouchSupport, 50);
    });

    touchSupportObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Monitor for dynamically added windows
    const windowObserver = new MutationObserver(() => {
      constrainWindowPositions();
      ensureMinimizeButtons();
      fixLeftResizeForRightPositionedWindows();
    });

    const desktop = document.querySelector("win98-desktop");
    if (desktop) {
      windowObserver.observe(desktop, {
        childList: true,
        subtree: true,
      });

      // Background wallpaper is now handled by applyColorPalette based on selected theme
      // This ensures dark theme gets dark background, others get default background
    }

    // ============================================
    // WINDOW MINIMIZE FUNCTIONALITY
    // ============================================
    // The 98-components library has built-in minimize functionality!
    // Windows automatically have minimize buttons (unless show-help is set)
    // The desktop component handles minimize/restore automatically via events
    // We need to ensure windows are properly registered with the desktop

    // Ensure all windows have show-minimize attribute (enabled by default, but explicit is better)
    function ensureMinimizeButtons() {
      document.querySelectorAll("win98-window").forEach((window) => {
        // Only add if not already set and not showing help
        if (
          !window.hasAttribute("show-help") &&
          !window.hasAttribute("show-minimize")
        ) {
          window.setAttribute("show-minimize", "");
        }
      });
    }

    // Function to update taskbar button state (accessible globally)
    function updateTaskbarButton(window, isMinimized) {
      const taskbar = document.querySelector("win98-taskbar");
      if (!taskbar || !taskbar.shadowRoot) return;

      const windowTitle = window.getAttribute("title");
      const buttons = taskbar.shadowRoot.querySelectorAll(".task-button");

      buttons.forEach((button) => {
        if (button.textContent?.trim() === windowTitle) {
          // Remove existing state classes
          button.classList.remove("active", "minimized");

          // Add appropriate state class
          if (isMinimized) {
            button.classList.add("minimized");
          } else {
            // Window is open - check if it's the active window
            const allWindows = document.querySelectorAll("win98-window");
            let isActive = false;
            let highestZ = -1;

            allWindows.forEach((w) => {
              if (!w.hasAttribute("data-minimized")) {
                const z = parseInt(w.style.zIndex || "0");
                if (z > highestZ) {
                  highestZ = z;
                  isActive = w === window;
                }
              }
            });

            if (isActive || highestZ === -1) {
              button.classList.add("active");
            }
          }
        }
      });
    }

    // Ensure windows are registered with the desktop component
    function ensureWindowsRegistered() {
      const desktopEl = document.querySelector("win98-desktop");
      if (!desktopEl) return;

      // The desktop component should auto-register windows, but we can trigger it manually
      // by accessing the registerWindows method if available
      if (
        desktopEl.registerWindows &&
        typeof desktopEl.registerWindows === "function"
      ) {
        desktopEl.registerWindows();
      }
    }

    // Helper function to minimize a window
    function minimizeWindow(window) {
      if (!window) return;
      // Hide the window forcefully
      window.style.setProperty("display", "none", "important");
      window.style.setProperty("visibility", "hidden", "important");
      window.setAttribute("data-minimized", "true");
      // Also add a class to help with CSS targeting
      window.classList.add("minimized");
      // Update taskbar button to show minimized state
      updateTaskbarButton(window, true);
      console.log("Window minimized:", window.getAttribute("title"));
    }

    // Helper function to close a window
    function closeWindow(window) {
      if (!window) return;
      window.remove();
      console.log("Window closed:", window.getAttribute("title"));
    }

    // Use a global click handler with composedPath to catch shadow DOM clicks
    document.addEventListener(
      "click",
      (e) => {
        // Get the full path of the click (including shadow DOM)
        const path = e.composedPath();

        // Find if any element in the path is a minimize button
        const minimizeButton = path.find(
          (el) =>
            el.getAttribute?.("aria-label") === "Minimize" ||
            (el.tagName === "BUTTON" && el.textContent?.trim() === "—")
        );

        // Find if any element in the path is a close button
        const closeButton = path.find(
          (el) =>
            el.getAttribute?.("aria-label") === "Close" ||
            (el.tagName === "BUTTON" && el.textContent?.trim() === "×")
        );

        if (minimizeButton || closeButton) {
          // Find the window that contains this button
          const window = path.find((el) => el.tagName === "WIN98-WINDOW");

          if (window) {
            e.preventDefault();
            e.stopPropagation();

            if (minimizeButton) {
              minimizeWindow(window);
            } else if (closeButton) {
              closeWindow(window);
            }
          }
        }
      },
      true
    ); // Capture phase

    // Add touch event handler for mobile devices (fallback for buttons not directly handled)
    let touchTarget = null;
    document.addEventListener(
      "touchstart",
      (e) => {
        const path = e.composedPath();
        const minimizeButton = path.find(
          (el) =>
            el.getAttribute?.("aria-label") === "Minimize" ||
            (el.tagName === "BUTTON" && el.textContent?.trim() === "—")
        );
        const closeButton = path.find(
          (el) =>
            el.getAttribute?.("aria-label") === "Close" ||
            (el.tagName === "BUTTON" && el.textContent?.trim() === "×")
        );

        if (minimizeButton || closeButton) {
          // Store target but don't preventDefault yet to avoid interfering with window dragging
          const touch = e.touches[0];
          touchTarget = {
            button: minimizeButton || closeButton,
            path,
            startX: touch.clientX,
            startY: touch.clientY,
          };
        }
      },
      true
    );

    document.addEventListener(
      "touchend",
      (e) => {
        if (touchTarget) {
          const { button, path, startX, startY } = touchTarget;
          const touch = e.changedTouches[0];

          // Only trigger if it's a tap (didn't move much)
          const deltaX = Math.abs(touch.clientX - startX);
          const deltaY = Math.abs(touch.clientY - startY);
          const maxMovement = 10; // pixels

          if (deltaX < maxMovement && deltaY < maxMovement) {
            const window = path.find((el) => el.tagName === "WIN98-WINDOW");

            if (window) {
              e.preventDefault();
              e.stopPropagation();

              const isMinimize =
                button.getAttribute?.("aria-label") === "Minimize" ||
                (button.tagName === "BUTTON" &&
                  button.textContent?.trim() === "—");
              const isClose =
                button.getAttribute?.("aria-label") === "Close" ||
                (button.tagName === "BUTTON" &&
                  button.textContent?.trim() === "×");

              if (isMinimize) {
                minimizeWindow(window);
              } else if (isClose) {
                closeWindow(window);
              }
            }
          }
          touchTarget = null;
        }
      },
      true
    );

    document.addEventListener(
      "touchcancel",
      () => {
        touchTarget = null;
      },
      true
    );

    // Also directly attach handlers to minimize and close buttons in shadow DOM
    function attachMinimizeHandlers() {
      document.querySelectorAll("win98-window").forEach((window) => {
        if (window.dataset.minimizeHandlerAttached) return;

        const tryAttach = () => {
          if (!window.shadowRoot) {
            setTimeout(tryAttach, 50);
            return;
          }

          const minimizeBtn = window.shadowRoot.querySelector(
            '[aria-label="Minimize"]'
          );
          const closeBtn = window.shadowRoot.querySelector(
            '[aria-label="Close"]'
          );

          if (minimizeBtn && !minimizeBtn.dataset.handlerAttached) {
            minimizeBtn.dataset.handlerAttached = "true";
            window.dataset.minimizeHandlerAttached = "true";

            // Add click handler
            minimizeBtn.addEventListener(
              "click",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                minimizeWindow(window);
              },
              true
            );

            // Add touch handlers for mobile
            minimizeBtn.addEventListener(
              "touchstart",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
              },
              { passive: false, capture: true }
            );

            minimizeBtn.addEventListener(
              "touchend",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                minimizeWindow(window);
              },
              { passive: false, capture: true }
            );
          } else if (!minimizeBtn) {
            setTimeout(tryAttach, 100);
          }

          if (closeBtn && !closeBtn.dataset.closeHandlerAttached) {
            closeBtn.dataset.closeHandlerAttached = "true";

            // Add click handler
            closeBtn.addEventListener(
              "click",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeWindow(window);
              },
              true
            );

            // Add touch handlers for mobile
            closeBtn.addEventListener(
              "touchstart",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
              },
              { passive: false, capture: true }
            );

            closeBtn.addEventListener(
              "touchend",
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeWindow(window);
              },
              { passive: false, capture: true }
            );
          }
        };

        tryAttach();
      });
    }

    // Attach handlers after a delay to ensure shadow DOM is ready
    setTimeout(attachMinimizeHandlers, 300);
    setTimeout(attachMinimizeHandlers, 1000); // Try again in case components load late

    // Handle window restore (when clicking taskbar or programmatically)
    function setupRestoreHandlers() {
      // Listen for window-restored events from the library
      document.addEventListener("window-restored", (e) => {
        const windowTitle = e.detail?.title || e.target?.getAttribute("title");
        if (windowTitle) {
          const window = document.querySelector(
            `win98-window[title="${windowTitle}"]`
          );
          if (window && window.hasAttribute("data-minimized")) {
            window.style.removeProperty("display");
            window.style.removeProperty("visibility");
            window.removeAttribute("data-minimized");
            window.classList.remove("minimized");
            window.classList.add("window-pop-open");
            bringWindowToFront(window);

            // Update taskbar button to show active state
            updateTaskbarButton(window, false);
          }
        }
      });

      // Also listen for clicks on taskbar buttons to restore windows
      const taskbar = document.querySelector("win98-taskbar");
      if (taskbar && taskbar.shadowRoot) {
        // Use event delegation for taskbar clicks
        taskbar.shadowRoot.addEventListener("click", (e) => {
          const button = e.target.closest("button, [role='button']");
          if (button && !button.classList.contains("start-button")) {
            const windowTitle =
              button.textContent?.trim() || button.getAttribute("title");
            if (windowTitle) {
              const window = document.querySelector(
                `win98-window[title="${windowTitle}"]`
              );
              if (window && window.hasAttribute("data-minimized")) {
                // Restore the window
                window.style.removeProperty("display");
                window.style.removeProperty("visibility");
                window.removeAttribute("data-minimized");
                window.classList.remove("minimized");
                window.classList.add("window-pop-open");
                bringWindowToFront(window);

                // Update taskbar button to show active state
                updateTaskbarButton(window, false);
              }
            }
          }
        });
      }
    }

    // Make title bars responsive - truncate title text when window is narrow
    function makeTitleBarsResponsive() {
      document.querySelectorAll("win98-window").forEach((window) => {
        if (window.dataset.titleBarResponsive) return;
        window.dataset.titleBarResponsive = "true";

        const setupTitleBar = () => {
          if (!window.shadowRoot) {
            setTimeout(setupTitleBar, 50);
            return;
          }

          const titleBar = window.shadowRoot.querySelector(".title-bar");
          const titleText = window.shadowRoot.querySelector(".title-bar-text");
          const titleControls = window.shadowRoot.querySelector(
            ".title-bar-controls"
          );

          if (titleBar && titleText && titleControls) {
            // Add styles to make title bar responsive
            if (
              !window.shadowRoot.querySelector("#responsive-title-bar-styles")
            ) {
              const style = document.createElement("style");
              style.id = "responsive-title-bar-styles";
              style.textContent = `
                .title-bar {
                  display: flex !important;
                  align-items: center !important;
                  min-width: 0 !important;
                }
                .title-bar-text {
                  flex: 1 1 auto !important;
                  min-width: 0 !important;
                  overflow: hidden !important;
                  text-overflow: ellipsis !important;
                  white-space: nowrap !important;
                  margin-right: 4px !important;
                }
                .title-bar-controls {
                  flex: 0 0 auto !important;
                  display: flex !important;
                  gap: 2px !important;
                  margin-left: auto !important;
                  flex-shrink: 0 !important;
                }
              `;
              window.shadowRoot.appendChild(style);
            }
          } else {
            setTimeout(setupTitleBar, 100);
          }
        };

        setupTitleBar();
      });
    }

    // Setup minimize buttons and registration for existing windows
    setTimeout(() => {
      ensureMinimizeButtons();
      ensureWindowsRegistered();
      setupRestoreHandlers();
      makeTitleBarsResponsive();
    }, 300);

    // Re-register when new windows are added
    const minimizeObserver = new MutationObserver(() => {
      ensureMinimizeButtons();
      ensureWindowsRegistered();
      makeTitleBarsResponsive();
    });

    const desktopForMinimize = document.querySelector("win98-desktop");
    if (desktopForMinimize) {
      minimizeObserver.observe(desktopForMinimize, {
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

      // Re-enable tracking on next frame (instantaneous response)
      requestAnimationFrame(() => {
        windowHistory.isTracking = true;
      });
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

    // Ensure start menu is properly initialized
    if (startMenu) {
      startMenu.style.display = "none";
    }

    // Track if listener is attached to avoid duplicates
    let startButtonListenerAttached = false;

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

    // Reset button visual state
    const resetButtonState = (button) => {
      if (!button) return;
      // Force button to lose active/pressed state
      button.blur();
      // Remove any active/pressed classes that might be stuck
      button.classList.remove("active", "pressed", "down");
      // Remove inline styles that might be stuck
      button.style.removeProperty("outline");
      // Use mouseleave event to reset hover state
      button.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      // Trigger a reflow to reset visual state
      requestAnimationFrame(() => {
        void button.offsetWidth;
      });
    };

    // Toggle start menu function
    const toggleStartMenu = (e) => {
      if (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        // Don't preventDefault - let the button handle its own visual state naturally
      }

      if (!startMenu) return;

      const isVisible = startMenu.style.display !== "none";
      startMenu.style.display = isVisible ? "none" : "block";

      // Reset button state after menu toggles - use a small delay to let button's native handler finish
      const startButton = findStartButton();
      if (startButton) {
        // Use requestAnimationFrame to reset after the browser processes the click
        requestAnimationFrame(() => {
          setTimeout(() => {
            resetButtonState(startButton);
          }, 50);
        });
      }
    };

    // Setup start button handler with retry logic
    const setupStartButton = (maxRetries = 10, currentRetry = 0) => {
      const startButton = findStartButton();

      if (startButton && !startButtonListenerAttached) {
        // Add our handler with capture phase to ensure it runs first and stops other handlers
        startButton.addEventListener("click", toggleStartMenu, {
          capture: true,
        });
        startButtonListenerAttached = true;
      } else if (!startButton && currentRetry < maxRetries) {
        // Retry if button not found yet
        setTimeout(() => {
          setupStartButton(maxRetries, currentRetry + 1);
        }, 100);
      } else if (!startButton && taskbar && !startButtonListenerAttached) {
        // Fallback: listen for clicks on the taskbar itself
        taskbar.addEventListener(
          "click",
          (e) => {
            // Check if click is on the left side (where start button would be)
            const rect = taskbar.getBoundingClientRect();
            if (e.clientX < rect.left + 100) {
              toggleStartMenu(e);
            }
          },
          { capture: true }
        );
        startButtonListenerAttached = true;
      }
    };

    // Start trying to setup the button - use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setupStartButton();
    });

    // Close start menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!startMenu) return;

      // Don't close if clicking on start menu itself
      if (startMenu.contains(e.target)) return;

      const startButton = findStartButton();
      // Don't close if clicking the start button (it will toggle)
      if (startButton && startButton.contains(e.target)) return;

      // Close the menu
      if (startMenu.style.display !== "none") {
        startMenu.style.display = "none";
        // Reset button state when menu closes
        if (startButton) {
          resetButtonState(startButton);
        }
      }
    });

    // Typewriter animation function - animates elements by reading their innerHTML
    // Supports both plain text and HTML strings
    function animateElement(
      element,
      baseDelay,
      randomVariation,
      extraPauseChance,
      extraPauseAmount
    ) {
      const textOrHtml = element.innerHTML;
      element.innerHTML = "";
      element.style.visibility = "visible";

      // Check if input contains HTML tags
      const hasHtml = /<[^>]+>/.test(textOrHtml);

      if (!hasHtml) {
        // Plain text - simple case
        let index = 0;
        function typeNextChar() {
          if (index < textOrHtml.length) {
            element.textContent = textOrHtml.substring(0, index + 1);
            index++;

            const charDelay = baseDelay + Math.random() * randomVariation;
            const extraPause =
              Math.random() < extraPauseChance ? extraPauseAmount() : 0;

            setTimeout(typeNextChar, charDelay + extraPause);
          }
        }
        typeNextChar();
      } else {
        // HTML - parse structure and type while preserving tags
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = textOrHtml;

        // Extract plain text content
        const plainText = tempDiv.textContent || tempDiv.innerText || "";

        // Function to build HTML up to a specific character position
        const buildHtmlUpTo = (
          node,
          targetLength,
          currentPos = { value: 0 }
        ) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || "";
            const textStart = currentPos.value;
            const textEnd = Math.min(textStart + text.length, targetLength);

            if (textEnd > textStart) {
              const visibleText = text.substring(0, textEnd - textStart);
              currentPos.value = textEnd;
              return visibleText;
            }
            return "";
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = node.tagName.toLowerCase();
            const attrs = Array.from(node.attributes)
              .map((attr) => `${attr.name}="${attr.value}"`)
              .join(" ");
            const openTag = attrs ? `<${tagName} ${attrs}>` : `<${tagName}>`;
            const closeTag = `</${tagName}>`;

            let content = "";
            const pos = { value: currentPos.value };

            node.childNodes.forEach((child) => {
              content += buildHtmlUpTo(child, targetLength, pos);
            });

            currentPos.value = pos.value;

            // Only include tags if there's content
            if (content.length > 0 || currentPos.value >= targetLength) {
              return openTag + content + closeTag;
            }
            return "";
          }
          return "";
        };

        let charIndex = 0;
        function typeNextChar() {
          if (charIndex < plainText.length) {
            const htmlSoFar = buildHtmlUpTo(tempDiv, charIndex + 1, {
              value: 0,
            });
            element.innerHTML = htmlSoFar;

            charIndex++;

            const charDelay = baseDelay + Math.random() * randomVariation;
            const extraPause =
              Math.random() < extraPauseChance ? extraPauseAmount() : 0;

            setTimeout(typeNextChar, charDelay + extraPause);
          } else {
            // Animation complete - set final HTML
            element.innerHTML = textOrHtml;
          }
        }
        typeNextChar();
      }
    }

    // Function to trigger typing animation on elements
    function triggerTypingAnimation(selectors) {
      selectors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
          // Reset visibility for animation
          element.style.visibility = "hidden";

          // Check if it's a fast or slow animation
          if (element.classList.contains("animate-title-fast")) {
            animateElement(element, 40, 40, 0.1, () => 30 + Math.random() * 30);
          } else if (element.classList.contains("animate-title-slow")) {
            animateElement(
              element,
              120,
              150,
              0.2,
              () => 50 + Math.random() * 50
            );
          }
        }
      });
    }

    // Function to pop open a window and start its typing animation
    function popOpenWindow(windowSelector, typingSelectors, delay) {
      setTimeout(() => {
        const window = document.querySelector(windowSelector);
        if (window) {
          window.classList.add("window-pop-open");

          // Start typing animations after window pops open (wait for animation to complete)
          setTimeout(() => {
            triggerTypingAnimation(typingSelectors);
          }, 50); // Start typing shortly after window appears
        }
      }, delay);
    }

    // Pop open windows sequentially, with "My Projects" opening last
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
      // Window order: About Me -> Skills -> Hobbies -> Interactive -> My Projects (last)
      popOpenWindow(".window-about-me", ["#about-me-name"], 200);

      popOpenWindow(
        ".window-skills",
        [
          "#skills-languages",
          "#skills-frameworks",
          "#skills-libraries",
          "#skills-tools",
        ],
        700
      );

      popOpenWindow(".window-hobbies", ["#hobbies-title"], 1000);

      popOpenWindow(".window-interactive", ["#interactive-text"], 1500);

      // My Projects window opens last
      popOpenWindow(".window-projects", ["#my-projects-title"], 2000);
    }, 100);

    // Projects window tab switching - now in ./components/projects.js
    initProjectTabs();

    // Helper function to setup desktop icon click handlers (reduces code duplication)
    function setupDesktopIcon(iconId, onDoubleClick) {
      const icon = document.querySelector(iconId);
      if (!icon) return;

      let clickTimer = null;
      let isSelected = false;

      icon.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Remove selected class if it exists before double-click action
          icon.classList.remove("selected");
          isSelected = false;
          onDoubleClick();
        } else {
          clickTimer = setTimeout(() => {
            if (isSelected) {
              icon.classList.remove("selected");
              isSelected = false;
            } else {
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              icon.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!icon.contains(e.target)) {
          icon.classList.remove("selected");
          isSelected = false;
        }
      });
    }

    // Desktop folder icon click handling

    // Function to open folder window
    function openFolderWindow() {
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
        ];

        // Build images HTML with data attributes for navigation
        const imagesHTML = ASSET_IMAGES.map((img, index) => {
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
        }).join("");

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
            <win98-window title="Folder.exe" resizable show-minimize style="top: 100px; left: 100px; width: 600px; height: 500px; z-index: 1000;">
              <div class="window-body" style="padding: 8px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; border: 2px solid #808080;">
                <h3 style="margin-top: 0; margin-bottom: 8px; font-weight: bold;">Images</h3>
                <div style="margin-bottom: 20px; padding: 8px; background: #e0e0e0; border: 1px solid #c0c0c0;">
                  ${imagesHTML}
                </div>
                <h3 style="margin-top: 0; margin-bottom: 8px; font-weight: bold;">Source Code Files</h3>
                <div style="padding: 8px; background: #e0e0e0; border: 1px solid #c0c0c0;">
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
              openImageViewer(ASSET_IMAGES, imageIndex, imageName, imageUrl);
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
        bringWindowToFront(folderWindow);
      }
    }

    // Function to open image viewer window
    function openImageViewer(imageList, currentIndex, currentName, currentUrl) {
      // Check if viewer already exists
      let viewerWindow = document.querySelector(
        'win98-window[title="Image Viewer.exe"]'
      );

      if (!viewerWindow) {
        // Create viewer window HTML
        const viewerHTML = `
            <win98-window title="Image Viewer.exe" resizable show-minimize style="top: 150px; left: 200px; width: 700px; height: 600px; z-index: 2000;">
              <div class="window-body" style="padding: 8px; height: calc(100% - 54px); box-sizing: border-box; display: flex; flex-direction: column;">
                <div class="viewer-image-container" style="flex: 1; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; position: relative; overflow: hidden; padding: 8px;">
                  <div class="viewer-image-inner" style="padding: 8px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; box-sizing: border-box;">
                  <img id="viewer-main-image" src="${currentUrl}" alt="${currentName}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                  </div>
                </div>
                <div class="viewer-nav-controls" style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0;">
                  <button id="viewer-prev-btn" class="project-tab"><img src="${
                    getImageUrl("back-icon") || ""
                  }" alt="Previous" style="width: 16px; height: 16px; margin-right: 4px; vertical-align: middle;"> Previous</button>
                  <span id="viewer-image-name" style="font-weight: bold; flex: 1; text-align: center; margin: 0 8px;">${currentName}</span>
                  <span id="viewer-image-counter" style="color: #666; margin: 0 8px;">${
                    currentIndex + 1
                  } / ${imageList.length}</span>
                  <button id="viewer-next-btn" class="project-tab">Next <img src="${
                    getImageUrl("forward-icon") || ""
                  }" alt="Next" style="width: 16px; height: 16px; margin-left: 4px; vertical-align: middle;"></button>
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

          // Apply current theme to the image viewer window
          const savedPalette =
            localStorage.getItem("colorPalette") || "default";
          applyColorPalette(savedPalette);
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

    // Function to open chatbox window
    function openChatboxWindow() {
      let chatboxWindow = document.querySelector(
        'win98-window[title="Chatbox.exe"]'
      );

      if (!chatboxWindow) {
        const windowHTML = `
          <win98-window title="Chatbox.exe" resizable show-minimize style="top: 100px; left: 100px; width: 600px; height: 550px; z-index: 1000;">
              <div class="window-body" style="padding: 8px; overflow: hidden; height: calc(100% - 54px); box-sizing: border-box;">
                <iframe src="https://www3.cbox.ws/box/?boxid=3551058&boxtag=a6HwaA" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" style="border: 1px solid #808080; background: #fff;"></iframe>
              </div>
            </win98-window>
          `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          chatboxWindow = document.querySelector(
            'win98-window[title="Chatbox.exe"]'
          );
        }
      }

      if (chatboxWindow) {
        bringWindowToFront(chatboxWindow);
      }
    }

    // Helper function to bring window to front
    const bringWindowToFront = (window) => {
      if (window) {
        // Ensure window is visible (in case it was hidden/closed)
        window.style.display = "block";
        window.style.visibility = "visible";
        window.classList.add("window-pop-open");

        // Bring to front by setting highest z-index
        const allWindows = document.querySelectorAll("win98-window");
        let maxZ = 0;
        allWindows.forEach((w) => {
          const z = parseInt(w.style.zIndex) || 0;
          if (z > maxZ) maxZ = z;
        });
        window.style.zIndex = (maxZ + 1).toString();
      }
    };

    // Function to open Settings window
    function openSettingsWindow() {
      let settingsWindow = document.querySelector(
        'win98-window[title="Settings.exe"]'
      );

      if (!settingsWindow) {
        // Use the global colorPalettes defined at top level
        const paletteHTML = Object.keys(colorPalettes)
          .map((key) => {
            const palette = colorPalettes[key];
            return `
              <div class="palette-option">
                <label class="palette-label">
                  <input type="radio" name="color-palette" value="${key}" ${
              key === "default" ? "checked" : ""
            } style="cursor: pointer;">
                  <strong>${palette.name}</strong>
                  <div class="palette-color-swatches">
                    ${palette.colors
                      .map(
                        (color) =>
                          `<div class="palette-color-swatch" style="background: ${color};"></div>`
                      )
                      .join("")}
                  </div>
                </label>
                <button class="palette-apply-btn" data-palette="${key}">Apply</button>
              </div>
            `;
          })
          .join("");

        const windowHTML = `
          <win98-window title="Settings.exe" resizable show-minimize style="top: 120px; left: 100px; width: 400px; height: 360px; z-index: 1000;">
            <div class="window-body" style="padding: 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; padding-bottom: 20px;">
              <h2 style="margin-top: 0; margin-bottom: 20px; font-weight: bold; font-size: 1.5em;">Settings</h2>
              
              <div style="margin-bottom: 0;">
                <h3 style="margin: 0 0 12px 0; font-weight: bold; font-size: 1.2em;">Color Palette</h3>
                ${paletteHTML}
              </div>
            </div>
          </win98-window>
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          settingsWindow = document.querySelector(
            'win98-window[title="Settings.exe"]'
          );

          // Apply current theme to the settings window
          const savedPalette =
            localStorage.getItem("colorPalette") || "default";
          applyColorPalette(savedPalette);
        }

        // Load saved settings for display
        const savedPalette = localStorage.getItem("colorPalette") || "default";

        // Set saved values in the form
        setTimeout(() => {
          const radio = settingsWindow.querySelector(
            `input[value="${savedPalette}"]`
          );
          if (radio) radio.checked = true;
        }, 100);

        // Function to reapply current theme (useful after dynamic content changes)
        const reapplyCurrentTheme = () => {
          const savedPalette = localStorage.getItem("colorPalette");
          if (
            savedPalette &&
            savedPalette !== "default" &&
            colorPalettes[savedPalette]
          ) {
            const colors = colorPalettes[savedPalette].colors;
            // Apply to buttons and interactive elements - use darker colors (index 0 or 1) with lighter text
            document
              .querySelectorAll("button, .social-btn, a[href*='github']")
              .forEach((btn) => {
                btn.style.backgroundColor = colors[0] || "#c0c0c0"; // Darkest color
                btn.style.color = colors[3] || "#ffffff"; // Lightest color for text
              });
          } else {
            // Apply Windows 98 default colors
            document
              .querySelectorAll("button, .social-btn, a[href*='github']")
              .forEach((btn) => {
                btn.style.backgroundColor = "#c0c0c0";
                btn.style.color = "#000000";
              });
          }
        };

        // Use the global applyColorPalette function

        // Add event listeners
        if (settingsWindow) {
          // Palette Apply buttons
          const paletteApplyButtons =
            settingsWindow.querySelectorAll(".palette-apply-btn");
          paletteApplyButtons.forEach((btn) => {
            btn.onclick = () => {
              const paletteKey = btn.getAttribute("data-palette");
              // Update radio button
              const radio = settingsWindow.querySelector(
                `input[value="${paletteKey}"]`
              );
              if (radio) radio.checked = true;
              // Apply the palette
              applyColorPalette(paletteKey);
            };
          });
        }
      }

      bringWindowToFront(settingsWindow);
    }

    // Function to open thanks window
    function openThanksWindow() {
      // Check if window already exists
      let thanksWindow = document.querySelector(
        'win98-window[title="Thank you!.exe"]'
      );

      if (!thanksWindow) {
        // Build thanks HTML
        const thanksHTML = content.thanks
          .map((item) => {
            const nameHTML = item.link
              ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: #000080; text-decoration: underline; padding: 3px 6px;">${item.name}</a>`
              : `<strong>${item.name}</strong>`;
            return `
               <div class="thanks-item" style="margin-bottom: 20px; padding: 8px; border: 1px solid #808080;">
                 <h3 style="margin: 4px 0px 8px 2px; font-weight: bold; font-size: 1.2em;">${nameHTML}</h3>
                 <p style="margin: 0px 0px 0px 2px; line-height: 1.4; color: #000;">${item.description}</p>
              </div>
            `;
          })
          .join("");

        // Create thanks window HTML
        const windowHTML = `
          <win98-window title="Thank you!.exe" resizable show-minimize style="top: 50px; left: 50px; width: 600px; height: 500px; z-index: 1000;">
            <div class="window-body" style="padding: 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
              <h2 style="margin-top: 0; margin-bottom: 20px; font-weight: bold; font-size: 1.8em; text-align: center;">Thank You!</h2>
              <div style="max-width: 100%;">
                ${thanksHTML}
              </div>
            </div>
          </win98-window>
        `;

        // Insert window into desktop
        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          thanksWindow = document.querySelector(
            'win98-window[title="Thank you!.exe"]'
          );

          // Apply current theme to the thanks window
          const savedPalette =
            localStorage.getItem("colorPalette") || "default";
          applyColorPalette(savedPalette);
        }
      }

      if (thanksWindow) {
        bringWindowToFront(thanksWindow);
      }
    }

    // Setup desktop icons (all functions are now defined)
    setupDesktopIcon("#desktop-folder", openFolderWindow);
    setupDesktopIcon("#desktop-blog", () => {
      // Open blog as a separate website
      window.open("https://more-jeremy.vercel.app/", "_blank");
    });
    setupDesktopIcon("#desktop-chatbox", openChatboxWindow);
    setupDesktopIcon("#desktop-theme", openSettingsWindow);
    setupDesktopIcon("#desktop-thanks", openThanksWindow);

    // Functions to open/recreate static windows
    const openAboutMeWindow = () => {
      let aboutMeWindow = document.querySelector(
        'win98-window[title="About Me.exe"]'
      );

      if (!aboutMeWindow) {
        const activitiesHTML = content.aboutMe.currentActivities
          .map((activity) => `<li>${activity}</li>`)
          .join("");

        const windowHTML = `
          <win98-window title="About Me.exe" resizable show-minimize class="window-about-me">
            <div class="window-body">
              <h2 id="about-me-name" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">J</em>eremy <em style="font-size: 1.2em;">L</em>iu</h2>
              <p class="bold-title">${content.aboutMe.title}</p>
              <p>${content.aboutMe.bio}</p>
              <div style="display: flex; justify-content: center; margin-bottom: 8px;">
              <img src="${
                getImageUrl("cruisesunset") || ""
              }" alt="Cruise Sunset" style="width: 60%; height: 100px; margin: 8px 2px; border: 2px solid #808080; box-sizing: border-box; display: block; object-fit: cover; object-position: center;">
              <img src="${
                getImageUrl("armbar") || ""
              }" alt="Cruise Sunset" style="width: 60%; height: 100px; margin: 8px 2px; border: 2px solid #808080; box-sizing: border-box; display: block; object-fit: cover; object-position: center;">
            </div>
              <div class="social-buttons-grid">
                <a href="https://www.linkedin.com/in/jmyl" target="_blank" class="social-btn"><img src="${
                  getImageUrl("linkedin-icon") || ""
                }" alt="LinkedIn"> LinkedIn</a>
                <a href="mailto:jeremyliu621@gmail.com" class="social-btn"><img src="${
                  getImageUrl("email-icon") || ""
                }" alt="Email"> Email</a>
                <a href="https://github.com/Jeremyliu-621" target="_blank" class="social-btn"><img src="${
                  getImageUrl("github-icon") || ""
                }" alt="GitHub"> Github</a>
                <a href="https://github.com/Jeremyliu-621/Jeremy-Liu-Resume" target="_blank" class="social-btn"><img src="${
                  getImageUrl("resume-icon") || ""
                }" alt="Resume"> Resume</a>
                <a href="https://instagram.com/jeremyliu.621" target="_blank" class="social-btn"><img src="${
                  getImageUrl("instagram-icon") || ""
                }" alt="Instagram"> Instagram</a>
                <a href="https://devpost.com/jeremyliu621" target="_blank" class="social-btn"><img src="${
                  getImageUrl("devpost-icon") || ""
                }" alt="Devpost"> Devpost</a>
              </div>
            </div>
          </win98-window>
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          aboutMeWindow = document.querySelector(
            'win98-window[title="About Me.exe"]'
          );

          if (aboutMeWindow) {
            aboutMeWindow.classList.add("window-pop-open");
            // Apply current theme to the window
            const savedPalette =
              localStorage.getItem("colorPalette") || "default";
            applyColorPalette(savedPalette);
            // Trigger typing animation
            setTimeout(() => {
              triggerTypingAnimation(["#about-me-name"]);
            }, 50);
          }
        }
      }

      if (aboutMeWindow) {
        bringWindowToFront(aboutMeWindow);
        // Trigger typing animation if window already exists
        setTimeout(() => {
          triggerTypingAnimation(["#about-me-name"]);
        }, 50);
      }
    };

    const openSkillsWindow = () => {
      let skillsWindow = document.querySelector(
        'win98-window[title="Skills.exe"]'
      );

      if (!skillsWindow) {
        const improvingHTML = content.skills.improvingBy
          .map((item) => `<li>${item}</li>`)
          .join("");

        const windowHTML = `
          <win98-window title="Skills.exe" resizable show-minimize class="window-skills">
            <div class="window-body">
              <h3 id="skills-languages" class="animate-title-fast" style="color: var(--palette-color-1, #000000); visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Languages</em></h3>
              <p style="margin: 3px 0;">${content.skills.languages}</p>
              
              <hr style="margin: 8px 0;">
              
              <h3 id="skills-frameworks" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Frameworks</em></h3>
              <p style="margin: 3px 0;">${content.skills.frameworks}</p>
              
              <hr style="margin: 8px 0;">

              <h3 id="skills-libraries" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Libraries</em></h3>
              <p style="margin: 3px 0;">${content.skills.libraries}</p>
          
              <hr style="margin: 8px 0;">
              
              <h3 id="skills-tools" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><em style="font-size: 1.2em;">Tools</em></h3>
              <p style="margin: 3px 0;">${content.skills.tools}</p>
              
              <hr style="margin: 8px 0;">
              
              <h3>Currently improving by:</h3>
              <ul style="text-align: left; margin: 3px 0 0 0; padding-left: 20px; line-height: 1.4;">
                ${improvingHTML}
              </ul>
              </div>
          </win98-window>
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          skillsWindow = document.querySelector(
            'win98-window[title="Skills.exe"]'
          );

          if (skillsWindow) {
            skillsWindow.classList.add("window-pop-open");
            // Apply current theme to the window
            const savedPalette =
              localStorage.getItem("colorPalette") || "default";
            applyColorPalette(savedPalette);
            // Trigger typing animation
            setTimeout(() => {
              triggerTypingAnimation([
                "#skills-languages",
                "#skills-frameworks",
                "#skills-libraries",
                "#skills-tools",
              ]);
            }, 50);
          }
        }
      }

      if (skillsWindow) {
        bringWindowToFront(skillsWindow);
        // Trigger typing animation if window already exists
        setTimeout(() => {
          triggerTypingAnimation([
            "#skills-languages",
            "#skills-frameworks",
            "#skills-libraries",
            "#skills-tools",
          ]);
        }, 50);
      }
    };

    const openHobbiesWindow = () => {
      let hobbiesWindow = document.querySelector(
        'win98-window[title="Hobbies.exe"]'
      );

      if (!hobbiesWindow) {
        const windowHTML = `
          <win98-window title="Hobbies.exe" resizable show-minimize class="window-hobbies">
            <div class="window-body">
              <h3 id="hobbies-title" class="animate-title-fast" style="visibility: hidden; min-height: 1.2em;"><span style="font-size: 1.2em;">Outside</span> of Academics</h3>
              <p>${content.hobbies}</p>
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
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          hobbiesWindow = document.querySelector(
            'win98-window[title="Hobbies.exe"]'
          );

          if (hobbiesWindow) {
            hobbiesWindow.classList.add("window-pop-open");
            // Apply current theme to the window
            const savedPalette =
              localStorage.getItem("colorPalette") || "default";
            applyColorPalette(savedPalette);
            // Trigger typing animation
            setTimeout(() => {
              triggerTypingAnimation(["#hobbies-title"]);
            }, 50);
          }
        }
      }

      if (hobbiesWindow) {
        bringWindowToFront(hobbiesWindow);
        // Trigger typing animation if window already exists
        setTimeout(() => {
          triggerTypingAnimation(["#hobbies-title"]);
        }, 50);
      }
    };

    const openProjectsWindow = () => {
      let projectsWindow = document.querySelector(
        'win98-window[title="My Projects.exe"]'
      );

      if (!projectsWindow) {
        const projectsHTML = content.projects
          .map((project, index) => createProjectHTML(project, index))
          .join("");
        const windowHTML = generateProjectsWindowHTML(projectsHTML);

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          projectsWindow = document.querySelector(
            'win98-window[title="My Projects.exe"]'
          );

          if (projectsWindow) {
            projectsWindow.classList.add("window-pop-open");
            // Apply current theme to the window
            const savedPalette =
              localStorage.getItem("colorPalette") || "default";
            applyColorPalette(savedPalette);

            // Initialize project tabs after window is created
            setTimeout(() => {
              initProjectTabs();
              // Trigger typing animation
              triggerTypingAnimation(["#my-projects-title"]);
            }, 100);
          }
        }
      }

      if (projectsWindow) {
        bringWindowToFront(projectsWindow);
        // Trigger typing animation if window already exists
        setTimeout(() => {
          triggerTypingAnimation(["#my-projects-title"]);
        }, 50);
      }
    };

    const openInteractiveWindow = () => {
      let interactiveWindow = document.querySelector(
        'win98-window[title="Interactive.exe"]'
      );

      if (!interactiveWindow) {
        const windowHTML = `
          <win98-window title="Interactive.exe" resizable show-minimize class="window-interactive">
            <div class="window-body" style="overflow: hidden; display: flex; align-items: center; gap: 10px;">
              <p id="interactive-text" class="animate-title-fast" style="margin: 0; font-size: 1.15em; flex: 1; visibility: hidden;">you can interact with windows!</p>
              <img src="${
                getImageUrl("ascii-gif") || ""
              }" alt="Bear" style="max-width: 100px; height: auto; flex-shrink: 0; border: 2px solid #808080;">
            </div>
          </win98-window>
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          interactiveWindow = document.querySelector(
            'win98-window[title="Interactive.exe"]'
          );

          if (interactiveWindow) {
            interactiveWindow.classList.add("window-pop-open");
            // Apply current theme to the window
            const savedPalette =
              localStorage.getItem("colorPalette") || "default";
            applyColorPalette(savedPalette);
            // Trigger typing animation
            setTimeout(() => {
              triggerTypingAnimation(["#interactive-text"]);
            }, 50);
          }
        }
      }

      if (interactiveWindow) {
        bringWindowToFront(interactiveWindow);
        // Trigger typing animation if window already exists
        setTimeout(() => {
          triggerTypingAnimation(["#interactive-text"]);
        }, 50);
      }
    };

    // Helper function to trigger desktop icon double-click (for windows that need to be created)

    // Start menu item click handlers
    const menuItems = {
      "menu-about-me": () => openAboutMeWindow(),
      "menu-skills": () => openSkillsWindow(),
      "menu-hobbies": () => openHobbiesWindow(),
      "menu-projects": () => openProjectsWindow(),
      "menu-interactive": () => openInteractiveWindow(),
      "menu-folder": () => openFolderWindow(),
      "menu-blog": () => {
        // Open blog as a separate website
        window.open("https://your-blog-url.com", "_blank");
      },
      "menu-chatbox": () => openChatboxWindow(),
      "menu-thanks": () => openThanksWindow(),
      "menu-theme-editor": () => openSettingsWindow(),
      "menu-shutdown": () => {
        if (confirm("Are you sure you want to shut down?")) {
          // Close the website
          window.close();
          // If window.close() doesn't work (some browsers block it), redirect
          if (!document.hidden) {
            window.location.href = "about:blank";
          }
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

// Run after a short delay to ensure 98.css has loaded, and on window load
const setupCursor = () => {
  setGlobalCursor();
  window.addEventListener("load", setGlobalCursor, { once: true });
};
setTimeout(setupCursor, 100);
