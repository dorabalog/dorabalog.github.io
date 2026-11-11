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
    "",
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

/* ---------- NEWS / MEDIA ---------- */
const NEWS = [
  // {
  //   date: "",          // e.g. "Nov 2026"
  //   title: "",
  //   source: "",        // e.g. "BU Today"
  //   url: "",
  //   thumbnail: "",     // optional
  // },
];
