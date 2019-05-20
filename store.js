const STOREHTML = {
  navigation: ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'],
  aboutMe: [
    {
      title: 'Education:',
      paragraphs: [`Thinkful '19`, `<p>University of California, Santa Cruz '10 </p><span class="neutral-color">Majored in Psychology</span>`]
    },
    {
      title: 'Hobbies:',
      paragraphs: ['<span>Programing: </span><span class="neutral-color">I am result-driven and love problem solving</span>', `<span>Weighting:</span> <span class="neutral-color">Body and mind works as one, as physical strength builds mental strength</span>`]
    },
    {
      title: 'Goals:',
      paragraphs: [`<p class="neutral-color">With my font end skillset, as well as my absorption of new technologies, I strive to enhance the world as a software engineer.</p>`,
        `<p class="neutral-color">I love learning, so I am always finding ways to improve myself and many facets of my life.</p>`,
        `<p class="neutral-color">Above all, I would love to be a part of something that transcend personal growth.</p>`]
    }
  ],
  logos:
        [
          `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
          `https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png`,
          `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png`,
          `http://pluspng.com/img-png/jquery-logo-png--512.png`,
          `https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png`,
          `https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ilnk4pdjwxtt9o08tcfb`
        ],
  projects: [
    {
      appName: 'Simpson Quiz app',
      img: 'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzAzXFxcLzA5MTIxNDAzXFxcL2hvbWVyLXNpbXBzb24uanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_aWQ9MjY0YTJkYmUzNzBmMmM2NzVmY2RcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiZTM1MzgwZTM4OWRjNGQyNjBhN2I0NDE3ZjdlMmM1ZWE5NDE0MjM4MyJ9/homer-simpson.jpg',
      title: 'Overview',
      paragraph: `Simpson Quiz app is created to test your knowledge on the characters from the cartoon The Simpsons.`,
      title2: 'Technologies Used',
      technologies: 'HTML, CSS, jQuery',
      alt: `Homer eating donut`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jyin25/quiz-app',
      live: 'https://jyin25.github.io/quiz-app/',
      screenshot: 'Quiz app picture.png'
    }
  ],
  contact: [{
    email: `http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG1.png`,
    linkedin: `https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png`,
    github: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`
  }]
};

function renderNavList () {
  const renderNav = STOREHTML.navigation.map(nav => `<li><a href="#${nav}">${nav}</a></li>`).join('');

  $('.nav-bar').html(`<ul> ${renderNav} <ul>`);
}

function renderAboutMe () {
  const aboutMeHtml = STOREHTML.aboutMe.map(key => `
  <div class="about-me-container"><h1>${key.title}</h1>
    ${key.paragraphs.map(body => `<li>${body}</li>`).join('')}
    </div>`).join('');
  $('.about-me').html(`<h1>ABOUT</h1><div class="flex-container">${aboutMeHtml}</div>`);
}

function renderLogo () {
  const logo = STOREHTML.logos.map(x =>
    `<div class="logo">
        <img src="${x}" alt="">
            </div>`).join('');
  const logosfi = `<h1>Skills</h1> <div class="color-line"></div> <div class="logo-container">${logo}</div>`;
  $('.skills').html(logosfi);
}

function renderProject () {
  const projHtml = STOREHTML.projects.map(key => `
  <div class="project-container">
  <img src=${key.img} alt="${key.alt}">
  <div class="overlay">
  <p>CLICK ME</p>
  </div>
  <div class="modal">
    <div class="modal-content">
    <div class="button-container">
    <div class="close">+</div>
  </div>
      <div class="modal-text">
            <h1>${key.appName}</h1>
            <h2>${key.title}</h2>
            <p>${key.paragraph}</p>
            <h2>${key.title2}</h2>
            <p>${key.technologies}</p>
            <h2>${key.title3}</h2>
            <p>${key.repo}</p>
            <a href="${key.live}"><img src="${key.screenshot}" alt=""></a>
      </div>
    </div>
  </div>
  </div>`).join('');

  $('.projects').html(`
  <h1>PORTFOLIO</h1>
  <p>HOVER OVER THEM FOR MORE INFORMATION</P>
  <div class="color-line"></div>
   ${projHtml}`);
}

function renderContactMe () {
  const contactHtml = STOREHTML.contact.map(key => `
  <li><a href="mailto:jyin25@gmail.com"><img src=${key.email} alt=""></a></li>
  <li><a href="https://www.linkedin.com/in/jun-yin-883636180/"><img src=${key.linkedin} alt=""></a></li>
  <li><a href="https://github.com/jyin25"><img src=${key.github} alt=""></a></li>`);

  $('.contact').html(`<h1>CONNECT WITH ME!</h1><ul>${contactHtml} </ul>`);
}

function renderHTML () {
  renderNavList();
  renderLogo();
  renderProject();
  renderContactMe();
  
}

$(renderHTML);
