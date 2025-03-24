// Job Data
const JOBS_DATA = [
  { id: '1', title: 'Mason', company: 'Ghana Builders Ltd.', location: 'Accra', salary: 1500, type: 'Full-time', postedAt: '3 days ago', description: 'We are looking for an experienced Mason to join our team.' },
  { id: '2', title: 'Electrician', company: 'Power Solutions Ghana', location: 'Kumasi', salary: 2000, type: 'Full-time', postedAt: 'Today', description: 'Join our team as an Electrician to handle electrical installations and maintenance.' },
  { id: '3', title: 'Carpenter', company: 'Woodcraft Ghana', location: 'Takoradi', salary: 1200, type: 'Part-time', postedAt: '1 week ago', description: 'Seeking a skilled Carpenter to build and repair wooden structures.' },
  { id: '4', title: 'Plumber', company: 'AquaFix Ghana', location: 'Accra', salary: 1800, type: 'Full-time', postedAt: '2 days ago', description: 'Hiring a Plumber to install and repair plumbing systems.' },
  { id: '5', title: 'Painter', company: 'ColorWorks Ghana', location: 'Kumasi', salary: 1000, type: 'Part-time', postedAt: 'Just now', description: 'Looking for a professional Painter to paint buildings and fixtures.' },
  { id: '6', title: 'HVAC Technician', company: 'CoolBreeze Ghana', location: 'Takoradi', salary: 2500, type: 'Full-time', postedAt: '5 days ago', description: 'Hiring an HVAC Technician to install and maintain air conditioning systems.' },
  { id: '1', title: 'Mason', company: 'Ghana Builders Ltd.', location: 'Accra', salary: 1500, type: 'Full-time', postedAt: '3 days ago', description: 'We are looking for an experienced Mason to join our team.' },
  { id: '2', title: 'Electrician', company: 'Power Solutions Ghana', location: 'Kumasi', salary: 2000, type: 'Full-time', postedAt: 'Today', description: 'Join our team as an Electrician to handle electrical installations and maintenance.' },
  { id: '3', title: 'Carpenter', company: 'Woodcraft Ghana', location: 'Takoradi', salary: 1200, type: 'Part-time', postedAt: '1 week ago', description: 'Seeking a skilled Carpenter to build and repair wooden structures.' },
  { id: '4', title: 'Plumber', company: 'AquaFix Ghana', location: 'Accra', salary: 1800, type: 'Full-time', postedAt: '2 days ago', description: 'Hiring a Plumber to install and repair plumbing systems.' },
  { id: '5', title: 'Painter', company: 'ColorWorks Ghana', location: 'Kumasi', salary: 1000, type: 'Part-time', postedAt: 'Just now', description: 'Looking for a professional Painter to paint buildings and fixtures.' },
  { id: '6', title: 'HVAC Technician', company: 'CoolBreeze Ghana', location: 'Takoradi', salary: 2500, type: 'Full-time', postedAt: '5 days ago', description: 'Hiring an HVAC Technician to install and maintain air conditioning systems.' },
  { id: '7', title: 'Welder', company: 'SteelFix Ghana', location: 'Accra', salary: 2200, type: 'Full-time', postedAt: '2 weeks ago', description: 'We need a Welder to join our metalworking team.' },
  { id: '8', title: 'Mechanic', company: 'AutoFix Ghana', location: 'Kumasi', salary: 1700, type: 'Contract', postedAt: '4 days ago', description: 'Experienced mechanic needed for vehicle repairs and maintenance.' },
  { id: '9', title: 'Tiler', company: 'HomeStyle Tiles', location: 'Takoradi', salary: 1400, type: 'Part-time', postedAt: '1 day ago', description: 'Looking for a Tiler to install and repair tiles for residential projects.' },
  { id: '10', title: 'Roofing Specialist', company: 'SafeRoof Ghana', location: 'Accra', salary: 3000, type: 'Full-time', postedAt: '3 days ago', description: 'Roofing specialist needed to work on residential and commercial projects.' },
  { id: '11', title: 'Furniture Assembler', company: 'WoodMaster Ghana', location: 'Kumasi', salary: 1200, type: 'Part-time', postedAt: '5 days ago', description: 'Skilled Furniture Assembler required for custom furniture work.' },
  { id: '12', title: 'Plasterer', company: 'SmoothWalls Ghana', location: 'Takoradi', salary: 1500, type: 'Contract', postedAt: '1 week ago', description: 'Hiring a Plasterer to smooth and finish wall surfaces.' },
  { id: '13', title: 'Solar Panel Installer', company: 'EcoPower Ghana', location: 'Accra', salary: 2800, type: 'Full-time', postedAt: '2 weeks ago', description: 'Seeking a Solar Panel Installer for renewable energy projects.' },
  { id: '14', title: 'Painter', company: 'Rainbow Coatings', location: 'Kumasi', salary: 1100, type: 'Part-time', postedAt: '2 days ago', description: 'Hiring a Painter to work on interior and exterior painting jobs.' },
  { id: '15', title: 'Auto Electrician', company: 'CarFix Experts', location: 'Takoradi', salary: 1900, type: 'Contract', postedAt: '3 days ago', description: 'Seeking an Auto Electrician for vehicle electrical system repairs.' },
  { id: '16', title: 'Glazier', company: 'GlassWorks Ghana', location: 'Accra', salary: 2100, type: 'Full-time', postedAt: '4 days ago', description: 'Hiring a Glazier to install and repair glass surfaces.' },
  { id: '17', title: 'Concrete Finisher', company: 'ConcretePro Ghana', location: 'Kumasi', salary: 1600, type: 'Contract', postedAt: '1 week ago', description: 'Concrete Finisher needed for smoothing and leveling concrete work.' },
  { id: '18', title: 'Upholsterer', company: 'Elite Upholstery', location: 'Takoradi', salary: 1350, type: 'Part-time', postedAt: '5 days ago', description: 'Seeking an Upholsterer to repair and refinish furniture fabrics.' },
  { id: '19', title: 'House Painter', company: 'Perfect Finish', location: 'Accra', salary: 1300, type: 'Full-time', postedAt: '3 days ago', description: 'Looking for a professional House Painter for residential painting.' },
  { id: '20', title: 'Waterproofing Specialist', company: 'DryHomes Ghana', location: 'Kumasi', salary: 2700, type: 'Full-time', postedAt: '2 days ago', description: 'We need a Waterproofing Specialist to seal and protect buildings from water damage.' }

];

// DOM Elements
const jobGrid = document.getElementById('jobGrid');
const loadingGrid = document.getElementById('loadingGrid');
const filterSidebar = document.getElementById('filterSidebar');
const sidebarOverlay = document.createElement('div');
sidebarOverlay.classList.add('sidebar-overlay');
document.querySelector('.main').appendChild(sidebarOverlay);

// Filter elements
const categoryCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
const salarySlider = document.getElementById('salarySlider');
const salaryValue = document.getElementById('salaryValue');
const locationCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
const applyFiltersBtn = document.getElementById('applyFilters');

// Job details sidebar elements
const jobDetailSidebar = document.getElementById('jobDetailSidebar');
const jobDetailOverlay = document.getElementById('jobDetailOverlay');
const jobDetailTitle = document.getElementById('jobDetailTitle');
const jobDetailContent = document.getElementById('jobDetailContent');
const closeJobDetailBtn = document.getElementById('closeJobDetail');

// Apply filters and update the job listing
function filterJobs() {
  const selectedCategories = [...categoryCheckboxes].filter(cb => cb.checked).map(cb => cb.id);
  const maxSalary = Number(salarySlider.value) * 1000;
  const selectedLocations = [...locationCheckboxes].filter(cb => cb.checked).map(cb => cb.id);

  const filteredJobs = JOBS_DATA.filter(job => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.type.toLowerCase().replace(/\s/g, ''));
    const matchesSalary = job.salary <= maxSalary;
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location.toLowerCase());

    return matchesCategory && matchesSalary && matchesLocation;
  });

  displayJobs(filteredJobs);
}

// Display jobs dynamically
function displayJobs(jobs) {
  jobGrid.innerHTML = jobs.length > 0
    ? jobs.map((job, index) => createJobCard(job, index)).join('')
    : '<p>No jobs match your filters.</p>';
  setupJobCardEventListeners();
}

// Create job card HTML
function createJobCard(job, index) {
  return `
    <div class="job-card job-card-${index + 1}" data-job-id="${job.id}">
      <div class="job-card-content">
        <div class="job-card-header">
          <div>
            <span class="job-badge">${job.type}</span>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-company"><span>${job.company}</span></div>
          </div>
          <span class="job-salary">GHS ${job.salary}/month</span>
        </div>
        <div class="job-details">
          <div class="job-location"><span>${job.location}</span></div>
          <div class="job-posted"><span>${job.postedAt}</span></div>
        </div>
      </div>
      <div class="job-card-footer">
        <button class="view-details-btn" data-job-id="${job.id}">View Details</button>
        <button class="save-btn">Save</button>
      </div>
    </div>
  `;
}

// Function to display job details in the sidebar
function showJobDetails(jobId) {
  const job = JOBS_DATA.find(job => job.id === jobId);
  if (!job) return;

  // Update sidebar content
  jobDetailTitle.textContent = job.title;
  jobDetailContent.innerHTML = `
    <div class="job-detail-section">
      <div class="job-detail-header-info">
        <span class="job-badge">${job.type}</span>
        <div class="job-company"><span>${job.company}</span></div>
        <div class="job-location"><span>${job.location}</span></div>
        <div class="job-salary-detail"><span>GHS ${job.salary}/month</span></div>
        <div class="job-posted"><span>Posted ${job.postedAt}</span></div>
      </div>
    </div>
    
    <div class="job-detail-section">
      <h3 class="job-detail-section-title">Description</h3>
      <p>${job.description || "No description available."}</p>
    </div>
  `;

  // Show sidebar
  jobDetailSidebar.classList.add('active');
  jobDetailOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Function to close the job details sidebar
function closeJobDetails() {
  jobDetailSidebar.classList.remove('active');
  jobDetailOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Attach event listeners to close job details
closeJobDetailBtn.addEventListener('click', closeJobDetails);
jobDetailOverlay.addEventListener('click', closeJobDetails);

// Setup event listeners for job cards
function setupJobCardEventListeners() {
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.removeEventListener('click', handleViewDetails);
    btn.addEventListener('click', handleViewDetails);
  });

  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.removeEventListener('click', handleSaveJob);
    btn.addEventListener('click', handleSaveJob);
  });
}

// Function to handle "View Details"
function handleViewDetails() {
  const jobId = this.getAttribute('data-job-id');
  showJobDetails(jobId);
}

// Function to handle "Save" button
function handleSaveJob() {
  this.textContent = this.textContent === 'Save' ? 'Saved' : 'Save';
  this.style.color = this.textContent === 'Saved' ? 'hsl(var(--primary))' : '';
}

// Update salary display
salarySlider.addEventListener('input', function() {
  salaryValue.textContent = `GHS ${this.value}k+`;
});

// Apply filters on button click
applyFiltersBtn.addEventListener('click', function() {
  filterJobs();
  filterSidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Load jobs initially
function loadJobs() {
  loadingGrid.style.display = 'grid';
  setTimeout(() => {
    loadingGrid.style.display = 'none';
    jobGrid.style.display = 'grid';
    displayJobs(JOBS_DATA);
  }, 800);
}

document.addEventListener('DOMContentLoaded', loadJobs);
