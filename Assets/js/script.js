// All code is wrapped in document.ready function to allow page to load before jQuery libary loads

$(document).ready(function () {
  var today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY HH:mm A"));

  // take user input for work action items and save to local storage, print to console
  $(".saveBtn").on("click", function () {
    let userInput = $(this).siblings(".description").val();
    console.log(userInput);
    let scheduledHour = $(this).siblings(".hour").text();
    console.log(scheduledHour);
    localStorage.setItem(scheduledHour, JSON.stringify(userInput));
  });

  // compare current Time (hour) to the schedule work action item -Planner Hour Time Slot
  function checkTimeAndPlanner() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var plannerHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(plannerHour, currentHour);

      //check if we've moved past this time, click into css/html given classes of past, present, or future
      if (plannerHour < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (plannerHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  checkTimeAndPlanner();
});
