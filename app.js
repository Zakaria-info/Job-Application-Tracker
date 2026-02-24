const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Develop cross-platform mobile applications used by millions of global users.",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Frontend Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Build modern web interfaces and improve user engagement across marketing platforms.",
    status: "all"
  },
  {
    id: 3,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design scalable backend systems using Node.js and cloud infrastructure.",
    status: "all"
  },
  {
    id: 4,
    companyName: "DataViz Solutions",
    position: "Data Visualization Engineer",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform raw datasets into interactive dashboards for business insights.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Design intuitive user interfaces with focus on usability and accessibility.",
    status: "all"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Develop enterprise-level applications using modern JavaScript frameworks.",
    status: "all"
  },
  {
    id: 7,
    companyName: "SecureNet Systems",
    position: "Cybersecurity Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    description: "Monitor and protect systems from cyber threats and vulnerabilities.",
    status: "all"
  },
  {
    id: 8,
    companyName: "AI Future Tech",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description: "Build intelligent AI systems and optimize predictive models.",
    status: "all"
  }
];

// Track current tab

let currentTab = "all";



// RENDER JOBS FUNCTION
// Shows jobs based on selected tab

function renderJobs() {

  const container = document.getElementById("job-container");
  container.innerHTML = "";

  // Filter jobs based on tab
  const filteredJobs = jobs.filter(job => {
    if (currentTab === "all") return job.status === "all";
    return job.status === currentTab;
  });

  // Update tab job count
  document.getElementById("job-count").innerText =
    filteredJobs.length + " Jobs";

  // Show empty message if no jobs
  if (filteredJobs.length === 0) {
    document.getElementById("empty-message").classList.remove("hidden");
  } else {
    document.getElementById("empty-message").classList.add("hidden");
  }
// Create card for each job
  filteredJobs.forEach(job => {

    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-lg shadow";

    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-semibold">${job.companyName}</h3>
          <p class="text-gray-600">${job.position}</p>
          <p class="text-sm text-gray-500">
            ${job.location} • ${job.type} • ${job.salary}
          </p>
        </div>


        <button onclick="deleteJob(${job.id})"
          class="btn btn-sm btn-circle btn-ghost">
          ✕
        </button>
      </div>

      <p class="mt-3 text-gray-700">${job.description}</p>

      
      <div class="mt-4 space-x-2">

        <button onclick="updateStatus(${job.id}, 'interview')"
          class="btn btn-outline btn-success btn-sm">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="btn btn-outline btn-error btn-sm">
          Rejected
        </button>

      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

// Change tab function
function showTab(tabName) {

  currentTab = tabName;

  // Reset all tab styles
  document.getElementById("tab-all").className =
    "px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm";

  document.getElementById("tab-interview").className =
    "px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm";

  document.getElementById("tab-rejected").className =
    "px-4 py-2 rounded-md bg-gray-200 text-gray-700 text-sm";


// Activate selected tab
  if (tabName === "all") {
    document.getElementById("tab-all").className =
      "px-4 py-2 rounded-md bg-blue-600 text-white text-sm";
  }

  if (tabName === "interview") {
    document.getElementById("tab-interview").className =
      "px-4 py-2 rounded-md bg-blue-600 text-white text-sm";
  }

  if (tabName === "rejected") {
    document.getElementById("tab-rejected").className =
      "px-4 py-2 rounded-md bg-blue-600 text-white text-sm";
  }

  renderJobs();
}

// Updated status function and toggle between Interview, Rejected and all 
function updateStatus(id, newStatus) {

  const job = jobs.find(job => job.id === id);

  if (job.status === newStatus) {
    job.status = "all"; // toggle back
  } else {
    job.status = newStatus;
  }

  renderJobs();
}

