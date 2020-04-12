function createNewPerson(name, address, phone, bday) {
    return {
        name: name,
        address: address,
        phone: phone,
        bday: bday
    };
}

function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "200px";
    document.getElementsByClassName("fichas")[0].style.marginLeft = "200px";
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
    document.getElementsByClassName("fichas")[0].style.marginLeft = "0";
}

function showProfile(name) {
    refreshPane();
    const profile = document.getElementsByClassName(name)[0];
    document.querySelector(`#${profile.className}`).classList.add("btn-selected");
    profile.style.display = "block";
}

function refreshPane() {
    for (let profile of document.querySelectorAll('fieldset')) {
        profile.style.display = "none";
        document.querySelector(`#${profile.className}`).classList.remove("btn-selected");
    }
}


const people = [];
