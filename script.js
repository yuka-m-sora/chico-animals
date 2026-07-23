'use strict';
$(function(){
  function animation(){
    $('.fadeInUp').each(function(){
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });
});

var position = $('topic').offset( ).top;

$('page').on('click',function(){
  $('html,body').animata({
    scrollTop: position
  },{
    queue:false
  });
});
