// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
   $( 'h1' ).text( 'サンプルページ' );
  });



  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'black',
      'background-color': '#FFCC00'
    });
      $( 'header' ).css({
        'color': '#32e0c4',
        'background-color': '#3399CC'
  });
 });
  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">Kyushu Sangyo University</a></p>' );
    $( 'footer a' ).css( 'color','#FFCC00' );

  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );

  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });



});