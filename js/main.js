$(document).ready(function() {
    var answer;
    var button = document.querySelectorAll("input[type=submit");
    var reshetka = $('.reshetka');
    button[0].onclick = function () {
        answer = document.querySelector("input[name=lion]").value;
        var clas = document.body
        if(answer == "lion"){
            classList
        }
    };









    var images = $('.container div');

    $(images).click(function (e) {

        var i = this.className;
        $("#" + i)[0].play();
    });

    var overlay = $('.overlay');
    var modal = $('.modal');
    var close = $('.modal input');
    close.on('click', function(){
        modal.hide();
        overlay.hide();
    })



});




