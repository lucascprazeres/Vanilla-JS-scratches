function createNewPerson(name, address, phone, bday) {
    return {
        name: name,
        address: address,
        phone: phone,
        bday: bday
    };
}

function registrateProfile(personObj) {
    const navItem = createSidenavItem(personObj);
    setSidenavItemToHTML(navItem);
    const panel = createProfilePane(personObj);
    setProfilePaneToHTML(panel);
}

function createSidenavItem(personObj) {
    const a = document.createElement('a');
    const name = personObj.name.split(' ')[0].toLowerCase();

    a.setAttribute('id', name);
    a.setAttribute('onclick', `showProfile('${name}')`);
    a.innerText = personObj.name;
    return a;

}

function createProfilePane(personObj) {
    const keys = Object.keys(personObj);
    const values = Object.values(personObj);
    const name = personObj.name.split(' ')[0].toLowerCase();

    const newProfilePane = document.createElement('fieldset');
    const title = document.createElement('legend');
    const img = document.createElement('img');
    const dataTable = createDataTable(keys, values);
    const paneStructure = [title, img, dataTable];

    title.innerText = "Personal File";
    img.src = "./assets/img/placeholder.jpg";
    img.classList.add('img-placeholder');

    for (let element of paneStructure)
        newProfilePane.appendChild(element);

    newProfilePane.classList.add(name);
    return newProfilePane;
}

function createDataTable (keys, values) {
    const newTable = document.createElement('table');
    
    for (let index in keys) {
        const row = document.createElement('row');
        let header = document.createElement('th');
        let dataCell = document.createElement('td');

        header.innerText = keys[index];
        dataCell.innerText = values[index];
        row.appendChild(header);
        row.appendChild(dataCell);
        newTable.appendChild(row);
    }

    return newTable;
}

function setSidenavItemToHTML(sidenavItem){
    const sidenav = document.getElementsByClassName('sidenav')[0];

    sidenav.appendChild(sidenavItem);
}

function setProfilePaneToHTML(profilePane) {
    const profilesSection = document.getElementsByClassName('files')[0];
    profilesSection.appendChild(profilePane);
}

function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "200px";
    document.getElementsByClassName("files")[0].style.marginLeft = "200px";
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
    document.getElementsByClassName("files")[0].style.marginLeft = "0";
}

function showProfile(name) {
    refreshPane();
    const profile = document.querySelector(`.${name}`);
    document.getElementById(name).classList.add('btn-selected');
    console.log(profile);
    console.log(name);
    profile.style.display = "block";
}

function refreshPane() {
    for (let profile of document.querySelectorAll('fieldset')) {
        profile.style.display = "none";
        document.querySelector(`#${profile.className}`).classList.remove("btn-selected");
    }
}


const people = [
    createNewPerson('Lucas Prazeres', 'Rua a nº 1', '0000-0000', '06/06/2001'),
    createNewPerson('Bruno Lira', 'Rua b nº 2', '1111-1111', '16/09/1990'),
    createNewPerson('Rafaela Almeida', 'Rua c nº 3', '2222-2222', '01/01/2005')
]

for (let person of people) {
    registrateProfile(person);
}
