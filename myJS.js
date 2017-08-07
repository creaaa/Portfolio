
$(function(){

  // 	// ★　任意のズレ高さピクセル数を入力　↓
  // if(true) {
  //  	var headerHight = 70;
  // }

  var headerHight = 0;

   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {

      // スクロールの移動速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");

      // console.log(href);

      var width = $(window).width();

      console.log(width);

      // PC環境ならば
      if(width > 980) {


        if(href === "#"){
          headerHight = 999;
        } else if(href === "#aboutme") {
          headerHight = -160;
        } else if(href === "#skills") {
            headerHight = -100;
        } else if(href === "#works") {
            headerHight = 92;
        } else if(href === "#contact") {
          headerHight = -100;
        }

      // width < 980(スマホ環境)ならば
      } else {

        console.log('こっちが　きてますね');

        if(href === "#"){
          headerHight = 999;
        } else if(href === "#aboutme") {
          headerHight = -10;
        } else if(href === "#skills") {
            headerHight = -10;
        } else if(href === "#works") {
            headerHight = 100;
        } else if(href === "#contact") {
           headerHight = -100;
        }
      }

      // console.log(headerHight);

      // 移動先を取得
      var target = $(href === "#" || href === "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - headerHight;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
        //  alert("tasukete");
      return false;
   });


   $(document).ready(function() {
     $(".animsition").animsition({
      //  inClass: 'fade-out-right',
      //  outClass: 'fade-out-right',
       inDuration: 1500,
       outDuration: 800,
       linkElement: '.animsition-link',
       // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
       loading: true,
       loadingParentElement: 'body', //animsition wrapper element
       loadingClass: 'animsition-loading',
       loadingInner: '', // e.g '<img src="loading.svg" />'
       timeout: false,
       timeoutCountdown: 5000,
       onLoadEvent: true,
       browser: [ 'animation-duration', '-webkit-animation-duration'],
       // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
       // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
       overlay : false,
       overlayClass : 'animsition-overlay-slide',
       overlayParentElement : 'body',
       transition: function(url){ window.location.href = url; }
     });
   });
});
