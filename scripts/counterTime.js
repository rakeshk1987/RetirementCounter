//https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates


    var dateValue = {};                                                                // result
    var attributeValue = {                                                                  // structure
        year: 31536000,
        month: 2592000,
        week: 604800, // uncomment row to ignore
        day: 86400,   // feel free to add your own row
        hour: 3600,
        minute: 60,
        second: 1
};


if(userDataread == null)
{
    document.getElementById('counter').style.display = 'none';
}

setInterval(function timer() {

    var timeToday = new Date()
    var difference = Math.abs(RetireDate - timeToday) / 1000;        // delta

    Object.keys(attributeValue).forEach(function(key){
    dateValue[key] = Math.floor(difference / attributeValue[key]);
    difference = difference - ( dateValue[key] * attributeValue[key]);
});

// Update the count down every 1 second


    //return data
    document.getElementById('year').innerHTML = dateValue.year;
    document.getElementById('month').innerHTML = dateValue.month;
    document.getElementById('days').innerHTML = dateValue.day;
    document.getElementById('hours').innerHTML = dateValue.hour;
    document.getElementById('minutes').innerHTML = dateValue.minute;
    document.getElementById('seconds').innerHTML = dateValue.second;
    
}, 1000);


