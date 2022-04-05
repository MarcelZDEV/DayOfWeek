const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const now: Date = new Date();
let day: string = days[now.getDay()];

const day_id: any = document.getElementById('day');
day_id.innerHTML = day;

const type_of_day = document.getElementById('type_of_day');

if (day === 'Friday') {
    type_of_day.innerHTML = 'The weekend has started';
} else if (day === 'Sunday' || day === 'Saturday') {
    type_of_day.innerHTML = 'It\'s a weekend ';
} else {
    type_of_day.innerHTML = 'It\'s not weekend jet ';
}
