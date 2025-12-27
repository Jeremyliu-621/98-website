import "./style.css";

// Import Windows 98 CSS styles
import "98.css";

// Register 98-components web components + styles
import "98-components";

// Import all images from src/assets
const images = import.meta.glob("./assets/*.*", { eager: true });

// Helper to get image URL by filename (partial match, case-insensitive)
function getImageUrl(filename) {
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
      description: "Water Sprayer that stops bad habits.",
      front: "React, Vite, TypeScript",
      back: "Python + Flask, OpenCV, PySerial, Pygame",
      image: "stop_dont_go_on_grey",
      github: "https://github.com/Jeremyliu-621/stop-dont-go-on", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "Binder",
      description: "A swipe-based interface for thrifting.",
      front: "Next.js, Typescript, Tailwind, Vite",
      back: "Python, Beautifulsoup, Selenium",
      image: "binder_action",
      github: "https://github.com/Jeremyliu-621/binder", // Add your GitHub URL here, or leave as null for no button
    },
    {
      title: "UFC Index website",
      description: "A website that shows scraped stats for UFC Fighters.",
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
      name: "buttered_official",
      description: "For giving me the idea for a windows 98 website.",
      link: "https://www.instagram.com/buttered_official/",
    },
    // Add more thanks below by copying the structure above
    // Example:
    // {
    //   name: "Friend's Name",
    //   description: "For their support and encouragement.",
    //   link: "https://example.com", // or null for no link
    // },
  ],
};

// Helper function to create project HTML
function createProjectHTML(project, index) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div style="margin: 4px 0; padding: 5px; border: 1px solid #808080; background: #e0e0e0; display: flex; gap: 8px; align-items: flex-start;">
      <div style="flex: 1; min-width: 0;">
        <h3 style="margin-top: 0; margin-bottom: 3px; font-weight: bold;">${project.title}</h4>
        <p style="margin: 8px 0;">${project.description}</p>`;

  if (project.front || project.back) {
    html += `
      <p style="margin: 3px 0 0 0; color: #666;">
        ${project.front ? `<strong>Front:</strong> ${project.front}<br>` : ""}
        ${project.back ? `<strong>BACK.</strong> ${project.back}` : ""}
      </p>`;
  }

  // Add GitHub button if github URL is provided
  if (project.github) {
    html += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="social-btn" style="display: flex; align-items: center; justify-content: center; margin-top: 6px; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;">
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

// Function to create HTML for a single project view (for tabs)
function createSingleProjectHTML(project) {
  const imgUrl = project.image ? getImageUrl(project.image) : null;

  let html = `
    <div style="margin: 4px 0; padding: 5px; border: 1px solid #808080; background: #e0e0e0;">
      <h2 style="margin-top: 0; margin-bottom: 8px; font-weight: bold; font-size: 1.5em;">${project.title}</h2>`;

  // Image
  if (imgUrl) {
    html += `
      <img src="${imgUrl}" style="width: 100%; max-width: 500px; height: auto; border: 2px solid #808080; margin-bottom: 12px; display: block; object-fit: cover;" alt="${project.title}">`;
  }

  // Stack (Front/Back)
  if (project.front || project.back) {
    html += `
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0 0 4px 0; font-weight: bold; font-size: 1.2em;">Stack</h3>
        <p style="margin: 2px 0; color: #000;">
          ${project.front ? `<strong>Front:</strong> ${project.front}<br>` : ""}
          ${project.back ? `<strong>BACK.</strong> ${project.back}` : ""}
        </p>
      </div>`;
  }

  // Description
  html += `
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0 0 4px 0; font-weight: bold; font-size: 1.2em;">Description</h3>
        <p style="margin: 2px 0; line-height: 1.4;">${project.description}</p>
      </div>`;

  // GitHub button
  if (project.github) {
    html += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="social-btn" style="display: flex; align-items: center; justify-content: center; margin-top: 8px; padding: 10px 8px; background: #c0c0c0; border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-bottom: 2px solid #808080; border-right: 2px solid #808080; text-decoration: none; color: #000; font-size: 1.15em; cursor: pointer; font-family: 'Jersey 10', sans-serif; box-sizing: border-box; gap: 6px;">
        View on GitHub
      </a>`;
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
    <win98-desktop style="cursor: default !important; position: relative;">
      <!-- Desktop Folder Icon -->
      <div class="desktop-folder" id="desktop-folder" style="position: absolute; top: 20px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("directory_computer") || ""
        }" alt="Folder" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 1em; color: #000; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; word-break: break-word; line-height: 1.1; font-family: 'Jersey 10', sans-serif;">Click Me!</span>
      </div>

      <!-- Desktop Blog Icon -->
      <div class="desktop-folder" id="desktop-blog" style="position: absolute; top: 110px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("user-world") || ""
        }" alt="Blog" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 1em; color: #000; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; word-break: break-word; line-height: 1.1; font-family: 'Jersey 10', sans-serif;">Blog</span>
      </div>

      <!-- Desktop Chatbox Icon -->
      <div class="desktop-folder" id="desktop-chatbox" style="position: absolute; top: 200px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("user-chatbox") || ""
        }" alt="Chatbox" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 1em; color: #000; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; word-break: break-word; line-height: 1.1; font-family: 'Jersey 10', sans-serif;">Chatbox</span>
      </div>

      <!-- Desktop Theme Editor Icon -->
      <div class="desktop-folder" id="desktop-theme" style="position: absolute; top: 290px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("paint_old") || ""
        }" alt="Theme Editor" style="width: 48px; height: 48px; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 1em; color: #000; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; word-break: break-word; line-height: 1.1; font-family: 'Jersey 10', sans-serif;">Theme Editor</span>
      </div>

      <!-- Desktop Thanks Icon -->
      <div class="desktop-folder" id="desktop-thanks" style="position: absolute; top: 560px; left: 20px; width: 80px; cursor: pointer; text-align: center; padding: 4px; user-select: none;">
        <img src="${
          getImageUrl("picture-painting") || ""
        }" alt="Blog" style="width: 48px; height: 48px; font-family: 'Jersey 10', sans-serif; display: block; margin: 0 auto 4px auto; image-rendering: pixelated;">
        <span style="display: block; font-size: 1em; color: #000; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; word-break: break-word; line-height: 1.1; font-family: 'Jersey 10', sans-serif;">Thank you!</span>
      </div>

      <!-- About Me Window - Left -->
      <win98-window title="About Me.exe" resizable style="top: 12vh; left: 37vh; width: 320px; height: 495px;">
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
      <win98-window title="Skills.exe" resizable style="bottom: 43vh; left: 165vh; width: 300px; height: calc(35vh);">
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
      <win98-window title="Hobbies.exe" resizable style="bottom: 20vh; left: 167vh; width: 300px; height: 19vh;">
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
      <win98-window title="My Projects.exe" resizable style="top: 20px; left: 85.5vh; width: 35vw; height: 88vh;">
        <div class="window-body" style="padding: 0; overflow: hidden; height: calc(100% - 54px); box-sizing: border-box; min-height: 0; display: flex; flex-direction: column;">
          <!-- Tabs -->
          <div class="projects-tabs" style="display: flex; background: #c0c0c0; border-bottom: 1px solid #808080; overflow-x: auto; overflow-y: hidden; flex-shrink: 0;">
            <button class="project-tab active" data-tab="all" style="padding: 6px 12px; background: #c0c0c0; border: none; border-right: 1px solid #808080; cursor: pointer; font-family: 'Jersey 10', sans-serif; font-size: 1em; white-space: nowrap; min-width: 60px;">
              All
            </button>
            ${content.projects
              .map(
                (project, index) => `
              <button class="project-tab" data-tab="${index}" style="padding: 6px 12px; background: #c0c0c0; border: none; border-right: 1px solid #808080; cursor: pointer; font-family: 'Jersey 10', sans-serif; font-size: 1em; white-space: nowrap; min-width: 80px;">
                ${
                  project.title.length > 15
                    ? project.title.substring(0, 15) + "..."
                    : project.title
                }
              </button>
            `
              )
              .join("")}
          </div>
          
          <!-- Tab Content -->
          <div class="projects-tab-content" style="flex: 1; overflow-y: auto; padding: 8px; box-sizing: border-box;">
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

      <!-- Interactive Window -->
      <win98-window title="Interactive.exe" resizable style="bottom: 5vh; left: 46vh; width: 200px; height: 120px;">
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
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-settings">⚙️ Settings</li>
          <hr style="margin: 4px 0;">
          <li style="padding: 4px 8px; cursor: pointer;" id="menu-shutdown">⏻ Shut Down...</li>
        </ul>
      </div>
    </div>
  `;

  // Wait for custom elements to be defined
  setTimeout(() => {
    // Load saved settings on page load
    const savedPalette = localStorage.getItem("colorPalette");
    const savedPaletteColors = localStorage.getItem("paletteColors");

    // If default is selected or no palette is saved, use Windows 98 defaults
    if (savedPalette === "default" || !savedPalette) {
      // Apply Windows 98 default colors
      document.querySelectorAll("win98-window .window-body").forEach((body) => {
        body.style.backgroundColor = "#e0e0e0";
        body.style.border = "2px solid #808080"; // Divider between gray frame and content
      });

      document
        .querySelectorAll("button, .social-btn, a[href*='github']")
        .forEach((btn) => {
          btn.style.backgroundColor = "#c0c0c0";
          btn.style.color = "#000000";
        });
    } else if (savedPaletteColors) {
      try {
        const colors = JSON.parse(savedPaletteColors);
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
        document
          .querySelectorAll("win98-window .window-body")
          .forEach((body) => {
            body.style.backgroundColor = colors[3] || "#e0e0e0";
            body.style.border = `2px solid ${colors[1] || "#808080"}`; // Divider using medium color
          });
        document
          .querySelectorAll("button, .social-btn, a[href*='github']")
          .forEach((btn) => {
            btn.style.backgroundColor = colors[0] || "#c0c0c0"; // Darkest color
            btn.style.color = colors[3] || "#ffffff"; // Lightest color for text
          });
      } catch (e) {
        console.warn("Failed to load saved color palette:", e);
      }
    }

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

      // Set repeating background wallpaper
      const backgroundImageUrl = getImageUrl("backgroundpixels");
      if (backgroundImageUrl) {
        desktop.style.backgroundImage = `url(${backgroundImageUrl})`;
        desktop.style.backgroundRepeat = "repeat";
        desktop.style.backgroundPosition = "0 0";
        desktop.style.backgroundSize = "auto";
        console.log("Background wallpaper applied:", backgroundImageUrl);
      } else {
        console.warn(
          "Backgroundpixels image not found. Make sure Backgroundpixels.png is in src/assets/"
        );
      }
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

    // Projects window tab switching
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

      projectTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const tabId = tab.getAttribute("data-tab");

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

          // Add active class to clicked tab and corresponding pane
          tab.classList.add("active");
          tab.style.background = "#c0c0c0";
          // Remove inline border styles - let CSS handle the pressed appearance
          tab.style.border = "none";

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
                    .querySelectorAll("button, .social-btn, a[href*='github']")
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
                .querySelectorAll("button, .social-btn, a[href*='github']")
                .forEach((btn) => {
                  btn.style.backgroundColor = "#c0c0c0";
                  btn.style.color = "#000000";
                });
            }
          }, 10);
        });
      });
    }, 100);

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
                <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #c0c0c0; margin-bottom: 8px; position: relative; overflow: hidden; padding: 8px;">
                  <div style="background: #c0c0c0; border: 1px solid #808080; padding: 8px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; box-sizing: border-box;">
                  <img id="viewer-main-image" src="${currentUrl}" alt="${currentName}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                  </div>
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
            <win98-window title="Blog.exe" resizable style="top: 50px; left: 50px; width: 800px; height: 550px; z-index: 1000;">
              <div class="window-body" style="padding: 12px 12px 2px 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; border: 2px solid #808080;">
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

    // Desktop chatbox icon click handling
    const desktopChatbox = document.querySelector("#desktop-chatbox");
    if (desktopChatbox) {
      let clickTimer = null;
      let isSelected = false;

      // Single click - select/deselect
      desktopChatbox.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Double click detected - open chatbox window
          desktopChatbox.classList.add("selected");
          openChatboxWindow();
        } else {
          clickTimer = setTimeout(() => {
            // Single click - toggle selection
            if (isSelected) {
              desktopChatbox.classList.remove("selected");
              isSelected = false;
            } else {
              // Deselect other icons first
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              desktopChatbox.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

      function openChatboxWindow() {
        // Check if window already exists
        let chatboxWindow = document.querySelector(
          'win98-window[title="Chatbox.exe"]'
        );

        if (!chatboxWindow) {
          // Create chatbox window HTML
          const windowHTML = `
            <win98-window title="Chatbox.exe" resizable style="top: 100px; left: 100px; width: 600px; height: 550px; z-index: 1000;">
              <div class="window-body" style="padding: 8px; overflow: hidden; height: calc(100% - 54px); box-sizing: border-box;">
                <iframe src="https://www3.cbox.ws/box/?boxid=3551058&boxtag=a6HwaA" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" style="border: 1px solid #808080; background: #fff;"></iframe>
              </div>
            </win98-window>
          `;

          // Insert window into desktop
          const desktop = document.querySelector("win98-desktop");
          if (desktop) {
            desktop.insertAdjacentHTML("beforeend", windowHTML);
            chatboxWindow = document.querySelector(
              'win98-window[title="Chatbox.exe"]'
            );
          }

          // Show and bring to front
          if (chatboxWindow) {
            chatboxWindow.style.display = "block";
            chatboxWindow.style.zIndex = "1000";
            // Bring to front by increasing z-index
            const allWindows = document.querySelectorAll("win98-window");
            let maxZ = 0;
            allWindows.forEach((w) => {
              const z = parseInt(w.style.zIndex) || 0;
              if (z > maxZ) maxZ = z;
            });
            chatboxWindow.style.zIndex = (maxZ + 1).toString();
          }
        } else {
          // Window exists, just show and bring to front
          chatboxWindow.style.display = "block";
          chatboxWindow.style.zIndex = "1000";
          // Bring to front by increasing z-index
          const allWindows = document.querySelectorAll("win98-window");
          let maxZ = 0;
          allWindows.forEach((w) => {
            const z = parseInt(w.style.zIndex) || 0;
            if (z > maxZ) maxZ = z;
          });
          chatboxWindow.style.zIndex = (maxZ + 1).toString();
        }
      }

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!desktopChatbox.contains(e.target)) {
          desktopChatbox.classList.remove("selected");
          isSelected = false;
        }
      });
    }

    // Desktop theme editor icon click handling
    const desktopTheme = document.querySelector("#desktop-theme");
    if (desktopTheme) {
      let clickTimer = null;
      let isSelected = false;

      // Single click - select/deselect
      desktopTheme.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Double click detected - open settings window
          desktopTheme.classList.add("selected");
          openSettingsWindow();
        } else {
          clickTimer = setTimeout(() => {
            // Single click - toggle selection
            if (isSelected) {
              desktopTheme.classList.remove("selected");
              isSelected = false;
            } else {
              // Deselect other icons first
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              desktopTheme.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!desktopTheme.contains(e.target)) {
          desktopTheme.classList.remove("selected");
          isSelected = false;
        }
      });
    }

    // Desktop thanks icon click handling
    const desktopThanks = document.querySelector("#desktop-thanks");
    if (desktopThanks) {
      let clickTimer = null;
      let isSelected = false;

      // Single click - select/deselect
      desktopThanks.addEventListener("click", (e) => {
        e.stopPropagation();

        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          // Double click detected - open thanks window
          desktopThanks.classList.add("selected");
          openThanksWindow();
        } else {
          clickTimer = setTimeout(() => {
            // Single click - toggle selection
            if (isSelected) {
              desktopThanks.classList.remove("selected");
              isSelected = false;
            } else {
              // Deselect other icons first
              document.querySelectorAll(".desktop-folder").forEach((f) => {
                f.classList.remove("selected");
              });
              desktopThanks.classList.add("selected");
              isSelected = true;
            }
            clickTimer = null;
          }, 250);
        }
      });

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
                ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: #000080; text-decoration: underline;">${item.name}</a>`
                : `<strong>${item.name}</strong>`;
              return `
                <div style="margin-bottom: 20px; padding: 8px; background: #e0e0e0; border: 1px solid #808080;">
                  <h3 style="margin-top: 0; margin-bottom: 6px; font-weight: bold; font-size: 1.2em;">${nameHTML}</h3>
                  <p style="margin: 0; line-height: 1.4; color: #000;">${item.description}</p>
                </div>
              `;
            })
            .join("");

          // Create thanks window HTML
          const windowHTML = `
            <win98-window title="Thank you!.exe" resizable style="top: 50px; left: 50px; width: 600px; height: 500px; z-index: 1000;">
              <div class="window-body" style="padding: 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box; border: 2px solid #808080;">
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
          }
        }

        // Show and bring to front
        if (thanksWindow) {
          thanksWindow.style.display = "block";
          thanksWindow.style.zIndex = "1000";
          // Bring to front by increasing z-index
          const allWindows = document.querySelectorAll("win98-window");
          let maxZ = 0;
          allWindows.forEach((w) => {
            const z = parseInt(w.style.zIndex) || 0;
            if (z > maxZ) maxZ = z;
          });
          thanksWindow.style.zIndex = (maxZ + 1).toString();
        }
      }

      // Deselect when clicking elsewhere
      document.addEventListener("click", (e) => {
        if (!desktopThanks.contains(e.target)) {
          desktopThanks.classList.remove("selected");
          isSelected = false;
        }
      });
    }

    // Helper function to bring window to front
    const bringWindowToFront = (window) => {
      if (window) {
        window.style.display = "block";
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
    const openSettingsWindow = () => {
      let settingsWindow = document.querySelector(
        'win98-window[title="Settings.exe"]'
      );

      if (!settingsWindow) {
        const colorPalettes = {
          default: {
            name: "Default",
            colors: ["#000000", "#808080", "#c0c0c0", "#e0e0e0"], // Darkest to lightest
          },
          retroGreen: {
            name: "Retro Green",
            colors: ["#5C6F2B", "#DE802B", "#D8C9A7", "#EEEEEE"], // Darkest to lightest
          },
          retroPink: {
            name: "Retro Pink",
            colors: ["#132440", "#16476A", "#3B9797", "#FDB5CE"], // Darkest to lightest
          },
          calmGreen: {
            name: "Calm Green",
            colors: ["#778873", "#A1BC98", "#D2DCB6", "#F1F3E0"], // Darkest to lightest
          },
          hazel: {
            name: "Hazel",
            colors: ["#957C62", "#B77466", "#E2B59A", "#FFE1AF"], // Darkest to lightest
          },
          darkChocolate: {
            name: "Dark Chocolate",
            colors: ["#37353E", "#44444E", "#715A5A", "#D3DAD9"], // Darkest to lightest
          },
        };

        const paletteHTML = Object.keys(colorPalettes)
          .map((key) => {
            const palette = colorPalettes[key];
            return `
              <div style="margin-bottom: 12px; padding: 8px; border: 1px solid #808080; background: #e0e0e0; display: flex; align-items: center; gap: 12px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1;">
                  <input type="radio" name="color-palette" value="${key}" ${
              key === "default" ? "checked" : ""
            } style="cursor: pointer;">
                  <strong>${palette.name}</strong>
                  <div style="display: flex; gap: 4px; margin-left: auto;">
                    ${palette.colors
                      .map(
                        (color) =>
                          `<div style="width: 24px; height: 24px; background: ${color}; border: 1px solid #808080;"></div>`
                      )
                      .join("")}
                  </div>
                </label>
                <button class="palette-apply-btn" data-palette="${key}" style="padding: 4px 12px; background: #c0c0c0; border: 2px outset #c0c0c0; cursor: pointer; font-size: 0.9em; white-space: nowrap;">Apply</button>
              </div>
            `;
          })
          .join("");

        const windowHTML = `
          <win98-window title="Settings.exe" resizable style="top: 100px; left: 100px; width: 500px; height: 650px; z-index: 1000;">
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

        // Function to apply color palette
        const applyColorPalette = (paletteKey) => {
          if (colorPalettes[paletteKey]) {
            // For default palette, always use Windows 98 default colors
            if (paletteKey === "default") {
              // Reset to Windows 98 defaults
              localStorage.removeItem("colorPalette");
              localStorage.removeItem("paletteColors");

              // Apply Windows 98 default colors
              document
                .querySelectorAll("win98-window .window-body")
                .forEach((body) => {
                  body.style.backgroundColor = "#e0e0e0";
                  body.style.border = "2px solid #808080"; // Divider between gray frame and content
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
              document
                .querySelectorAll("win98-window .window-body")
                .forEach((body) => {
                  body.style.backgroundColor = colors[3] || "#e0e0e0";
                  body.style.border = `2px solid ${colors[1] || "#808080"}`; // Divider using medium color
                });

              // Apply to buttons and interactive elements - use darker colors (index 0 or 1) with lighter text
              document
                .querySelectorAll("button, .social-btn, a[href*='github']")
                .forEach((btn) => {
                  btn.style.backgroundColor = colors[0] || "#c0c0c0"; // Darkest color
                  btn.style.color = colors[3] || "#ffffff"; // Lightest color for text
                });
            }
          }
        };

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
    };

    // Function to open Help window
    const openHelpWindow = () => {
      let helpWindow = document.querySelector('win98-window[title="Help.exe"]');

      if (!helpWindow) {
        const socialLinks = [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jmyl",
            icon: "🔗",
          },
          { name: "Email", url: "mailto:jeremyliu621@gmail.com", icon: "✉️" },
          {
            name: "GitHub",
            url: "https://github.com/Jeremyliu-621",
            icon: "💻",
          },
          {
            name: "Resume",
            url: "./assets/Jeremy_Liu_final_resume.pdf",
            icon: "📄",
          },
          {
            name: "Instagram",
            url: "https://instagram.com/jeremyliu.621",
            icon: "📷",
          },
          {
            name: "Devpost",
            url: "https://devpost.com/jeremyliu621",
            icon: "⚡",
          },
        ];

        const linksHTML = socialLinks
          .map(
            (link) => `
            <div style="margin-bottom: 12px; padding: 8px; border: 1px solid #808080; background: #e0e0e0;">
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: #000; font-size: 1.1em;">
                <span style="font-size: 1.3em;">${link.icon}</span>
                <strong>${link.name}</strong>
              </a>
            </div>
          `
          )
          .join("");

        const windowHTML = `
          <win98-window title="Help.exe" resizable style="top: 100px; left: 100px; width: 400px; height: 450px; z-index: 1000;">
            <div class="window-body" style="padding: 12px; overflow-y: auto; height: calc(100% - 54px); box-sizing: border-box;">
              <h2 style="margin-top: 0; margin-bottom: 20px; font-weight: bold; font-size: 1.5em;">Help & Contact</h2>
              <p style="margin-bottom: 16px; line-height: 1.4;">Welcome to Jeremy Liu's Portfolio!</p>
              <p style="margin-bottom: 20px; line-height: 1.4;">Connect with me through any of these platforms:</p>
              ${linksHTML}
              <div style="margin-top: 20px; padding: 8px; background: #e8e8e8; border: 1px solid #808080;">
                <p style="margin: 0; font-size: 0.9em; line-height: 1.4;">
                  <strong>Tips:</strong><br>
                  • All windows are resizable and draggable<br>
                  • Use the Start menu to navigate<br>
                  • Double-click desktop icons to open windows
                </p>
              </div>
            </div>
          </win98-window>
        `;

        const desktop = document.querySelector("win98-desktop");
        if (desktop) {
          desktop.insertAdjacentHTML("beforeend", windowHTML);
          helpWindow = document.querySelector('win98-window[title="Help.exe"]');
        }
      }

      bringWindowToFront(helpWindow);
    };

    // Start menu item click handlers
    const menuItems = {
      "menu-settings": () => openSettingsWindow(),
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
