function change_color() {
    if (document.getElementById('circle').style.backgroundColor == 'blueviolet') {
        document.getElementById('circle').style.backgroundColor = 'green';
    }
    else if (document.getElementById('circle').style.backgroundColor == 'green') {
        document.getElementById('circle').style.backgroundColor = 'yellow';
    }
    else {
        document.getElementById('circle').style.backgroundColor = 'blueviolet';
    }
}
var c = 1;
function change_shape() {
    if (c == 1) {
        document.getElementById('sq').style.backgroundColor = 'transparent';
        document.getElementById('ov').style.backgroundColor = 'aliceblue';
        c = 2;
    }
    else if (c == 2) {
        document.getElementById('ov').style.backgroundColor = 'transparent';
        document.getElementById('circ').style.backgroundColor = 'aliceblue';
        c = 3;
    }
    else {
        document.getElementById('circ').style.backgroundColor = 'transparent';
        document.getElementById('sq').style.backgroundColor = 'aliceblue';
        c = 1;
    }
}
var c_color = document.getElementById('ch_color');
c_color.addEventListener('click', change_color);
var c_shape = document.getElementById('ch_shape');
c_shape.addEventListener('click', change_shape);