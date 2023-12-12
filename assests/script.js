// Display the current time in Jumbotron
const dayView = $('#currentDay');
const today = dayjs().format('dddd, MMMM DD');

dayView.append(today);

