// Tämä koodi käyttää scrollY-ominaisuutta määrittääkseen, kuinka paljon sivua on scrollattu. 
// Käytä scrollY-ominaisuutta määrittääksesi, kuinka paljon sivua on scrollattu.
// Aseta z-index-arvo yläkuvalle suuremmaksi kuin muiden elementtien z-index-arvot. Tämä varmistaa, että yläkuva näkyy aina muiden elementtien yläpuolella.
// Käytä transition-ominaisuutta luodaksesi sileän liukumisen.

function scrollToImage() {
    var main = document.querySelector(".main");
    var image = document.querySelector(".image");
  
    var scrollY = main.scrollTop;
    var imageHeight = image.clientHeight;
  
    if (scrollY > imageHeight) {
      main.scrollTop = imageHeight;
    }
  }
  
  window.addEventListener("scroll", scrollToImage);
  