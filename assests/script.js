// Display the current time in Jumbotron
const dayView = $('#currentDay');
const today = dayjs().format('dddd, MMMM DD');

dayView.append(today);

// Make timeblocks for each hour
        // div consisting of textarea and save btn
        // can either hardcode in html or generate with js/jquery
        // Important: each time block has a unique id or data attribute corresponding to the hour number it is for
        // ideally that attribute can correspond to the key you use to store the text in local storage