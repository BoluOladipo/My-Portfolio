    const output = document.getElementById("terminalOutput");

function runCommand(cmd) {
  let response = "";

  if (cmd === "home") {
    response = `> initializing Oladipo Boluwaduro Portfolio...
Welcome To Oladipo Boluwaduro Portfolio ⚔️
Creating engaging, responsive digital experiences for the web.
Ready for new challenges.
I’m a passionate Front-End and Mobile App Developer with a keen eye for UI/UX design. Over the years, I’ve dedicated myself to crafting engaging, responsive web experiences that not only look good but also provide seamless user interactions. 
`;
  }

  if (cmd === "projects") {
    response = `> C:/Projects/Oladipo Boluwaduro> Boluwaduro projects

Clothing Ordering Website 

Food Ordering System

University Hackathon E-Commerce Project

Car Vendor Website 

Furniture vendor website 

Student Portal

ToDo list API

BEDMA Technology
`;
  }

  if (cmd === "about") {
    response = `> C:/About/Oladipo Boluwaduro> About me

I'm Oladipo Boluwaduro — a front-end developer passionate about crafting seamless, responsive, and interactive digital products.
Clean code. Creative UI/UX. Anime-level focus. ⚔️
I am a passionate Web Developer and App Developer with 6 years of experience in building high-performance, visually appealing applications. I specialize in both front-end and back-end development, with expertise in modern technologies such as React, JavaScript, Tailwind CSS, Node.js, and Flutter for app development. I have a proven track record in optimizing UI/UX designs, enhancing performance, and integrating APIs to ensure a seamless user experience across web and mobile platforms.
I thrive in collaborative environments and always stay updated with the latest tech trends. My goal is to deliver scalable, efficient, and user-friendly applications that make a tangible impact on businesses and users alike.

Skills:
  
• Programming Languages: JavaScript (ES6+), HTML5, CSS3, TypeScript, Python, Swift, Kotlin, Java
 • Web Development: React, Angular, Next.js, Node.js, Express.js, Vue.js, Tailwind CSS, Sass
 • Mobile App Development: Flutter, React Native, Swift (iOS), Kotlin (Android)
 • UI/UX Design: Figma, Adobe XD, Wireframing, Prototyping, Web Accessibility
 • API Integration: REST APIs, GraphQL, Axios, Firebase, Firebase Firestore, AWS
 • Databases: MongoDB, PostgreSQL, MySQL, Firebase
 • Version Control & CI/CD: Git, GitHub, GitLab, Bitbucket, GitHub Actions, Netlify, Vercel
 • Cloud Platforms: AWS, Google Cloud, Microsoft Azure
 • DevOps: Docker, Kubernetes, Jenkins, CI/CD pipelines
 • Performance Optimization: Code splitting, Lazy loading, Caching, Progressive Web Apps (PWAs), Image optimization
 • Testing: Jest, Mocha, Cypress, Selenium, Test-Driven Development (TDD)
 • Agile Methodologies: Scrum, Kanban.
`;
  }

  if (cmd === "experience") {
    response = `>  C:/Experience/Oladipo Boluwaduro> Boluwaduro experience

 Hackathon Finalist — Built a voting platform.


Front-End and App Development Intern
Olam Company, Port Harcourt, Nigeria
March 2025 – Present

Developed responsive web applications, improving mobile load times by 30%.
Collaborated with designers and developers to create React-based web solutions.
Integrated third-party APIs for dynamic content.
Built mobile apps with Flutter and React Native, focusing on performance.
Followed Agile practices, participating in scrums and sprint planning.

Freelance Web and App Developer
2019 – Present

Designed and developed 20+ responsive websites for businesses.
Built cross-platform mobile apps using React Native and Flutter.
Delivered end-to-end solutions, integrating front-end, back-end, and databases.
Optimized websites and apps for SEO, enhancing client visibility.
Provided ongoing support to ensure up-to-date systems.

Lead Developer at BEDMA Technology
January 2024 - Present
As Lead Developer at BEDMA Technology, I oversee the development of innovative software solutions, leading a team to deliver high-quality web and mobile applications. I ensure projects meet client requirements and are completed on time, while maintaining code quality and performance.

Founder of Zino_Dev_Hub
March 2024 - Present
I founded Zino_Dev_Hub to create a community for developers to learn, collaborate, and grow. Through workshops and resources, I foster a space for skill development and open-source contributions, supporting the growth of the tech community.
`;
  }

  if (cmd === "contact") {
    response = `> C:/Contact/Oladipo Boluwaduro> Boluwaduro contact

📧 boluemmanuel071@gmail.com
📱  Whatsapp : 07075800632
🐦  Telegram : @Zino_Goldn
💼 LinkdIn : www.linkedin.com/in/boluwaduro-oladipo-148699296
`;
  }
 
   if (cmd === "tech stack") {
    response = `> C:/tech stack/Oladipo Boluwaduro> Boluwaduro Tech Stack
PROGRAMMING LANGUAGES:

C
HTML
CSS
JavaScript
Python
Java

FRAMEWORKS AND LIBRARIES:

React
Angular (currently learning)
Next.js
Bootstrap
Flutter (for app development)

DATABASES:

SQLite
SQL
Firebase

VERSION CONTROL:

Git
GitHub

Tools and Platforms:

Netlify (for deploying frontend apps)
Render (for deploying backend apps)
Postman (for API testing)
Spring Initializr (for Spring Boot project setup)
NetBeans (IDE for Java development)
Visual Studio (IDE)
Spotify Web API (for building a Spotify clone)

WEB DEVELOPMENT:

HTML & CSS (for frontend development)
JavaScript (for frontend and backend)
Node.js (for backend development)

PWA (Progressive Web Apps):

Used in your Todo List app
`;
  }
  typeText(response);
}

let typingTimeout; // Global reference

function typeText(text) {
  clearTimeout(typingTimeout); // Cancel previous typing
  output.innerHTML = ""; // Clear output
  let i = 0;

  function type() {
    if (i < text.length) {
      output.innerHTML += text.charAt(i);
      i++;
      typingTimeout = setTimeout(type, 25); // Save timeout reference
    }
  }

  type();
}
runCommand("home");
