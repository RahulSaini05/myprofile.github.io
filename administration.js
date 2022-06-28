function myloader1() {
    const loader1 = document.getElementById("preloader");
    loader1.style.display = "none";
}


function on_off() {
    let on = document.getElementById("on");
    let off = document.getElementById("off");
    let checked = document.getElementById("switch");
    if (checked.checked) {
        on.style.display = "inline-block";
        off.style.display = "none";
        login = 1;
        localStorage.setItem('switch','1');
    }
    else{
        off.style.display = "inline-block";
        on.style.display = "none";
        login = 0;
        localStorage.setItem('switch', '0');
    }
}

window.addEventListener('load', function defulat() {
    let button = localStorage.getItem('switch');
    if (button == 1) {
        document.getElementById("switch").setAttribute("checked", check)
    }
    else{
        document.getElementById("switch").removeAttribute("checked", check)
    }
})

function check() {
    document.getElementById("p1").innerHTML = login
}