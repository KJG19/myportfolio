const projects = [
  {
    title: "Google Cloud Sales Dashboard",
    description:
      "Capstone project made for Google Cloud while I was attending SAIT",
    image: "images/gcp.png",
    github: "https://github.com/ConDavison1/Sales-Analytic-Dashboard",
    live: "https://sales-analytic-dashboard.web.app/",
  },
  {
    title: "Coding Quiz",
    description:
      "Using Next.js and Tailwind CSS to create a 10 question coding quiz.",
    image: "images/codequiz.png",
    github: "https://github.com/KJG19/webdev2quiz",
    live: "https://webdev2quiz.vercel.app",
  },
  {
    title: "Tic Tac Toe",
    description: "React Native Tic Tac Toe game.",
    image: "images/tictactoe.png",
    github: "https://github.com/KJG19/Tic-Tac-Toe",
  },
  {
    title: "Cross Word Puzzle",
    description: "Simple Cross Word Puzzle I made using React.",
    image: "images/crossword.png",
    github: "https://github.com/KJG19/crossword-app-three",
    live: "",
  },
  {
    title: "",
    description: "",
    image: "images/soon.png",
    github: "https://github.com/KJG19",
    live: "",
  },
];

window.onload = () => {
  const container = document.getElementById("projects-container");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const liveLink = project.live
      ? `<a href="${project.live}" target="_blank">Live</a>`
      : "";

    const separator = project.live ? " | " : "";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:8px; margin-bottom:10px;" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">GitHub</a>${separator}${liveLink}
    `;
    container.appendChild(card);
  });
};

window.addEventListener("load", () => {
  const roles = ["Software Developer", "Web Developer", "Full Stack Developer"];
  let roleIndex = 0,
    charIndex = 0,
    isDeleting = false;
  const TYPING_SPEED = 150;
  const DELETING_SPEED = 75;
  const PAUSE_AFTER_COMPLETE = 1500;
  const roleEl = document.getElementById("dynamic-role");

  function typeRole() {
    const current = roles[roleIndex];
    if (!isDeleting) {
      roleEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        return setTimeout(typeRole, PAUSE_AFTER_COMPLETE);
      }
    } else {
      roleEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeRole, isDeleting ? DELETING_SPEED : TYPING_SPEED);
  }

  typeRole();
});
