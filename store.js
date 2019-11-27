const STOREHTML = {
  navigation: ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'],
  logos:
        [
          `<i class="fab fa-js-square" style="color:yellow"></i>`,
          `<i class="fab fa-html5" style="color:#e54d26"></i>`,
          `<i class="fab fa-css3-alt" style="color:#3d8fc6"></i>`,
          `<i class="fab fa-git-square" style="color: #f34f29"></i>`,
          `<i class="icon-jquery" style="color:blue"></i>`
        ],
  logos2:
        [
          `<i class="fab fa-node-js" style="color:green"></i>`,
          `<i class="fab fa-react" style="color:#5249dc"></i>`,
          `<i class="icon-postgres" style="color:#336791"></i>`,
          `<i class="icon-heroku" style="color:blue"></i>`,
          `<i class="icon-npm" style="color:red"></i>`        
        ],
  projects: [
    {
      appName: 'Moodzic',
      img: './pictures/readme-image.png',
      title: 'Overview',
      paragraph: `A weather based music player app that curates a specific playlist and recommendations for activities based on the user’s current weather condition.`,
      title2: 'Technologies Used',
      technologies: 'HTML5 | CSS3 | jQuery | RESTful APIs | Javascript',
      alt: `App interface displayed on mobile and desktop`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jyin25/Moodzic',
      live: 'http://www.jyin25.com',
      screenshot: `./pictures/moodzic.gif`
    },
    {
      appName: 'Fit Tracker',
      img: './pictures/mockup.PNG',
      title: 'Overview',
      paragraph: `A mobile fitness App that tracks a user's weight lifting journey based on 12 weeks period.`,
      title2: 'Technologies Used',
      technologies: 'React | HTML5 | CSS3 | Javascript | Node.js | Express | PostgreSQL',
      alt: `App interface displayed on mobile`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jyin25/Fitness-Tracker',
      live: 'https://fitness-tracker-master.jyin25.now.sh',
      screenshot: `./pictures/fit-tracker.gif`
    },
    {
      appName: 'Fantasy Stock Exchange',
      img: './pictures/mockup3.png',
      title: 'Overview',
      paragraph: `Fantasy Stock Exchange is a stock trading app that allows users to learn the principles of trading stocks, all while having fun competing with friends.`,
      title2: 'Technologies Used',
      technologies: 'React | HTML5 | CSS3 | Javascript | Node.js | Express | PostgreSQL | Victory Graph',
      alt: `App interface displayed on mobile`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jy-lr/FSE-Client',
      live: 'https://fse-client.jyin25.now.sh/',
      screenshot: `./pictures/FSE.gif`
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
        ${x}
      </div>`).join('');
  const logo2 = STOREHTML.logos2.map(x =>
    `<div class="logo">
      ${x}
    </div>`).join('');

  const logosfi = `<h1>Skills</h1> <div class="color-line"></div> <div class="logo-container">${logo}</div><div class="logo-container">${logo2}</div>`;
  

  $('.skills').html(logosfi);
}

function renderProject () {
  const projHtml = STOREHTML.projects.map(key => `
  <div class="project-flex">
    <div class="project-container box-shadow">
      <img src=${key.img} alt="${key.alt}">
      <div class="overlay hover">
        <p>${key.appName}</p>
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
          <h2>${key.title3}</h2>
          <a href="${key.repo}" style="text-decoration: none;"><p>${key.repo}<p/></a>
          <h2>Live App</h2>
          <a href="${key.live}" style="text-decoration: none;"><p>${key.live}</p></a>
          <img src=${key.screenshot}>
          </div>
      </div>
    </div>
  </div>
  <br>
  <div class="app-name">
    <h2>${key.appName}</h2>
    <br>
    <p>Tech stacks</p>
    <p class="tech-stacks">${key.technologies}</p>
    </div>
  
  </div>
  `).join('');

  $('.projects').html(`
  <h1>PORTFOLIO</h1>
  <p>CLICK ON THEM FOR MORE INFORMATION</P>
  <div class="color-line"></div>
   <div class="project-container-flex">${projHtml}</div>`);
}

function renderContactMe () {
  const contactHtml = STOREHTML.contact.map(key => `
  <li class="hover"><a href="mailto:jyin25@gmail.com"><img src=${key.email} alt=""></a></li>
  <li class="hover"><a href="https://www.linkedin.com/in/jun-yin-883636180/"><img src=${key.linkedin} alt=""></a></li>
  <li class="hover"><a href="https://github.com/jyin25"><img src=${key.github} alt=""></a></li>`);

  $('.contact').html(`<h1>CONNECT WITH ME!</h1><ul>${contactHtml} </ul>`);
}

function renderHTML () {
  renderNavList();
  renderLogo();
  renderProject();
  renderContactMe();
  
}

$(renderHTML);
