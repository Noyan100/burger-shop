//window.scrollTo({ top: 0,
//    behavior: «smooth»
//});

let goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > (coords/5)) {
        goTopBtn.classList.add('back_to_top-active');
    }
    if (scrolled < (coords/5)) {
        goTopBtn.classList.remove('back_to_top-active');
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}