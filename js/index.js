$('#add_button').click(function(){
   var row = $('#source_row').html();   
   console.log(row);
   $('#source_wrap').append(row);
   $('#source_wrap .col-md-12:last-child .toggle_hidden').bootstrapToggle({
    on: 'PARCEL',
    off: 'PALLET',
    onstyle: 'primary',
    offstyle: 'primary'
   });
  });