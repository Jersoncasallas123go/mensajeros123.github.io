window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var bodyElement = document.body;

    if (scrollPosition >= 50) {
        bodyElement.classList.add('scroll50');
    } else {
        bodyElement.classList.remove('scroll50');
    }
});