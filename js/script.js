let darkModeSetting = false;

function darkMode() {
    if (darkModeSetting == false) {
        darkModeSetting = true;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("dark-mode").innerHTML = "Normal Mode";
    }
    else {
        darkModeSetting = false;
        document.body.style.backgroundColor = "gold";
        document.body.style.color = "black";
        document.getElementById("dark-mode").innerHTML = "Dark Mode";
    }
}