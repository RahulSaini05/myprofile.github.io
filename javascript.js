window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function myFunction(x) {
    const menu = document.getElementById("menu");
    const btn2 = document.getElementById("btn2");
    x.classList.toggle("change");
    menu.classList.toggle("active");
    btn2.classList.toggle("active");
}