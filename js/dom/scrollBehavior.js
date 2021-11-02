const d = document;

export function behavior () {
  d.addEventListener("click", e => {
    if (e.target.matches(".aside__link")) {
      // console.log(e.target)
    }
  })
}