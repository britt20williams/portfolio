$("#insights").on("click", function(){
    $('#modal-img').attr("src","images/runningstart/popups/insights-large.png");
    $(".modal").attr("style","display:block");

});

$("#competitor").on("click", function(){
    $('#modal-img').attr("src","images/runningstart/popups/competitor-large.png");
    $(".modal").attr("style","display:block");

});

$("#heuristic").on("click", function(){
    $('#modal-img').attr("src","images/runningstart/popups/he-large.png");
    $(".modal").attr("style","display:block");

});

$("#affinity").on("click", function(){
    $('#modal-img').attr("src","images/runningstart/popups/affinity-large.png");
    $(".modal").attr("style","display:block");

});

$("#userscenario").on("click", function(){
    $('#modal-img').attr("src","images/runningstart/popups/us-large.png");
    $(".modal").attr("style","display:block");

});

$(".modal").on("click", function(){
    $(".modal").attr("style","display:none");
    $('#modal-img').attr("src","");
});