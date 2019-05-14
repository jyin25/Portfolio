
const STORE = {
  typeFunction: {
    typedWords: ['Full Stack Developer'],
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
  setTimeout(type, 400);
})();

function fadeInBox() {
  $('.about-me').hover(function() {
    $(this).find('div').addClass('');
        

  })
}

$(fadeInBox);

(function hoverProject(){
  $('.projects').find('img').hover(function(event) {
    $(this).addClass('overlay');
  })
})();