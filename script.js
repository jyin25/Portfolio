const STORE = {
  typeFunction: {
    typedWords: [`FULL-STACK DEVELOPER`, 'E-SPORTS ENTHUSIAST', 'PET LOVER', 'FOODIE'],
    countIndex: 0,
    countChara: 0,
    word: '',
    iternateword: ''
  }
};

(function type() {
  const selectTypeFunc = STORE.typeFunction;

  if (selectTypeFunc.countIndex === selectTypeFunc.typedWords.length) {
    selectTypeFunc.countIndex = 0;
  }
    
  selectTypeFunc.word = selectTypeFunc.typedWords[selectTypeFunc.countIndex];
  selectTypeFunc.iternateword = selectTypeFunc.word.slice(0, ++selectTypeFunc.countChara);

  document.querySelector('.text').textContent = selectTypeFunc.iternateword;
  if (selectTypeFunc.countChara === selectTypeFunc.word.length) {
    selectTypeFunc.countIndex++;
    selectTypeFunc.countChara = 0;
  }
  setTimeout(type, 200);
})();

function clickProject () {
  $('.container').on('click', '.overlay', function () {
    $(this).closest('.project-container').find('.modal').css('display', 'block');
    $(this).closest('.container').css('position', '');
  })
};

function clickClose () {
  $('.container').on('click', '.close', function () {
    $(this).closest('.project-container').find('.modal').css('display', 'none');
    $(this).closest('.container').css('position', '');
  })
};


function renderPage () {
  clickProject();
  clickClose();
}

$(renderPage);
