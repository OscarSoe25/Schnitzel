var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var walls = [];
var bulletArray = [];
var enemies = [];


function Enemy(xPos, yPos, width, height, type) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = 20;
    this.height = 20;
    this.type = type;
    this.move = function() {
        if (box.xPos < this.xPos) {
            this.xPos -= 5;
        }
        if (box.xPos > this.xPos) {
            this.xPos += 5;
        }
        if (box.yPos < this.yPos) {
            this.yPos -= 5;
        }
        if (box.yPos > this.yPos) {
            this.yPos += 5;
        }
    };
    this.draw = function() {
        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, 20, 20);
        ctx.fillRect(this.xPos, this.yPos, 20, 20);
        ctx.stroke();

    }
};


var spawn = setInterval(function() {
    var yspawn = Math.random() * (mycanvas.height);
    var xspawn = Math.random() * (mycanvas.width);
    enemies.push(new Enemy(xspawn, yspawn));
}, 1000);



function Wall(xPos, yPos, width, height) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    }
}

walls.push(new Wall(364, 175, 134, 13));
walls.push(new Wall(200, 50, 13, 150));
walls.push(new Wall(201, 45, 13, 201));
walls.push(new Wall(100, 54, 13, 111));
walls.push(new Wall(99, 200, 13, 55));
walls.push(new Wall(500, 40, 13, 250));
walls.push(new Wall(250, 550, 13, 110));
walls.push(new Wall(1000, 101, 13, 202));
walls.push(new Wall(1250, 13, 13, 211));
walls.push(new Wall(750, 500, 13, 170));
walls.push(new Wall(750, 150, 250, 13));
walls.push(new Wall(1013, 235, 100, 13));
walls.push(new Wall(100, 550, 150, 13));
walls.push(new Wall(600, 300, 200, 13));
walls.push(new Wall(600, 550, 300, 13));
walls.push(new Wall(999, 550, 13, 175));

console.log(walls);






var box = {
    xPos: 20,
    yPos: 50,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    width: 20,
    height: 20,
    shoot: false,
    canshoot: true,
    move: function() {
        if (box.goLeft) {
            box.xPos -= 5;
        }
        if (box.goRight) {
            box.xPos += 5;
        }
        if (box.goUp) {
            box.yPos -= 5;
        }
        if (box.goDown) {
            box.yPos += 5;
        }
    },
    draw: function() {
        ctx.rect(box.xPos, box.yPos, 20, 20);
        ctx.stroke();
    },
    shoot: function() {
        if (box.shoot && box.canshoot) {
            bullet.push(new bullet(box.xPos, box.yPos, this.width, this.height));
            box.canshoot = true;
            box.shoot = true;
        }
        else {
            box.shoot = false;
            box.canshoot = false;
        }
    },
};



function upBullet() {
    this.width = 5;
    this.height = 5;
    this.xPos = box.xPos;
    this.yPos = box.yPos;
    this.update = function() {
        //Change x or y pos depending on direction
        this.yPos -= 5;
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };

}

function leftBullet() {
    this.width = 5;
    this.height = 5;
    this.xPos = box.xPos;
    this.yPos = box.yPos;
    this.update = function() {
        //Change x or y pos depending on direction
        this.xPos -= 5;
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };

}

function rightBullet() {
    this.width = 5;
    this.height = 5;
    this.xPos = box.xPos;
    this.yPos = box.yPos;
    this.update = function() {
        //Change x or y pos depending on direction
        this.xPos += 5;
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };

}

function downBullet() {
    this.width = 5;
    this.height = 5;
    this.xPos = box.xPos;
    this.yPos = box.yPos;
    this.update = function() {
        //Change x or y pos depending on direction
        this.yPos += 5;
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };

}

//control for bullet
document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        bulletArray.push(new leftBullet());
    }
    if (evt.keyCode === 38) {
        bulletArray.push(new upBullet());
    }
    if (evt.keyCode === 39) {
        bulletArray.push(new rightBullet());
    }
    if (evt.keyCode === 40) {
        bulletArray.push(new downBullet());
    }
});




document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 65) {
        box.goLeft = true;
    }
    if (evt.keyCode === 87) {
        box.goUp = true;
    }
    if (evt.keyCode === 68) {
        box.goRight = true;
    }
    if (evt.keyCode === 83) {
        box.goDown = true;
    }

});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 65) {
        box.goLeft = false;
    }
    if (evt.keyCode === 87) {
        box.goUp = false;
    }
    if (evt.keyCode === 68) {
        box.goRight = false;
    }
    if (evt.keyCode === 83) {
        box.goDown = false;
    }
});

// function collisionDetection() {

// }

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    box.move();
    box.draw();
    for (var i = 0; i < bulletArray.length; i++) {
        bulletArray[i].update();
        // if (isbulletCollide (bullet, Enemy[i])) {
        };
    }

    for (var i = 0; i < walls.length; i++) {
        walls[i].draw();
        if (isColliding(box, walls[i])) {
            // alert("hi");
            
        };
    }
    for(var i = 0; i < walls.length; i++){
        for(var q = 0; i < bulletArray.length; i++){
            if(isColliding(walls[i], bulletArray[q])){
                // alert("hi");
            }
        };
    }
    



    // bullet.update();
    // console.log(walls);

    window.requestAnimationFrame(gameLoop);

gameLoop();


function isColliding(th1, th2) {
    if (th2.xPos < th1.xPos + th1.width && th2.xPos + th2.width >
        th1.xPos && th2.yPos < th1.yPos + th1.height && th2.yPos + th2.height > th1.yPos) {
        // alert("hey");
    }
    var leftof = th2.xPos > (th1.xPos + th1.width);
    var belowof = (th2.yPos + th2.height) < th1.yPos;
    var aboveof = th2.yPos > (th1.yPos + th1.height);
    var rightof = (th2.xPos + th2.width) < th1.xPos;
    if (!leftof && !rightof && !aboveof && !belowof) {
        return true;
    }
    else {
        return false;
    }

}

function spliceCollision(th1, th2) {
    for (var i = 0; i < bulletArray.length; i++) {
        if (th2.xPos < th1.xPos + th1.width && th2.xPos + th2.width > th1.xPos && th2.yPos < th1.yPos + th1.height && th2.yPos + th2.height > th1.yPos) {
            bulletArray.splice(i, 1, bulletArray, walls);
            i--;
            break;
            alert("Hello");
        }
    }
}

// addEventListener("mousedown", function() {
//   box.firing = true;
// });

//addEventListener("mouseup", function() {
//  box.firing = false;
//});

//function isShooting(bullet, enemy) {

//}
