const STOREHTML = {
    navigation: ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'],
    aboutMe: [
        {
            title: 'Education:',
            paragraphs: [`Thinkful '19`, `University of California, Santa Cruz '10 <p>Majored in Psychology</p>`]
        },
        {
            title: 'Hobbies:',
            paragraphs: ['Programing: I am result-driven and love problem loving', `Weighting: Body and mind works as one, as physical strength builds mental strength`]
        },
        {
            title: 'Goals:',
            paragraphs: [`With my font end skillset, as well as my absorption of new technologies, I strive to enhance the world as a software engineer.`,
                          `I love learning, so I am always finding ways to improve myself and many facets of my life.`,
                         `Above all, I would love to be a part of something that transcend personal growth.`]
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
            title: 'Overview',
            titleParag: `Simpson Quiz app is created to test your knowledge on the characters from the cartoon The Simpsons.`,
            title2: 'Technologies Used',
            title2Parag: 'HTML, CSS, jQuery'
        }
    ] 
};


function renderNavList() {
    const renderNav = STOREHTML.navigation.map(nav => `<li><a href="">${nav}</a></li>`).join('');

    $('.nav-bar').html(`<ul> ${renderNav} <ul>`);
  }

function renderAboutMe() {
    const aboutTitle = STOREHTML.aboutMe.map(key => `<h1>${key.title}</h1>`).join('');
    const aboutParagraphs = STOREHTML.aboutMe.map(x => x.paragraphs).flat().map(y => `<li>${y}</li>`).join('');
    const aboutMeFull = aboutTitle + `<ul>${aboutParagraphs}</ul>`;

    $('.about-me-container').html(aboutMeFull);
}

function renderLogo() {
    const logo = STOREHTML.logos.map(x => 
        `<div class="logo">
        <img src="${x}" alt="">
            </div>`).join('');
    const logosfi = `<h1>Skills</h1> <div class="logo-container">${logo}</div>`;
    $('.skills').html(logosfi);
}


function renderHTML() {
    renderNavList();
    renderLogo();
  
}




$(renderHTML);