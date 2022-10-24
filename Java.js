//This variable controls the display of today's date//

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(function () {
 
    $(".saveBtn").on("click", function () {
        var taskInput = $(this).siblings(".description").val();
        var timeInput = $(this).parent().attr("id");

        localStorage.setItem(taskInput, timeInput);
    }













 

    
  



