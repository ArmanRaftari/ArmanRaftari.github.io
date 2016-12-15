/**
 * Created by Studerande on 2016-12-05.
 */
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var rectangle = document.getElementById("rectButton");
var findColor = document.getElementById('add-color');
var inputColor = document.getElementById('input-color');
var colorSelect = document.getElementById('color');
var hexColors = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
var userHex;
var jsonObj = [];
canvas.width = 600;
canvas.height = 400;

rectButton.addEventListener("click",function (event) {
    drawRectangle();
})
rButton.addEventListener("click",function (event) {
    drawRectangle();
})



function drawRectangle() {
    var click = 0;
    canvas.addEventListener('click', function drl(event) {
        let rect = canvas.getBoundingClientRect();
        click++;
        switch(click){
            case 1:
                x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                context.fillRect(x1, y1, 1, 1);
                context.beginPath();
                msg.innerHTML = "Click once more!";
                break;

            case 2:
                x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                context.rect(x1, y1, x2 - x1, y2 - y1);
                context.stroke();
                msg.innerHTML = "Rectangle done!";
                jsonObj.push({
                    x1: x1 , y1: y1, x2: x2 , y2: y2 });
                break;
        }

    })
}

var triangle = document.getElementById("triButton");
triangle.addEventListener('click', function (event) {
    drawTriangle();
});
var triangle = document.getElementById("tButton");
triangle.addEventListener('click', function (event) {
    drawTriangle();
});


function drawTriangle() {
    var click = 0;
    canvas.addEventListener("click", function dtl(event) {
        var rect = canvas.getBoundingClientRect();
        click++;
        switch(click){
            case 1:
                x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                context.fillRect(x1, y1, 1, 1);
                context.beginPath();
                context.moveTo(x1, y1)
                msg.innerHTML = "Click again!";
                break;

            case 2:
                x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                context.fillRect(x2, y2, 1, 1);
                context.lineTo(x2, y2);
                msg.innerHTML = "Click once more!";
                break;

            case 3:
                x3 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                y3 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                context.fillRect(x3, y3, 1, 1);
                context.lineTo(x3, y3);
                context.closePath();
                context.stroke();
                msg.innerHTML = "Done!";
                jsonObj.push({
                    x1: x1 , y1: y1, x2: x2, y2: y2, x3: x3 , y3: y3});
                break;

        }
        
    });


}

var circle = document.getElementById("circleButton");
circle.addEventListener("click", function(event){
    msg.innerHTML = "Draw a circle!";
    drawCircle();
});
var circle = document.getElementById("cButton");
circle.addEventListener("click", function(event){
    msg.innerHTML = "Draw a circle!";
    drawCircle();
});

function drawCircle(){
    var click = 0;
    canvas.addEventListener("click", function dcl(event){
        let rect = canvas.getBoundingClientRect();
        click++;
        switch (click){
        case 1:
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            context.fillRect(x1, y1, 1, 1);
            context.beginPath();
            msg.innerHTML = "Click once more!";
            break;

        case 2:
            x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
            y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
            let r = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            context.arc(x1, y1, r, 0, 2 * Math.PI);
            context.stroke();
            msg.innerHTML = "Good!";
            jsonObj.push({
                x1: x1 , y1: y1 , x2: x2 , y2: y2 });
            break;
        }

    });
}

var clear = document.getElementById('clearButton');
clear.addEventListener('click', function (event) {
    clearCanvas();
})
var clear = document.getElementById('clButton');
clear.addEventListener('click', function (event) {

    clearCanvas();

})
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);

}

var clearDraw = document.getElementById('clButton');
clearDraw.addEventListener('mouseover', function (event) {
    msg.innerHTML = "Click to clear drawing";
});
function cancelButton(funC) {
    clearDraw.addEventListener('click', function (event) {
        canva-s.removeEventListener('click', funC);
    })
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
var gColor;
inputColor.addEventListener("keyup", function (event) {
    if(inputColor.value.match(hexColors)!==null){
        gColor = true;
        msg.innerHTML = "Accepted";
        findColor.disabled =false;
    }
    else if (inputColor.value.match(hexColors) == null || inputColor.value == "") {
        gColor = false;
        msg.innerHTML = "Not accepted";
        findColor.disabled = true;
    }
})
findColor.addEventListener("click", function (event) {
    if (gColor === true){
        userHex = inputColor.value.toLowerCase();
        var nOption = document.createElement("option");
        nOption.value = userHex;
        nOption.innerHTML = userHex;
        colorSelect.appendChild(nOption);
        msg.innerHTML = "Color Added To List";
    }
    else {
        msg.innerHTML = "hmmmmm,does not work"
    }

})

function listColor(){
    var x = document.getElementById("color").value;
    return x;
}
colorSelect.addEventListener("change", function (event){
    context.strokeStyle = listColor();
});
//JSON
var jsonButton = document.getElementById('jsonButton');
var jsonText = document.getElementById('jsonText');
jsonButton.addEventListener('mouseover', function (event) {
    msg.innerHTML = "Click to get JSON";
});

function exportToJSON() {
    var jSonMsg = "";
    for (i = 0; i < jsonObj.length; i++) {
        var jsonO = JSON.stringify(jsonObj[i], null, 2)
        jSonMsg += jsonO;
    }
    jsonText.innerHTML = jSonMsg;
}
jsonButton.addEventListener('click', function (event) {
    exportToJSON();
})



