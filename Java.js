$(function() {

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function () {
 
    var taskInput = $(this).siblings(".description").val();
    var timeInput = $(this).parent().attr("id");



function changeColors() {
    
    const currentTime = moment().hour(); 

    $(".time-block").each(function () {
        //We use parseInt in order to not consider decimals//
        var timeInterval = parseInt($(this).attr("id").split("hour")[1]);
        
        if (timeInterval < currentTime) {
            $(this).addClass("past");
        }

        else if (timeInterval === currentTime) {
            $(this).addClass("present");
         }

        else {
            $(this).addClass("future");
        }
    })
}
changeColors();
})
