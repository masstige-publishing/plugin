var swiper = new Swiper('.main_slider .swiper-container', {
  effect: 'fade',
  loop: true,
  speed: 600,
  autoplay: {
    delay: 14500, // 첫번째 슬라이드가 영상인 경우 영상의 길이 만큼, 아닌 경우 이미지일 때의 delay 값을 저장.
    disableOnInteraction: false
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'false',
  },
  on: {
    slideChange: function(swiper){
      // swiper 내장 변수인 activeIndex 값을 활용함.
      // swiper 내장 배열인 slides 변수에 activeIndex 에 해당하는 값을 불러온 후 jquery 객체로 select함.
      // select된 jquery 객체 내부에 video 태그가 있는지 확인 후 있는 경우 아래 if 문 실행.
      if( $(this.slides[this.activeIndex]).find('video').length ) {
        console.log('hasVideo');
        // 해당 슬라이드 내 video의 영상 길이값 저장.
        var videoDuration = $(this.slides[this.activeIndex]).find('video').get(0).duration;
        // 저장된 길이만큼 autoplay의 delay 값을 변경해줌.
        // 반환값이 seconds 단위 이기 때문에 milliseconds 단위로 변경.
        this.params.autoplay['delay'] = (videoDuration * 1000) - 500;

        // video 실행.
        $(this.slides[this.activeIndex]).find('video').get(0).play();
      } else {
        // swiper 내장 변수인 previousIndex 값 활용함.
        // 이전 슬라이드(previousIndex)에 video 태그가 있었는지 확인 후 있는 경우 아래 if 문 실행.
        if ( $(this.slides[this.previousIndex]).find('video').length ) {
          $(this.el).find('video').each(function(){
            // video 일시정지, video 태그에는 stop() 함수가 없음.
            $(this).get(0).pause();
            // pause() 실행 후 재생된 시간 초기화.
            $(this).get(0).currentTime = 0;
          });
        }

        // video 가 없는 경우 autoplay의 delay값 변경.
        this.params.autoplay['delay'] = 3000;
      }
    }
  }
});