function loadInfo(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", false);
    xhr.send();
    if(xhr.status !== 200) {
        alert("Error " + xhr.status + " " + xhr.statusText);
    }
    else{
        alert(xhr.responseText)
    } 
}

function error_func(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data2321.json", false);
    xhr.send();
    if(xhr.status !== 200) {
        alert("Error " + xhr.status + " " + xhr.statusText);
    }
    else{
        alert(xhr.responseText)
    } 
}