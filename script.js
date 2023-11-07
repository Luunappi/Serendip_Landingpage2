const icon = document.querySelector(".icons")
const topBar = document.querySelector(".top-bar")
const iconsTopBar = document.querySelector(".icons-top-bar")
const observer = new IntersectionObserver( 
  ([e]) => 
    {
    topBar.classList.toggle("scrolled", e.intersectionRatio < 1)
  
    iconsTopBar.classList.toggle("scrolled", e.intersectionRatio < 1)},
  { 
    rootMargin: '-36px 0px 0px 0px',
    threshold: [1]
   }
);
if (icon != null ) {
  observer.observe(icon);
}