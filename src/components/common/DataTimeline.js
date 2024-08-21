const data = [
  {
    id: 1,
    compTitle: "ScreenRoot Technologies",
    role: "Front End Developer",
    year: {
      fromYear: "July 2022",
      toYear: "May 2024",
    },
    description:
      "As a Front End Developer, I built interactive web applications using HTML, CSS, SASS, GSAP, and Bootstrap. I developed custom WordPress themes and plugins, with experience in GIT, Bitbucket, and Three.js. I also have knowledge of React and strong problem-solving skills to create user-friendly interfaces that meet client needs.",
  },
  {
    id: 2,
    compTitle: "National Informatics Center (NIC)",
    role: " Dot Net Developer",
    year: {
      fromYear: "March 2022",
      toYear: "June 2022",
    },
    description:
      "As a Dot Net Developer, I developed ASP.NET web forms and handled both front-end and back-end tasks. My role included creating Crystal Reports, with experience in SQL and MongoDB.",
  },
  {
    id: 3,
    compTitle: "Webware.io",
    role: "Front End Developer",
    year: {
      fromYear: "May 2019",
      toYear: "Feb 2022",
    },
    description:
      "As a Front End Developer at Webware.io, I developed websites using HTML, CSS, and JavaScript with the Foundation framework. I ensured the technical feasibility of UI/UX designs, worked with RESTful APIs, and handled asynchronous requests. I also have a strong understanding of SEO principles and efficiently resolved UI-related issues.",
  },
  {
    id: 4,
    compTitle: "Electronic Automation Private Ltd (EAPL)",
    role: "SAP B1 Functional Consultant",
    year: {
      fromYear: "Sept 2017",
      toYear: "May 2019",
    },
    description:
      "As an SAP B1 Functional Consultant at Electronic Automation Private Ltd (EAPL), I developed PLDs and Query Print Layouts, and wrote SQL Queries, Views, and Stored Procedures. My role also involved gaining basic knowledge of server management tools.",
  },
];
const educationData = [
  {
    id: 5,
    stream: "Master of Computer Applications",
    university: "Visvesvaraya Technological University",
    place: "Belgaum",
  },
  {
    id: 6,
    stream: "Bachelor of Computer Applications",
    university: "Karnatak University",
    place: "Dharward",
  },
];

const LogoData = [
  {
    id: 1,
    image: "/src/assets/images/html.svg",
    alt: "Html",
    caption: "Html",
  },
  {
    id: 2,
    image: "/src/assets/images/css.svg",
    alt: "Css",
    caption: "Css",
  },
  {
    id: 3,
    image: "/src/assets/images/java.svg",
    alt: "Javascript",
    caption: "Javascript",
  },
  {
    id: 4,
    image: "/src/assets/images/react.svg",
    alt: "Reactjs",
    caption: "React",
  },
  {
    id: 5,
    image: "/src/assets/images/sass.svg",
    alt: "Sass",
    caption: "Sass",
  },

  {
    id: 6,
    image: "/src/assets/images/tailwind.svg",
    alt: "Tailwind",
    caption: "Tailwind",
  },
  {
    id: 7,
    image: "/src/assets/images/wp.svg",
    alt: "Wordpress",
    caption: "Wordpress",
  },
  {
    id: 8,
    image: "/src/assets/images/git.svg",
    alt: "Git",
    caption: "Git",
  },
  {
    id: 9,
    image: "/src/assets/images/three.png",
    alt: "ThreeJs",
    caption: "Three.js",
  },
  {
    id: 10,
    image: "/src/assets/images/sql.svg",
    alt: "Sql Server",
    caption: "Sql",
  },
  {
    id: 11,
    image: "/src/assets/images/web.svg",
    alt: "Web Pack",
    caption: "Webpack",
  },
  {
    id: 12,
    image: "/src/assets/images/npm.svg",
    alt: "npm",
    caption: "Npm",
  },
];

const clientData = [
  {
    id: 1,
    image: "/src/assets/images/client-logo/dmi.svg",
    alt: "Dmi finance",
  },
  {
    id: 2,
    image: "/src/assets/images/client-logo/jindal.svg",
    alt: "jsw",
  },
  {
    id: 3,
    image: "/src/assets/images/client-logo/pollisetty.svg",
    alt: "Polisetty",
  },
  {
    id: 4,
    image: "/src/assets/images/client-logo/screenroot.svg",
    alt: "screenroot",
  },
  {
    id: 5,
    image: "/src/assets/images/client-logo/yesbank.png",
    alt: "yesbank",
  },
  {
    id: 6,
    image: "/src/assets/images/client-logo/nic.png",
    alt: "NIC",
  },
  {
    id: 7,
    image: "/src/assets/images/client-logo/webware.png",
    alt: "webaware",
  },
];
const tabsData = [
  {
    id: "all",
    label: "All",
    content: [
      {
        type: "app",
        imgSrc: "/src/assets/images/demo.png",
        tile: "abc",
        description: "description",
        tech: ["react", "css"],
      },
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
    ],
  },
  {
    id: "app",
    label: "Applications",
    content: [
      {
        type: "app",
        imgSrc: "/src/assets/images/demo.png",
        description: "App description",
        tile: "abc",
        tech: ["react", "css"],
      },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    content: [
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
      {
        type: "web",
        imgSrc: "/src/assets/images/demo.png",
        description: "Web description",
        tile: "abc",
        tech: ["react", "css"],
      },
    ],
  },
];

// console.log(tabsData[1].content.tech[1]);
// console.log(tabsData[0].content[0].tech.split(" "));

export { data, educationData, LogoData, clientData, tabsData };
