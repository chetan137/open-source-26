# 🚀 OpenCollab — Team Contribution Project

> A beginner-friendly open-source project designed to help you learn **Git** and **GitHub collaboration** by doing. Fork it, clone it, pick a task, open a PR!

📋 **[View Contribution Tasks → TASKS.md](TASKS.md)**

[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)](CONTRIBUTING.md)
[![HTML CSS JS](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JS-blue)](https://developer.mozilla.org)

---

## 📖 About This Project

**OpenCollab** is a simple, static website where contributors can add their own profile card. The project uses only **HTML**, **CSS**, and **vanilla JavaScript** — no frameworks, no build tools, no complex setup.

It is designed to support **40+ contributors** easily, and every part of the code is commented to help beginners understand and navigate it.

**What's inside:**
- A beautiful homepage with a contributor grid
- Real-time search/filter for contributor cards
- Step-by-step contribution guide built into the page
- A `/contributors` folder for optional personal pages

---

## ▶️ How to Run

This is a static project — no server or installation needed!

1. **Download or clone** the project to your computer
2. **Open** `index.html` in any modern web browser
3. That's it — the site runs entirely in your browser ✅

```bash
# If you cloned the repo:
cd team-contribution-project
# Then just open index.html in your browser (double-click it)

# else run start index.html
```

---

## 🛠️ How to Contribute

Follow these 6 steps to add your contributor card:

### Step 1 — Fork the Repository
Click the **Fork** button at the top-right of the GitHub repo page.
This creates your own personal copy of the project.

### Step 2 — Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/team-contribution-project.git
cd team-contribution-project
```

### Step 3 — Create a New Branch
```bash
# Format: add/your-name
git checkout -b add/your-name
```

### Step 4 — Add Your Contributor Card
Open `index.html` and find this comment inside the contributors grid:

```html
<!-- ===== ADD YOUR CARD HERE ===== -->
```

Copy the card template (provided right above that comment) and fill in:
- Your name and initials
- Your role/title
- A short bio (under 150 characters)
- Your skills
- Your GitHub and LinkedIn links

### Step 5 — Commit and Push
```bash
git add .
git commit -m "feat: add Your Name contributor card"
git push origin add/your-name
```

### Step 6 — Open a Pull Request
Go to the **original repository** on GitHub.
Click **"Compare & Pull Request"** and fill in:
- **Title:** `feat: Add Your Name — Your Role`
- **Description:** A brief line about yourself

Submit the PR and wait for review! 🎉

---

## 📋 Contribution Rules

Please read before contributing:

| Rule | Details |
|------|---------|
| ✅ One card per person | Add only your own card — one contribution per contributor |
| ✅ Branch naming | Always use the format `add/your-name` |
| 🚫 No direct pushes to `main` | All changes must come through a Pull Request |
| 🚫 Don't edit others' cards | Only modify the section you added |
| ✅ Keep bio short | Under 150 characters for your bio |
| ✅ Test before pushing | Open `index.html` in a browser and verify your card looks correct |
| ✅ One feature per PR | Keep pull requests small and focused |

---

## 💡 Contribution Tasks

We have a dedicated task list for beginners! Check out **[TASKS.md](TASKS.md)** for 20 simple, beginner-friendly tasks.

Pick **any one task**, create a branch, make the change, and open a PR. That's it!

**Branch format:** `task/task-number-your-name`
Example: `task/01-alice`

---

## 📁 Project Structure

```
team-contribution-project/
│
├── index.html              ← Main page (add your card here)
├── style.css               ← All styles (CSS variables at the top)
├── script.js               ← All JavaScript (well-commented)
│
│
├── .env.example            ← Environment variable template (safe to commit)
├── .gitignore              ← Files Git will ignore (including .env)
└── README.md               ← This file
```

---

## 🌱 Environment Variables

This project includes a `.env.example` file to teach good habits around secrets and configuration.

```bash
# Copy the template to create your own .env file
cp .env.example .env

# Then fill in any values you need
# ⚠️ NEVER commit your .env file — it's in .gitignore already!
```

For this beginner project, the `.env` file is **not required** to run anything. It is there to demonstrate the industry-standard practice of separating configuration from code.

---

## 🤝 Code of Conduct

- Be kind and welcoming to all contributors
- Give constructive feedback in pull request reviews
- Celebrate first-time contributors — we were all beginners once!

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by contributors like you &bull; Open Source Forever</p>
