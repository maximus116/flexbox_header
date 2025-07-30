function open_btn(el) {
  var k = document.getElementById('menu_ul');
  k.style.display = "block";
  var b = document.getElementsByClassName('burger');
  b.style.display = 'block';

}
function close_btn(el) {
  var k = document.getElementById('menu_ul');
  k.style.display = "none";
}
window.addEventListener('resize', function () {
  let width_local = window.innerWidth;
  if (width_local > 980){
                          let k = document.getElementById('menu_ul');
                          k.style.display = "block";
                         } 
});
