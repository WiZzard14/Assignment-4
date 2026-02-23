let activeTab = "all";
let jobs = [
  {
    id: "j1",
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: null,
  },
  {
    id: "j2",
    companyName: "Skyline Payments",
    position: "Frontend Developer",
    location: "Dhaka (Hybrid)",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    description:
      "Create accessible UI components, improve performance, and partner with QA to ship reliable releases.",
    status: null,
  },
  {
    id: "j3",
    companyName: "GreenCart Logistics",
    position: "Operations Coordinator",
    location: "Chattogram",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    description:
      "Coordinate delivery routes, track late shipments, and improve handoff processes between warehouse and riders.",
    status: null,
  },
  {
    id: "j4",
    companyName: "FinNova Microfinance",
    position: "QA Tester (Web)",
    location: "Dhaka",
    type: "Full-time",
    salary: "$50,000 - $65,000",
    description:
      "Write test cases for onboarding and payments, report bugs clearly, and verify fixes across browsers and devices.",
    status: null,
  },
  {
    id: "j5",
    companyName: "CloudHarbor",
    position: "Support Engineer",
    location: "Remote (APAC)",
    type: "Full-time",
    salary: "$1,100 - $1,500/month",
    description:
      "Help customers troubleshoot deployments, write short guides, and escalate incidents with clear steps and logs.",
    status: null,
  },
  {
    id: "j6",
    companyName: "BrightLearn EdTech",
    position: "Content Writer (Tech)",
    location: "Sylhet (Remote-friendly)",
    type: "Part-time",
    salary: "$25,000 - $35,000",
    description:
      "Write beginner-friendly tutorials on web development with real examples and practical takeaways.",
    status: null,
  },
  {
    id: "j7",
    companyName: "MedLink Systems",
    position: "UI Designer",
    location: "Dhaka (On-site)",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    description:
      "Design mobile-first appointment flows and patient record screens, then deliver prototypes for quick validation.",
    status: null,
  },
  {
    id: "j8",
    companyName: "RiverByte",
    position: "Backend Intern (Node.js)",
    location: "Remote",
    type: "Internship",
    salary: "$18,000 - $25,000",
    description:
      "Implement small API endpoints, learn database basics, and improve code quality through mentor reviews.",
    status: null,
  },
];


document.getElementById("tabAll").addEventListener("click", function () {
  setActiveTab("all");
});
document.getElementById("tabInterview").addEventListener("click", function () {
  setActiveTab("interview");
});
document.getElementById("tabRejected").addEventListener("click", function () {
  setActiveTab("rejected");
});

setActiveTab("all");