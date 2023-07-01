const $burger = document.getElementById("burger"),
$burgerMenu = document.querySelector(".header"),
$nav = document.querySelector(".header__nav"),
$search = document.querySelector(".header__top-search"),
$input = document.querySelector(".header__input-wrapper")

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