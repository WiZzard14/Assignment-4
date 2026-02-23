function setText(id, value) {
  document.getElementById(id).innerText = value;
}

function getCounts() {
  const total = jobs.length;
  let interview = 0;
  let rejected = 0;

  for (const job of jobs) {
    if (job.status === "Interview") interview++;
    if (job.status === "Rejected") rejected++;
  }

  return { total, interview, rejected };
}

function getFilteredJobs() {
  if (activeTab === "all") return jobs;
  if (activeTab === "interview") return jobs.filter((j) => j.status === "Interview");
  if (activeTab === "rejected") return jobs.filter((j) => j.status === "Rejected");
  return jobs;
}

function badgeHTML(status) {
  if (status === "Interview") {
    return `<span class="badge bg-success/15 text-success border border-success/30 px-4 py-3 font-semibold rounded-md">INTERVIEW</span>`;
  }
  if (status === "Rejected") {
    return `<span class="badge bg-error/15 text-error border border-error/30 px-4 py-3 font-semibold rounded-md">REJECTED</span>`;
  }
  return ""; 
}

function leftBorderStyle(status) {
  let color = "#3b82f6"; 

  if (status === "Interview") color = "#22c55e"; 
  if (status === "Rejected") color = "#ef4444";

  return `border-left: 6px solid ${color};`;
}

function renderCards(list) {
  const container = document.getElementById("jobsContainer");
  container.innerHTML = "";

  for (const job of list) {
    const interviewBtnClass =
      job.status === "Interview"
        ? "btn-success"
        : "btn-outline border-success text-success hover:bg-success hover:text-white";

    const rejectedBtnClass =
      job.status === "Rejected"
        ? "btn-error"
        : "btn-outline border-error text-error hover:bg-error hover:text-white";

    const badge = badgeHTML(job.status);
    const badgeBlock = badge ? `<div class="mt-4">${badge}</div>` : "";

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <article
        class="bg-base-100 border border-base-300 rounded-md p-5"
        style="${leftBorderStyle(job.status)}"
        data-id="${job.id}"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-base font-bold">${escapeHtml(job.companyName)}</h3>
            <p class="text-sm opacity-70 mt-0.5">${escapeHtml(job.position)}</p>
          </div>

          <button class="btn btn-ghost btn-sm btn-circle" data-action="delete" title="Delete">
            <i class="fa-regular fa-trash-can opacity-70"></i>
          </button>
        </div>

        <div class="text-sm opacity-70 mt-3 flex flex-wrap gap-2">
          ${escapeHtml(job.location)} • ${escapeHtml(job.type)} • ${escapeHtml(job.salary)}
        </div>

        ${badgeBlock}

        <p class="text-sm opacity-80 mt-4 leading-relaxed">
          ${escapeHtml(job.description)}
        </p>

        <div class="mt-5 flex gap-3 flex-wrap">
          <button class="btn btn-sm ${interviewBtnClass}" data-action="interview" type="button">
            INTERVIEW
          </button>

          <button class="btn btn-sm ${rejectedBtnClass}" data-action="rejected" type="button">
            REJECTED
          </button>
        </div>
      </article>
    `;
    container.appendChild(wrapper);
  }
}

function render() {
  const c = getCounts();

  setText("countTotal", c.total);
  setText("countInterview", c.interview);
  setText("countRejected", c.rejected);

  const list = getFilteredJobs();

  setText("jobsCount", list.length);

  const emptyState = document.getElementById("emptyState");
  const jobsContainer = document.getElementById("jobsContainer");

  const showEmpty = list.length === 0;

  if (showEmpty) {
    emptyState.classList.remove("hidden");
    jobsContainer.classList.add("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
    jobsContainer.classList.remove("hidden");
  }

  renderCards(list);
}

function setActiveTab(tab) {
  activeTab = tab;

  const tabAll = document.getElementById("tabAll");
  const tabInterview = document.getElementById("tabInterview");
  const tabRejected = document.getElementById("tabRejected");

  function style(btn, isActive) {
    if (isActive) {
      btn.className = "btn btn-sm px-6 rounded-md bg-primary text-primary-content border-none";
    } else {
      btn.className = "btn btn-sm px-6 rounded-md bg-base-100 hover:bg-base-200 border border-base-300";
    }
  }

  style(tabAll, tab === "all");
  style(tabInterview, tab === "interview");
  style(tabRejected, tab === "rejected");

  render();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
