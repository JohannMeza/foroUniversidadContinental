const d = document

export function btnMenu () {
  const $menu = d.querySelector(".header__nav")

  d.addEventListener("click", e => {
    if (e.target.matches(".header__btn-menu, .header__btn-menu *")) {
      $menu.classList.toggle("header__nav-active")
    }
  })
}