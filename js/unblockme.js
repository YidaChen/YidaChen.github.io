$(function () {
    var $stop_counter = $( "#event-stop" );
    var moveCount = 0;
    $(".drag").draggable({
            containment: "#board",
            stack:".drag",
            snap: true,
            snapTolerance: 50,
            stop: function() {
                moveCount++;
                updateCounterStatus( $stop_counter, moveCount );
                var length1 = Number($("#drag1").css("left").replace('px',''))+Number($("#drag1").css("width").replace('px',''));
                var length2 = Number($("#board").css("width").replace('px',''));
                if(length1 >= length2-10){
                    alert("恭喜破關!");
                }
            }
    });
    var axis = $( ".drag" ).draggable( "option", "axis" );
    $( "#drag1,#drag2,#drag5,#drag7" ).draggable( "option", "axis", "x" );
    $( "#drag3,#drag4,#drag6,#drag8" ).draggable( "option", "axis", "y" );
    function updateCounterStatus( $event_counter, new_count ) {
      $stop_counter.text( new_count );
    }


});
