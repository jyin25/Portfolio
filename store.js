const STOREHTML = {
  navigation: ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'],
  logos:
        [
          `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
          `https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png`,
          `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png`,
          `https://i.dlpng.com/static/png/2341908_thumb.png`,
          `http://pluspng.com/img-png/jquery-logo-png--512.png`        
        ],
  logos2:
        [
          `https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg`,
          `https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png`,
          `https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg`,
          `https://cdn.worldvectorlogo.com/logos/heroku.svg`,
          `https://png2.cleanpng.com/sh/4b1bdc99c681b3cfc2441c5d4a298f49/L0KzQYm3VMI4N5Z0j5H0aYP2gLBuTf1wa5lmRdD4ZHWwesS0ivF3aaRoitt5dD32f7f7lBFzbV55feV9aX7qPbB3jb02aZY4T9YANXTpdrWAVL44OWkAUaY6MEG4QoWBVcgyQWgASakALoDxd1==/kisspng-mocha-node-js-javascript-software-testing-npm-5ae37d55dffd74.7189941015248581979175.png`        ],
  projects: [
    {
      appName: 'Moodzic',
      img: 'readme-image.png',
      title: 'Overview',
      paragraph: `A weather based music player app that curates a specific playlist and recommendations for activities based on the user’s current weather condition.`,
      title2: 'Technologies Used',
      technologies: 'HTML, CSS, jQuery, RESTful APIs, Javascript',
      alt: `App interface displayed on mobile and desktop`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jyin25/Moodzic',
      live: 'http://www.jyin25.com',
      screenshot: ''
    },
    {
      appName: 'Fit Tracker',
      img: 'Capture_iphonexspacegrey_portrait.png',
      title: 'Overview',
      paragraph: `A mobile fitness App that tracks a user's weight lifting journey based on 12 weeks period.`,
      title2: 'Technologies Used',
      technologies: 'React, HTML/CSS, Javascript, Node.js, Express, PostgreSQL',
      alt: `App interface displayed on mobile`,
      title3: 'GitHub Repo',
      repo: 'https://github.com/jyin25/Fitness-Tracker',
      live: 'https://fitness-tracker.jyin25.now.sh',
      screenshot: ''
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
  const logo2 = STOREHTML.logos2.map(x =>
    `<div class="logo">
        <img src="${x}" alt="">
            </div>`).join('');

  const logosfi = `<h1>Skills</h1> <div class="color-line"></div> <div class="logo-container">${logo}</div><div class="logo-container">${logo2}</div>`;
  

  $('.skills').html(logosfi);
}

function renderProject () {
  const projHtml = STOREHTML.projects.map(key => `
  <div class="project-container box-shadow">
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
            <a href="${key.repo}" style="text-decoration: none;"><p>${key.repo}<p/></a>
            <h2>Live Demo</h2>
            <a href="${key.live}" style="text-decoration: none;"><p>${key.live}</p></a>
      </div>
    </div>
  </div>
  </div>`).join('');

  $('.projects').html(`
  <h1>PORTFOLIO</h1>
  <p>CLICK ON THEM FOR MORE INFORMATION</P>
  <div class="color-line"></div>
   <div class="project-container-flex">${projHtml}</div>`);
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
