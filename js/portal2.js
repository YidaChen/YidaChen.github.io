$(function () {
    document.oncontextmenu = function() {return false;};
    $("#game").mousedown(function(e) {
        if( e.button == 2 ) {
            $('#orangePortal').offset({top:event.pageY-50,left:event.pageX-40}).css('visibility','visible');
        }else{
            $('#bluePortal').offset({top:event.pageY-50,left:event.pageX-40}).css('visibility','visible');
        }
    });
    $(document).keyup(function(key) {
        switch(parseInt(key.which,10)) {
            case 65:
                $('#chell').animate({left: "-=30px"}, 'fast');
                break;
            case 87:
                $('#chell').animate({top: "-=30px"}, 'fast');
                break;
            case 68:
                $('#chell').animate({left: "+=30px"}, 'fast');
                break;
            case 83:
                $('#chell').animate({top: "+=30px"}, 'fast');
                break;
        }
        var oDistanceX = ($('#chell').offset().left - $('#orangePortal').offset().left);
        var oDistanceY = ($('#chell').offset().top - $('#orangePortal').offset().top);
        var bDistanceX = ($('#chell').offset().left - $('#bluePortal').offset().left);
        var bDistanceY = ($('#chell').offset().top - $('#bluePortal').offset().top);
        if(-20 < oDistanceY && oDistanceY < 45 && -20 < oDistanceX && oDistanceX < 50){
            $('#chell').offset({top: $('#bluePortal').offset().top, left: $('#bluePortal').offset().left});
            $( "#chell" ).stop();
        }
        if(-20 < bDistanceY && bDistanceY < 45 && -20 < bDistanceX && bDistanceX < 50){
            $('#chell').offset({top: $('#orangePortal').offset().top, left: $('#orangePortal').offset().left});
            $( "#chell" ).stop();
        }
    });
    //document.getElementById("chell").addEventListener("animationiteration", function(){
    //    alert("listening");
    //})

    //if($('#chell').offset().left == $('#orangePortal').offset().left){
    //    alert($('#chell').offset().left);
    //}
})