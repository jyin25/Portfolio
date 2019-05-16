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
          `data:image/png;base64,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`,
          `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png`,
          `http://pluspng.com/img-png/jquery-logo-png--512.png`,
          `data:image/png;base64,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`,
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
      alt: `Homer eating donut`
    }
  ],
  contact: [{
    email: `data:image/png;base64,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`,
    linkedin: `data:image/png;base64,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`,
    github: `http://pngimg.com/uploads/github/github_PNG19.png`
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
  const logosfi = `<h1>Skills</h1> <div class="logo-container">${logo}</div>`;
  $('.skills').html(logosfi);
}

function renderProject () {
  const projHtml = STOREHTML.projects.map(key => `
  <img src=${key.img} alt="${key.alt}">
  <div class="overlay">
    <div class="overlay-text">
      <h1>${key.appName}</h1>
      <h2>${key.title}</h2>
      <p>${key.paragraph}</p>
      <h2>${key.title2}</h2>
      <p>${key.technologies}</p>
    </div>
  </div>`);
  $('.projects').html(`
  <h1>PORTFOLIO</h1>
  <p>HOVER OVER THEM FOR MORE INFORMATION</P>
  <div class="project-container"> ${projHtml} </div>`);

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
  renderAboutMe();
}

$(renderHTML);