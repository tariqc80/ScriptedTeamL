/* global $ */

console.log('loaded');

$(document).ready(function(){
    

    $(".topic").click(function(){
        console.log($(this).data('text'));
      // $( $(this).data('text') ).toggle();
    });
    
    $("#btn").click(function(){
        $(".sidebar").toggle();

});
    $("#email-share").click(function(e){
        e.preventDefault();
        window.open("mailto:" + $("#share").val());
    });


});