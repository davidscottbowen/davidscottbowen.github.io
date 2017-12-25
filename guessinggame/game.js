$(function () {

  
    function random(){
    ran1 = Math.floor(Math.random() * (9-0+1)) + 0;
    console.log(ran1);
    ran2 = Math.floor(Math.random() * (9-0+1)) + 0;
    console.log(ran2);
    ran3 = Math.floor(Math.random() * (9-0+1)) + 0;
    console.log(ran3);

    if(ran1 == ran2 || ran1 == ran3 || ran2 == ran3){
        console.log("matched");
        random();
    }else{
        console.log("different");
    }

     
    }

    random();

    turn = 10;
     $("#turns").append(turn + " turns left");
     var correct = 0;
    

    
     $("button#go").click(function (ev) {

     $("#turns").empty();
     turn = turn - 1;
     $("#turns").append(turn + " turns left");

     console.log("after click:  " + ran1);
     console.log("after click:  " + ran2);
     console.log("after click:  " + ran3);
   


    var num1 = $("#user1").val();
    console.log("user 1:  " + num1);

    var num2 = $("#user2").val();
    console.log("user 2:  " + num2);

    var num3 = $("#user3").val();
    console.log("user 3:  " + num3);

    if (num1 == ran1){
          $('#cardone').css('background-color', 'green');
          correct = correct + 1;
    }else if (num1 == ran2){
          $('#cardone').css('background-color', 'yellow');
    }else if (num1 == ran3){
          $('#cardone').css('background-color', 'yellow');
    }else{
          $('#cardone').css('background-color', 'red');
    }

    if (num2 == ran2){
          $('#cardtwo').css('background-color', 'green');
          correct = correct + 1;
    }else if (num2 == ran1){
          $('#cardtwo').css('background-color', 'yellow');
    }else if (num2 == ran3){
          $('#cardtwo').css('background-color', 'yellow');
    }else{
          $('#cardtwo').css('background-color', 'red');
    }

    if (num3 == ran3){
          $('#cardthree').css('background-color', 'green');
          correct = correct + 1;
    }else if (num3 == ran1){
          $('#cardthree').css('background-color', 'yellow');
    }else if (num3 == ran2){
          $('#cardthree').css('background-color', 'yellow');
    }else{
          $('#cardthree').css('background-color', 'red');
    }
     
    if (correct == 3){
         $("#status").append("You win");
    }
    if (turn == 0){
          $("#status").append("You lose");
    }

      
          
});
});
