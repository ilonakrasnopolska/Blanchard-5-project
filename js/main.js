const $burger = document.getElementById("burger"),
  $burgerMenu = document.querySelector(".header"),
  $nav = document.querySelector(".header__nav"),
  $search = document.getElementById("header-open-search"),
  $input = document.querySelector(".header__search-form"),
  $searchClose = document.getElementById("search-form-close"),
  $menuItem = document.querySelectorAll(".menu__item"),
  $menuBtn = document.querySelectorAll(".menu__btn"),
  $dropDownMenu = document.querySelectorAll(".dropdown-menu")

document.addEventListener("DOMContentLoaded", function () {
  $burger.addEventListener("click", function () {
    $burgerMenu.classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $burger.addEventListener("click", function () {
    $nav.classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $search.addEventListener("click", function () {
    $input.classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $searchClose.addEventListener("click", function () {
    $input.classList.remove("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $input.addEventListener("submit", function () {
    e.preventDefault()
  })
})


$menuBtn.forEach(button => {
  button.addEventListener('click', function(event) {
    $menuItem.forEach(item => {
        item.classList.remove('menu-open');
        console.log(item.classList)
    });
    event.isClick = true

    button.parentElement.classList.toggle('menu-open')
  });
})


document.body.addEventListener('click', function (event) {

  if (
    event.isClick == true ||
    event.target.classList.contains('menu__btn') == true ||
    event.target.classList.contains('dropdowm-menu') == true
  ) return;

  $menuItem.forEach(item => {
    item.classList.remove('menu-open')
  })
})
