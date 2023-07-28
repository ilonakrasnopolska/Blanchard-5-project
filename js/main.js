new Accordion('.accordion-container');
const $burger = document.getElementById("burger"),
  $burgerMenu = document.querySelector(".header"),
  $nav = document.querySelector(".header__nav"),
  $search = document.getElementById("header-open-search"),
  $input = document.querySelector(".header__search-form"),
  $searchClose = document.getElementById("search-form-close"),
  $menuItem = document.querySelectorAll(".menu__item"),
  $menuBtn = document.querySelectorAll(".menu__btn"),
  $dropDownMenu = document.querySelectorAll(".dropdown-menu"),
  $acTab = document.querySelectorAll(".catalogue__ac-item-link"),
  $tabContent =document.querySelectorAll(".catalogue__list-item")

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
      nextEl: '.event-swiper-btn'
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
  preventInteractionOnTransition: false,
  // Navigation arrows
  navigation: {
      nextEl: '.project-swiper-btn-next',
      prevEl: '.project-swiper-btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    690: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 3,
      spaceBetween: 30
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

// accordeon 

$acTab.forEach(function (acTabs) {
  acTabs.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    $acTab.forEach(function (link) {
      link.classList.remove('accordeon-tab--active')
    });
    e.currentTarget.classList.add('accordeon-tab--active');

    $tabContent.forEach(function (tab) {
      tab.classList.remove('tab-content--active')
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
      tab.classList.add('tab-content--active');
    });
  });
});