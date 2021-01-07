$( ".div1" ).click( function(){
  $( this ).css({
      width: function( index, value ) {return parseFloat( value ) * 1.2;
			},
			height: function( index, value ) {
				return parseFloat( value ) * 1.2;
			}
	});
});

$( ".div2" ).click( function(){
  $( this ).css({
      width: function( index, value ) {return parseFloat( value ) * 1.2;
			},
			height: function( index, value ) {
				return parseFloat( value ) * 1.2;
			}
	});
});

$( ".div3" ).click( function(){
  $( this ).css({
      width: function( index, value ) {return parseFloat( value ) * 1.2;
			},
			height: function( index, value ) {
				return parseFloat( value ) * 1.2;
			}
	});
});

