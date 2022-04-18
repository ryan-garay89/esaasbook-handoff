/*
select_extension.js
    This script extends the capabilities of js libraries
    chosen for highlighting and annotation.
*/
//= require vendor.js

var hltr = new TextHighlighter(document.getElementById('sandbox'));

function myHighlightHandler() {
    hltr.doHighlight();
}

function bindHighlighter() {
    $("#sandbox").on("mouseup", myHighlightHandler);
}

function unbindHighlighter() {
    $("#sandbox").off("mouseup", myHighlightHandler);
}

function activateHighlighter(color) {
    hltr.setColor(color);
    hltr.doHighlight();
}

function activateHighlighterHandler(color) {

}

$("#red_btn").on("click", event => {activateHighlighter("red") });
$("#yellow_btn").on("click", event => {activateHighlighter("yellow") });
$("#green_btn").on("click", event => {activateHighlighter("green") });
$("#white_btn").on("click", event => {activateHighlighter("white") });
$('#red_btn').mousedown(function() {return false;});
$("#yellow_btn").mousedown(function() {return false;});
$('#green_btn').mousedown(function() {return false;});
$('#white_btn').mousedown(function() {return false;});

document.getElementById("remove").addEventListener('click', function () {
    hltr.removeHighlights();
});

document.getElementById("serialize").addEventListener('click', function () {
    serialized = hltr.serializeHighlights();
    console.log(serialized);
    hltr.removeHighlights();
});

document.getElementById("deserialize").addEventListener('click', function () {
    hltr.removeHighlights();
    hltr.deserializeHighlights(serialized);
});

/*
(function () {
    var removeBtn = document.getElementById('remove'),
        serializeBtn  = document.getElementById('serialize'),
        deserializeBtn  = document.getElementById('deserialize');
    var sandbox = document.getElementById('sandbox');
    //var colors = new ColorPicker(document.querySelector('.color-picker'));
    var hltr = new TextHighlighter(sandbox);
    var serialized = '';

    colors.onColorChange(function (color) {
        hltr.setColor(color);
    });

})();
*/