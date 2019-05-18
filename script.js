const STORE = {
  typeFunction: {
    typedWords: [`Front-End Developer`],
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
  setTimeout(type, 250);
})();

(function clickProject () {
  $('.container').on('click', '.overlay', function () {
    $(this).closest('.projects').find('.modal').css('display', 'flex');
  })
});

(function clickClose () {
  $('.container').on('click', '.close', function () {
    $(this).closest('.projects').find('.modal').css('display', 'none');
  })
});
