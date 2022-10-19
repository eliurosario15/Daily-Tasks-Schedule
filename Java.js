//This variable controls the display of today's date//

let currentDay = moment().format('MMMM DD, YYYY');
$("#currentDay").html(currentDay);

$(function() {

    $(".saveBtn").on("click", function () {
        var eventInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(eventInput, time);

})

var now = moment().hour().minutes();


$(".time-block").each(function () {
    var block = parseInt($(this).attr("id").split("hour")[1]);



    


})

 

    
  



