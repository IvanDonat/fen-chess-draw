var canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

var fenBox = document.getElementById("fen");

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(var i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i*60);
        ctx.lineTo(600, i*60);
        ctx.stroke();
    }
    for(var i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(i*60, 0);
        ctx.lineTo(i*60, 600);
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
            
            if(isLetter(chr)) {
                ctx.drawImage(dict[chr], col*60, i*60);
            }
            else
                col += chr - 1;
            col += 1;
        }
    }
}