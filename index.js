function loadInfo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", false);
    xhr.send();
    if (xhr.status !== 200) {
        alert("Error " + xhr.status + " " + xhr.statusText);
    }
    else {
        alert(xhr.responseText);
    }
}
function error_func() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data2321.json", false);
    xhr.send();
    if (xhr.status !== 200) {
        alert("Error " + xhr.status + " " + xhr.statusText);
    }
    else {
        alert(xhr.responseText);
    }
}
document.getElementById('loadButton').addEventListener('click', error_func);
document.getElementById('loadButton2').addEventListener('click', loadInfo);