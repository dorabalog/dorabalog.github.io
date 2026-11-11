/* ============================================================
   EDIT THIS FILE to fill in your site.
   Each section is a list. Copy an entry { ... }, paste it below
   the last one (keep the comma between entries), and fill it in.
   Empty fields ("") are simply hidden on the page.
   Images go in the images/ folder; use the path, e.g.
   "images/publications/my-paper.png".
   ============================================================ */

const SITE = {
  name: "Dora Balog",
  tagline: "",            // e.g. "PhD Candidate, Biomedical Engineering · Boston University"
  photo: "images/headshot.jpg",

  // Bio: one string per paragraph.
  bio: [
    "Dora is a PhD Candidate in Biomedical Engineering at Boston University. Her research focuses on validating statistical methods against biophysically detailed compartmental models. She also serves as the President of BU's Graduate Women in Science and Engineering (GWISE) and hosts the Neurophotonics Podcast.",
  ],

  // Links in the header. Leave "" to hide one.
  links: {
    email: "",            // e.g. "you@bu.edu"
    linkedin: "https://www.linkedin.com/in/dorabalog/",
    github: "https://github.com/dorabalog",
    scholar: "",          // Google Scholar URL
    orcid: "https://orcid.org/0009-0004-5296-5725",
    cv: "",               // e.g. "files/CV.pdf" (put the PDF in a files/ folder)
  },
};

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  {
    title: "Neurophotonics Podcast",
    year: "2024–2026 · 2 seasons",
    description:
      "Host of the Boston University Neurophotonics Center podcast, interviewing researchers about breakthroughs across neuroscience, photonics, and data science.",
    image: "images/projects/npc-podcast.jpg",
    tags: ["Science communication", "Podcast"],
    links: [
      { label: "Website", url: "https://www.bu.edu/neurophotonics/news-events/neurophotonics-podcast/" },
    ],
  },
  {
    title: "Behavior Tracking",
    year: "2023",
    description:
      "Tools for tracking pupillometry and whisker activity in mouse experiments.",
    image: "",            // e.g. "images/projects/behavior-tracking.gif"
    tags: ["Python", "Computer vision", "Neuroscience"],
    links: [
      { label: "Code", url: "https://github.com/dorabalog/behavior-tracking" },
    ],
  },
  // {
  //   title: "",
  //   year: "",
  //   description: "",
  //   image: "",
  //   tags: [],
  //   links: [{ label: "Code", url: "" }],
  // },
];

/* ---------- PUBLICATIONS ---------- */
// thumbnail: a small image from the paper/journal page (a figure or the
// journal's preview image). Save it in images/publications/.
const PUBLICATIONS = [
  // {
  //   title: "",
  //   authors: "",       // your name is bolded automatically
  //   venue: "",         // journal / conference
  //   year: "",
  //   url: "",           // link to the paper
  //   thumbnail: "",
  //   links: [{ label: "PDF", url: "" }, { label: "Code", url: "" }],
  // },
];

/* ---------- TALKS & POSTERS ---------- */
const TALKS = [
  // {
  //   type: "Talk",      // "Talk", "Poster", "Invited talk", "Panel", ...
  //   title: "",
  //   event: "",         // e.g. "Society for Neuroscience 2026"
  //   location: "",      // e.g. "San Diego, CA"
  //   date: "",          // e.g. "Nov 2026"
  //   links: [{ label: "Slides", url: "" }, { label: "Poster", url: "" }],
  // },
];

/* ---------- AWARDS & FELLOWSHIPS ---------- */
const AWARDS = [
  // {
  //   title: "",
  //   organization: "",  // who gave it
  //   year: "",
  //   description: "",   // optional, one line
  //   url: "",           // optional
  // },
];

/* ---------- CERTIFICATIONS & COURSES ---------- */
// For courses outside your field (e.g. IP law), set status to
// "In progress" while you're taking them, "Completed" when done.
const CERTIFICATIONS = [
  // {
  //   title: "",         // e.g. "Intellectual Property Law"
  //   issuer: "",        // e.g. "Coursera · University of Pennsylvania"
  //   date: "",          // e.g. "2026"
  //   status: "",        // "In progress" or "Completed"
  //   url: "",           // certificate or course link
  // },
];

/* ---------- NEWS / MEDIA ---------- */
// Newest first.
const NEWS = [
  {
    date: "Sep 2026",
    title: "Catalyst Summit 2026",
    source: "BU College of Engineering",
    url: "https://www.bu.edu/eng/research-impact/catalyst-summit-2026/",
    thumbnail: "images/news/catalyst-summit.jpg",
    links: [
      { label: "LinkedIn post", url: "https://lnkd.in/p/ej3-BjgG" },
      { label: "LinkedIn post", url: "https://lnkd.in/p/ebVTUwBv" },
    ],
  },
  {
    date: "Jan 2026",
    title: "Tudomány határok nélkül Újvidéktől Bostonig (Science Without Borders: From Novi Sad to Boston)",
    source: "Európa Kollégium · in Hungarian",
    url: "https://europakollegium.com/tudomany-hatarok-nelkul-ujvidektol-bostonig/",
    thumbnail: "images/news/europa-kollegium.jpg",
  },
  {
    date: "Jul 2025",
    title: "One of Myriad Ways to Prepare for a Dissertation Defense",
    source: "BU Today",
    url: "https://www.bu.edu/today/close-ups/2025/knitting/",
    thumbnail: "images/news/bu-today-knitting.jpg",
  },
  {
    date: "Mar 2025",
    title: "Ambassadors for those underrepresented in STEM",
    source: "BU College of Engineering",
    url: "https://www.bu.edu/eng/2025/03/11/ambassadors-for-those-underrepresented-in-stem/",
    thumbnail: "images/news/abrcms-judges.jpg",
  },
  // {
  //   date: "",          // e.g. "Nov 2026"
  //   title: "",
  //   source: "",        // e.g. "BU Today"
  //   url: "",
  //   thumbnail: "",     // optional
  //   links: [],         // optional extra links, e.g. [{ label: "LinkedIn post", url: "" }]
  // },
];
