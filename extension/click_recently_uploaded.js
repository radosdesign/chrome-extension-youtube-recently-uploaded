let elements = document.querySelectorAll("yt-formatted-string[title='Recently uploaded']");
if (typeof elements !== 'undefined' && elements.length > 0) {
    elements[0].click();
    showRecentVideosNotification();
}

function showRecentVideosNotification() {
    var node = document.createElement("div");
    node.style.minWidth = "250px";
    node.style.marginLeft = "-125px";
    node.style.backgroundColor = "#BA87ED";
    node.style.color = "#fff";
    node.style.textAlign = "center";
    node.style.borderRadius = "2px";
    node.style.padding = "16px";
    node.style.position = "fixed";
    node.style.zIndex = 1;
    node.style.left = "50%";
    node.style.bottom = "55%";
    node.style.fontSize = "17px";
    var textnode = document.createTextNode("Showing recently uploaded videos");
    node.appendChild(textnode);
    document.body.appendChild(node);
    node.className = "show";
    setTimeout(function(){ node.remove(); }, 3000);
}