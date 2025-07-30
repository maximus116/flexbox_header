function open_btn(el) {
  /*  var k = document.getElementById('menu_ul');
    k.style.display = "block";*/
  /*var b = document.getElementsByClassName('burger');
  b.style.display = 'block';*/
  var k = document.getElementById("menu_ul");
  k.classList.remove("mystyle");
}
function close_btn(el) {
  var k = document.getElementById("menu_ul");
  k.classList.add("mystyle");
  /*var k = document.getElementById('menu_ul');
  k.style.display = "none";*/
}
