function showMenu(el) {
  var k = document.getElementById("menu_ul");
  k.classList.add("mystyle");
}
function CloseMenu(el) {
  var l = document.getElementById("menu_ul");
  l.classList.remove("mystyle");

}
window.addEventListener('scroll', function (event) {
  // Изменяем стили элемента при прокрутке страницы
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 60) {
    var l = document.getElementById('navbar_bottom');
    l.classList.add("navbar_bottom_scrol");
    l.classList.add("wrap_navbar_bottom");
  }
    else {
    var l = document.getElementById('navbar_bottom');
    l.classList.remove("navbar_bottom_scrol");
    l.classList.remove("navbar_bottom_scrol1");
  }
  if (scrollTop > 100) {
    var l = document.getElementById('navbar_bottom');
    l.classList.add("navbar_bottom_scrol1");
    l.classList.add("wrap_navbar_bottom_scrol");
  }
  else {
    var l = document.getElementById('navbar_bottom');
     l.classList.remove("navbar_bottom_scrol1");
     l.classList.remove("wrap_navbar_bottom_scrol");
  }
});

 function updateContentWidths() {
    const wraps = document.getElementsByClassName('content');
    const windowWidth = window.innerWidth;
    const newWidth = Math.min(Math.max(windowWidth * 0.8, 320), 1800);
    for (let i = 0; i < wraps.length; i++) {
      wraps[i].style.width = `${newWidth}px`;
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
    updateContentWidths();
    window.addEventListener('resize', updateContentWidths);
  });