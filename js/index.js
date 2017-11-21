$('#add_button').click(function(){
   var row = $('#source_row').html();   
  
   $('#source_wrap').append(row);

   $('#source_wrap .col-md-12:last-child .toggle_hidden').bootstrapToggle({
      on: 'PARCEL',
      off: 'PALLET',
      onstyle: 'primary',
      offstyle: 'primary'
   });

   $isChecked = $('#source_wrap .col-md-12:last-child input[type="checkbox"]').prop("checked");
   $('#source_wrap .col-md-12:last-child').addClass("active-_first");






  });

$("body").delegate("input[type='checkbox']" , 'change' , function () {
    if($(this).prop("checked") === false) {

        $(this).parents('.col-md-12').removeClass("active-_second").addClass("active-_first");
    } else {

        $(this).parents('.col-md-12').removeClass("active-_first").addClass("active-_second");
    }
});



$("#remove_button").click(function () {
  if($("#source_wrap .col-md-12").length > 1) {
        $("#source_wrap .col-md-12:last-child").remove()
  }
});


$("#form_class").on("submit" ,function (e) {
   
        var fields = $(this).serializeArray();
        
        jQuery.each( fields, function( i, field ) {
            if (field.value != "") {
                console.log(i,field);
            }
          
        });
      
     
      
      

   return false;
})