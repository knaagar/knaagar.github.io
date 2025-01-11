const projects = [
  {
    name: "SpaceGaze",
    date: "Feb 2022",
    link: "https://github.com/knaagar/spacegaze",
    desc: "Delivered in two days, created a blog site using EJS, Bootstrap, CSS, Node.js, Express.js, MongoDB, and Mongoose.",
  },
  {
    name: "Github Search",
    date: "Apr 2022",
    link: "https://github.com/knaagar/github-search",
    desc: "Search web app that allows to search for github users from both there usernames and nicknames.",
  },
  {
    name: "Live Well and Breathe",
    date: "Apr 2022",
    link: "https://github.com/knaagar/Live-Well-and-Breathe",
    desc: "Teaming up with Quinn Gibson and Totoro for first hackathon, a self-health website.",
  },
  {
    name: "Custom SASS Transpiler",
    date: "Aug 2022",
    link: "https://www.khanacademy.org/computer-programming/ka-sass-ft-quinn-hardbrook/5549764049420288",
    desc: "Teaming up with Quinn Gibson and Totoro for first hackathon, a self-health website.",
  },
  {
    name: "APSMUN",
    date: "May 2023",
    link: "https://apsmun.netlify.app/",
    desc: "My high school's MUN club website for the session 2023-24.",
  },
  {
    name: "DeCyphers",
    date: "Oct 2023",
    link: "https://decyphers.netlify.app/",
    desc: "My high school's Computer Science club website for the session 2023-24.",
  },
  {
    name: "WorkOutWell",
    date: "Dec 2023",
    link: "https://github.com/knaagar/workoutwell",
    desc: "Self-health platform, created using Python and MySQL for CBSE Class 12 CS project.",
  },
];

const blogs = [
  {
    title: "How well do LLMs understand phonetics?",
    date: "Jan 2023",
    authors: ["Benjamin Chek", "Zitang", "Zhuo En", "Kritika Naagar"],
    desc: "Preliminary Experiment results of our research on the ability of LLMs (specific models) to work with phonetics and rhymes.",
    id: 1,
  },
];

const experiences = [
  {
      company: "plumlabs",
      link: "https://www.plumlabs.co/",
      positions: [
          {
              title: "Founder",
              period: "2025 - Present",
              details: `- building technology people love`
          },
          {
              title: "Developer",
              period: "2025 - Present",
              details: "- building [https://www.linkedin.com/company/avsar-opportunities/](avsar) - a platform to connect students with opportunities"
          }
      ]
  },
  {
    company: "kishu collections",
    link: "https://kishucollections-coming-soon.vercel.app/",
    positions: [
        {
            title: "Developer",
            period: "2025 - Present",
            details: "- building the ecommerce platform"
        },
        {
            title: "Social Media Manager",
            period: "2025 - Present",
            details: ""
        }
    ]
},
  {
      company: "Decyphers - tech club",
      link: "https://decyphers.netlify.app/",
      positions: [
        {
          title: "Problem Setter and Judge",
          period: "2023 - 2024",
          details: "- the competitive programming problems I set and tested for the contest- [https://drive.google.com/file/d/1CViK8uoYupBkXj-KDQo-1JO-LhfVrz1C/view?usp=sharing](problems), [https://drive.google.com/file/d/11a7MSr0oSsuorx0QGC4UT9szQ8p_6PIZ/view?usp=sharing](editorial)"
      },
          {
              title: "Founder and Team Lead",
              period: "2023 - 2024",
              details: ""
          }
      ]
  }
];

function addExperienceTimeline() {
  const expContainer = document.querySelector('.experience-container');
  
  experiences.forEach(exp => {
      const sectionCard = document.createElement('div');
      sectionCard.className = 'exp-section';

      sectionCard.innerHTML = `
          <h2 class="exp-name"><a href="${exp.link}">${exp.company}</a></h2>
          <div class="timeline">
              ${exp.positions.map(pos => `
                  <div class="timeline-item">
                      <h3 class="position-title">${pos.title}</h3>
                      <p class="period">${pos.period}</p>
                      <p class="details">${pos.details.replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$1">$2</a>')}</p>
                  </div>
              `).join('')}
          </div>
      `;
      
      expContainer.appendChild(sectionCard);
  });
}


function addProjects() {
  const projContainer = document.querySelector(".project-container");

  for (let i = projects.length - 1; i >= 0; i--) {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.addEventListener("click", () => {
      window.location.href = `${projects[i].link}`;
    });
    card.innerHTML = `
        <h2>${projects[i].name}</h2>
        <br>
        <p class="date">${projects[i].name}</p>
        <br>
        <p>${projects[i].desc}</p>`;
    projContainer.appendChild(card);
    const lineBreak1 = document.createElement("br");
    const lineBreak2 = document.createElement("br");
    projContainer.appendChild(lineBreak1);
    projContainer.appendChild(lineBreak2);
  }
}

function addBlogs() {
  const blogContainer = document.querySelector(".blog-container");

  for (let i = blogs.length - 1; i >= 0; i--) {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.addEventListener("click", () => {
      window.location.href = `/article.html?id=${blogs[i].id.toString()}`;
    });
    card.innerHTML = `
          <h2>${blogs[i].title}</h2>
          <br>
          <p class="date">${blogs[i].date} by ${blogs[i].authors.join(", ")}</p>
          <br>
          <p>${blogs[i].desc}</p>`;
    blogContainer.appendChild(card);
    const lineBreak1 = document.createElement("br");
    const lineBreak2 = document.createElement("br");
    blogContainer.appendChild(lineBreak1);
    blogContainer.appendChild(lineBreak2);
  }
}

addProjects();
addBlogs();
addExperienceTimeline()

document.getElementById("year").innerHTML = new Date().getFullYear();