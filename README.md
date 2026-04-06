# 💼 Job Application Tracker

A sleek, responsive, and logic-driven dashboard designed to help job seekers organize their recruitment pipeline. Built with **Vanilla JavaScript** and **DaisyUI**, this project focuses on efficient state management and dynamic UI updates.

---

## 🚀 Live Demo
[Insert your Netlify/GitHub Pages Link Here]

## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS
* **UI Component Library:** DaisyUI
* **Logic:** Vanilla JavaScript (ES6+)
* **Icons:** Lucide Icons

---

## 🧠 Core Concepts & Logic

### 1. Centralized State Management
The application relies on a "Single Source of Truth." A global `jobs` array of objects stores all job data. Any user action (Filtering, Updating Status, or Deleting) modifies this array first, and then triggers a re-render of the UI.

### 2. Efficient Data Filtering
Using the JavaScript `.filter()` method, the app dynamically generates a `filteredJobs` list based on the active tab (`All`, `Interview`, or `Rejected`). 
```javascript
const filteredJobs = jobs.filter(job => {
  if (currentTab === "all") return job.status === "all";
  return job.status === currentTab;
});
