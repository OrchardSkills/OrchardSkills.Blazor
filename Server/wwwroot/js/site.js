// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
setTimeout(() => {
    function a() {
        window.innerWidth === d || (d = window.innerWidth, 1400 > window.innerWidth ? (c.changeMode("over"), c.hide()) : (c.changeMode("side"), c.show()))
    }
    const b = document.getElementById("sidenav-1"),
        c = new mdb.Sidenav(b);
    let d = null;
    a(), window.addEventListener("resize", a), document.getElementById("slim-toggler").addEventListener("click", () => {
        c.toggleSlim()
    })
}, 1000);


