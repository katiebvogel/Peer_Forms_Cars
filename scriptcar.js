$(document).ready(function(){

$(function() {

  $("#car").on("submit", function(event){
    event.preventDefault();

    console.log($(this).serializeArray());
    // console.log('serializeArray', $('#car').serializeArray()[0].value);

    console.log();

  });
});


//Eventually we will use
//$('.close-div').click(function(){
//$(this).parent().remove();
//});


});
