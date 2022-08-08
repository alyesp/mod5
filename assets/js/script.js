//moment.js to set time and day 
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function() {
        console.log(this);

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //sets local storage
        localStorage.setItem(time, text);
    }); 
}) 
//local storage for the events user puts in
$("#hour8.description").val(localStorage.getItem("hour8"));
$("#hour9.description").val(localStorage.getItem("hour9"));
$("#hour10.description").val(localStorage.getItem("hour10"));
$("#hour11.description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour1.description").val(localStorage.getItem("hour1"));
$("#hour2.description").val(localStorage.getItem("hour2"));
$("#hour3.description").val(localStorage.getItem("hour3"));
$("#hour4.description").val(localStorage.getItem("hour4"));
$("#hour5.description").val(localStorage.getItem("hour5"));

function timeInterval() {
    var currentHr = moment().hour();

    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlock, currentHr)

        //colors will change with CSS once the time is incremented appropriately
        if (timeBlock < currentHr) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } 
    })
}