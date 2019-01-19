



$(document).ready(function(){
    $("button#btn").click(function(){
      $(".container1").hide();
      $(".container2").show();

    var firstName= $("#new-first-name").val();
    console.log(firstName)
      $('#name').text(firstName);

   
var student =$("#new-initial-amount").val();
    console.log(student)
    $('#initial').text(student);

    $("#submit").click(function(){
        var kub = parseInt($('#input-deposit').val());
        var withdr = parseInt($('#input-withdraw').val());
        
        var sum = kub + parseInt(student);
        $('#initial').text(sum);
        // var sub =parseInt(student)-withdr;
        // $('#mg').text(sub);




        $("button#withd").click(function(){
    var deposit24 = parseInt($('#input-withdraw').val());
    var sum = parseInt(deposit1)-deposit24;
    $('#operation').text(sum);
    });
});
});