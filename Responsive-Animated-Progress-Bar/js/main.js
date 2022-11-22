$(document).ready(function () {

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#fc6'
    });
    $('#bar4').barfiller({
        barColor: '#900',
        duration: 2000
    });

});