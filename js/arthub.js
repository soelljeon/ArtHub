// index_BG slide
// const container = document.querySelector(".img-box"),
//   slides = document.querySelectorAll("img"),
//   slidecounter = slides.length;
// let currentIndex = 0;

// var lele = 0;
// var i = 0;
// function moveleft() {
//   if (i < slidecounter - 1) {
//     lele += 100;
//     i++;
//     container.style.transition = ".3s";
//     setTimeout("moveleft()", 3000);
//   } else {
//     container.style.transition = "0s";
//     lele = 0;
//     i = 0;
//     setTimeout("moveleft()", 0);
//   }

//   container.style.left = "-" + lele + "%";
// }

// moveleft();

//  swiper
var swiper = new Swiper(".list_sub", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".list_con", {
  loop: true,
  spaceBetween: 0,
  // slidesPerView: 3,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  thumbs: {
    swiper: swiper,
  },
});

// lang
$(function () {
  $(".dropdown_icons .fa-sort-up").click(function () {
    $(".lang .dropdown").toggle();
  });

  // tab menu
  //.btn_tab 클릭하면 .btn_tab 에는  .on를 제거되고
  // 클릭한 대상에만 .on를 붙여줍니다
  // const btn1 = document.getElementByIdClassName ('btn_tab')
  // $(".btn_tab")
  $(".tab_con > button").click(function () {
    $(".tab_con > button").removeClass("on");
    $(this).addClass("on");
  });
});

// const tabList = document.querySelectorAll(".tab_con .btn_con1");

// for (var i = 0; i < tabList.length; i++) {
//   tabList[i].querySelector("#btn").addEventListener("click", function (e) {
//     e.preventDefault();
//     for (var j = 0; j < tabList.length; j++) {
//       tabList[j].classList.remove("btn1 on");
//     }
//     this.parentNode.classList.add("btn1 on");
//   });
// }

// $(".lang button").on("click", function () {
//   alert("dropdown");
//   return;
// });
