// Получаем ссылку на элемент
let scrollingElement = document.querySelector(".header");

// Функция, которая будет вызываться при прокрутке
function handleScroll() {
  // Проверяем, насколько прокручена страница по вертикали
  var scrollPosition = window.scrollY;

  // Условие, при котором добавляем класс
  if (scrollPosition > 0) {
    scrollingElement.classList.add("scrolled");
  } else {
    scrollingElement.classList.remove("scrolled");
  }
}

// Добавляем прослушиватель события прокрутки
window.addEventListener("scroll", handleScroll);

// Получаем ссылки на элементы
let menuButton = document.querySelector(".header__menu");
let menu = document.querySelector(".pop-up-menu"); //menu pop-up

// Добавляем слушатели событий
menuButton.addEventListener("click", toggleMenu);

// Функция для открытия/закрытия меню
function toggleMenu() {
  menu.classList.toggle("open");
  scrollingElement.classList.toggle("open");
  menuButton.classList.toggle("open");
}

// Функция для закрытия меню
function closeMenu() {
  menu.classList.remove("open");
  scrollingElement.classList.remove("open");
  menuButton.classList.remove("open");
}

// Добавляем слушатель события для каждого пункта меню
var menuItems = document.querySelectorAll(".pop-up-menu__item");
menuItems.forEach(function (item) {
  item.addEventListener("click", closeMenu);
});

var swiper = new Swiper(".testimonials", {
  pagination: {
    el: ".swiper-pagination",
  },
});



