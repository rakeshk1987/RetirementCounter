//get data from file
var userDataread = JSON.parse(window.localStorage.getItem('UserData'));


//check local storage is empty
var dataEmpty;
if(userDataread == null)
{
    dataEmpty = "true";

    //disabling boxes and quotes if no data is entered
    window.onload = function(){
        document.getElementById("Boxes").style.display = 'none';
        document.getElementById("quote").style.display = 'none';
    }
}

else
{
    //convert time to proper format
    var date = userDataread.retirementDate.split("T")[0];
    date = date.split("-");
    var newDate = date[2] +"/"+ date[1] +"/"+ date[0];

    dataEmpty = "false";
    document.getElementById("message").style.display = 'none';

    //populating fields in the input
    document.getElementById("retDate").textContent = newDate;
    document.getElementById("workDays").setAttribute('value', userDataread.workperWeek);
    document.getElementById("BankHolidays").setAttribute('value', userDataread.bankHolidays);
    document.getElementById("Holidays").setAttribute('value', userDataread.holidays);

    document.querySelector("#submitBtn").innerHTML = "Update";

}

//Retirement Date

if(dataEmpty == "true")
{
    document.getElementById('RetireDay').innerHTML = "Please select your retirement date";
}
else
{   
    var RetireDate = new Date(userDataread.retirementDate);
    document.getElementById('RetireDay').innerHTML = "You Retire on: " + RetireDate.getDate() +'-'+ (RetireDate.getMonth()+1) +'-'+ RetireDate.getFullYear();
}


//Today
var today = new Date();
var date = today.getDate() +'-'+ (today.getMonth()+1) +'-'+ today.getFullYear();
document.getElementById('clock').innerHTML= "Today: " + date;

if(dataEmpty != "true")
{

    //Calendar Days Calculation
    var CalTime = Math.abs(RetireDate - today);
    var totalDays = Math.ceil(CalTime / (1000 * 60 * 60 * 24));

    document.getElementById('CalDays').innerHTML = totalDays;  

    //Years Left Calculation
    var totalYear = Math.floor(totalDays/365);
    document.getElementById('yearsLeft').innerHTML = totalYear;

    //Working Days Calculation
    var workingDays = parseInt(userDataread.workperWeek);
    var numberofBankHolidays = parseInt(userDataread.bankHolidays);
    var numberofHolidays = parseInt(userDataread.holidays);

    var totalMonth = Math.floor(totalDays / 30)
    var totalWeek = Math.floor((totalDays/365)*52);

    var totalHolidays = ((numberofHolidays + numberofBankHolidays) / 365) * totalDays;
    console.log(numberofHolidays + numberofBankHolidays);

    var workDaysLeft = ((totalWeek * workingDays)-totalHolidays);

    document.getElementById('WorkDays').innerHTML = Math.round(workDaysLeft);
}

