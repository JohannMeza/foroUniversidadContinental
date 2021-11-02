const d = document;

export function navObserver () {
  const $linkObserver = d.querySelectorAll("article[data-scroll-spy]")
  const callback = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      
      d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("aside__link--active")  
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("aside__link--active")  
      }
    })
  }
  
  const observer = new IntersectionObserver (callback, {
    rootMargin: "-310px",
    threshold: 0
  }) 

  $linkObserver.forEach(el => observer.observe(el))
}