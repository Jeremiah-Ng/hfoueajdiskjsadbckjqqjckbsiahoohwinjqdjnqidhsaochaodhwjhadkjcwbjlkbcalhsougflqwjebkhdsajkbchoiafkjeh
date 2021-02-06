canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var background = "epic.jpg";
var roverio = "car1.png";
var car2 = "yeet.png"
var car3 = "lol.png";
var x = 50;
var y = 200;
var rover_width = 100;
var rover_height = 50;
var car2h = 100;
var car2w = 50;
var x1 = 50;
var y1 = 275;
var car3h = 100;
var car3w = 50;
var x2 = 50;
var y2 = 350;

function add() {
    console.log("aedgs")
    bkobject = new Image();
    bkobject.onload = uploadBackground;
    bkobject.src = background;
    roverobject = new Image();
    roverobject.onload = uploadrover;
    roverobject.src = roverio;
    car2ob = new Image();
    car2ob.onload = carupload;
    car2ob.src = car2;
    car3ob = new Image();
    car3ob.onload = car2upload;
    car3ob.src = car3;
}

function uploadBackground() {
    ctx.drawImage(bkobject, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverobject, x, y, rover_width, rover_height);
}

function carupload() {
    ctx.drawImage(car2ob, x1, y1, car2h, car2w)
}
function car2upload() {
    ctx.drawImage(car3ob, x2, y2, car3h, car3w)
}
window.addEventListener('keydown', keyd);

function keyd(e) {
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == 37) {
        left();
    }
    if (keypressed == 38) {
        up();
    }
    if (keypressed == 39) {
        right();
    }
    if (keypressed == 40) {
        down();
    }
}

function left() {
    if (x >= 0) {
        x = x - Math.round(document.getElementById("lol").value / 4)
        uploadBackground();
        uploadrover();
        carupload();
         car2upload();
    }
}

function right() {
    if (x <= 700) {
        x = x + Math.round(document.getElementById("lol").value / 4)
        uploadBackground();
        uploadrover();
        carupload();
         car2upload();
    }
}

function up() {
    if (y >= 0) {
        y = y - Math.round(document.getElementById("lol").value / 4)
        uploadBackground();
        uploadrover();
        carupload();
         car2upload();
    }
}

function down() {
    if (y <= 490) {
        y = y + Math.round(document.getElementById("lol").value / 4)
        uploadBackground();
        uploadrover();
        carupload();
         car2upload();
    }
}
window.addEventListener('keydown', keyd1);

function keyd1(e) {
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == 65) {
        left1();
    }
    if (keypressed == 87) {
        up1();
    }
    if (keypressed == 68) {
        right1();
    }
    if (keypressed == 83) {
        down1();
    }
}

function left1() {
    if (x1 >= 0) {
        x1 = x1 - Math.round(document.getElementById("epic").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function right1() {
    if (x1 <= 700) {
        x1 = x1 + Math.round(document.getElementById("epic").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function up1() {
    if (y1 >= 0) {
        y1 = y1 - Math.round(document.getElementById("epic").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function down1() {
    if (y1 <= 490) {
        y1 = y1 + Math.round(document.getElementById("epic").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}
window.addEventListener('keydown', keyd2);

function keyd2(e) {
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == 74) {
        left2();
    }
    if (keypressed == 73) {
        up2();
    }
    if (keypressed == 76) {
        right2();
    }
    if (keypressed == 75) {
        down2();
    }
}

function left2() {
    if (x2 >= 0) {
        x2 = x2 - Math.round(document.getElementById("e").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function right2() {
    if (x2 <= 700) {
        x2 = x2 + Math.round(document.getElementById("e").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function up2() {
    if (y2 >= 0) {
        y2 = y2 - Math.round(document.getElementById("e").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}

function down2() {
    if (y2 <= 490) {
        y2 = y2 + Math.round(document.getElementById("e").value / 4)
        uploadBackground();
        carupload();
         car2upload();
        uploadrover();
    }
}
