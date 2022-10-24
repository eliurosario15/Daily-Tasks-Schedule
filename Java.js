$(function() {

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function () {
 
    var taskInput = $(this).siblings(".description").val();
    var timeInput = $(this).parent().attr("id");

    localStorage.setItem(timeInput, taskInput);
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));

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
