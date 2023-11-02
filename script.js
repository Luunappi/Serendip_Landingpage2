window.addEventListener('scroll', function() {
  var topBar = document.querySelector('.top-bar');
  var pageYOffsetValue = window.innerWidth < 768 ? 150 : 680; // Change the value here for mobile devices
  if (window.scrollY > pageYOffsetValue) { 
    topBar.classList.add('scrolled');
  } else {
    topBar.classList.remove('scrolled');
  }
});