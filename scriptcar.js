$(document).ready(function(){

$(function() {
  var totalArr = [];
  var count = 0;
  $("#car").on("submit", function(event){
    event.preventDefault();
    var make = $('#make').val();
    var model = $('#model').val();
    var year = $('#year').val();
    var color = $('#color').val();
    var rating = $('#rating').val();
    var price = $('#price').val();

    count++;
    var carNum = "#car" + count;
    console.log(carNum);
    $('#container').append('<div id=\"car' + count+'\"><ul>Car '+count+'<li>'+make+'</li><li>'+model+'</li><li>'+year+'</li><li>'+color+'</li><li>'+rating+'</li><li>'+price+'</li></ul></div>');
    // ratingCheck(rating);
    $('h1').css('background-color', 'purple');
    if (rating < 3){
      $(carNum).css('border', 'solid red');
    }else{
      $(carNum).css('border', 'solid green');
    }

  });

  $("#car").on("submit", function(event){
    // totalArr.push(this.make, this.model);

    // console.log('serializeArray', $('#car').serializeArray()[0].value);

    // console.log(totalArr);


});


//Eventually we will use
//$('.close-div').click(function(){
//$(this).parent().remove();
//});


});

function ratingCheck(val){

};
