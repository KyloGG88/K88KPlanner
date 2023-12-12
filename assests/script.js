// Display the current time in Jumbotron
const dayView = $('#currentDay');
const today = dayjs().format('dddd, MMMM DD');

dayView.append(today);

// Make timeblocks for each hour
        // div consisting of textarea and save btn
        // can either hardcode in html or generate with js/jquery
        // Important: each time block has a unique id or data attribute corresponding to the hour number it is for
// ideally that attribute can correspond to the key you use to store the text in local storage
        
$(function () {
  for (let i = 9; i < 18; i++) {
    // Variables for planner area
    let mainContainer = $(".container");
    let hoursRow = $("<div>");
    let hour = $("<p>");
    let textContainer = $("<textarea>");
    let saveButton = $("<button>");
    let saveIcon = $("<i>");
    
    // Adding classes to elements
    hoursRow.addClass("time-block row");
    hour.addClass("hour col-1");
    textContainer.addClass("textarea col-10");
    saveIcon.addClass("fa-solid fa-floppy-disk");
    saveButton.addClass("saveBtn col-1");

    mainContainer.append(hoursRow);
  };
};