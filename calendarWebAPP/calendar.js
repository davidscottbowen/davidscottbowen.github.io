$(function () {

     $("button#clear").click(function (ev) {

     $("#bill").empty();
     $("#display").empty();
    
     $("#sharing").empty();
});
 
    $("button#add").click(function (ev) {

        $("#display").empty();

        var check =  $("#bill").val();
        var ser = $("#service").val();
        var tip;
        var people = $("#sharing").val();

        console.log(check);
        console.log(ser);
        console.log(tip);
        console.log(people);

        	
if (ser == 1){
    tip = 0.30;
}else if (ser == 2){
    tip = 0.20;
}else if (ser == 3){
    tip = 0.15;
}else if (ser == 4){
    tip = 0.10;
}else{
    tip = 0.05;
}


        
        if (people == "") {
            people = 1;
        }
    
        if (people == 1){
        tips = (check * tip);

        $("#display").append("Tip: $" + tips);

        }else{
            tips = ((check * tip) / people);
            
            $("#display").append("Each persons Tip is: $" + tips);
        }
    });



});
