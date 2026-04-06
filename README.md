# 💼 Job Application Tracker

A sleek, responsive, and logic-driven dashboard designed to help job seekers organize their recruitment pipeline. Built with **Vanilla JavaScript** and **DaisyUI**, this project focuses on efficient state management and dynamic UI updates.

---

## 🚀 Live Demo
[(https://zakaria-info.github.io/Job-Application-Tracker/)]

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

📋 Key Functionalities
Real-time Dashboard: Instant updates for Total, Interview, and Rejected application counts.

Status Toggling: Users can move jobs between 'Interview' and 'Rejected' states with a single click, which automatically updates the category tabs.

Tab-based Navigation: Organized view of jobs categorized by their current recruitment stage.

Dynamic Deletion: Allows users to remove job entries, which recalculates all dashboard statistics immediately.

Empty State Handling: Displays a user-friendly "No Jobs Available" message when a category is empty.

Responsive Design: Fully optimized for Mobile, Tablet, and Desktop views using Tailwind's grid and flexbox systems.
