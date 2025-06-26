const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

type CounterItems = {
  value: number;
  suffix: string;
  label: string;
}

const counterItems: CounterItems[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 92, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-rocketseat.png",
  },
  {
    imgPath: "/images/logos/company-logo-upwave.png",
  },
  {
    imgPath: "/images/logos/company-logo-lusati.png",
  },
  {
    imgPath: "/images/logos/company-logo-rocketseat.png",
  },
  {
    imgPath: "/images/logos/company-logo-upwave.png",
  },
  {
    imgPath: "/images/logos/company-logo-lusati.png",
  }
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Continuous Improvement",
    desc: "Always learning and refining processes to improve performance and code quality.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Remote Collaboration",
    desc: "Thriving in international teams with async communication and cultural awareness.",
  },
  {
    imgPath: "/images/mindset.png",
    title: "Ownership Mindset",
    desc: "Taking responsibility from start to finish, ensuring delivery with autonomy and accountability.",
  },
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Breaking down complex challenges and delivering scalable, user-centered solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Next.js Developer",
    modelPath: "/models/next-js.glb",
    scale: 8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "TailwindCSS",
    modelPath: "/models/tailwindcss.glb",
    scale: 8,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Interactive Developer",
  //   modelPath: "/models/three.js-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Carlos showed strong fullstack capabilities at Lusati, delivering reliable web and mobile solutions. His performance optimization and teamwork had a clear impact on our product quality.",
    imgPath: "/images/logos/company-logo-lusati.png",
    logoPath: "/images/logo-lusati1.png",
    title: "Full Stack Engineer",
    date: "Apr 2023 - Feb 2025",
    responsibilities: [
      "Developed full-stack features using React, Next.js, Node.js, Angular, and React Native.",
      "Debugged Node.js APIs to identify latency and memory issues using event loop monitoring and profiling tools.",
      "Reduced Next.js bundle size by 35% through dynamic imports and optimized image loading, improving LCP and load time.",
      "Provided maintenance on critical systems, reducing bug reports by 23%.",
      "Led in the development of the company’s first mobile app using React Native with Expo.",
      "Reduced delivery time of mobile features by 30% by streamlining Figma-to-code workflows.",
      "Participated in the entire lifecycle: planning, development, testing Jest, deployment.",
      "Used Docker and Linux CLI daily for containerized development, builds, and testing.",
      "Participated in the full lifecycle: planning, development, testing (Jest), and CI/CD deployment via GitHub Actions."
    ],
  },
  {
    review:
      "Carlos played a key role in the evolution of our internal systems. His UI components and clean API integrations significantly improved our productivity and consistency.",
    imgPath: "/images/logos/company-logo-lusati.png",
    logoPath: "/images/logo-lusati1.png",
    title: "Front-End Developer",
    date: "Dec 2021 - Apr 2023",
    responsibilities: [
      "Built reusable UI components with PrimeNG and Bootstrap.",
      "Integrated RESTful APIs with strong validation and error handling.",
      "Improved internal tools scalability and supported agile delivery cycles.",
    ],
  },
  {
    review:
      "At Upwave Tech, Carlos helped build scalable web platforms for SMBs in Brazil. His fullstack mindset and product thinking helped us ship fast and reliably.",
    imgPath: "/images/logos/company-logo-upwave.png",
    logoPath: "/images/logo-upwave1.png",
    title: "Full Stack Developer (React Focus)",
    date: "Jan 2020 - Nov 2021",
    responsibilities: [
      "Developed dashboards and admin panels using React.js, Next.js, and TailwindCSS.",
      "Created backend APIs with Node.js, Express, and PostgreSQL.",
      "Implemented auth with JWT and managed state with Context API.",
    ],
  },
  {
    review:
      "Carlos showed high engagement and dedication during the Rocketseat Ignite Bootcamp. He delivered fullstack projects with solid understanding of React and Node.js architecture.",
    imgPath: "/images/logos/company-logo-rocketseat.png",
    logoPath: "/images/logo-rocketseat1.png",
    title: "Bootcamp Trainee - Full Stack Developer",
    date: "2021",
    responsibilities: [
      "Completed hands-on modules in React, React Native, Node.js and Next.js.",
      "Built fullstack projects applying Clean Code and SOLID principles.",
      "Explored testing, authentication, and performance optimization.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};