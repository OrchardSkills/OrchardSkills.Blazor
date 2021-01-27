// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
const sidenav = document.getElementById('sidenav-1');
const sidenavInstance = new mdb.Sidenav(sidenav);
let innerWidth = null;

const setMode = (e) => {
    // Check necessary for Android devices
    if (window.innerWidth === innerWidth) {
        return;
    }

    innerWidth = window.innerWidth;

    if (window.innerWidth < 660) {
        sidenavInstance.changeMode('over');
        sidenavInstance.hide();
    } else {
        sidenavInstance.changeMode('side');
        sidenavInstance.show();
    }
};

setMode();

// Event listeners

window.addEventListener('resize', setMode);

document.getElementById('slim-toggler').addEventListener('click', () => {
    sidenavInstance.toggleSlim();
})
