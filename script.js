const typedWords = ['Full Stack Developer'];
countIndex = 0;
countChara = 0;
word = '';
iternateword = '';

(function type() {
    if (countIndex === typedWords.length) {
        countIndex = 0;
    }
    
    word = typedWords[countIndex];
    iternateword = word.slice(0, ++countChara);

    document.querySelector('.text').textContent = iternateword;
    if (countChara === word.length) {
        countIndex++;
        countChara = 0;
    }
    setTimeout(type, 400);
})();

function fadeInBox() {
    $('.about-me').hover(function() {
        $(this).find('div').addClass('interest');
        

    })
}

$(fadeInBox);