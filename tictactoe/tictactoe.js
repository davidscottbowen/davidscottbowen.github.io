$(function () {

      

     var turn = 1;
     var array = [];
     var win = 0;       
     var element;  
     var pos;
     var boxes

           function winner(){
           if (array[0] == "x" && array[1] == "x" && array[2] == "x"){
              win = 1;
              boxes = 123;
              

           } else if (array[0] == "o" && array[1] == "o" && array[2] == "o"){
              win = 1;
              boxes = 123;
           }

           if (array[3] == "x" && array[4] == "x" && array[5] == "x"){
              win = 1;
              boxes = 456;
           } else

           if (array[3] == "o" && array[4] == "o" && array[5] == "o"){
              win = 1;
              boxes = 456;
           } else

           if (array[6] == "x" && array[7] == "x" && array[8] == "x"){
              win = 1;
              boxes = 789;
           } else

           if (array[6] == "o" && array[7] == "o" && array[8] == "o"){
              win = 1;
              boxes = 789;
           } else

           if (array[0] == "x" && array[3] == "x" && array[6] == "x"){
              win = 1;
              boxes = 147;
           }

           if (array[0] == "o" && array[3] == "o" && array[6] == "o"){
              win = 1;
              boxes = 147;
           } else

           if (array[1] == "x" && array[4] == "x" && array[7] == "x"){
              win = 1;
              boxes = 258;
           } else

           if (array[1] == "o" && array[4] == "o" && array[7] == "o"){
              win = 1;
              boxes = 258;
           } else

           if (array[2] == "x" && array[5] == "x" && array[8] == "x"){
              win = 1;
              boxes = 369;
           } else

           if (array[2] == "o" && array[5] == "o" && array[8] == "o"){
              win = 1;
              boxes = 369;
           }    

           if (array[0] == "x" && array[4] == "x" && array[8] == "x"){
              win = 1;
              boxes = 159;
           }

           if (array[0] == "o" && array[4] == "o" && array[8] == "o"){
              win = 1;
              boxes = 159;
           }

           if (array[2] == "x" && array[4] == "x" && array[6] == "x"){
              win = 1;
              boxes = 357;
           }

           if (array[2] == "o" && array[4] == "o" && array[6] == "o"){
              win = 1;
              boxes = 357;
           }
           }



           function go(){
           console.log("turn:  " + turn);
          if (turn == 1){
            $(element).append("<img src = 'x.png' alt='X' height='100%'>");
            array[pos] = "x";
            turn = 2;
            
      
          } else { $(element).append("<img src = 'o.png' alt='X' height='100%'>")
             array[pos] = "o";
            
            turn = 1;
            
          }
          winner();
          console.log("win:  " + win);
          for(i=0;i<=8;i++){
            console.log("Array element : " + i + " = " + array[i]);
          }
          if (win == 1){
            color();
            
          }     

           }


     function color(){

       if (boxes == 123){
       $('#one').css('background-color', 'yellow');
       $('#two').css('background-color', 'yellow');
       $('#three').css('background-color', 'yellow');
       }else
       if (boxes == 456){
       $('#four').css('background-color', 'yellow');
       $('#five').css('background-color', 'yellow');
       $('#six').css('background-color', 'yellow');
       }else
       if (boxes == 789){
       $('#seven').css('background-color', 'yellow');
       $('#eight').css('background-color', 'yellow');
       $('#nine').css('background-color', 'yellow');
     }else
       if (boxes == 147){
       $('#one').css('background-color', 'yellow');
       $('#four').css('background-color', 'yellow');
       $('#seven').css('background-color', 'yellow');
       }else
       if (boxes == 258){
       $('#two').css('background-color', 'yellow');
       $('#five').css('background-color', 'yellow');
       $('#eight').css('background-color', 'yellow');
       }else
       if (boxes == 369){
       $('#three').css('background-color', 'yellow');
       $('#six').css('background-color', 'yellow');
       $('#nine').css('background-color', 'yellow');
       }else
       if (boxes == 159){
       $('#one').css('background-color', 'yellow');
       $('#five').css('background-color', 'yellow');
       $('#nine').css('background-color', 'yellow');
       }else
       if (boxes == 357){
       $('#three').css('background-color', 'yellow');
       $('#five').css('background-color', 'yellow');
       $('#seven').css('background-color', 'yellow');
     }
     }



             

      $('#one').click(function(){
            pos = 0;
            element = "#one";
            console.log("element:  " + element);
            go();
           

      });

            $('#two').click(function(){
              pos = 1;
            element = "#two";
            console.log(element);
            go();

      });

            $('#three').click(function(){
             pos = 2;
            element = "#three";
            console.log(element);
            go();
   
      });

            $('#four').click(function(){
            pos = 3;
            element = "#four";
            console.log(element);
            go();
   
      });

            $('#five').click(function(){
            pos = 4;
            element = "#five";
            console.log(element);
            go();

      });

            $('#six').click(function(){
              pos = 5;
              element = "#six";
            console.log(element);
            go();

      });

            $('#seven').click(function(){
            pos = 6;
            element = "#seven";
            console.log(element);
            go();

      });

            $('#eight').click(function(){
            pos = 7;
            element = "#eight";
            console.log(element);
            go();
       
      });

           $('#nine').click(function(){
              pos = 8;
             element = "#nine";
            console.log(element);
            go();




      });

    


});
