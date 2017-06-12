var canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

var fenBox = document.getElementById("fen");

var WIDTH = canvas.width / 8;
var HEIGHT = canvas.height / 8;

var dict = {};

dict['b'] = document.getElementById("bb");
dict['k'] = document.getElementById("bk");
dict['n'] = document.getElementById("bn");
dict['p'] = document.getElementById("bp");
dict['q'] = document.getElementById("bq");
dict['r'] = document.getElementById("br");

dict['B'] = document.getElementById("wb");
dict['K'] = document.getElementById("wk");
dict['N'] = document.getElementById("wn");
dict['P'] = document.getElementById("wp");
dict['Q'] = document.getElementById("wq");
dict['R'] = document.getElementById("wr");

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function redraw() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#BBBBBB";
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
            if((i + j) % 2 == 0)
                ctx.fillRect(i*WIDTH, j*HEIGHT, WIDTH, HEIGHT);
        }
    }
    
    for(var i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i*HEIGHT);
        ctx.lineTo(WIDTH*8, i*HEIGHT);
        ctx.stroke();
    }
    for(var i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(i*WIDTH, 0);
        ctx.lineTo(i*WIDTH, HEIGHT*8);
        ctx.stroke();
    }
    
    var text = fenBox.value;
    if(text.length == 0) return;
    
    fen = text.split(" ")[0];
    
    fen = fen.split("/");
    for(var i = 0; i < 8; i++) {
        var col = 0;
        for(var l = 0; l < fen[i].length; l++) {
            chr = fen[i][l];
            
            if(isLetter(chr)) ctx.drawImage(dict[chr], col*WIDTH, i*HEIGHT, WIDTH, HEIGHT);
            else col += chr - 1;
            
            col += 1;
        }
    }
    
    color = text.split(" ")[1];
    if(isLetter(color)) {
        if(color.toLowerCase() == 'w') {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(8*WIDTH - WIDTH/4, 8*HEIGHT - HEIGHT/4, WIDTH/4, HEIGHT/4);
        }
        else
        {
            ctx.fillStyle = "#000000";
            ctx.fillRect(8*WIDTH - WIDTH/4, 0, WIDTH/4, HEIGHT/4);
        }
    }
}

redraw();