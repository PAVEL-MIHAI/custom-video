
console.log("пока только сверстал 5 баллов ");
console.log("-");

// -------смена языка---------------------------
// const portfolioBtn = document.querySelector('.play-btn');

var videoEl = document.getElementsByTagName('.video')[0],
    playBtn = document.getElementById('.play-btn');


playBtn.addEventListener('click', function () {
  if (videoEl.paused) {
      videoEl.play();
  } else {
      videoEl.pause();
  }

document.getElementById(".video").style.zIndex = "1";
  
}, false);



portfolioBtn.addEventListener('click', () => {
  
  
  // ------ цвет др кнопок---------
  portfolioBtnRus.style.color = '#bdae82';
  // ----цвет кнопки-------
  portfolioBtnEn.style.color = '#fff';
});

