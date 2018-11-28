$('.row .mini_square').click(function(){
  if ($(this).hasClass('active')) {
    $(this).addClass('red')
  }
  else {
    $(this).addClass('green')
  }
});
