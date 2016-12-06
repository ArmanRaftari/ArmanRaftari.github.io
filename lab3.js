/**
 * Created by Studerande on 2016-12-05.
 */
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var rectangle = document.getElementById("rectButton");
canvas.width = 600;
canvas.height = 400;

rectButton.addEventListener("click",function (event) {
    drawRectangle();
})



function drawRectangle() {
    var click = 0;
    canvas.addEventListener('click', function drl(event) {
        let rect = canvas.getBoundingClientRect();
        click++;
        if (click === 1) {
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x1, y1, 1, 1);
            context.beginPath();

        }
        if (click === 2) {
            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.rect(x1, y1, x2 - x1, y2 - y1);
            context.stroke();

        }
    })
}

var triangle = document.getElementById("triButton");
triangle.addEventListener('click', function (event) {
    drawTriangle();
});


function drawTriangle() {
    var click = 0;
    canvas.addEventListener("click", function dtl(event) {
        var rect = canvas.getBoundingClientRect();
        click++;
        if(click ===1){
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x1, y1, 1, 1);
            context.beginPath();
            context.moveTo(x1, y1)
        }
        if(click === 2){
            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x2, y2, 1, 1);
            context.lineTo(x2, y2);
        }
        if (click === 3) {
            x3 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y3 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x3, y3, 1, 1);
            context.lineTo(x3, y3);
            context.closePath();
            context.stroke();
        }
        
    });


}
var circle = document.getElementById("circleButton");
circle.addEventListener("click", function(event){
    drawCircle();
});

function drawCircle(){
    var click = 0;
    canvas.addEventListener("click", function dcl(event){
        let rect = canvas.getBoundingClientRect();
        click++;
        if (click === 1) {
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x1, y1, 1, 1);
            context.beginPath();
        }
        if (click === 2){
            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            let r = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            context.arc(x1, y1, r, 0, 2 * Math.PI);
            context.stroke();
        }

    });
}

var clear = document.getElementById('clearButton');
clear.addEventListener('click', function (event) {
    clearCanvas();
})
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}