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

    // loop over all the timeblocks and get the current value of the textarea
    // decide how you want to store the text for each hour in local storage
    // potential options:
        // can either store each individual hour as its own key 
        // (e.g. in local storage, hour-9: "something") 
        // or store an array objects for each timeblock 
        // (e.g. [{hour-9: "foo", hour-10: "bar"}])

        if (i < 12) {
          hour.text(i + "AM");
        } else if (i === 12) {
          hour.text(i + "PM");
        } else {
          hour.text(i - 12 + "PM");
        }
        hoursRow.append(hour);
    
        hoursRow.append(textContainer);
    
        saveButton.append(saveIcon);
        hoursRow.append(saveButton);

    // retrieve the save values from local storage and display them inside each timeblock whenever the page reloads
    // method depends on how you stored in local storage:
        // if you stored as individual keys, get each hour value from local storage and display in the corresponding textarea
        
        
    //saving timeblock text in local storage
    saveButton.on("click", function () {
      let eventThisHour = textContainer.val();
      localStorage.setItem(i, eventThisHour);
      saveIcon.addClass("fa-solid fa-check");
      document.getElementById('alrt').innerHTML='<b>Your Schedule has been updated! (Saved to Local Storage)</b>'; 
      setTimeout(function() {document.getElementById('alrt').innerHTML='';},5000);
    });
  };
});