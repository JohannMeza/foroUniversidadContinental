const d = document;
// const $btnMode = d.querySelector(".header__mode")

export function headerScroll (btnMode) {
  const $logo = d.querySelector(".header__logo")
  const $btnMode = d.querySelector(btnMode);

  function btnModeActive () {
    if (localStorage.getItem("ModePage") === "🌙") {
      $btnMode.style.justifyContent = "flex-end";
      $btnMode.dataset.icon = "🌙";
      localStorage.setItem("ModePage", "🌙")
    } else {
      $btnMode.removeAttribute("style")
      $btnMode.dataset.icon = "☀️";
      localStorage.setItem("ModePage", "☀️")
    }
  }

  window.addEventListener("scroll", e => {
    let { scrollTop } = d.documentElement;
    if (scrollTop === 0) {
      $logo.removeAttribute("style")
      $logo.querySelector("img").src = "./assets/logoWhite.png"

      d.querySelector(".btn__log").removeAttribute("style")
      d.querySelector(".btn__subs").removeAttribute("style")
      d.querySelector(".header__icon").removeAttribute("style")
      d.querySelector(".header__btn-menu").removeAttribute("style")

      if (localStorage.getItem("ModePage") !== "☀️") {
        d.querySelector(".header__icon").style.justifyContent = "flex-end"
      }
    } else {
      if (localStorage.getItem("ModePage") !== "🌙") {
        $logo.querySelector("img").src = "./assets/logo.png"
        $logo.style.background = "#fff"
        d.querySelector(".btn__log").style.color = "#161B22"
        d.querySelector(".btn__log").style.border = "1px solid #161B22"
        d.querySelector(".btn__subs").style.background = "#161B22"
        d.querySelector(".btn__subs").style.color = "#fff"
        d.querySelector(".header__icon").style.border = "1px solid #161B22"
        d.querySelector(".header__btn-menu").style.color = "#161B22"
      }
    }
  })

  d.addEventListener("click", e => {
    if (e.target.matches(`${btnMode}`)) {
      if (localStorage.getItem("ModePage") === "☀️") {
        $btnMode.dataset.icon = "🌙";
        localStorage.setItem("ModePage", "🌙")
        $logo.querySelector("img").src = "./assets/logoWhite.png"

        d.querySelector(".btn__log").removeAttribute("style")
        d.querySelector(".btn__subs").removeAttribute("style")
        d.querySelector(".btn__subs").removeAttribute("style")
        d.querySelector(".header__icon").removeAttribute("style")

        $btnMode.style.justifyContent = "flex-end";
      } else {
        $btnMode.removeAttribute("style")
        $btnMode.dataset.icon = "☀️";
        localStorage.setItem("ModePage", "☀️")
        $logo.querySelector("img").src = "./assets/logoWhite.png"
        $logo.style.setProperty("background", "#fff")
      }
    }
  })

  btnModeActive();

}