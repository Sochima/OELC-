// const preloader = document.querySelector('.loader');
// const fadeEffect = setInterval(() => {
//   // if we don't set opacity 1 in CSS, then
//   // it will be equaled to "" -- that's why
//   // we check it, and if so, set opacity to 1
//   if (!preloader.style.opacity) {
//     preloader.style.opacity = 1;
//   }
//   if (preloader.style.opacity > 0) {
//     preloader.style.opacity -= 0.1;
//   } else {
//     clearInterval(fadeEffect);
//   }
// }, 100);
//
// window.addEventListener('load', fadeEffect);


var myVar;
function loadFunction()
{
  myVar = setTimeout(showPage, 1000);

}

function showPage()
{
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-page").style.display = "block";
}
