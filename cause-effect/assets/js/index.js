function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
    document.getElementById("main").style.marginLeft = "0"
}
