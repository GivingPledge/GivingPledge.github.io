if (document.images) {
img0 = new Image();
img0.src = "images/overlay.png";
img1 = new Image();
img1.src = "images/background.jpg";
img2 = new Image();
img2.src = "images/up-arrow2.gif";
img3 = new Image();
img3.src = "images/send_a.gif";
}

var curwin="";

function showPic(name) {
document.getElementById(name).style.display = "block";
}

function hidePic(name) {
document.getElementById(name).style.display = "none";
}

function showInfo(name) {
curwin=name;
document.getElementById("overlay").style.display = "block";
document.getElementById(name).style.top = "84px";
document.images[(name) + 'letter'].src = "images/pledgers/letters/"+(name)+"-Letter-1.jpg";
}

function hideInfo() {
document.getElementById("overlay").style.display = "none";
document.getElementById(curwin).style.top = "-2000px";
}

