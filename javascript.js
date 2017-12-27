
function larger()  { document.body.style.fontSize = 120 + '%'; }
function middle()  { document.body.style.fontSize = 100 + '%'; }
function smaller() { document.body.style.fontSize = 80 + '%'; }

jQuery(function($) {
    $('#graphic').bgSwitcher({
        images: ['images/new1.jpg','images/new2.jpg','images/new3.jpg'], // 切替背景画像を指定
	      interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});

$(function(){
 $('#tab1').on('click', function(){
   var src = $("#tab1 img").attr('src');
   if(src == "images/tab01_off.png"){
     $('#tab1 img').attr('src','images/tab01_on.png');
     $('#tab2 img').attr('src','images/tab02_off.png');
     $('#tab3 img').attr('src','images/tab03_off.png');
     $('#tab4 img').attr('src','images/tab04_off.png');
   }
 });
 $('#tab2').on('click', function(){
   var src = $("#tab2 img").attr('src');
   if(src == "images/tab02_off.png"){
     $('#tab1 img').attr('src','images/tab01_off.png');
     $('#tab2 img').attr('src','images/tab02_on.png');
     $('#tab3 img').attr('src','images/tab03_off.png');
     $('#tab4 img').attr('src','images/tab04_off.png');
   }
 });
 $('#tab3').on('click', function(){
   var src = $("#tab3 img").attr('src');
   if(src == "images/tab03_off.png"){
     $('#tab1 img').attr('src','images/tab01_off.png');
     $('#tab2 img').attr('src','images/tab02_off.png');
     $('#tab3 img').attr('src','images/tab03_on.png');
     $('#tab4 img').attr('src','images/tab04_off.png');
   }
 });
 $('#tab4').on('click', function(){
   var src = $("#tab4 img").attr('src');
   if(src == "images/tab04_off.png"){
     $('#tab1 img').attr('src','images/tab01_off.png');
     $('#tab2 img').attr('src','images/tab02_off.png');
     $('#tab3 img').attr('src','images/tab03_off.png');
     $('#tab4 img').attr('src','images/tab04_on.png');
   }
 });
})

$(function () {
/*初期表示*/
$('.ChangeElem_Panel').hide();
$('.ChangeElem_Panel').eq(0).show();
$('.ChangeElem_Btn').eq(0).addClass('is-active');
/*クリックイベント*/
$('.ChangeElem_Btn').each(function () {
  $(this).on('click', function () {
    var index = $('.ChangeElem_Btn').index(this);
    $('.ChangeElem_Btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.ChangeElem_Panel').hide();
    $('.ChangeElem_Panel').eq(index).show();
  });
});
});

function photoChange(img){
  document.getElementById("changeGraphic").src=img;
}
