const $burger = document.getElementById("burger"),
  $burgerMenu = document.querySelector(".header"),
  $nav = document.querySelector(".header__nav"),
  $search = document.getElementById("header-open-search"),
  $input = document.querySelector(".header__search-form"),
  $searchClose = document.getElementById("search-form-close"),
  $menuItem = document.querySelectorAll(".menu__item"),
  $menuBtn = document.querySelectorAll(".menu__btn"),
  $dropDownMenu = document.querySelectorAll(".dropdown-menu")

// swiper hero

const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,
  // Пагинация
  pagination: {
    el: '.swiper-pagination-hero',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

// swiper events

const swiperEvent = new Swiper('.swiper-event', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination-event',
      clickable: true,
  },
  preventInteractionOnTransition: false,
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    590: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    890: {
      slidesPerView: 3,
      spaceBetween: 25
    },
  }
});

// swiper projects

const swiperProject = new Swiper('.swiper-project', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination-project',
      clickable: true,
  },
  preventInteractionOnTransition: false,
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    590: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    890: {
      slidesPerView: 3,
      spaceBetween: 25
    },
  }
});

// burger

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

// search

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

//dropdown menu

$menuBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.parentElement.classList.toggle('menu-open')
    if (!btn.parentElement.classList.contains('menu-open')) {
      $menuItem.forEach(item => {
        item.classList.remove('menu-open');
      });
    } else {
      $menuItem.forEach(item => {
        item.classList.remove('menu-open');
      });
      e.target.parentElement.classList.add('menu-open')
    }
  })
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

// /scroll

Array.prototype.forEach.call(
  document.querySelectorAll('.scroll'),
  el => new SimpleBar(el)
);
