# How to Edit Text in Your Windows 98 Website

## Quick Guide

All the text content is in **`src/main.js`** starting around **line 18**.

## Where to Find Each Window's Text:

### 1. **About Me Window** (Lines 21-37)
- **Window Title**: Line 21 - `title="About Me.exe"`
- **Your Name**: Line 23 - `Jeremy Liu`
- **Your Title**: Line 24 - `Computer Engineer Undergrad @ UofT`
- **Bio**: Line 26 - The paragraph about inspiring people
- **Current Activities**: Lines 31-34 - The bullet points

### 2. **Skills Window** (Lines 40-64)
- **Window Title**: Line 40 - `title="Skills.exe"`
- **Languages**: Line 43 - The comma-separated list
- **Frameworks**: Line 48 - The comma-separated list
- **Tools**: Line 53 - The comma-separated list
- **Improving By**: Lines 59-61 - The bullet points

### 3. **Projects Window** (Lines 67-105)
- **Window Title**: Line 67 - `title="My Projects.exe"`
- **Window Header**: Line 69 - `My Projects`
- **Each Project** (Lines 71-103):
  - Project Title: Inside `<h4>` tags
  - Description: Inside `<p>` tags
  - Tech Stack: The "Front:" and "Back:" paragraphs

### 4. **Hobbies Window** (Lines 108-115)
- **Window Title**: Line 108 - `title="Hobbies.exe"`
- **Header**: Line 110 - `Outside of Academics`
- **Hobbies Text**: Line 112 - The paragraph about origami, BJJ, etc.

### 5. **Start Menu** (Lines 122-138)
- Menu items are on lines 128-135
- Each item has an emoji and text you can change

## Tips for Editing:

1. **Text between tags**: Look for text between `>` and `<` 
   - Example: `<h2>Jeremy Liu</h2>` - change "Jeremy Liu" to your name

2. **Window titles**: Find `title="..."` and change what's inside the quotes

3. **Adding new projects**: Copy one of the project `<div>` blocks (lines 71-78) and paste it before the closing `</div>` on line 104

4. **Adding list items**: Copy a `<li>` line and paste it in the `<ul>` section

5. **Save and refresh**: After editing, save the file and refresh your browser (F5)

## Example Edits:

**Change your name:**
```javascript
// Line 23 - Change this:
<h2>Jeremy Liu</h2>
// To:
<h2>Your Name Here</h2>
```

**Add a new project:**
```javascript
// After line 103, add:
<div style="margin: 12px 0; padding: 12px; border: 1px solid #808080; background: #f0f0f0;">
  <h4 style="margin-top: 0; margin-bottom: 8px;">New Project Name</h4>
  <p style="margin: 6px 0;">Description of your project.</p>
</div>
```

**Change languages:**
```javascript
// Line 43 - Change this:
<p>Python, JavaScript, TypeScript, HTML, CSS, Swift</p>
// To:
<p>Your, Languages, Here</p>
```

