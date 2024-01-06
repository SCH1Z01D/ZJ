/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.sticky-navbar').classList.remove('scrolling');
  } else {
    // user has scrolled down
    document.querySelector('.sticky-navbar').classList.add('scrolling');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});