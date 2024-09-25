$(document).ready(function(){
  $(".description").hide();
  $(".ouvrieres").show();
  
     $( "#ouvrieres" ).on( "click", function() {
          $(".description").hide();
          $(".ouvrieres").show();
          removeAllClass();
          $(".demo").addClass("ouvrieres")
          console.log('ff');
          
        } );


        $( "#facade" ).on( "click", function() {
          $(".description").hide();
          $(".facade").show();
          removeAllClass();
          $(".demo").addClass("facade")
          console.log('ff');
          
        } );


        $( "#fungal" ).on( "click", function() {
          $(".description").hide();
          $(".fungal").show();
          removeAllClass();
          $(".demo").addClass("fungal")
          console.log('ff');
          
        } );

        $( "#movement" ).on( "click", function() {
          $(".description").hide();
          $(".movement").show();
          removeAllClass();
          $(".demo").addClass("movement")
          console.log('ff');
          
        } );

        $( "#recursive" ).on( "click", function() {
          $(".description").hide();
          $(".recursive").show();
          removeAllClass();
          $(".demo").addClass("recursive")
          console.log('ff');
          
        } );

        $( "#bricolage" ).on( "click", function() {
          $(".description").hide();
          $(".bricolage").show();
          removeAllClass();
          $(".demo").addClass("bricolage")
          console.log('ff');
          
        } );


        $( "#handjet" ).on( "click", function() {
          $(".description").hide();
          $(".handjet").show();
          removeAllClass();
          $(".demo").addClass("handjet")
          console.log('ff');
          
        } );

        $( "#sixtyhour" ).on( "click", function() {
          $(".description").hide();
          $(".sixtyhour").show();
          removeAllClass();
          $(".demo").addClass("sixtyhour")
          console.log('ff');
          
        } );



        $( "#tiny" ).on( "click", function() {
          $(".description").hide();
          $(".tiny").show();
          removeAllClass();
          $(".demo").addClass("tiny")
          console.log('ff');
          
        } );


        $( "#mixal" ).on( "click", function() {
          $(".description").hide();
          $(".mixal").show();
          removeAllClass();
          $(".demo").addClass("mixal")
          console.log('ff');
          
        } );


        $('input').on("input", function(){
          $('.ouvrieres>*').css({
            'font-variation-settings': '"wght" '+$('#wght').val()+', "FRMT" '+$('#frmt').val()+''
          });

           $('.facade>*').css({
            'font-variation-settings': '"wght" '+$('#wght1').val()+', "ctst" '+$('#ctst').val()+''
          });

          $('.fungal>*').css({
            'font-variation-settings': '"grow" '+$('#grow').val()+', "THCK" '+$('#thck').val()+''
          });

          $('.movement>*').css({
            'font-variation-settings': '"SPAC" '+$('#SPAC').val()+', "wght" '+$('#wght2').val()+''
          });


          $('.bricolage>*').css({
            'font-variation-settings': '"wdth" '+$('#wdth').val()+', "wght" '+$('#wght3').val()+', "opsz" '+$('#opz').val()+''
          });

          $('.handjet>*').css({
            'font-variation-settings': '"ELRG" '+$('#elrg').val()+', "wght" '+$('#wght4').val()+', "ELSH" '+$('#elsh').val()+''
          });

          $('.sixtyhour>*').css({
            'font-variation-settings': '"SCAN" '+$('#scan').val()+', "BLED" '+$('#bled').val()+''
          });

          $('.recursive>*').css({
            'font-variation-settings': '"MONO" '+$('#mono').val()+', "CASL" '+$('#casl').val()+', "wght" '+$('#wght5').val()+', "slnt" '+$('#slnt').val()+''
          });

          $('.tiny>*').css({
            'font-variation-settings': '"wght" '+$('#wght7').val()+''
          });

          $('.mixal>*').css({
            'font-variation-settings': '"wght" '+$('#wght8').val()+''
          });

          $('.demo>*').css({
            'font-size': ''+$("#size").val()+'px'
          });

          



        })
   
   }); 

   function removeAllClass() {
     $(".demo").removeClass("ouvrieres");
     $(".demo").removeClass("facade");
     $(".demo").removeClass("fungal");
     $(".demo").removeClass("movement");
     $(".demo").removeClass("recursive");
     $(".demo").removeClass("bricolage");
     $(".demo").removeClass("handjet");
     $(".demo").removeClass("sixtyhour");
     $(".demo").removeClass("tiny");
     $(".demo").removeClass("mixal");
  }


