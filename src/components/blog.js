// Blog window component
// Imports from main.js
import { getImageUrl, content, applyColorPalette } from "../main.js";

// Helper function to bring window to front
function bringWindowToFront(window) {
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
}

// Function to open blog window
export function openBlogWindow() {
  // Check if window already exists
  let blogWindow = document.querySelector('win98-window[title="Blog.exe"]');

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
        // Handle both single image (string) and multiple images (array)
        let images = [];
        if (post.image) {
          if (Array.isArray(post.image)) {
            // Multiple images - map each to URL with size info
            images = post.image
              .map((imgData) => {
                // Handle both string format and object format
                let imgName,
                  size = "medium",
                  width = null,
                  height = null;

                if (typeof imgData === "string") {
                  imgName = imgData;
                } else if (imgData && imgData.filename) {
                  imgName = imgData.filename;
                  // Support both size (string) and width (number/string) properties
                  if (imgData.size) {
                    size = imgData.size;
                  } else if (imgData.width !== undefined) {
                    // If width is specified, use custom sizing
                    width =
                      typeof imgData.width === "number"
                        ? `${imgData.width}px`
                        : imgData.width;
                    size = "custom"; // Mark as custom size
                  }
                  if (imgData.height !== undefined) {
                    height =
                      typeof imgData.height === "number"
                        ? `${imgData.height}px`
                        : imgData.height;
                  }
                } else {
                  return null;
                }

                const url = getImageUrl(imgName);
                return url
                  ? { url, alt: imgName, size, width, height }
                  : null;
              })
              .filter((img) => img !== null);
          } else {
            // Single image - convert to array format
            const url = getImageUrl(post.image);
            if (url) {
              images = [{ url, alt: post.image, size: "medium" }];
            }
          }
        }

        // Generate images HTML
        const imagesHTML =
          images.length > 0
            ? `
                  <div class="blog-post-images">
                    ${images
                      .map((img) => {
                        // Build style string for custom dimensions
                        let style = "";
                        if (img.size === "custom" && img.width) {
                          style = `style="width: ${img.width};`;
                          if (img.height) {
                            style += ` height: ${img.height};`;
                          }
                          style += `"`;
                        }
                        // Apply size class unless it's custom
                        const sizeClass =
                          img.size === "custom"
                            ? ""
                            : ` blog-post-image-${img.size}`;
                        return `<img src="${img.url}" alt="${img.alt}" class="blog-post-image${sizeClass}" ${style}>`;
                      })
                      .join("")}
                  </div>
                `
            : "";

        return `
                <div class="blog-post">
                  <h3 class="blog-post-title">${post.title}</h3>
                  <p class="blog-post-date">${post.date}</p>
                  ${imagesHTML}
                  <div class="blog-post-text">
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
      blogWindow = document.querySelector('win98-window[title="Blog.exe"]');

      // Apply current theme colors to the blog window
      const savedPalette = localStorage.getItem("colorPalette");
      if (savedPalette && savedPalette !== "default") {
        const savedColors = localStorage.getItem("paletteColors");
        if (savedColors) {
          try {
            const colors = JSON.parse(savedColors);
            const blogBody = blogWindow.querySelector(".window-body");
            if (blogBody) {
              blogBody.style.backgroundColor = colors[3] || "#e0e0e0";
              blogBody.style.border = `2px solid ${
                colors[1] || "#808080"
              }`;
            }
          } catch (e) {
            // If parsing fails, use default
          }
        }
      } else {
        // Apply default theme
        applyColorPalette("default");
      }
    }
  }

  // Show and bring to front
  if (blogWindow) {
    bringWindowToFront(blogWindow);
  }
}

