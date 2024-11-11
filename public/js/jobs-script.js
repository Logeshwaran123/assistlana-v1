// Internships
const internships = [
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.naukri.com/job-listings-web-developer-integrator-prestashop-sahas-digi-nxt-solutions-llp-ghaziabad-0-to-4-years-061124501015?src=jobsearchDesk&sid=17311498688413925&xp=1&px=1",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 2",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 3",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 4",
    mode: "Virtual",
    date: "45th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
];

// WFH jobs
const wfhJobs = [
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
];

// BPO related Jobs
const bpoJobs = [
  {
    headline: "BPO related jobs",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
];

// DATA ANALYST related Jobs
const dataAnalyst = [
  {
    headline: "DATA ANALYST RELATED JOBS",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
  {
    headline: "Job Headline 1",
    mode: "F2F",
    date: "12th Sep 2024",
    location: "Pondicherry",
    minRange: 3.25,
    maxRange: 3.5,
    link: "https://www.google.com",
    note: "Important Note about the Role and Skillset if any",
  },
];

let fullListOfJobs = [internships, wfhJobs, bpoJobs, dataAnalyst];

// Categories Toggler
const cateJobs = document.querySelectorAll(".category");
for (let index = 0; index < cateJobs.length; index++) {
  cateJobs[index].addEventListener("click", () => {
    cateJobs[index].classList.add("active-cate");
    console.log("Content : " + cateJobs[index].textContent);
    for (let index = 0; index < cateJobs.length; index++) {
      cateJobs[index].classList.remove("active-cate");
    }
    cateJobs[index].classList.add("active-cate");
    let jobs = "";
    if (index == 0) {
      jobs = internships;
    } else if (index == 1) {
      jobs = wfhJobs;
    } else if (index == 2) {
      jobs = bpoJobs;
    } else if (index == 3) {
      jobs = dataAnalyst;
    }
    let currentCate = "";
    jobs.map((job) => {
      // TEMPLATE
      const template = `<div class="job">
      <div class="job-main">
      <h4 class="job-headline">${job.headline}</h4>
  <div class="important-info">
  <p class="location">${job.location}</p>
  <p class="date">${job.date}</p>
  <p class="mode">${job.mode}</p>
  <p class="package">Rs.${job.minRange} - ${job.maxRange} LPA</p>
  </div>
  <div class="job-short-description">
  ${job.note}
  </div>
  </div>
  <div class="apply-link">
  <a href="${job.link}" target="_blank" class="apply-link">APPLY LINK</a>
  </div>
  </div>`;
      currentCate += template;
      return template;
    });
    document.querySelector(".jobs-list").innerHTML = currentCate;
  });
}

// TEMPLATE
// const template = `<div class="job">
//   <div class="job-main">
//   <h4 class="job-headline">${job.headline}</h4>
//   <div class="important-info">
//   <p class="location">${job.location}</p>
//   <p class="date">${job.date}</p>
//   <p class="mode">${job.mode}</p>
//   <p class="package">Rs.${job.minRange} - ${job.maxRange} LPA</p>
//   </div>
//   <div class="job-short-description">
//   ${job.note}
//   </div>
//   </div>
//   <div class="apply-link">
//   <a href="${job.link}" target="_blank" class="apply-link">APPLY LINK</a>
//   </div>
//   </div>`;
