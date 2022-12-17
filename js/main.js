const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');

// 스크롤하면 과부하가 생기기에 lodash 라이브러리를 이용해
// 0.3 초마다 실행할수 있도록 throttle이라는 메소드를 이용해 제한하기
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'   
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl,0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl,0.6, {
      opacity: 1,
      display: 'block'
    });    
  }
},300)); 