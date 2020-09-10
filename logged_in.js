setTimeout(skipPopup, 1000);
setTimeout(skipPopup, 2000);
setTimeout(skipPopup, 3000);
setTimeout(skipPopup, 4000);

sessionStorage.clear();

function skipPopup() {
    console.log("Trying to skip popup");
    document.getElementById("skiplink").click();
}
