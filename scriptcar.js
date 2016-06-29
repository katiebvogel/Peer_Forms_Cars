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
    $('#container').append('<div id=\"car' + count+'\"><ul><h2>Car '+count+'</h2><li>Make: '+make+'</li><li>Model: '+model+'</li><li>Year: '+year+'</li><li>Color: '+color+'</li><li>Rating: '+rating+'</li><li>Price: '+price+'</li><li><button class=\"delete\">Remove</button></li></ul></div>');
    // ratingCheck(rating);

    $(".delete").on("click", function(){
      $(this).closest('div').remove();
    });

    if (rating < 3){
      $(carNum).addClass('bad');
    }else{
      $(carNum).addClass('good');
    }

  });

});

});
