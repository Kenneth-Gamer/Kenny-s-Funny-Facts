let darkModeSetting = false;

function darkMode() {
    if (darkModeSetting == false) {
        darkModeSetting = true;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        /* I do each header number separately because there's no NodeList.append() in JS. */
        let h1List = document.querySelectorAll("h1");
        for (let i = 0; i < h1List.length; i++) {
            h1List[i].style.color = "#5e5eff";
        }
        let h2List = document.querySelectorAll("h2");
        for (let i = 0; i < h2List.length; i++) {
            h2List[i].style.color = "#5e5eff";
        }
        let h3List = document.querySelectorAll("h3");
        for (let i = 0; i < h3List.length; i++) {
            h3List[i].style.color = "#5e5eff";
        }
        let h4List = document.querySelectorAll("h4");
        for (let i = 0; i < h4List.length; i++) {
            h4List[i].style.color = "#5e5eff";
        }
        document.getElementById("newslettersub").style.backgroundColor = "green";
        document.getElementById("dark-mode").innerHTML = "Normal Mode";
    }
    else {
        darkModeSetting = false;
        document.body.style.backgroundColor = "gold";
        document.body.style.color = "black";
        let h1List = document.querySelectorAll("h1");
        for (let i = 0; i < h1List.length; i++) {
            h1List[i].style.color = "blue";
        }
        let h2List = document.querySelectorAll("h2");
        for (let i = 0; i < h2List.length; i++) {
            h2List[i].style.color = "blue";
        }
        let h3List = document.querySelectorAll("h3");
        for (let i = 0; i < h3List.length; i++) {
            h3List[i].style.color = "blue";
        }
        let h4List = document.querySelectorAll("h4");
        for (let i = 0; i < h4List.length; i++) {
            h4List[i].style.color = "blue";
        }
        document.getElementById("newslettersub").style.backgroundColor = "#00da00";
        document.getElementById("dark-mode").innerHTML = "Dark Mode";
    }
}