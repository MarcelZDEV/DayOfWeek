var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var day = days[now.getDay()];
var day_id = document.getElementById('day');
day_id.innerHTML = day;
var type_of_day = document.getElementById('type_of_day');
if (day === 'Friday') {
    type_of_day.innerHTML = 'The weekend has started';
}
else if (day === 'Sunday' || day === 'Saturday') {
    type_of_day.innerHTML = 'It\'s a weekend ';
}
else {
    type_of_day.innerHTML = 'It\'s not weekend jet ';
}
